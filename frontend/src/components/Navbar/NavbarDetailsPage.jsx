import React from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { css } from "@emotion/react";
import Image from "next/image";
import { logout } from "../../store/actions/auth";
import { withRouter } from "next/router";
import { fetchUserOrder, handleDeleteFromCart } from "../../store/actions/cart";
import {
  closeSideBarCart,
  openSideBarCart,
} from "../../store/actions/cartSideBar";
import { closeSideBar, openSideBar } from "../../store/actions/sideBar";

import Cart from "../SideCart/Cart";
import SideNav from "./SideNav";

class NavbarDetails extends React.Component {
  state = {
    token: "",
  };

  componentDidMount() {
    this.props.fetchCart();
    if (typeof window !== undefined) {
      const token = localStorage.getItem("access_token");
      this.setState({
        token,
      });
    }
  }

  handleDelete = (id) => {
    const data = {
      id: id,
    };
    this.props.deleteItem(data);
  };

  handleLogout = () => {
    this.props.logout();
    this.props.router.reload(window.location.pathname);
  };

  render() {
    const { cart, loading, error } = this.props;
    // //console.log("cart", cart);
    return (
      <>
        {this.props.sidebar && <SideNav />}
        {this.props.isMobile ? (
          <div style={{ marginBottom: "20px" }} className="mobie-nav mb-5">
            <div className="back-button">
              <div onClick={() => this.props.route()}>
                <img
                  width="40px"
                  height="40px"
                  src="/images/nav-back.png"
                  alt="nav-back"
                />
              </div>
              <div className="details-title">
                <p>{this.props.name}</p>
              </div>
            </div>

            <div className="sinlge-bar shopping">
              <a
                onClick={() => this.props.openSideBar()}
                className="single-icon"
              >
                <img
                  width="30px"
                  height="30px"
                  src="/images/hamburger-menu.png"
                  alt="logo"
                />
              </a>
            </div>
          </div>
        ) : (
          <header className="header shop">
            {/* Topbar */}
            <div className="topbar">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 col-md-12 col-12">
                    {/* Top Left */}
                    <div className="top-left">
                      <ul className="list-main">
                        <li>
                          <a href="tel:+8801786910645">
                            <i className="ti-headphone-alt" /> +88 (01309)
                            466-923
                          </a>
                        </li>
                        <li>
                          <a href="mailto:support@proman.com.bd">
                            <i className="ti-email" /> support@promen.com.bd
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/*/ End Top Left */}
                  </div>
                  <div className="col-lg-7 col-md-12 col-12">
                    {/* Top Right */}
                    <div className="right-content">
                      <ul className="list-main">
                        {/* <li>
                      <i className="ti-location-pin" /> Store location
                    </li> */}
                        <li>
                          <i className="ti-alarm-clock" />{" "}
                          <Link href="/daily-deals">
                            <a>Daily deal</a>
                          </Link>
                        </li>
                        <li>
                          <i className="ti-user" />{" "}
                          <Link href="/profile/overview">My account</Link>
                        </li>
                        {this.state.token === null ? (
                          <li>
                            <i className="ti-power-off" />
                            <Link href="/user/login">Login</Link>
                          </li>
                        ) : (
                          <li onClick={() => this.handleLogout()}>
                            <i className="ti-power-off" />
                            <a>Logout</a>
                          </li>
                        )}
                      </ul>
                    </div>
                    {/* End Top Right */}
                  </div>
                </div>
              </div>
            </div>

            {/* End Topbar */}
            <div className="middle-inner">
              <div className="container">
                <div className="row">
                  <div className="col-lg-2 col-md-2 col-12">
                    {/* Logo */}
                    <Link href="/">
                      <div className="logo">
                        <Image
                          width="150px"
                          height="80px"
                          src="/images/proman-logo-two.png"
                          alt="logo"
                        />
                      </div>
                    </Link>
                    {/*/ End Logo */}
                    {/* Search Form */}

                    {/*/ End Search Form */}
                    <div className="mobile-nav" />
                  </div>
                  <div className="col-lg-8 col-md-7 col-12">
                    <div className="search-bar-top">
                      <div className="search-bar">
                        <form>
                          <input
                            name="search"
                            placeholder="Search Products Here"
                            type="search"
                          />
                          <button className="btnn">
                            <i className="ti-search" />
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-12">
                    <div className="right-bar">
                      {/* Search Form */}
                      <div className="sinlge-bar">
                        <Link href="/profile/wishlist">
                          <a className="single-icon">
                            <i className="fa fa-heart-o" aria-hidden="true" />
                          </a>
                        </Link>
                      </div>
                      <div className="sinlge-bar">
                        <a href="#" className="single-icon">
                          <i
                            className="fa fa-user-circle-o"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                      <div className="sinlge-bar shopping">
                        <div className="sinlge-bar shopping">
                          <a
                            onClick={() => this.props.openSideBarCart()}
                            className="single-icon"
                          >
                            <i className="ti-bag" />{" "}
                            <span className="total-count">
                              {cart === undefined ? "" : cart.length}
                            </span>
                          </a>
                        </div>
                        {/*/ End Shopping Item */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Header Inner */}
            <div className="header-inner">
              <div className="container">
                <div className="cat-nav-head">
                  <div className="row">
                    <div className="col-12">
                      <div className="menu-area">
                        {/* Main Menu */}
                        <nav className="navbar navbar-expand-lg">
                          <div className="navbar-collapse">
                            <div className="nav-inner">
                              <ul className="nav main-menu menu navbar-nav">
                                <li className="active">
                                  <Link href="/">
                                    Home
                                    {/* <i className="ti-angle-down" /> */}
                                  </Link>
                                  {/* <ul className="dropdown">
                                    <li>
                                      <a href="index.html">Home Ecommerce V1</a>
                                    </li>
                                    <li>
                                      <a href="index2.html">
                                        Home Ecommerce V2
                                      </a>
                                    </li>
                                    <li>
                                      <a href="index3.html">
                                        Home Ecommerce V3
                                      </a>
                                    </li>
                                    <li>
                                      <a href="index4.html">
                                        Home Ecommerce V4
                                      </a>
                                    </li>
                                  </ul> */}
                                </li>
                                <li>
                                  <Link href="/shop/all">Product</Link>
                                </li>

                                <li>
                                  <Link href="/shop/all">Shop</Link>
                                </li>

                                <li>
                                  <Link href="/services">Services</Link>
                                </li>

                                <li>
                                  <Link href="/contact-us">Contact Us</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </nav>
                        {/*/ End Main Menu */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*/ End Header Inner */}
          </header>
        )}
        {this.props.cartSideBarOpenTwo && (
          <Cart slug={this.props.slug} close={this.props.closeSideBarCart} />
        )}
      </>
    );
  }
}
// const [cart, setCart] = useState([]);
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(false);

const mapStateToProps = (state) => {
  return {
    cart: state.cart.data,
    loading: state.cart.loading,
    error: state.cart.error,
    sidebar: state.sidebar.sideOpen,
    cartSideBarOpenTwo: state.cartsidebar.sideOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: () => dispatch(fetchUserOrder()),
    deleteItem: (data) => dispatch(handleDeleteFromCart(data)),
    openSideBarCart: () => dispatch(openSideBarCart()),
    closeSideBarCart: () => dispatch(closeSideBarCart()),
    logout: () => dispatch(logout()),
    openSideBar: () => dispatch(openSideBar()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NavbarDetails));
