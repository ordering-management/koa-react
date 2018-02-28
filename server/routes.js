import fs from 'fs';
import path from 'path';
import Router from 'koa-router';

const router = new Router({ prefix: '/api' });
let subRouter;

// load all router
const file = fs.readdirSync(__dirname + '/controllers')
  .filter(filename => filename !== path.basename(__filename))
  .forEach(filename => {
    subRouter = require(`./controllers/${filename}`).default;
    router.use(subRouter.routes(), subRouter.allowedMethods());
  });

export default router;