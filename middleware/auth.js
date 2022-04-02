import User from '../models/user.js';

export const protect = async (req, res, next) => {
  try {
    if(!req.session.user) {
      return res.status(401).json({ msg: 'User not logged in' });
    }

    const user = await User.findById(req.session.user);
    if (!user) {
      return res.status(401).json({ msg: 'User not found' });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(400).json(error);
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    if(!req.session.user) {
      return res.status(401).json({ msg: 'User not logged in' });
    }

    const user = await User.findById(req.session.user);
    if (!user) {
      return res.status(401).json({ msg: 'User not found' });
    }
    if(!user.isAdmin) {
      return res.status(401).json({ msg: 'User is not an admin' });
    }
    next();
  } catch (error) {
    res.status(400).json(error);
  }
}