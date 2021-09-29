import React, { Component } from "react";
import axios from "axios";

import NavbarTwo from "../../src/components/Navbar/NavbarTwo";
import Footer from "../../src/components/Footer/Footer";
import Newsletter from "../../src/components/NewsLetter/NewsLetter";
import Service from "../../src/components/Service/Service";
import { isMobile } from "react-device-detect";
import LoadingOverlay from "react-loading-overlay";
import HashLoader from "react-spinners/HashLoader";

import { Checkbox } from "semantic-ui-react";
import { connect } from "react-redux";
import {
  fetchUserOrder,
  handleDeleteFromCart,
  fetchUserCartPricing,
} from "../../src/store/actions/cart";
import Link from "next/link";
import NavbarDetailsPage from "../../src/components/Navbar/NavbarDetailsPage";
import Navigation from "../../src/components/Navigation";
import { withRouter } from "next/router";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coupon: "",
      couponActivated: false,
      couponActivatedError: false,
      isMobile: null,
      isBrowser: null,
    };
    this.setState({ coupon: "" });
  }

  componentDidMount() {
    this.props.fetchUserCartPricing();
    if (isMobile) {
      this.setState({ isMobile: true, isBrowser: false });
    } else {
      this.setState({ isMobile: false, isBrowser: true });
    }
  }

  handleDelete = (id) => {
    const data = {
      id: id,
    };
    this.props.handleDeleteFromCart(data);
    this.props.fetchUserCartPricing();
  };

  handleChange = (item) => {
    const config = {
      headers: {
        authorization: "Token " + localStorage.getItem("access_token"),
      },
    };

    axios
      .post("http://127.0.0.1:8000/v1/cart/add-to-order-item", item, config)
      .then((res) => {
        //console.log(res);
      })
      .catch((err) => console.log(err.response.data));
  };

  handleChange = (e) => {
    // //console.log(e.target.value)
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        authorization: "Token " + localStorage.getItem("access_token"),
      },
    };
    const data = {
      coupon: this.state.coupon,
    };
    axios
      .post("http://127.0.0.1:8000/v1/coupon/validate-coupon", data, config)
      .then((res) => {
        //console.log(res.data);
        this.setState({ couponActivated: true }, () =>
          this.props.fetchUserCartPricing()
        );
      })
      .catch((err) =>
        this.setState({
          couponActivatedError: true,
        })
      );
  };

  handlePayment = () => {};

  render() {
    const { cart } = this.props;
    //console.log(cart);
    return (
      <>
        <NavbarDetailsPage
          route={this.props.router.back}
          name="Cart"
          isMobile={this.state.isMobile}
        />
        <div className="container">
          {/* Shopping Summery */}
          <div className="row mb-2">
            <div className="col-md-8">
              <div className="cart_wrapper pt-3 mt-5">
                {cart.length !== 0 ? (
                  <div className="cart_lists">
                    <div className="cart_title">
                      <i class="fas fa-shopping-basket"></i>
                      Your Shopping Cart
                    </div>
                    <div className="cart_list_wrap">
                      <div>
                        <LoadingOverlay
                          active={
                            this.props.loading || this.props.pricingLoader
                          }
                          spinner={<HashLoader color="#08d9d6" />}
                        ></LoadingOverlay>
                      </div>

                      <div className="cart_responsive">
                        {cart.map((item) => {
                          return (
                            <div className="tr_item">
                              <div className="td_item item_img">
                                <img src={`${item.product.thumbnail}`} />
                              </div>
                              <div className="td_item item_name">
                                <label
                                  style={{
                                    textTransform: "capitalize",
                                    fontFamily: "Ubuntu",
                                  }}
                                  className="main"
                                >
                                  <Link href={`/details/${item.product.slug}`}>
                                    {item.product.name}
                                  </Link>
                                </label>
                                {/* <label className="sub">Ref. 007891987</label> */}
                              </div>
                              <div className="td_item item_color">
                                <label>Qty :{item.quantity} </label>
                              </div>

                              <div
                                style={{ textTransform: "uppercase" }}
                                className="td_item item_color"
                              >
                                <label>
                                  <strong>{item.size}</strong>
                                </label>
                              </div>
                              {item.product.discount_price ? (
                                <div className="td_item item_price">
                                  <label>
                                    {" "}
                                    <img
                                      width="15px"
                                      height="15px"
                                      src="/images/taka.png"
                                    />{" "}
                                    {item.product.discount_price *
                                      item.quantity}
                                  </label>
                                </div>
                              ) : (
                                <div className="td_item item_price">
                                  <label>
                                    <img
                                      width="15px"
                                      height="15px"
                                      src="/images/taka.png"
                                    />
                                    {item.product.price * item.quantity}
                                  </label>
                                </div>
                              )}
                              <div className="td_item item_remove">
                                <span
                                  onClick={() => this.handleDelete(item.id)}
                                  className="material-icons"
                                >
                                  close
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="footer-cart">
                        <div className="back_cart">
                          <Link href="/shop/all">
                            <a>
                              <span className="material-icons">west</span>
                              Back to Shop
                            </a>
                          </Link>
                        </div>
                        <div className="subtotal">
                          <strong>
                            Total ={" "}
                            <img
                              width="15px"
                              height="15px"
                              src="/images/taka.png"
                            />
                            {this.props.cart_total}
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="empty-cart">
                    <img src="/images/empty-cart.png" />
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="right">
                <ul>
                  <li></li>

                  <li>
                    Cart Total
                    <span>
                      <img width="15px" height="15px" src="/images/taka.png" />
                      {this.props.total}.00
                    </span>
                  </li>
                  <li>
                    Discount
                    <span>
                      {" "}
                      <img width="15px" height="15px" src="/images/taka.png" />-
                      {this.props.total_saving}.00
                    </span>
                  </li>
                  <li>
                    Sub Total
                    <span>
                      {" "}
                      <img width="15px" height="15px" src="/images/taka.png" />
                      {this.props.cart_total}.00
                    </span>
                  </li>
                  {/* <li>
                    You Save<span>$20.00</span>
                  </li>
                  <li>
                    You Save<span>$20.00</span>
                  </li> */}
                  <h5
                    style={{
                      padding: "10px",
                      textAlign: "center",
                      fontFamily: "Ubuntu",
                      color: "green",
                      fontWeight: "600",
                      justifyContent: "center",
                    }}
                  >
                    You saved{" "}
                    <img width="15px" height="15px" src="/images/taka.png" />
                    {this.props.total_saving}
                  </h5>
                  <li className="last">
                    You Pay
                    <span>
                      <img width="15px" height="15px" src="/images/taka.png" />
                      {this.props.cart_total}
                    </span>
                  </li>
                </ul>
                <div className="d-flex">
                  <div className="d-flex">
                    <form
                      className="d-flex justify-content-center align-items-center coupon-input"
                      onSubmit={this.handleSubmit}
                    >
                      <input
                        name="Coupon"
                        className="form-control"
                        onChange={this.handleChange}
                        name="coupon"
                        value={this.state.coupon}
                        placeholder="Enter Your Coupon"
                      />
                      <button
                        type="submit"
                        className="btn-2 success-2 hover-right-2"
                      >
                        Apply Now
                      </button>
                    </form>
                  </div>
                </div>
                {this.state.couponActivated && (
                  <div className="coupon-activated">
                    <img
                      width="30px"
                      height="30px"
                      src="/images/grinning.png"
                      alt="success"
                    />
                    <h4>Yeee! Coupon Activated</h4>
                  </div>
                )}

                {this.state.couponActivatedError && (
                  <div className="coupon-activation-error">
                    <img
                      width="30px"
                      height="30px"
                      src="/images/face.png"
                      alt="success"
                    />
                    <h4>Crap! Used Already</h4>
                  </div>
                )}

                <div className="button5">
                  <a href="/user/checkout" className="btn">
                    Checkout
                  </a>
                  <Link href="/shop/all">
                    <a className="btn">Continue shopping</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Service />
        <Newsletter />
        <Footer />
        <Navigation />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state.cart);
  return {
    cart: state.cart.data,
    loading: state.cart.loading,
    error: state.cart.error,
    total: state.cart.actual_total,
    total_saving: state.cart.total_saving,
    cart_total: state.cart.cart_total,
    pricingLoader: state.cart.pricingLoader,
  };
};

export default withRouter(
  connect(mapStateToProps, {
    fetchUserOrder,
    handleDeleteFromCart,
    fetchUserCartPricing,
  })(Cart)
);
