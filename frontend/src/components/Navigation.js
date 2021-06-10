import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHome,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Nav } from "react-bootstrap";
import Link from "next/link";

const tabs = [
  {
    route: "/home",
    icon: faHome,
    label: "Home",
  },
  {
    route: "/search",
    icon: faSearch,
    label: "Search",
  },
  {
    route: "/login",
    icon: faUserCircle,
    label: "Login",
  },
];

const Navigation = (props) => {
  return (
    <div>
      {/* Top Bar*/}

      {/* Bottom Tab Navigator*/}
      <nav
        className="navbar fixed-bottom navbar-light d-block  d-sm-block d-md-none d-lg-none
 bottom-tab-nav"
        role="navigation"
      >
        <nav className="w-100">
          <div class="bottom-nav">
            {/* <input type="radio" name="radio" value="1" id="tab-1" checked />
            <label class="icon home" for="tab-1">
              <ion-icon name="home-outline"></ion-icon>
              <ion-icon class="fill" name="home"></ion-icon>
            </label> */}

            <input
              onClick={() => <Link to="/ss" />}
              type="radio"
              name="radio"
              value="2"
              id="tab-2"
              checked
            />
            <label class="icon cart" for="tab-2">
              <ion-icon name="cart-outline"></ion-icon>
              <ion-icon class="fill" name="cart"></ion-icon>
            </label>

            <input type="radio" name="radio" value="3" id="tab-3" checked />
            <label class="icon fav" for="tab-3">
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon class="fill" name="heart"></ion-icon>
            </label>

            <input type="radio" name="radio" value="4" id="tab-4" checked />
            <label class="icon profile" for="tab-4">
              <ion-icon name="person-outline"></ion-icon>
              <ion-icon class="fill" name="person"></ion-icon>
            </label>
          </div>
        </nav>
      </nav>
    </div>
  );
};

export default Navigation;
