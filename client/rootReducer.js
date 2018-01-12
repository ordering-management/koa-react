import { Map } from 'immutable';
import { combineReducers } from 'redux-immutablejs'
import { routerReducer } from 'react-router-redux'

const rootCombinedReducer = combineReducers(
  Map({
    router: routerReducer
  })
);

export default rootCombinedReducer;
