import { SIGN_UP } from "../actions";

const initialState = {
  firstName: "",
  lastName: "",
  businessName: "",
  address: "",
  city: "",
  zipCode: "",
  email: "",
  password: "",
  passwordMatch: ""
};

export default (state = initialState, action) => {
  if (action.type === SIGN_UP) {
    return Object.assign({}, state, {
      action
    });
  }
  return state;
};
