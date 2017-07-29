import {
  SELECT_DATE,
} from '../constants/actionTypes';

const initialState = {
  selectedDate: null
};

function reducer(state=initialState, action={}) {
  switch(action.type) {
    case SELECT_DATE:
      return {
        ...state,
        selectedDate: action.data,
      };
    default:
      return state;
  }
};

export default reducer;