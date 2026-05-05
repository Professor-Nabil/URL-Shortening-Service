import { Router } from 'express';
import { UrlController } from '../controllers/UrlController';

const router = Router();
const urlController = new UrlController();

router.post('/shorten', urlController.create);
router.get('/shorten/:shortCode', urlController.getByCode);
router.put('/shorten/:shortCode', urlController.update);
router.delete('/shorten/:shortCode', urlController.delete);
router.get('/shorten/:shortCode/stats', urlController.getStats);

export { router as urlRoutes };
