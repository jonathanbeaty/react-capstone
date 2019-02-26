import { saveAuthToken } from "../local-storage";
import { API_BASE_URL } from "../config";

export const SET_SALES = "SET_SALES";
export const setSales = sales => ({
  type: SET_SALES,
  sales
});

export const SET_PERIOD = "SET_PERIOD";
export const setPeriod = period => ({
  type: SET_PERIOD,
  period
});

export const SIGN_UP = "SIGN_UP";
export const signUp = userInfo => ({
  type: SIGN_UP,
  userInfo
});

export const CLEAR_AUTH = "CLEAR_AUTH";
export const clearAuth = () => ({
  type: CLEAR_AUTH
});

export const setAuthToken = authToken => ({
  type: "SET_AUTH_TOKEN",
  authToken
});

export const authSuccess = currentUser => ({
  type: "AUTH_SUCCESS",
  currentUser
});

export const authRequest = () => ({
  type: "AUTH_REQUEST"
});

export const authError = error => ({
  type: "AUTH_ERROR",
  error
});

export const signupFail = () => ({
  type: "SIGNUP_FAIL"
});

export const signupSuccess = () => ({
  type: "SIGNUP_SUCCESS"
});

const storeAuthInfo = (user, dispatch) => {
  console.log(user);
  dispatch(setAuthToken(user.authToken));
  dispatch(authSuccess(user));

  saveAuthToken(user.authToken);
};

export const login = user => dispatch => {
  dispatch(authRequest());
  fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(user => {
      storeAuthInfo(user, dispatch);
    })
    .catch(err => {
      alert(err);
    });
};

export const setLocalStorage = (authToken, userId, username) => {
  localStorage.setItem("authToken", authToken);
  localStorage.setItem("userId", userId);
  localStorage.setItem("username", username);
};

export const registerUser = user => dispatch => {
  fetch(`${API_BASE_URL}/api/users`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(res => {
      if (!res.ok) {
        dispatch(signupFail());
        return Promise.reject("username/email taken");
      }
      return res.json();
    })
    .then(user => {
      storeAuthInfo(user, dispatch);
    })
    .catch(err => {
      window.alert(err);
    });
};
