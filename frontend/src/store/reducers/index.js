import { combineReducers } from "redux";

import auth from "./auth";
import cart from "./cart";
import sidebar from "./sideBar";

export default combineReducers({
  cart,
  auth,
  sidebar,
});
