import { Map } from 'immutable';
import { combineReducers } from 'redux-immutablejs'
import { routerReducer } from 'react-router-redux'
import system from './model/system/reducer';
import list from './model/list/reducer';
import edit from './model/edit/reducer';
import detail from './model/detail/reducer';

const rootCombinedReducer = combineReducers(
  Map({
    system,
    listCache: list,
    editCache: edit,
    detailCache: detail,
    router: routerReducer
  })
);

export default rootCombinedReducer;
