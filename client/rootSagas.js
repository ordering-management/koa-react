import {fork, takeEvery } from 'redux-saga/effects';
import {
  watchMenuClick,
  watchTabChange,
  watchFetchMenu,
  watchTabRemove
} from './model/system/sagas';
import {
  watchInitList,
  watchFetchListData,
  watchListActionClick
} from './model/list/sagas';
import {
  watchEditInit,
  watchSubmitEdit
} from './model/edit/sagas';

function* watchAndLog() {
  // eslint-disable-next-line
  yield takeEvery('*', function* logger(action) {
    console.log('action', action)
  })
}

export default function* rootSaga() {
// var env = process.env.NODE_ENV || 'development';
// if (env === 'development') {
  yield fork(watchAndLog);
  yield fork(watchFetchMenu);
  yield fork(watchMenuClick);
  yield fork(watchTabChange);
  yield fork(watchTabRemove);
  yield fork(watchInitList);
  yield fork(watchFetchListData);
  yield fork(watchListActionClick);
  yield fork(watchEditInit);
  yield fork(watchSubmitEdit);
// }
}