import {
  TOGGLE_SIDEBAR_OPEN_TWO,
  TOGGLE_SIDEBAR_CLOSE_TWO,
} from "../actions/actionTypes";

const initialState = {
  sideOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR_OPEN_TWO:
      return { sideOpen: true };
    case TOGGLE_SIDEBAR_CLOSE_TWO:
      return { sideOpen: false };
    default:
      return state;
  }
};

export default reducer;
