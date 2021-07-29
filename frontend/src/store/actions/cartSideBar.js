import {
  TOGGLE_SIDEBAR_OPEN_TWO,
  TOGGLE_SIDEBAR_CLOSE_TWO,
} from "./actionTypes";
export const openSideBar = () => (dispatch) => {
  dispatch({
    type: TOGGLE_SIDEBAR_OPEN_TWO,
    payload: open,
  });
};

export const closeSideBar = () => (dispatch) => {
  dispatch({
    type: TOGGLE_SIDEBAR_CLOSE_TWO,
    payload: close,
  });
};
