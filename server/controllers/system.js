import Router from 'koa-router';
import systemService from '../service/system';

class systemController {
  async getMenus(ctx) {
    const menus = await systemService.getClientMenus();
    ctx.body = {
      status: '1',
      data: menus
    }
  }

  async getPagePartsByKey(ctx) {
    const parts = await systemService.getClientPartsByKey(ctx.params.key);
    for(var i = 0; i < parts.length; i++) {
      parts[i].items = await systemService.getClientPartDetail(parts[i]);
    }
    ctx.body = {
      status: '1',
      data: parts
    };
  }

  async getEditConfigByKey(ctx) {
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
              title: '商机名称',
              dataIndex: 'name',
            },
            {
              title: '客户名称',
              dataIndex: 'customername',
            },
            {
              title: '客户地址',
              dataIndex: 'address'
            },
            {
              title: '商机阶段',
              dataIndex: 'stage'
            },
            {
              title: '行业',
              dataIndex: 'industry',
            }
          ]
        ],
        source: '/api/opportunity'
      }
    };

    ctx.body = {
      status: '1',
      data: editMapping[ctx.params.key]
    }
  }

  async getListConfigByKey(ctx) {
    const listActions = await systemService.getClientListActionsByMenuId(ctx.params.key);
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
        actions: listActions,
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
        actions: listActions,
        source: '/api/customer'
      },
      3: {
        table_columns: [
          {
            title: '商机名称',
            dataIndex: 'name',
          },
          {
            title: '客户名称',
            dataIndex: 'customername',
          }, {
            title: '客户地址',
            dataIndex: 'address'
          }, {
            title: '商机阶段',
            dataIndex: 'stage'
          }, {
            title: '行业',
            dataIndex: 'industry',
          }],
        actions: [
          { title: '浏览', type: 'view' },
          { title: '增加', type: 'add' },
          { title: '修改', type: 'edit' },
          { title: '审核', type: 'action', action: '/api/approve' }
        ],
        source: '/api/opportunity'
      },
    };
    ctx.body = {
      status: '1',
      data: listMapping[ctx.params.key]
    };
  }

  async getDetailConfigByKey(ctx) {
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
              title: '商机名称',
              dataIndex: 'name',
            },
            {
              title: '客户名称',
              dataIndex: 'customername',
            },
            {
              title: '客户地址',
              dataIndex: 'address'
            },
            {
              title: '商机阶段',
              dataIndex: 'stage'
            },
            {
              title: '行业',
              dataIndex: 'industry',
            }
          ]
        ],
        source: '/api/opportunity'
      }
    };

    ctx.body = {
      status: '1',
      data: detailMapping[ctx.params.key]
    }
  }
}

var systemControllerInstance = new systemController();

const router = new Router({ prefix: '/system' });
router.get('/menu', systemControllerInstance.getMenus);
router.get('/page-parts/:key', systemControllerInstance.getPagePartsByKey);
router.get('/list-config/:key', systemControllerInstance.getListConfigByKey);
router.get('/edit-config/:key', systemControllerInstance.getEditConfigByKey);
router.get('/detail-config/:key', systemControllerInstance.getDetailConfigByKey);

export default router;

