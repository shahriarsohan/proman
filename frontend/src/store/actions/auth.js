import axios from "axios";
import customAxios from "../../api/axios";

import {
  OTP_SEND_START,
  OTP_SEND_SUCCESS,
  OTP_SEND_ERROR,
  OTP_VERIFY_START,
  OTP_VERIFY_SUCCESS,
  OTP_VERIFY_ERROR,
  AUTH_FAIL,
  AUTH_SUCCESS,
  AUTH_LOGOUT,
  AUTH_START,
} from "./actionTypes";

export const authSuccess = (token, status) => {
  return {
    type: AUTH_SUCCESS,
    token: token,
    status: status,
  };
};

export const authFail = (error) => {
  return {
    type: AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("expires_in");
  return {
    type: AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

// export const otpSend = (phoneNumber) => (dispatch) => {
//   dispatch({
//     type: AUTH_START,
//   });

//   axios
//     .post("http://Proman-prod.eba-faitp54h.ap-south-1.elasticbeanstalk.com/phone_login/generate/", {
//       phone_number: phoneNumber,
//     })
//     .then((res) => {
//       dispatch({
//         type: OTP_SEND_SUCCESS,
//         payload: res,
//       });
//     })
//     .catch((err) =>
//       dispatch({
//         type: OTP_SEND_ERROR,
//         payload: err.data,
//       })
//     );
// };

export const otpSend = (phoneNumber) => (dispatch) => {
  //console.log(phoneNumber);
  dispatch({
    type: AUTH_START,
  });

  axios
    .post(
      "http://Proman-prod.eba-faitp54h.ap-south-1.elasticbeanstalk.com/api/phone_login/generate/",
      {
        phone_number: phoneNumber,
      }
    )
    .then((res) => {
      dispatch({
        type: OTP_SEND_SUCCESS,
        payload: res,
      });
    })
    .catch((err) =>
      dispatch({
        type: OTP_SEND_ERROR,
        payload: err.response,
      })
    );
};

export const otpVerify = (data, router) => (dispatch) => {
  //console.log(router);
  dispatch({
    type: AUTH_START,
  });

  axios
    .post(
      "http://Proman-prod.eba-faitp54h.ap-south-1.elasticbeanstalk.com/api/phone_login/validate/",
      data
    )
    .then((res) => {
      const token = res.data.token;
      const status = res.data.status;
      //console.log(status);
      const data = res.data;
      const expirationDate = new Date(new Date().getTime() + 3600 * 10000);
      const tokenset = localStorage.setItem("access_token", token);
      localStorage.setItem("expires_in", expirationDate);
      dispatch(authSuccess(token, status, data));
      dispatch(checkAuthTimeout(3600));
      customAxios.defaults.headers.common["Authorization"] = `Token ${token}`;
      const setToken = localStorage.getItem("access_token");
      console.log("setToken", setToken);
      if (status === 200) {
        if (router.query.redirect) {
          router.push(router.query.redirect);
        } else {
          router.push("/");
        }
      }
    })
    .catch((err) => {
      dispatch(authFail(err));
    });
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("access_token");
    if (token === undefined) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expires_in"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 10000
          )
        );
      }
    }
  };
};
