import { Router } from 'express';
import {
  completeOrder,
  deleteProduct,
  editProduct,
  getAllOrders,
  getAllProducts,
  addProduct,
} from '../controllers/admin.js';
import { protect, isAdmin } from '../middleware/auth.js';
import upload from '../utils/upload.js';

const router = Router();

router.get('/products', protect, isAdmin, getAllProducts);

router.post('/products', protect, isAdmin, upload.single('image'), addProduct);

router
  .route('/products/:id')
  .put(protect, isAdmin, upload.single('image'), editProduct)
  .delete(protect, isAdmin, deleteProduct);

router.get('/orders', protect, isAdmin, getAllOrders);

router.put('/orders/:id', protect, isAdmin, completeOrder);

export default router;
