import axios from "axios";

import {
  FETCH_USER_CART,
  FETCH_USER_CART_ERROR,
  ADD_TO_CART,
  ADD_TO_CART_ERROR,
  DELETE_FROM_CART,
  DELETE_FROM_CART_ERROR,
  DELETE_FROM_CART_START,
  ADD_TO_CART_START,
} from "./cartTypes";

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
        type: FETCH_USER_CART,
        payload: res.data,
      });
    });
};

export const handleAddToCart = (data) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART_START,
  });
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
    })
    .catch((err) => {
      dispatch({
        type: ADD_TO_CART_ERROR,
        data: err.response.data,
      });
    });
};

export const handleDeleteFromCart = (data) => (dispatch) => {
  dispatch({
    type: DELETE_FROM_CART_START,
  });

  if (typeof localStorage !== "undefined") {
    var config = {
      headers: {
        authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    };
  }

  axios
    .post(
      "http://127.0.0.1:8000/api/v1/cart/item-delete-from-cart",
      data,
      config
    )
    .then((res) => {
      dispatch({
        type: DELETE_FROM_CART,
        payload: data.id,
      });
    })
    .catch((err) => {
      dispatch({
        type: DELETE_FROM_CART_ERROR,
        payload: err.data,
      });
    });
};
