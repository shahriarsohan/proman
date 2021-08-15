import { SHOW_OPTION, HIDE_OPTION } from "./actionTypes";
export const showOptions = () => (dispatch) => {
  dispatch({
    type: SHOW_OPTION,
    payload: open,
  });
};

export const closeOptions = () => (dispatch) => {
  dispatch({
    type: HIDE_OPTION,
    payload: close,
  });
};
