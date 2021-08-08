import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utils";

const initialState = {
  token: null,
  error: null,
  loading: false,
  status: null,
  successData: [],
};

const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    error: null,
    loading: false,
    status: action.status,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const authLogout = (state, action) => {
  return updateObject(state, {
    token: null,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.OTP_SEND_SUCCESS:
      return {
        successData: action.payload,
        loading: false,
        status: action.status,
      };
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export default reducer;

// import {
//   OTP_SEND_START,
//   OTP_SEND_SUCCESS,
//   OTP_SEND_ERROR,
//   OTP_VERIFY_START,
//   OTP_VERIFY_SUCCESS,
//   OTP_VERIFY_ERROR,
// } from "../actions/actionTypes";

// const initialState = {
//   successData: [],
//   loading: null,
//   error: "",
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case OTP_SEND_START:
//       return { ...state, loading: true, error: "" };
//     case OTP_SEND_SUCCESS:
//       return { ...state, loading: false, successData: action.payload };
//     case OTP_SEND_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         successData: [],
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default reducer;
