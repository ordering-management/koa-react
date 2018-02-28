import Koa from 'koa';
import router from '../server/routes';
var bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(bodyParser());
app.use(router.routes());

export default app;
