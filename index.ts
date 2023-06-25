import express, { Express, Request, Response } from 'express';
import 'dotenv/config';

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Initial setup');
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});