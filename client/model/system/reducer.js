import { Map, fromJS } from 'immutable';

const initState = Map({
  menu: [{
    key: '1',
    name: '首页',
    iconType: 'dashboard',
    path: '/home/dashboard',
    permission: 'can_view_dashboard_menu',
    // items: [
    //   {
    //     key: '2',
    //     type: 'list',
    //     name: '分析页',
    //   },
    //   {
    //     key: '3',
    //     type: 'list',
    //     name: '监控页',
    //   },
    //   {
    //     key: '4',
    //     type: 'list',
    //     name: '工作台',
    //   }]
  }, {
    key: '2',
    name: '客户管理',
    iconType: 'user',
    path: '/home/customer',
    permission: 'can_view_customer_menu',
    items: [
      {
        key: '3',
        type: 'list',
        name: '线索管理',
      },
      {
        key: '4',
        type: 'list',
        name: '客户回访',
      }]
  }],
  tabs: [{
      key: '1',
      name: '首页',
      hideClose: true
    }],
  tabActiveKey: '1',
  listKeyMapping: {
    1: {
      table_columns: [
        {
          title: '姓名',
          dataIndex: 'smingcheng',
          width: 100,
          fixed: 'left'
        },
        {
          title: '会员号',
          dataIndex: 'sshouji',
        }, {
          title: '会员角色',
          dataIndex: 'hystatusname',
        },],
      actions: [
        { title: '审核', action: '/api/approve' }
      ],
      source: '/api/customers'
    },
    2: {
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
      source: '/api/customers'
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
        { title: '审核', action: '/api/approve' }
      ],
      source: '/api/customers'
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
        },{
          title: '手机号',
          dataIndex: 'sshouji',
        }, {
          title: '会员角色',
          dataIndex: 'hystatusname',
        },{
          title: '手机号',
          dataIndex: 'sshouji',
        }, {
          title: '会员角色',
          dataIndex: 'hystatusname',
        }],
      actions: [
        { title: '审核', action: '/api/approve' }
      ],
      source: '/api/customers'
    }
  }
})

export default (state = initState, action) => {
  switch (action.type) {
    case 'system/fetchMenuSuccess':
      return state.set('menu', action.payload);
    case 'system/changeTabActiveKey':
      return state.set('tabActiveKey', action.payload);
    case 'system/changeTabs':
      return state.set('tabs', action.payload);
    default:
      return state;
  }
}
