import { takeEvery, put, call, select } from 'redux-saga/effects';

export const watchDetailInit = function* () {
  yield takeEvery('detail/initDetail', initDetail);
}

function* initDetail(action) {
  const detailCache = yield select(x => x.get('detailCache'));
  const config = detailCache.get(action.payload);
  if (! config) {

  }
}
