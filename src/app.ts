import express from 'express';
import 'express-async-errors';

import routes from './routes/index';
import errorHandler from './middlewares/errorHandler';

const app = express();
app.use(express.json());

app.use('/products', routes.product);
app.use('/users', routes.user);

app.use(errorHandler);

export default app;
