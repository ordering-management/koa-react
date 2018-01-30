import Router from 'koa-router';
import customer from '../controllers/customer.js';

const router = new Router({ prefix: '/customer' });

router.get('/list', customer.getList);

export default router;
