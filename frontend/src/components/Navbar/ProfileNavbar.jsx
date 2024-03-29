import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { css } from "@emotion/react";

import { isMobile } from "react-device-detect";

import { fetchUserOrder, handleDeleteFromCart } from "../../store/actions/cart";
import {
  closeSideBarCart,
  openSideBarCart,
} from "../../store/actions/cartSideBar";
import { showOptions, closeOptions } from "../../store/actions/navbar";

import Cart from "../SideCart/Cart";
import SideNav from "./SideNav";

class ProfileNavbar extends React.Component {
  state = {
    token: "",
  };

  componentDidMount() {
    this.props.fetchCart();

    this.props.fetchCart();
    if (typeof window !== undefined) {
      const token = localStorage.getItem("access_token");
      this.setState({
        token,
      });
    }
  }

  handleLogout = () => {
    this.props.logout();
    this.props.router.reload(window.location.pathname);
  };

  handleDelete = (id) => {
    const data = {
      id: id,
    };
    this.props.deleteItem(data);
  };

  render() {
    const { cart, loading, error, showDropdown } = this.props;
    // //console.log("cart", cart);
    return (
      <>
        {this.props.sidebar && <SideNav />}
        {this.props.isMobile ? (
          <div className="mobie-nav mb-5">
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
              <a onClick={() => this.props.show()} className="single-icon">
                <img
                  width="30px"
                  height="30px"
                  src="/images/options.png"
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
                          <i className="ti-headphone-alt" /> 88 (01309) 466-923
                        </li>
                        <li>
                          <i className="ti-email" /> care@proman.com.bd
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
          <Cart slug={this.props.slug} close={this.props.closeSideBar} />
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
    option: state.navOptions.showOption,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: () => dispatch(fetchUserOrder()),
    deleteItem: (data) => dispatch(handleDeleteFromCart(data)),
    openSideBarCart: () => dispatch(openSideBarCart()),
    closeSideBar: () => dispatch(closeSideBarCart()),
    show: () => dispatch(showOptions()),
    hide: () => dispatch(closeOptions()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileNavbar);
