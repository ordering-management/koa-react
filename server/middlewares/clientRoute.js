import fs from 'fs';
import { matchRoutes } from 'react-router-config'
import routes from '../../client/page/routes';

async function clientRoute(ctx, next) {
    const branch = matchRoutes(routes, ctx.url);
    if (branch.length > 0) {
        await ctx.render('index')
    } else {
        await next();
    }
}

export default clientRoute;
