import { TOGGLE_SIDEBAR_OPEN, TOGGLE_SIDEBAR_CLOSE } from "./actionTypes";

export const openSideBar = () => (dispatch) => {
  dispatch({
    type: TOGGLE_SIDEBAR_OPEN,
    payload: open,
  });
};

export const closeSideBar = () => (dispatch) => {
  dispatch({
    type: TOGGLE_SIDEBAR_CLOSE,
    payload: close,
  });
};
