import { Router } from 'express';
import logger from '../utils/logger.util';
import { responseUtil } from '../utils/response.util';

const router = Router();

router.get('/', (req, res) => {
  logger.debug('Hello from HRI API');
  responseUtil.success(res, 'Hello from HRI API');
});

export default router;
