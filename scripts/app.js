import Koa from 'koa';
import router from '../server/routes/index.js';
var bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(bodyParser());
app.use(router.routes());

export default app;
