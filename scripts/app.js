import Koa from 'koa';
import router from '../server/routes/index.js';
import clientRouter from '../server/middlewares/clientRoute.js';
import views from 'koa-views';
import path from 'path';

const app = new Koa();

app.use(router.routes());

export default app;
