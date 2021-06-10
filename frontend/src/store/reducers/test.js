import { TRY } from "../actions/actionTypes";

const initialState = {
  data: [],
  loading: true,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TRY:
      return { ...state, data: action.payload, loading: false };

    default:
      return state;
  }
};

export default reducer;
