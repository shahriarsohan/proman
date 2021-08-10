import {
  FETCH_USER_CART,
  FETCH_USER_CART_ERROR,
  ADD_TO_CART_START,
  ADD_TO_CART,
  ADD_TO_CART_ERROR,
  DELETE_FROM_CART_START,
  DELETE_FROM_CART,
  DELETE_FROM_CART_ERROR,
  FETCH_PRICING_DETAILS_STATRT,
  FETCH_PRICING_DETAILS_SUCCESS,
  FETCH_PRICING_DETAILS_ERROR,
} from "../actions/cartTypes";

// Sun Aug 08 2021 21:40:43 GMT+0600 (Bangladesh Standard Time)

const initialState = {
  data: [],
  loading: true,
  pricingLoader: false,
  error: "",
  add_to_cart_success: null,
  total_price: 0,
  total_saving: 0,
  cart_total: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_CART:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
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

    case FETCH_PRICING_DETAILS_STATRT:
      return { ...state, pricingLoader: true };
    case FETCH_PRICING_DETAILS_SUCCESS:
      return {
        ...state,
        pricingLoader: false,
        total_price: action.payload.order_total,
        total_saving: action.payload.savings,
        cart_total: action.payload.cart_total,
      };
    default:
      return state;
  }
};

export default reducer;
