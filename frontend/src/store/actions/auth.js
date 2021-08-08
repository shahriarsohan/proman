import axios from "axios";

import {
  OTP_SEND_START,
  OTP_SEND_SUCCESS,
  OTP_SEND_ERROR,
  OTP_VERIFY_START,
  OTP_VERIFY_SUCCESS,
  OTP_VERIFY_ERROR,
} from "./actionTypes";

export const otpSend = (phoneNumber) => (dispatch) => {
  dispatch({
    type: OTP_SEND_START,
  });

  axios
    .post("http://192.168.0.8:8000/phone_login/generate/", {
      phone_number: phoneNumber,
    })
    .then((res) => {
      dispatch({
        type: OTP_SEND_SUCCESS,
        payload: res,
      });
    })
    .catch((err) =>
      dispatch({
        type: OTP_SEND_ERROR,
        payload: err.data,
      })
    );
};

export const otpVerify = (data) => (dispatch) => {
  dispatch({
    type: OTP_VERIFY_START,
  });

  axios
    .post("http://192.168.0.8:8000/phone_login/validate/", data)
    .then((res) => {
      dispatch({
        type: OTP_SEND_SUCCESS,
        payload: res.data,
      });
      const expirationDate = new Date(new Date().getTime() + 3600000 * 1000);
      localStorage.setItem("access_token", res.data.token);
      localStorage.setItem("expires_in", expirationDate);
    })
    .catch((err) => {
      dispatch({
        type: OTP_SEND_SUCCESS,
        payload: err.data,
      });
    });
};
