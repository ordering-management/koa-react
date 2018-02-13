import Router from 'koa-router';
import opportunity from '../controllers/opportunity.js';

const router = new Router({ prefix: '/opportunity' });

router.post('/', opportunity.getList);
router.put('/:id', opportunity.submit);
router.get('/:id', opportunity.getById);

export default router;
