import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHome,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Nav } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

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
        className="fixed-bottom navbar-light d-block  d-sm-block d-md-none d-lg-none"
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
            <Link href="/shop/all">
              <label class="cart">
                <ion-icon
                  style={{ color: "black" }}
                  name="cart-outline"
                ></ion-icon>
                <ion-icon
                  style={{ color: "#39A6A3" }}
                  class="fill"
                  name="cart"
                ></ion-icon>
              </label>
            </Link>

            <input type="radio" name="radio" value="3" id="tab-3" />
            <Link href="/shop/all">
              <label class="fav" for="tab-3">
                <Image
                  className="bottom-nav-icon"
                  src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/images/Untitled+design+(1).png"
                  width="100px"
                  height="100px"
                />
              </label>
            </Link>

            <input type="radio" name="radio" value="4" id="tab-4" />
            <Link href="/shop/all">
              <label class="profile" for="tab-4">
                <ion-icon
                  style={{ color: "black" }}
                  name="person-outline"
                ></ion-icon>
                <ion-icon
                  style={{ color: "#39A6A3" }}
                  class="fill"
                  name="person"
                ></ion-icon>
              </label>
            </Link>
          </div>
        </nav>
      </nav>
    </div>
  );
};

export default Navigation;
