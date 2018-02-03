import AsyncComponent from '../components/AsyncComponent';

const routes = [
  {
    path: '/login',
    exact: true,
    component: AsyncComponent(() => require('./login'))
  },
  {
    path: '/home',
    component: AsyncComponent(() => require('./home')),
    routes: [
      {
        path: '/home/list/:key',
        component: AsyncComponent(() => require('./list')),
      },
      {
        path: '/home/edit/:key',
        component: AsyncComponent(() => require('./edit')),
      },
      {
        path: '/home/detail/:key',
        component: AsyncComponent(() => require('./detail')),
      },
      {
        path: '/home/customer',
        component: AsyncComponent(() => require('./customer/list')),
      }
    ]
  }
];

export default routes;
