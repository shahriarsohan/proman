import axios from "../../api/axios";

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

export const fetchUserOrder = () => (dispatch) => {
  axios
    .get("http://192.168.0.8:8000/v1/cart/user-cart")
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: FETCH_USER_CART,
        payload: res.data,
        error: res.data.msg,
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_USER_CART_ERROR,
      });
    });
};

export const fetchUserCartPricing = () => (dispatch) => {
  dispatch({
    type: FETCH_PRICING_DETAILS_STATRT,
  });

  axios
    .get("http://192.168.0.8:8000/v1/cart/cart-pricing-details")
    .then((res) => {
      dispatch({
        type: FETCH_PRICING_DETAILS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_PRICING_DETAILS_ERROR,
      });
    });
};

export const handleAddToCart = (data) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART_START,
  });

  axios
    .post("http://192.168.0.8:8000/v1/cart/add-to-cart", data)
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

  axios
    .post("http://192.168.0.8:8000/v1/cart/item-delete-from-cart", data)
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
