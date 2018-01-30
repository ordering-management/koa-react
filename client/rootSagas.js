import {fork, takeEvery } from 'redux-saga/effects';
import {
  watchMenuClick,
  watchTabChange,
  watchFetchMenu
} from './model/system/sagas';

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
// }
}