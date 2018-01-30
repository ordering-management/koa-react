import Router from 'koa-router';
import user from '../controllers/system.js';

const router = new Router({ prefix: '/system' });

router.get('/menu', user.getMenu);

export default router;
