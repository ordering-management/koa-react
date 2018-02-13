import Router from 'koa-router';
import customer from '../controllers/customer.js';

const router = new Router({ prefix: '/customer' });

router.post('/', customer.getList);
router.put('/:id', customer.submit);
router.get('/:id', customer.getById);

export default router;
