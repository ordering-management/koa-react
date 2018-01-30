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
        path: '/home/customer',
        component: AsyncComponent(() => require('./customer/list')),
      }
    ]
  }
];

export default routes;
