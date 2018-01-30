import Koa from 'koa';
import router from '../server/routes/index.js';

const app = new Koa();

app.use(router.routes());

export default app;
