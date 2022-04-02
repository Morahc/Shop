import Order from '../models/order.js';
import Product from '../models/product.js';

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: 'success',
      data: {
        products,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

export const addProduct = async (req, res) => {
  const { title, description, price, countInStock } = req.body;
  const { path } = req.file;

  try {
    const product = await Product.create({
      title,
      description,
      price,
      countInStock,
      imageUrl: path,
    });
    res.status(201).json({
      status: 'success',
      data: {
        product,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

export const editProduct = async (req, res) => {
  const { title, description, price, countInStock } = req.body;
  const { path } = req.file;
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(401).json({ msg: 'Product not found' });
    }
    await product.updateOne({
      title: title || product.title,
      description: description || product.description,
      price: price || product.price,
      countInStock: countInStock || product.countInStock,
      imageUrl: path || product.imageUrl,
    });
    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(401).json({ msg: 'Product not found' });
    }
    await product.remove();
    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json({
      status: 'success',
      data: {
        orders,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

export const completeOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(401).json({ msg: 'Order not found' });
    }
    await order.updateOne({ isDelieved: true });
    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};
