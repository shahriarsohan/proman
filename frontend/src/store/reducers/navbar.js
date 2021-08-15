import { SHOW_OPTION, HIDE_OPTION } from "../actions/actionTypes";

const initialState = {
  showOption: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_OPTION:
      return { showOption: true };
    case HIDE_OPTION:
      return { showOption: false };
    default:
      return state;
  }
};

export default reducer;
