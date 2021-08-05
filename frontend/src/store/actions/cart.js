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
  FETCH_PRICING_DETAILS_STATRT,
  FETCH_PRICING_DETAILS_SUCCESS,
  FETCH_PRICING_DETAILS_ERROR,
  APPLY_COUPON_START,
  APPLY_COUPON_SUCCESS,
  APPLY_COUPON_ERROR,
  OPEN_SIDEBAR_CART,
  COMBO_ADD_TO_CART_START,
  COMBO_ADD_TO_CART,
  COMBO_ADD_TO_CART_ERROR,
} from "./cartTypes";

import { openCartSideBar } from "./cartSideBar";

export const fetchUserOrder = () => (dispatch) => {
  if (typeof localStorage !== "undefined") {
    var config = {
      headers: {
        authorization: "Token " + localStorage.getItem("access_token"),
      },
    };
  }
  axios.get("http://127.0.0.1:8000/v1/cart/user-cart", config).then((res) => {
    dispatch({
      type: FETCH_USER_CART,
      payload: res.data,
    });
  });
};

export const fetchUserCartPricing = () => (dispatch) => {
  dispatch({
    type: FETCH_PRICING_DETAILS_STATRT,
  });
  if (typeof localStorage !== "undefined") {
    var config = {
      headers: {
        authorization: "Token " + localStorage.getItem("access_token"),
      },
    };
  }
  axios
    .get("http://127.0.0.1:8000/v1/cart/cart-pricing-details", config)
    .then((res) => {
      dispatch({
        type: FETCH_PRICING_DETAILS_SUCCESS,
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
        authorization: "Token " + localStorage.getItem("access_token"),
      },
    };
  }
  axios
    .post("http://127.0.0.1:8000/v1/cart/add-to-cart", data, config)
    .then((res) => {
      dispatch({
        type: ADD_TO_CART,
        payload: res.data.item,
      });
    })
    .catch((err) => {
      dispatch({
        type: ADD_TO_CART_ERROR,
        data: err.data,
      });
    });
};

export const handleComboAddToCart = (data) => (dispatch) => {
  console.log("data", data);
  dispatch({
    type: COMBO_ADD_TO_CART_START,
  });
};

export const handleDeleteFromCart = (data) => (dispatch) => {
  dispatch({
    type: DELETE_FROM_CART_START,
  });

  if (typeof localStorage !== "undefined") {
    var config = {
      headers: {
        authorization: "Token " + localStorage.getItem("access_token"),
      },
    };
  }

  axios
    .post("http://127.0.0.1:8000/v1/cart/item-delete-from-cart", data, config)
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

export const applyCoupon = (data) => (dispatch) => {
  dispatch({
    type: APPLY_COUPON_START,
  });
  axios.post;
};
