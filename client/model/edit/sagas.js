import { takeEvery, put, call, select } from 'redux-saga/effects';
import {
  addTabs,
  fetchEditConfig
} from '../../service/system';
import {
  put as putRequest
} from '../../service/api';
import { message } from 'antd';

export const watchEditInit = function* () {
  yield takeEvery('edit/initEdit', initEdit);
}

function* initEdit(action) {
  const editCache = yield select(x => x.get('editCache'));
  const config = editCache.get(action.payload);
  if (! config) {
    const response = yield call(fetchEditConfig, action.payload);
    if (response.status === '1') {
      yield put({ type: 'edit/changeEditCache', payload: { key: action.payload, config: response.data } });
    }
  }
}

export const watchSubmitEdit = function* () {
  yield takeEvery('edit/submit', submitEdit);
}

function* submitEdit(action) {
  const response = yield call(putRequest, action.payload);
  if (response.status === '1') {
    message.success('提交成功！');
    yield put({ type: 'system/tabRemove',
      payload: 'edit' + '/' + action.key });
    // yield put({ type: 'detail/changeId', payload: selectedItems[selectedItems.length - 1].id });
    // yield call(addTabs, { name: action.payload.title + activeTab.name, type: 'detail', key: activeTab.key });
  }
}
