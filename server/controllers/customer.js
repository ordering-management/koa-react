import Router from 'koa-router';
import { getCustomer, addCustomer, getCustomerById } from '../service/customer';
async function getList(ctx) {
  const result = await getCustomer();
  ctx.body = {
    status: '1',
    data: result
  }
}

async function submit(ctx) {
  const id = ctx.params.id;
  console.log(ctx.request.body);
  if (id === '-1') {
    //add customer
    const result = await addCustomer(ctx.request.body);
    ctx.body = {
      status: '1',
      data: result
    }
  } else {
    // update customer
    ctx.body = {
      status: '1',
    }
  }
}

async function getById(ctx) {
  const id = ctx.params.id;
  const result = await getCustomerById(id);
  ctx.body = {
    status: '1',
    data: result
  }
}

// export default {
//   getList,
//   submit,
//   getById
// }
const router = new Router({ prefix: '/customer' });

router.post('/', getList);
router.put('/:id', submit);
router.get('/:id', getById);

export default router;
