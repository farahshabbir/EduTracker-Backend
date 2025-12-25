import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

// Global middlewares
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('EduTracker Backend Working');
});
// Health check
app.get('/health', (_, res) => {
  res.json({ status: 'OK' });
});
//Application Routes

export default app;
