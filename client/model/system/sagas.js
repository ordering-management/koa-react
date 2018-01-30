import { takeEvery, put, call, select, fork } from 'redux-saga/effects';
import { fetchMenuRequest } from '../../service/system';
import { push } from 'react-router-redux';

export const watchFetchMenu = function*() {
  yield takeEvery('system/fetchMenu', fetchMenu);
}

function* fetchMenu(action) {
  const response = yield call(fetchMenuRequest);
  if (response.status === '1') {
    yield put({ type: 'system/fetchMenuSuccess', payload: response.data });
  }
}

export const watchTabChange = function*() {
  yield takeEvery('system/tabChange', tabChange);
}

function* tabChange(action) {
  yield put({ type: 'system/changeTabActiveKey', payload: action.payload });
  yield put(push(`/home/list/${action.payload}`));
}

export const watchMenuClick = function*() {
  yield takeEvery('system/menuClick', menuClick);
}

function* menuClick(action) {
  const systemReducer = yield select(x => x.get('system'));
  const menu = systemReducer.get('menu');
  const tabs = systemReducer.get('tabs');
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

  // const filterItem = tabs.filter(x => x.key === selectItem.key);
  // if (filterItem.length === 0) {
  //   tabs.push(selectItem);
  // }
  // yield put({ type: 'system/changeTabs', payload: tabs });
  // yield put({ type: 'system/changeTabActiveKey', payload: selectItem.key });
  yield put(push(selectItem.path));
}
