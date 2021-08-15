import {
  PROFILE_FETCH_START,
  PROFILE_EDIT_SUCCESS,
  PROFILE_EDIT_ERROR,
} from "../actions/actionTypes";

const initialState = {
  userdata: {},
  loading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_FETCH_START:
      return { loading: true };
    case PROFILE_EDIT_SUCCESS:
      return { ...state, loading: false, userdata: action.payload };
    case PROFILE_EDIT_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default reducer;
