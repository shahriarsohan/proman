import { combineReducers } from "redux";

import auth from "./auth";
import cart from "./cart";
import sidebar from "./sideBar";
import cartsidebar from "./cartSideBar";
import navOptions from "./navbar";
import profile from "./profile";
import wishlist from "./wishlist";

export default combineReducers({
  cart,
  auth,
  sidebar,
  cartsidebar,
  navOptions,
  profile,
  wishlist,
});
