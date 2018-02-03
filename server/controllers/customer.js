import { getCustomer, addCustomer } from '../service/customer';
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

export default {
  getList,
  submit
}
