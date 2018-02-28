import Router from 'koa-router';

async function getUserInfo(ctx) {
  ctx.body = {
    name: '1111',
    gender: 'maile',
    age: '35'
  }
}

const router = new Router({ prefix: '/user' });

router.get('/userinfo', getUserInfo);

export default router;

// export default {
//     getUserInfo
// }
