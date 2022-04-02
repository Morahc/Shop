import Order from '../models/order.js';
import Product from '../models/product.js';
import User from '../models/user.js';

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).json({ msg: 'User already exist' });
    } else {
      const user = await User.create({
        name,
        email,
        password,
      });
      if (user) {
        res.status(201).json(user);
      }
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ msg: 'User not found' });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ msg: 'Invalid credentials' });
    }
    req.session.user = user._id;

    res.json(user).status(200);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const logoutUser = async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).json(err);
      }
      res.status(200).json({ msg: 'User logged out' });
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getCart = async (req, res) => {
  try {
    const user = await User.findById(req.session.user);
    if (!user) {
      return res.status(401).json({ msg: 'User not found' });
    }
    const cartItem = await user.populate('cart');
    res.json(cartItem.cart).status(200);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const addToCart = async (req, res) => {
  try {
    const user = await User.findById(req.session.user);
    if (!user) {
      return res.status(401).json({ msg: 'User not found' });
    }
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(401).json({ msg: 'Product not found' });
    }
    await user.addToCart(product);
    res.json(user).status(200);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const user = await User.findById(req.session.user);
    if (!user) {
      return res.status(401).json({ msg: 'User not found' });
    }
    await user.removeFromCart(req.params.id);
    res.json(user).status(200);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const clearCart = async (req, res) => {
  try {
    const user = await User.findById(req.session.user);
    if (!user) {
      return res.status(401).json({ msg: 'User not found' });
    }
    await user.clearCart();
    res.json(user).status(200);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.session.user });
    if (!orders) {
      return res.status(401).json({ msg: 'No current orders' });
    }
    res.json(orders).status(200);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const checkOut = async (req, res) => {
  try {
    const user = await User.findById(req.session.user);
    if (!user) {
      return res.status(401).json({ msg: 'User not found' });
    }
    if(user.cart.length === 0) {
      return res.status(401).json({ msg: 'Cart is empty' });
    }
    const order = await Order.find({ user: req.session.user });
    if (!order) {
      return res.status(401).json({ msg: 'No current orders' });
    }

    await Order.create({
      products: user.cart,
      user: req.session.user,
    });

    await user.clearCart();
    res.json({ msg: 'Check out successful' }).status(200);
  } catch (error) {
    res.status(400).json(error);
  }
};
