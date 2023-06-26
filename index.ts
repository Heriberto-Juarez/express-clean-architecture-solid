import 'reflect-metadata'
import 'dotenv/config';
import 'express-async-errors'

import express, { Express, Request, Response } from 'express';
import userRoutes from './src/presentation/user/user.routes'
import { errorHandler } from './src/infrastructure/middlewares/errorHandler';


const app: Express = express();
const port = process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(userRoutes);

app.use(errorHandler)

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});