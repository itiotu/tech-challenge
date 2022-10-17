import Router from 'koa-router';

import HealthCheck from './HealthCheck/HealthCheck';
import ExchangeRouting from './ExchangeRouting/ExchangeRouting';

const router = new Router();

router.use('/', HealthCheck.routes());
router.use('/exchange-routing', ExchangeRouting.routes());

export default router;
