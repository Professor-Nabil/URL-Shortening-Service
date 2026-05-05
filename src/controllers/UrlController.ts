import { Request, Response, NextFunction } from 'express';
import { UrlService } from '../services/UrlService';
import { UrlSchema, ShortCodeParamSchema } from '../schemas/Zod-Schema';
import { ZodError } from 'zod';

const urlService = new UrlService();

export class UrlController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { url } = UrlSchema.parse(req.body);
      const data = await urlService.create(url);
      res.status(201).json(data);
    } catch (error) {
      if (error instanceof ZodError) return res.status(400).json({ status: 'error', errors: error.errors });
      next(error);
    }
  }

  async getByCode(req: Request, res: Response, next: NextFunction) {
    try {
      const { shortCode } = ShortCodeParamSchema.parse(req.params);
      const data = await urlService.findByShortCode(shortCode);
      if (!data) return res.status(404).json({ status: 'error', message: 'Not Found' });
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { shortCode } = ShortCodeParamSchema.parse(req.params);
      const { url } = UrlSchema.parse(req.body);
      const data = await urlService.update(shortCode, url);
      res.json(data);
    } catch (error) {
      if (error instanceof ZodError) return res.status(400).json({ status: 'error', errors: error.errors });
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { shortCode } = ShortCodeParamSchema.parse(req.params);
      await urlService.delete(shortCode);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }

  async getStats(req: Request, res: Response, next: NextFunction) {
    try {
      const { shortCode } = ShortCodeParamSchema.parse(req.params);
      const data = await urlService.getStats(shortCode);
      if (!data) return res.status(404).json({ status: 'error', message: 'Not Found' });
      res.json(data);
    } catch (error) {
      next(error);
    }
  }
}
