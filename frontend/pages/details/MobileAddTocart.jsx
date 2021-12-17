import { Component } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import Image from "next/image";

class MobileAddToCart extends Component {
  render() {
    //console.log(this.props.sidebar);
    const {
      token,
      redirectToLogin,
      onSubmitCart,
      slug,
      handleAddToWish,
      size,
    } = this.props;
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
            <button
              onClick={
                token === null
                  ? () => redirectToLogin()
                  : () => handleAddToWish(slug)
              }
              style={{
                width: "44px",
                // height: "44px",
                fontSize: "16px",
                lineHeight: "31px",
              }}
              className="details-wishlist"
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image
                  src="/images/bookmark.png"
                  height="30px"
                  width="30px"
                ></Image>
              </div>
            </button>
            <button
              onClick={
                token === null
                  ? () => redirectToLogin()
                  : () => onSubmitCart(slug, size)
              }
              className="add-to-cart-mobile"
            >
              ADD TO CART
            </button>
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

export default connect(mapStateToProps)(MobileAddToCart);
