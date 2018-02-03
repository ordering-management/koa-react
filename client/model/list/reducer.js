import { Map, fromJS } from 'immutable';

const initState = Map({});

export default (state = initState, action) => {
  switch (action.type) {
    case 'list/updateListData':
      return state.update(action.payload.key, config => config.set('data', action.payload.data));
    case 'list/updateListConfig':
      return state.set(action.payload.key, Map(action.payload.config));
    case 'list/rowSelectionChange':
      return state.update(action.payload.key, config =>
        config.set('selectedRowKeys', action.payload.selectedRowKeys)
          .set('selectedRows', action.payload.selectedRows));
    default:
      return state;
  }
}
