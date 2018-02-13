import { Map } from 'immutable';

const initState = Map({
  id: '-1'
})

export default (state = initState, action) => {
  switch (action.type) {
    case 'detail/changeId':
      return state.set('id', action.payload);
    case 'detail/changeDetailCache':
      return state.set(action.payload.key, Map(action.payload.config));
    case 'detail/changeDetailDataCache':
      return state.update(action.payload.key, cache => cache.set('data', action.payload.data));
    default:
      return state;
  }
}
