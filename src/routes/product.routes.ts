import express from 'express';
import productController from '../controllers/productController';
import middleware from '../middlewares/index';

const router = express.Router();

router.get('/', productController.get);

router.post(
  '/', 
  middleware.name, 
  middleware.amount,
  productController.post,
);

export = router;
