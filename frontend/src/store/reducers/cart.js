import {
  FETCH_USER_CART,
  FETCH_USER_CART_ERROR,
  ADD_TO_CART_START,
  ADD_TO_CART,
  ADD_TO_CART_ERROR,
  DELETE_FROM_CART_START,
  DELETE_FROM_CART,
  DELETE_FROM_CART_ERROR,
} from "../actions/cartTypes";

const initialState = {
  data: [],
  loading: true,
  error: "",
  add_to_cart_success: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_CART:
      return { ...state, data: action.payload, loading: false };
    case DELETE_FROM_CART:
      return Object.assign({}, state, {
        data: [...state.data.filter((item) => item.id !== action.payload)],
        loading: false,
      });
    case ADD_TO_CART_START:
      return { ...state, loading: true };
    case DELETE_FROM_CART_START:
      return { ...state, loading: true };
    case ADD_TO_CART:
      return {
        ...state,
        add_to_cart_success: true,
        data: [...state.data, action.payload],
        loading: false,
      };
    case ADD_TO_CART_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default reducer;
