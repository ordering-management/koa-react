async function getMenu(ctx) {
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

async function getListConfigByKey(ctx) {
  var listMapping = {
    2: {
      table_columns: [
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '电话',
          dataIndex: 'phone',
        }, {
          title: '年龄',
          dataIndex: 'age',
        },],
      actions: [
        { title: '浏览', type: 'view' },
        { title: '增加', type: 'add' },
        { title: '修改', type: 'edit' },
        { title: '审核', type: 'action', action: '/api/approve' }
      ],
      source: '/api/customer'
    },
    1: {
      table_columns: [
        {
          title: '姓名',
          dataIndex: 'smingcheng',
          width: 100,
          fixed: 'left'
        },
        {
          title: '推荐人',
          dataIndex: 'stuijianren',
        }],
      actions: [
        { title: '审核', action: '/api/approve' }
      ],
      source: '/api/customer'
    },
    3: {
      table_columns: [
        {
          title: '姓名',
          dataIndex: 'smingcheng',
          width: 100,
          fixed: 'left'
        },
        {
          title: '手机号',
          dataIndex: 'sshouji',
        }, {
          title: '会员角色',
          dataIndex: 'hystatusname',
        }],
      actions: [
        { title: '浏览', type: 'view' },
        { title: '增加', type: 'add' },
        { title: '修改', type: 'edit' },
        { title: '审核', type: 'action', action: '/api/approve' }
      ],
      source: '/api/customer'
    },
    4: {
      table_columns: [
        {
          title: '姓名',
          dataIndex: 'smingcheng',
          width: 100,
          fixed: 'left'
        },
        {
          title: '手机号',
          dataIndex: 'sshouji',
        }, {
          title: '会员角色',
          dataIndex: 'hystatusname',
        }, {
          title: '手机号',
          dataIndex: 'sshouji',
        }, {
          title: '会员角色',
          dataIndex: 'hystatusnam1e',
        }, {
          title: '手机号',
          dataIndex: 'sshouji',
        }, {
          title: '会员角色',
          dataIndex: 'hystatusn1ame',
        }],
      actions: [
        { title: '审核', action: '/api/approve' }
      ],
      source: '/api/customer'
    }
  };
  ctx.body = {
    status: '1',
    data: listMapping[ctx.params.key]
  };
}

async function getEditConfigByKey(ctx) {
  var editMapping = {
    1: {
      config: [
        [
          {
            title: '姓名',
            dataIndex: 'name',
          },
          {
            title: '年龄',
            dataIndex: 'age',
          },
          {
            title: '电话',
            dataIndex: 'phone',
          },
        ]
      ],
      source: '/api/customer'
    },
    2: {
      config: [
        [
          {
            title: '姓名',
            dataIndex: 'name',
          },
          {
            title: '年龄',
            dataIndex: 'age',
          },
          {
            title: '电话',
            dataIndex: 'phone',
          },
        ]
      ],
      source: '/api/customer'
    },
    3: {
      config: [
        [
          {
            title: '姓名',
            dataIndex: 'name',
          },
          {
            title: '年龄',
            dataIndex: 'age',
          },
          {
            title: '电话',
            dataIndex: 'phone',
          },
        ]
      ],
      source: '/api/customer'
    }
  };

  ctx.body = {
    status: '1',
    data: editMapping[ctx.params.key]
  }
}

async function getDetailConfigByKey(ctx) {
  var detailMapping = {
    1: {
      config: [
        [
          {
            title: '姓名',
            dataIndex: 'name',
          },
          {
            title: '年龄',
            dataIndex: 'age',
          },
          {
            title: '电话',
            dataIndex: 'phone',
          },
        ]
      ],
      source: '/api/customer'
    },
    2: {
      config: [
        [
          {
            title: '姓名',
            dataIndex: 'name',
          },
          {
            title: '年龄',
            dataIndex: 'age',
          },
          {
            title: '电话',
            dataIndex: 'phone',
          },
        ]
      ],
      source: '/api/customer'
    },
    3: {
      config: [
        [
          {
            title: '姓名',
            dataIndex: 'name',
          },
          {
            title: '年龄',
            dataIndex: 'age',
          },
          {
            title: '电话',
            dataIndex: 'phone',
          },
        ]
      ],
      source: '/api/customer'
    }
  };

  ctx.body = {
    status: '1',
    data: detailMapping[ctx.params.key]
  }
}

export default {
  getMenu,
  getListConfigByKey,
  getEditConfigByKey,
  getDetailConfigByKey
}
