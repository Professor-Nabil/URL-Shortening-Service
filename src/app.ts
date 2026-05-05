import express, { type Request, type Response, type NextFunction } from 'express';
import { urlRoutes } from './routes/urlRoutes.js';

export const app = express();

app.use(express.json());

app.use('/', urlRoutes);

// Global Error Handling Middleware
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ status: 'error', message: 'Internal Server Error' });
});
