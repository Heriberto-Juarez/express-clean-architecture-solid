import express, { Express, Request, Response } from 'express';
import 'dotenv/config';

import userRoutes from './src/presentation/user/user.routes'

const app: Express = express();
const port = process.env.PORT;

app.use(express.json())
app.use(userRoutes);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});