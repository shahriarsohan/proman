import { withRouter } from "next/router";
import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../store/actions/auth";
import { closeSideBar, openSideBar } from "../../store/actions/sideBar";

import Link from "next/link";

class SideNav extends Component {
  state = { openDropdown: false };

  render() {
    //console.log(this.props.isAuthenticated);
    return (
      <div
        style={{ width: "250px", display: "flex", flexDirection: "column" }}
        id="mySidenav"
        className="sidenav"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="d-flex"
        >
          <div className="sideNav-welcome-text">
            <div>
              <h4>Welcome</h4>
              {!this.props.isAuthenticated ? (
                <p
                  onClick={() =>
                    this.props.router.push({
                      pathname: "/user/login/",
                      query: {
                        redirectURL: this.props.router.asPath,
                      },
                      asPath: "main",
                    })
                  }
                >
                  Login/Signup
                </p>
              ) : (
                <p onClick={() => this.props.logout()}>Logout</p>
              )}
            </div>
          </div>
          <div className="sidebar-close">
            <button onClick={this.props.closeSideBar}>
              <img width="30px" height="30px" src="/images/close-2.png" />
            </button>
          </div>
        </div>

        <hr />
        <div className="main-cat">
          <h4>Shop</h4>

          <div className="mobile-sidebar">
            <ul className="sidebar-items">
              <Link href="/about-us/our-story">
                <a>Trending</a>
              </Link>
              <a>Best Selling</a>
              <a>Featured</a>
              <Link href="/contact-us">
                <a>Daily Deal</a>
              </Link>
              <div className="dropdown-button">
                <a
                  onClick={() =>
                    this.setState({ openDropdown: !this.state.openDropdown })
                  }
                >
                  Categories
                </a>
                <i class="fa fa-caret-down"></i>
              </div>

              <div
                class={
                  this.state.openDropdown
                    ? "dropdown1-container-active"
                    : "dropdown1-container"
                }
              >
                <Link href={`/shop/filter/products?cat=Movie`}>
                  <div className="mobile-sidebar-categories">
                    <a>Movie</a>
                    <img width="30px" height="15px" src="/images/gun.png" />
                  </div>
                </Link>
                <Link href={`/shop/filter/products?cat=Game`}>
                  <div className="mobile-sidebar-categories">
                    <a>Game</a>
                    <img
                      width="30px"
                      height="15px"
                      src="/images/game-controller.png"
                    />
                  </div>
                </Link>
                <Link href={`/shop/filter/products?cat=Life`}>
                  <div className="mobile-sidebar-categories">
                    <a>Life</a>
                    <img width="30px" height="15px" src="/images/heart.png" />
                  </div>
                </Link>
                <Link href={`/shop/filter/products?cat=Sports`}>
                  <div className="mobile-sidebar-categories">
                    <a>Sports</a>
                    <img width="30px" height="15px" src="/images/game.png" />
                  </div>
                </Link>
                <Link href={`/shop/filter/products?cat=Trend`}>
                  <div className="mobile-sidebar-categories">
                    <a>Trend</a>
                    <img
                      width="30px"
                      height="15px"
                      src="/images/trending-topic.png"
                    />
                  </div>
                </Link>
                <Link href={`/shop/filter/products?cat=Programming`}>
                  <div className="mobile-sidebar-categories">
                    <a>Programming</a>
                    <img width="30px" height="15px" src="/images/code.png" />
                  </div>
                </Link>
                {/* <a>Game</a>
                <a>Life</a>
                <a>Sports</a>
                <a>Trend</a>
                <a>Programming</a> */}
              </div>
              <a>Search</a>
            </ul>
          </div>
        </div>

        <div className="main-cat">
          <h4>Contact us</h4>

          <div className="mobile-sidebar">
            <ul className="sidebar-items">
              <a>Clients</a>
              <a>Contact</a>
              <div className="dropdown-button">
                <a>Dropdown</a>
                <i class="fa fa-caret-down"></i>
              </div>

              <div
                class={
                  this.state.openDropdown
                    ? "dropdown1-container-active"
                    : "dropdown1-container"
                }
              >
                <a>Link 1</a>
                <a>Link 2</a>
                <a>Link 3</a>
              </div>
              <a>Search</a>
            </ul>
          </div>
        </div>

        <div className="sidebar-social-icon">
          <a href="">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default withRouter(
  connect(mapStateToProps, { logout, openSideBar, closeSideBar })(SideNav)
);
