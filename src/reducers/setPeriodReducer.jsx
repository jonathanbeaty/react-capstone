import { SET_PERIOD } from "../actions";

const initialState = { text: "Please Select" };

export default (state = initialState, action) => {
  if (action.type === SET_PERIOD) {
    return Object.assign({}, state, {
      text: action.period
    });
  }
  return state;
};
