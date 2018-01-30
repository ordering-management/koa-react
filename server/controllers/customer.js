async function getList(ctx) {

  ctx.body = {
    status: '1',
    data: [{
      key: '1',
      name: '首页',
      iconType: 'dashboard',
      items: [
        {
          key: '2',
          type: 'list',
          name: '分析页',
        },
        {
          key: '3',
          type: 'list',
          name: '监控页',
        },
        {
          key: '4',
          type: 'list',
          name: '工作台',
        }]
    }]
  }
}

export default {
  getList
}
