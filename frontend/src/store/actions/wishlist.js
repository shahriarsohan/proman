import axios from "../../api/axios";
import {
  WISH_LIST_CREATE_START,
  WISH_LIST_CREATE_SUCCESS,
  WISH_LIST_CREATE_ERROR,
  WISH_LIST_CREATE_FETCH_START,
  WISH_LIST_CREATE_FETCH_SUCCESS,
  WISH_LIST_CREATE_FETCH_ERROR,
  WISH_LIST_DELETE_START,
  WISH_LIST_DELETE_SUCCESS,
  WISH_LIST_DELETE_ERROR,
} from "./actionTypes";

export const addToWish = (data) => (dispatch) => {
  dispatch({
    type: WISH_LIST_CREATE_START,
  });

  axios
    .post("/wishlist/add", {
      slug: data.slug,
    })
    .then((response) => {
      data.alert.success("Success");
      dispatch({
        type: WISH_LIST_CREATE_SUCCESS,
      });
    })
    .catch((error) => {
      dispatch({
        type: WISH_LIST_CREATE_ERROR,
        payload: error.response.data,
      });
    });
};

export const fetchWishList = () => (dispatch) => {
  dispatch({
    type: WISH_LIST_CREATE_FETCH_START,
  });

  axios
    .get("/wishlist/list")
    .then((response) => {
      dispatch({
        type: WISH_LIST_CREATE_FETCH_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: WISH_LIST_CREATE_FETCH_ERROR,
        payload: error.response.data,
      });
    });
};

export const deleteWishList = (data) => (dispatch) => {
  dispatch({
    type: WISH_LIST_DELETE_START,
  });

  axios
    .post("/wishlist/delete", {
      id: data.id,
    })
    .then((response) => {
      data.alert.success("WishList Deleted");
      dispatch({
        type: WISH_LIST_DELETE_SUCCESS,
        payload: data.id,
      });
    })
    .catch((error) => {
      data.alert.error("Error");
      dispatch({
        type: WISH_LIST_DELETE_ERROR,
        payload: error.response.data,
      });
    });
};
