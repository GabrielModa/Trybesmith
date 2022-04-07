import express from 'express';
import 'express-async-errors';

import produtctRouter from './routes/product.routes';
import errorHandler from './middlewares/errorHandler';

const app = express();
app.use(express.json());

app.use('/products', produtctRouter);

app.use(errorHandler);

export default app;
