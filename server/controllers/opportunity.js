import { getOpportunity, addOpportunity, getOpportunityById } from '../service/opportunity';
async function getList(ctx) {
  const result = await getOpportunity();
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
    const result = await addOpportunity(ctx.request.body);
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
  const result = await getOpportunityById(id);
  ctx.body = {
    status: '1',
    data: result
  }
}

export default {
  getList,
  submit,
  getById
}
