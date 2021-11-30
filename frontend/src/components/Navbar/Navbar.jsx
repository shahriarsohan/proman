import React, { Component } from "react";
import { connect } from "react-redux";

import Image from "next/image";
import Link from "next/link";
import { css } from "@emotion/react";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

import { fetchUserOrder } from "../../store/actions/cart";

import { handleDeleteFromCart } from "../../store/actions/cart";
import { openSideBarCart } from "../../store/actions/cartSideBar";
import { closeSideBar, openSideBar } from "../../store/actions/sideBar";

import SideNav from "./SideNav";
import { logout } from "../../store/actions/auth";
import { withRouter } from "next/router";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class Navbar extends Component {
  state = {
    openSearch: false,
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

  toggleSideBar = () => {
    this.setState({
      openSideBar: !this.state.openSideBar,
    });
  };

  handleLogout = () => {
    this.props.logout();
    this.props.router.reload(window.location.pathname);
  };

  render() {
    const { cart } = this.props;

    console.log("tokeeeeen", this.state.token);
    return (
      <>
        {this.props.sidebar && <SideNav />}
        {isBrowser && (
          <header className="header shop">
            {/* <HashLoader color="#39a6a3" loading={true} css={override} size={50} /> */}

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

            <div className="middle-inner d-flex justify-content-center align-items-center">
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
                    <div className="search-top">
                      <div className="top-search">
                        <a href="#0">
                          <i className="ti-search" />
                        </a>
                      </div>
                      {/* Search Form */}
                      <div className="search-top">
                        <form className="search-form">
                          <input
                            type="text"
                            placeholder="Search here..."
                            name="search"
                          />
                          <button value="search" type="submit">
                            <i className="ti-search" />
                          </button>
                        </form>
                      </div>
                      {/*/ End Search Form */}
                    </div>
                    {/*/ End Search Form */}
                    <div
                      onClick={() => console.log("clicked")}
                      className="mobile-nav"
                    />
                  </div>
                  <div className="col-lg-8 col-md-7 col-12">
                    <div className="search-bar-top">
                      <div className="search-bar">
                        <form>
                          <input
                            name="search"
                            placeholder="Search Products Here....."
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
                        <Link href="/profile/overview">
                          <a className="single-icon">
                            <i class="far fa-user"></i>
                          </a>
                        </Link>
                      </div>
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
                    <div className="col-lg-3">
                      <div className="all-category">
                        <h3 className="cat-heading">
                          <i className="fa fa-bars" aria-hidden="true" />
                          CATEGORIES
                        </h3>
                        <ul className="main-category">
                          <li>
                            <Link href="/shop/all">New Arrivals</Link>
                            <Link href="/shop/all">Trending</Link>
                            {/* <ul className="sub-category">
                          <li>
                            <a href="#">accessories</a>
                          </li>
                          <li>
                            <a href="#">best selling</a>
                          </li>
                          <li>
                            <a href="#">top 100 offer</a>
                          </li>
                          <li>
                            <a href="#">sunglass</a>
                          </li>
                          <li>
                            <a href="#">watch</a>
                          </li>
                          <li>
                            <a href="#">man’s product</a>
                          </li>
                          <li>
                            <a href="#">ladies</a>
                          </li>
                          <li>
                            <a href="#">westrn dress</a>
                          </li>
                          <li>
                            <a href="#">denim </a>
                          </li>
                        </ul> */}
                          </li>
                          {/* <li className="main-mega">
                        <a href="#">
                          best selling{" "}
                          <i className="fa fa-angle-right" aria-hidden="true" />
                        </a>
                        <ul className="mega-menu">
                          <li className="single-menu">
                            <a href="#" className="title-link">
                              Shop Kid's
                            </a>
                            <div className="image">
                              <img
                                src="https://via.placeholder.com/225x155"
                                alt="#"
                              />
                            </div>
                            <div className="inner-link">
                              <a href="#">Kids Toys</a>
                              <a href="#">Kids Travel Car</a>
                              <a href="#">Kids Color Shape</a>
                              <a href="#">Kids Tent</a>
                            </div>
                          </li>
                          <li className="single-menu">
                            <a href="#" className="title-link">
                              Shop Men's
                            </a>
                            <div className="image">
                              <img
                                src="https://via.placeholder.com/225x155"
                                alt="#"
                              />
                            </div>
                            <div className="inner-link">
                              <a href="#">Watch</a>
                              <a href="#">T-shirt</a>
                              <a href="#">Hoodies</a>
                              <a href="#">Formal Pant</a>
                            </div>
                          </li>
                          <li className="single-menu">
                            <a href="#" className="title-link">
                              Shop Women's
                            </a>
                            <div className="image">
                              <img
                                src="https://via.placeholder.com/225x155"
                                alt="#"
                              />
                            </div>
                            <div className="inner-link">
                              <a href="#">Ladies Shirt</a>
                              <a href="#">Ladies Frog</a>
                              <a href="#">Ladies Sun Glass</a>
                              <a href="#">Ladies Watch</a>
                            </div>
                          </li>
                        </ul>
                      </li> */}
                          <li>
                            <Link href="#">accessories</Link>
                          </li>
                          <li>
                            <a href="#">top 100 offer</a>
                          </li>
                          <li>
                            <a href="#">sunglass</a>
                          </li>
                          <li>
                            <a href="#">watch</a>
                          </li>
                          <li>
                            <a href="#">man’s product</a>
                          </li>
                          <li>
                            <a href="#">ladies</a>
                          </li>
                          <li>
                            <a href="#">westrn dress</a>
                          </li>
                          <li>
                            <a href="#">denim </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-9 col-12">
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
                                  <a href="index2.html">Home Ecommerce V2</a>
                                </li>
                                <li>
                                  <a href="index3.html">Home Ecommerce V3</a>
                                </li>
                                <li>
                                  <a href="index4.html">Home Ecommerce V4</a>
                                </li>
                              </ul> */}
                                </li>
                                {/* <li>
                              <a href="#">Product</a>
                            </li> */}

                                <li>
                                  <a href="/shop/all">
                                    Shop
                                    <i class="fas fa-store-alt"></i>
                                    <span className="new">New</span>
                                  </a>
                                  {/* <ul className="dropdown">
                                <li>
                                  <a href="shop-grid.html">Shop Grid</a>
                                </li>
                                <li>
                                  <a href="shop-list.html">Shop List</a>
                                </li>
                                <li>
                                  <a href="shop-single.html">shop Single</a>
                                </li>
                                <li>
                                  <a href="cart.html">Cart</a>
                                </li>
                                <li>
                                  <a href="checkout.html">Checkout</a>
                                </li>
                              </ul> */}
                                </li>
                                <li>
                                  <a href="#">Service</a>
                                </li>
                                {/* <li>
                              <a href="#">
                                Pages
                                <i className="ti-angle-down" />
                              </a>
                              <ul className="dropdown">
                                <li>
                                  <a href="about-us.html">About Us</a>
                                </li>
                                <li>
                                  <a href="login.html">Login</a>
                                </li>
                                <li>
                                  <a href="register.html">Register</a>
                                </li>
                                <li>
                                  <a href="mail-success.html">Mail Success</a>
                                </li>
                                <li>
                                  <a href="404.html">404</a>
                                </li>
                              </ul>
                            </li> */}
                                {/* <li>
                              <a href="#">
                                Blog
                                <i className="ti-angle-down" />
                              </a>
                              <ul className="dropdown">
                                <li>
                                  <a href="blog-grid.html">Blog Grid</a>
                                </li>
                                <li>
                                  <a href="blog-grid-sidebar.html">
                                    Blog Grid Sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="blog-single.html">Blog Single</a>
                                </li>
                                <li>
                                  <a href="blog-single-sidebar.html">
                                    Blog Single Sidebar
                                  </a>
                                </li>
                              </ul>
                            </li> */}
                                <li>
                                  <a href="contact.html">Contact Us</a>
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
        {isMobile && (
          <div className="search-bar-top m-2">
            {this.state.openSearch ? (
              <div className="search-bar-close">
                <div className="search-bar">
                  <form>
                    <input
                      name="search"
                      placeholder="Search Products Here....."
                      type="search"
                    />
                    <button className="btnn">
                      <i className="ti-search" />
                    </button>
                  </form>
                </div>
                <div>
                  <img
                    onClick={() => this.setState({ openSearch: false })}
                    width="15px"
                    height="15px"
                    src="/images/close.png"
                    alt="close"
                  />
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
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

                <div className="nav-icon p-2 ml-3">
                  <div className="logo">
                    <a>
                      <img
                        width="70px"
                        height="50px"
                        src="/images/proman-logo-two.png"
                        alt="logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="nav-icon p-2 ml-3">
                  <img
                    onClick={() => this.setState({ openSearch: true })}
                    style={{ marginLeft: "7px" }}
                    width="30px"
                    height="30px"
                    src="/images/search.png"
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  //console.log(state.cart);
  return {
    authError: state.cart.data.msg,
    cart: state.cart.data,
    sidebar: state.sidebar.sideOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: () => dispatch(fetchUserOrder()),
    deleteItem: (data) => dispatch(handleDeleteFromCart(data)),
    openSideBarCart: () => dispatch(openSideBarCart()),
    logout: () => dispatch(logout()),
    openSideBar: () => dispatch(openSideBar()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));
