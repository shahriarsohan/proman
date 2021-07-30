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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <nav className="mobile-bottom-nav">
            <div className="mobile-bottom-nav__item mobile-bottom-nav__item">
              <Link href="/">
                <div className="mobile-bottom-nav__item-content">
                  <img
                    width="30px"
                    height="30px"
                    src="/images/home.png"
                    alt=""
                  />
                </div>
              </Link>
            </div>
            <div className="mobile-bottom-nav__item">
              <Link href="/">
                <div className="mobile-bottom-nav__item-content">
                  <img
                    width="30px"
                    height="30px"
                    src="/images/shop.png"
                    alt=""
                  />
                </div>
              </Link>
            </div>
            <div className="mobile-bottom-nav__item">
              <Link href="/">
                <div className="mobile-bottom-nav__item-content">
                  <img
                    width="30px"
                    height="30px"
                    src="/images/sale-promotion.png"
                    alt=""
                  />
                </div>
              </Link>
            </div>
            <div className="mobile-bottom-nav__item">
              <Link href="/user/cart">
                <div className="mobile-bottom-nav__item-content">
                  <img
                    width="30px"
                    height="30px"
                    src="/images/cart.png"
                    alt=""
                  />
                </div>
              </Link>
            </div>
            {this.props.sidebar ? (
              <div className="mobile-bottom-nav__item">
                <div
                  onClick={this.props.openSideBar}
                  className="mobile-bottom-nav__item-content"
                >
                  <img
                    width="30px"
                    height="30px"
                    src="/images/hide.png"
                    alt=""
                  />
                </div>
              </div>
            ) : (
              <div className="mobile-bottom-nav__item">
                <div
                  onClick={this.props.closeSideBar}
                  className="mobile-bottom-nav__item-content"
                >
                  <img
                    width="30px"
                    height="30px"
                    src="/images/show.png"
                    alt=""
                  />
                </div>
              </div>
            )}
          </nav>
        </div>
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
