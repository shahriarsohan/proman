import axios from "axios";

import { ADD_TO_CART, ADD_TO_ERROR } from "./cartTypes";

export const handleAddToCart = (data) => (dispatch) => {
  console.log(data);
  if (typeof localStorage !== "undefined") {
    var config = {
      headers: {
        authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    };
  }

  axios
    .post("http://127.0.0.1:8000/api/v1/cart/add-to-cart", data, config)
    .then((res) => {
      dispatch({
        type: ADD_TO_CART,
        payload: res.data,
      });
    });
};
