import { Map } from 'immutable';

const initState = Map({
  id: '-1'
})

export default (state = initState, action) => {
  switch (action.type) {
    case 'detail/changeId':
      return state.set('id', action.payload);
    case 'detail/changeDetailCache':
      return state.set(action.payload.key, action.payload.config);
    default:
      return state;
  }
}
