import { combineReducers } from "redux";

import auth from "./auth";
import cart from "./cart";
import sidebar from "./sideBar";
import cartsidebar from "./cartSideBar";

export default combineReducers({
  cart,
  auth,
  sidebar,
  cartsidebar,
});
