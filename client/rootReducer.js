import { Map } from 'immutable';
import { combineReducers } from 'redux-immutablejs'
import { routerReducer } from 'react-router-redux'
import system from './model/system/reducer';

const rootCombinedReducer = combineReducers(
  Map({
    system,
    router: routerReducer
  })
);

export default rootCombinedReducer;
