import { Router } from 'express';
import { protect } from '../middleware/auth.js';
import {
  addToCart,
  checkOut,
  clearCart,
  getCart,
  getOrders,
  loginUser,
  logoutUser,
  registerUser,
  removeFromCart,
} from '../controllers/user.js';

const router = Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/logout', logoutUser);

router.delete('/cart/clear', protect, clearCart);

router.put('/cart/:id', protect, addToCart);

router.delete('/cart/:id', protect, removeFromCart);

router.get('/cart', protect, getCart);

router.get('/orders', protect, getOrders);

router.post('/checkout', protect, checkOut);

export default router;
