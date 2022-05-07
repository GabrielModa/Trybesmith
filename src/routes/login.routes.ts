import express from 'express';
import loginController from '../controllers/loginController';
import tokenAuth from '../middlewares/tokenAuth';

const router = express.Router();

router.post('/', loginController.post, tokenAuth);

export = router;