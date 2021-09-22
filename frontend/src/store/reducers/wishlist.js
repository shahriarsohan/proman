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
} from "../actions/actionTypes";

const initialState = {
  loading: null,
  data: [],
  error: null,
  success: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case WISH_LIST_CREATE_START:
      return { ...state, loading: true };
    case WISH_LIST_CREATE_SUCCESS:
      return { ...state, loading: false, success: true };
    case WISH_LIST_CREATE_ERROR:
      return { ...state, loading: false, error: action.payload };
    case WISH_LIST_CREATE_FETCH_START:
      return { ...state, loading: true };
    case WISH_LIST_CREATE_FETCH_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case WISH_LIST_CREATE_FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };
    case WISH_LIST_DELETE_START:
      return { ...state, loading: true };
    case WISH_LIST_DELETE_SUCCESS:
      return Object.assign({}, state, {
        data: [...state.data.filter((item) => item.id !== action.payload)],
        loading: false,
      });
    case WISH_LIST_DELETE_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
