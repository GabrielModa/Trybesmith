import express from 'express';
import orderController from '../controllers/orderController';

const router = express.Router();

router.get('/', orderController.get);

export = router;