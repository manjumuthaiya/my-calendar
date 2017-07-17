import {
  LOAD_EVENTS,
} from '../constants/actionTypes';
const initialState = {};

function reducer(state=initialState, action={}) {
  switch(action.type) {
    case LOAD_EVENTS:
      return action.data;
    default:
      return state;
  }
};

export default reducer;