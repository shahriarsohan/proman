import axios from "axios";

import { TRY } from "./actionTypes";

export const fetchUserOrder = () => (dispatch) => {
  if (typeof localStorage !== "undefined") {
    var config = {
      headers: {
        authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    };
  }

  axios
    .get("http://127.0.0.1:8000/api/v1/cart/user-cart", config)
    .then((res) => {
      dispatch({
        type: TRY,
        payload: res.data,
      });
    });
};
