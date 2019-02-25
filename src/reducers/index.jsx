import { combineReducers } from "redux";
import requestReducer from "./requestReducer";
import receivedUsers from "./receivedUsers";
import salesCalculatorReducer from "./salesCalculatorReducer";
import setPeriodReducer from "./setPeriodReducer";
import auth from "./auth";

export default combineReducers({
  auth: auth,
  users: requestReducer,
  users1: receivedUsers,
  sales: salesCalculatorReducer,
  period: setPeriodReducer
});
