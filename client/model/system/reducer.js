import { Map, List } from 'immutable';

const initState = Map({
  menu: [],
  tabs: List([{
      key: '1',
      name: '首页',
      hideClose: true
    }]),
  tabActiveKey: '1',
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
