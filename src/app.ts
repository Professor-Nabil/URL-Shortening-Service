import express, { Request, Response, NextFunction } from 'express';
import { urlRoutes } from './routes/urlRoutes';

export const app = express();

app.use(express.json());

app.use('/', urlRoutes);

// Global Error Handling Middleware
app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ status: 'error', message: 'Internal Server Error' });
});
