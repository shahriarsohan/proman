import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Link from "next/link";
import { css } from "@emotion/react";

import { Breadcrumb } from "semantic-ui-react";

import { isMobile } from "react-device-detect";

import HashLoader from "react-spinners/HashLoader";

import { fetchUserOrder, handleDeleteFromCart } from "../../store/actions/cart";
import {
  closeSideBarCart,
  openSideBarCart,
} from "../../store/actions/cartSideBar";
import Cart from "../SideCart/Cart";
import SideNav from "./SideNav";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class NavbarDetails extends React.Component {
  componentDidMount() {
    this.props.fetchCart();
  }

  handleDelete = (id) => {
    const data = {
      id: id,
    };
    this.props.deleteItem(data);
  };

  render() {
    const { cart, loading, error } = this.props;
    //console.log("isMobile", isMobile);
    return (
      <>
        {this.props.sidebar && <SideNav />}
        {this.props.isMobile ? (
          <div className="mobie-nav">
            <div className="back-button">
              <div onClick={() => this.props.route()}>
                <img
                  width="40px"
                  height="40px"
                  src="/images/nav-back.png"
                  alt="nav-back"
                />
              </div>
            </div>
            <div className="product-name">
              <p>{this.props.name}</p>
            </div>
            <div className="sinlge-bar shopping">
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
        ) : (
          <header className="header shop">
            {/* Topbar */}
            <div className="topbar">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-12 col-12">
                    {/* Top Left */}
                    <div className="top-left">
                      <ul className="list-main">
                        <li>
                          <i className="ti-headphone-alt" /> +060 (800) 801-582
                        </li>
                        <li>
                          <i className="ti-email" /> support@shophub.com
                        </li>
                      </ul>
                    </div>
                    {/*/ End Top Left */}
                  </div>
                  <div className="col-lg-8 col-md-12 col-12">
                    {/* Top Right */}
                    <div className="right-content">
                      <ul className="list-main">
                        <li>
                          <i className="ti-location-pin" /> Store location
                        </li>
                        <li>
                          <i className="ti-alarm-clock" />{" "}
                          <a href="#">Daily deal</a>
                        </li>
                        <li>
                          <i className="ti-user" /> <a href="#">My account</a>
                        </li>
                        <li>
                          <i className="ti-power-off" />
                          <a href="login.html#">Login</a>
                        </li>
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
                    <div className="logo">
                      <a href="index.html">
                        <img
                          src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/images/logo.png"
                          alt="logo"
                        />
                      </a>
                    </div>
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
                    <div className="mobile-nav" />
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
                        <a href="#" className="single-icon">
                          <i className="fa fa-heart-o" aria-hidden="true" />
                        </a>
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
                            <span className="total-count">{cart.length}</span>
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
                                  <a href="#">
                                    Home
                                    <i className="ti-angle-down" />
                                  </a>
                                  <ul className="dropdown">
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
                                  </ul>
                                </li>
                                <li>
                                  <a href="#">Product</a>
                                </li>
                                <li>
                                  <a href="#">Service</a>
                                </li>
                                <li>
                                  <a href="#">
                                    Shop
                                    <i className="ti-angle-down" />
                                    <span className="new">New</span>
                                  </a>
                                  <ul className="dropdown">
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
                                  </ul>
                                </li>
                                <li>
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
                                      <a href="mail-success.html">
                                        Mail Success
                                      </a>
                                    </li>
                                    <li>
                                      <a href="404.html">404</a>
                                    </li>
                                  </ul>
                                </li>
                                <li>
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
                                </li>
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
        {this.props.cartSideBarOpenTwo && (
          <Cart close={this.props.closeSideBar} />
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
    closeSideBar: () => dispatch(closeSideBarCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarDetails);
