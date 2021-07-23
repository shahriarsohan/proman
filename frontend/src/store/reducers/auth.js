import {
  OTP_SEND_START,
  OTP_SEND_SUCCESS,
  OTP_SEND_ERROR,
  OTP_VERIFY_START,
  OTP_VERIFY_SUCCESS,
  OTP_VERIFY_ERROR,
} from "../actions/actionTypes";

const initialState = {
  successData: [],
  loading: null,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OTP_SEND_START:
      return { ...state, loading: true, error: "" };
    case OTP_SEND_SUCCESS:
      return { ...state, loading: false, successData: action.payload };
    case OTP_SEND_SUCCESS:
      return {
        ...state,
        loading: false,
        successData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
