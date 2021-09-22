import {
  TOGGLE_SIDEBAR_OPEN_TWO,
  TOGGLE_SIDEBAR_CLOSE_TWO,
} from "./actionTypes";
export const openSideBarCart = () => (dispatch) => {
  dispatch({
    type: TOGGLE_SIDEBAR_OPEN_TWO,
    payload: open,
  });
};

export const closeSideBarCart = () => (dispatch) => {
  dispatch({
    type: TOGGLE_SIDEBAR_CLOSE_TWO,
    payload: close,
  });
};
