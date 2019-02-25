import { SET_SALES } from "../actions";

const initialState = {
  sales: 0
};

export default (state = initialState, action) => {
  if (action.type === SET_SALES) {
    return Object.assign({}, state, {
      sales: action.sales
    });
  }
  return state;
};
