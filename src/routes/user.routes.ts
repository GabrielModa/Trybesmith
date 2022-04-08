import express from 'express';
import userController from '../controllers/userController';
import middleware from '../middlewares/index';

const router = express.Router();

const validateUser = [
  middleware.classe,
  middleware.username,
  middleware.level,
  middleware.password,
];

router.post('/', validateUser, userController.post);

export = router;