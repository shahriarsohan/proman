import { Component } from "react";
import { connect } from "react-redux";
import { Button, Nav } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { closeSideBar, openSideBar } from "../store/actions/sideBar";

class Navigation extends Component {
  render() {
    console.log(this.props.sidebar);
    return (
      <div className="d-block d-sm-block d-md-none d-lg-none">
        <nav className="mobile-bottom-nav">
          <div className="mobile-bottom-nav__item mobile-bottom-nav__item">
            <Link href="/">
              <div className="mobile-bottom-nav__item-content">
                <i className="material-icons">home</i>
              </div>
            </Link>
          </div>
          <div className="mobile-bottom-nav__item">
            <Link href="/">
              <div className="mobile-bottom-nav__item-content">
                <i className="material-icons">accessibility</i>
              </div>
            </Link>
          </div>
          <div
            style={{ background: "#39a6a3", borderRadius: "20px" }}
            className="mobile-bottom-nav__item"
          >
            <Link href="/">
              <div className="mobile-bottom-nav__item-content">
                <i
                  style={{ borderRadius: "20px", fontSize: "30px" }}
                  className="material-icons"
                >
                  campaign
                </i>
              </div>
            </Link>
          </div>
          <div className="mobile-bottom-nav__item">
            <Link href="/user/cart">
              <div className="mobile-bottom-nav__item-content">
                <i className="material-icons">shopping_cart</i>
              </div>
            </Link>
          </div>
          {this.props.sidebar ? (
            <div className="mobile-bottom-nav__item">
              <div
                onClick={this.props.openSideBar}
                className="mobile-bottom-nav__item-content"
              >
                <i class="material-icons">close</i>
              </div>
            </div>
          ) : (
            <div className="mobile-bottom-nav__item">
              <div
                onClick={this.props.closeSideBar}
                className="mobile-bottom-nav__item-content"
              >
                <i class="material-icons">apps</i>
              </div>
            </div>
          )}
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar.sideOpen,
  };
};

export default connect(mapStateToProps, { openSideBar, closeSideBar })(
  Navigation
);
