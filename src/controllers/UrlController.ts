import { type Request, type Response, type NextFunction } from 'express';
import { UrlService } from '../services/UrlService.js';
import { UrlSchema, ShortCodeParamSchema } from '../schemas/Zod-Schema.js';
import { ZodError } from 'zod';

const urlService = new UrlService();

export class UrlController {
  /**
   * @openapi
   * /shorten:
   *   post:
   *     summary: Create a new short URL
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               url:
   *                 type: string
   *     responses:
   *       201:
   *         description: Short URL created successfully
   */
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { url } = UrlSchema.parse(req.body);
      const data = await urlService.create(url);
      res.status(201).json(data);
    } catch (error) {
      if (error instanceof ZodError) return res.status(400).json({ status: 'error', errors: error.issues });
      next(error);
    }
  }

  /**
   * @openapi
   * /shorten/{shortCode}:
   *   get:
   *     summary: Retrieve original URL
   *     parameters:
   *       - in: path
   *         name: shortCode
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Success
   *       404:
   *         description: Not Found
   */
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

  /**
   * @openapi
   * /shorten/{shortCode}:
   *   put:
   *     summary: Update an existing short URL
   *     parameters:
   *       - in: path
   *         name: shortCode
   *         required: true
   *         schema:
   *           type: string
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               url:
   *                 type: string
   *     responses:
   *       200:
   *         description: Success
   */
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { shortCode } = ShortCodeParamSchema.parse(req.params);
      const { url } = UrlSchema.parse(req.body);
      const data = await urlService.update(shortCode, url);
      res.json(data);
    } catch (error) {
      if (error instanceof ZodError) return res.status(400).json({ status: 'error', errors: error.issues });
      next(error);
    }
  }

  /**
   * @openapi
   * /shorten/{shortCode}:
   *   delete:
   *     summary: Delete a short URL
   *     parameters:
   *       - in: path
   *         name: shortCode
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       204:
   *         description: Deleted
   */
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { shortCode } = ShortCodeParamSchema.parse(req.params);
      await urlService.delete(shortCode);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }

  /**
   * @openapi
   * /shorten/{shortCode}/stats:
   *   get:
   *     summary: Get URL statistics
   *     parameters:
   *       - in: path
   *         name: shortCode
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Success
   */
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
