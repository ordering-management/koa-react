import Router from 'koa-router';
import system from '../controllers/system.js';

const router = new Router({ prefix: '/system' });

router.get('/menu', system.getMenu);
router.get('/list-config/:key', system.getListConfigByKey);
router.get('/edit-config/:key', system.getEditConfigByKey);
router.get('/detail-config/:key', system.getDetailConfigByKey);

export default router;
