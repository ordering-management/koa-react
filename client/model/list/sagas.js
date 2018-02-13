import { takeEvery, put, call, select } from 'redux-saga/effects';
import { post } from '../../service/api';
import {
  fetchListConfig
} from '../../service/system';
import { addTabs, getActiveTab } from '../system/sagas';
import { message } from 'antd';

export const watchInitList = function*() {
  yield takeEvery('list/initList', initList);
}

function* initList(action) {
  const listReducer = yield select(x => x.get('listCache'));
  const listConfig = listReducer.get(action.payload);
  if (! listConfig) {
    const response = yield call(fetchListConfig, action.payload);
    if (response.status === '1') {
      yield put({ type: 'list/updateListConfig', payload: { key: action.payload, config: response.data } });
    }
  }
  yield call(fetchListData, action);
}

export const watchFetchListData = function*() {
  yield takeEvery('list/fetchListData', fetchListData)
}

function* fetchListData(action) {
  const listReducer = yield select(x => x.get('listCache'));
  const listConfig = listReducer.get(action.payload);
  const response = yield call(post, { url: listConfig.get('source'), params: listConfig.get('params') });
  if (response.status === '1') {
    yield put({ type: 'list/updateListData', payload: { key: action.payload, data: response.data } });
  }
}

export const watchListActionClick = function*() {
  yield takeEvery('list/actionClick', actionClick);
}

function* actionClick(action) {
  if (action.payload.type === 'add') {
    const activeTab = yield call(getActiveTab);
    yield call(addTabs, { name: action.payload.title + activeTab.name, type: 'edit', key: activeTab.key });
  } else if (action.payload.type === 'view') {
    const activeTab = yield call(getActiveTab);
    const selectedItems = yield select(x => x.get('listCache').get(activeTab.key).get('selectedRows'));
    if (! selectedItems || selectedItems.length <= 0) {
      message.warn('请选择数据！');
      return;
    }
    yield put({ type: 'detail/changeId', payload: selectedItems[selectedItems.length - 1].id });
    yield call(addTabs, { name: action.payload.title + activeTab.name, type: 'detail', key: activeTab.key });
  }
}
