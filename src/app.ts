import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('EduTracker Backend Working');
});

export default app;
