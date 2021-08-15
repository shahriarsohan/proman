import {
  PROFILE_FETCH_START,
  PROFILE_EDIT_SUCCESS,
  PROFILE_EDIT_ERROR,
} from "./actionTypes";

import axios from "../../api/axios";

export const fetchUserProfile = () => (dispatch) => {
  dispatch({
    type: PROFILE_FETCH_START,
  });

  axios
    .get("/profile/details")
    .then((res) => {
      dispatch({
        type: PROFILE_EDIT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: PROFILE_EDIT_ERROR,
        payload: err.response.data,
      });
    });
};
