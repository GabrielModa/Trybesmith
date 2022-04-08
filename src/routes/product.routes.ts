import express from 'express';
import productController from '../controllers/productController';
import middleware from '../middlewares/index';

const router = express.Router();

const validateProduct = [
  middleware.name,
  middleware.amount,
];

router.get('/', productController.get);

router.post('/', validateProduct, productController.post);

export = router;