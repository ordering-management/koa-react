import { takeEvery, put, call, select } from 'redux-saga/effects';
import {
  fetchDetailConfig
} from '../../service/system';
import {
  get
} from '../../service/api';

export const watchDetailInit = function*() {
  yield takeEvery('detail/initDetail', initDetail);
}

function* initDetail(action) {
  const detailCache = yield select(x => x.get('detailCache'));
  const config = detailCache.get(action.payload);
  if (! config) {
    const response = yield call(fetchDetailConfig, action.payload);
    if (response.status === '1') {
      yield put({ type: 'detail/changeDetailCache', payload: { key: action.payload, config: response.data } });
      yield call(fetchDetail, { payload: { id: detailCache.get('id'), source: response.data.source, key: action.payload } });
    }
  } else {
    yield call(fetchDetail, { payload: { id: detailCache.get('id'), source: config.get('source'), key: action.payload } });
  }
}

function* fetchDetail(action) {
  const response = yield call(get, action.payload.source + '/' + action.payload.id);
  if (response.status === '1') {
    yield put({ type: 'detail/changeDetailDataCache', payload: { key: action.payload.key, data: response.data } });
  }
}
