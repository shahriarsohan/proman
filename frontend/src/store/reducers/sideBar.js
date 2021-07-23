import {
  TOGGLE_SIDEBAR_OPEN,
  TOGGLE_SIDEBAR_CLOSE,
} from "../actions/actionTypes";

const initialState = {
  sideOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR_OPEN:
      return { sideOpen: !state.sideOpen };
    case TOGGLE_SIDEBAR_CLOSE:
      return { sideOpen: !state.sideOpen };
    default:
      return state;
  }
};

export default reducer;
