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

const initialState = {
  data: [],
  loading: true,
  error: "",
  add_to_cart_success: null,
  total_price: 0,
  total_saving: 0,
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

    case FETCH_PRICING_DETAILS_STATRT:
      return { ...state, loading: true };
    case FETCH_PRICING_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        total_price: action.payload.order_total,
        total_saving: action.payload.amount_saved,
      };
    default:
      return state;
  }
};

export default reducer;
