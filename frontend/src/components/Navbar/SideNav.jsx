import { withRouter } from "next/router";
import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../store/actions/auth";
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
        <div className="sideNav-welcome-text">
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
        <hr />
        <div className="main-cat">
          <h4>Shop</h4>

          <div className="mobile-sidebar">
            <ul className="sidebar-items">
              <Link href="/about-us/our-story">
                <a>About</a>
              </Link>
              <a>Services</a>
              <a>Clients</a>
              <Link href="/contact-us">
                <a>Contact</a>
              </Link>
              <div className="dropdown-button">
                <a
                  onClick={() =>
                    this.setState({ openDropdown: !this.state.openDropdown })
                  }
                >
                  Dropdown
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
                <a>Link 1</a>
                <a>Link 2</a>
                <a>Link 3</a>
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

export default withRouter(connect(mapStateToProps, { logout })(SideNav));
