import { takeEvery, put, call, select, fork } from 'redux-saga/effects';
import {
  fetchMenuRequest,
} from '../../service/system';
import { push } from 'react-router-redux';

export const watchFetchMenu = function*() {
  yield takeEvery('system/fetchMenu', fetchMenu);
}

function* fetchMenu(action) {
  const response = yield call(fetchMenuRequest);
  if (response.status === '1') {
    const menus = [];
    response.data.map((item) => {
      item.key = item.id;
      if (! item.parentId) {
        menus.push(item);
      } else {
        response.data.map(parentItem => {
          if (parentItem.id === item.parentId) {
            parentItem.items = parentItem.items || [];
            parentItem.items.push(item);
          }
        });
      }
    });
    yield put({ type: 'system/fetchMenuSuccess', payload: menus });
  }
}

export const watchTabChange = function*() {
  yield takeEvery('system/tabChange', tabChange);
}

function* tabChange(action) {
  yield put({ type: 'system/changeTabActiveKey', payload: action.payload });
  yield put(push(`/home/${action.payload}`));
}

export const watchMenuClick = function*() {
  yield takeEvery('system/menuClick', menuClick);
}

function* menuClick(action) {
  const systemReducer = yield select(x => x.get('system'));
  const menu = systemReducer.get('menu');
  let tabs = systemReducer.get('tabs');
  const keyPath = action.payload;
  var selectItem = {};
  var currentLevelMenu = menu;
  for(var i = keyPath.length - 1; i >= 0; i--) {
    let key = keyPath[i];
    if (i === 0) {
      selectItem = currentLevelMenu[key];
    } else {
      currentLevelMenu = currentLevelMenu[key].items;
    }
  }

  yield call(addTabs, selectItem);
}

export const addTabs = function*(tab) {
  const systemReducer = yield select(x => x.get('system'));
  let tabs = systemReducer.get('tabs');
  const filterItem = tabs.filter(x => x.key === tab.key && x.type === tab.type);
  if (filterItem.size === 0) {
    tabs = tabs.push(tab);
  }
  yield put({ type: 'system/changeTabs', payload: tabs });
  yield put({ type: 'system/changeTabActiveKey', payload: tab.type + '/' + tab.key });
  yield put(push(`/home/${tab.type}/${tab.key}`));
}

export const getActiveTab = function* () {
  const systemReducer = yield select(x => x.get('system'));
  let tabs = systemReducer.get('tabs');
  let tabActiveKey = systemReducer.get('tabActiveKey');
  const filterTables = tabs.filter(x => x.type + '/' + x.key === tabActiveKey);
  return filterTables.get('0');
}

export const watchTabRemove = function* () {
  yield takeEvery('system/tabRemove', removeTab);
}

function* removeTab(action) {
  const systemReducer = yield select(x => x.get('system'));
  let tabs = systemReducer.get('tabs');
  let tabActiveKey = systemReducer.get('tabActiveKey');
  const index = tabs.findIndex(x => x.type + '/' + x.key === action.payload);
  if (index !== undefined) {
    tabs = tabs.delete(index);
  }
  yield put({ type: 'system/changeTabs', payload: tabs });
  if (action.payload === tabActiveKey) {
    const selectItem = tabs.get(index - 1);
    yield put({ type: 'system/changeTabActiveKey', payload: selectItem.type + '/' +selectItem.key });
    yield put(push(`/home/${selectItem.type}/${selectItem.key}`));
  }
}
