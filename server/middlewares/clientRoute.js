import fs from 'fs';
import { matchRoutes } from 'react-router-config'
import routes from '../../client/page/routes';

async function clientRoute(ctx, next) {
  const branch = matchRoutes(routes, ctx.url);
  if (branch.length > 0) {
    await ctx.render('index')
    // const data = await new Promise((resolve, reject) => {
    //   fs.readFile('build/index.tpl.html', 'utf-8', (err, data) => {
    //     if(! err) {
    //       resolve(data);
    //     } else {
    //       resolve('page not found');
    //     }
    //   });
    // });
    // ctx.body = data;
  } else {
    await next();
  }
}

export default clientRoute;
