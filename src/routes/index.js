import { Router } from 'express';
import logger from '../utils/logger.util';
import { responseUtil } from '../utils/response.util';

const router = Router();

router.get('/', (req, res) => {
  logger.debug('Entering GET /');
  responseUtil.success(res, 'Hello from HRI API');
  logger.debug('Exiting GET /');
});

export default router;
