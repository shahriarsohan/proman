import React, { Component } from "react";
import axios from "axios";

import NavbarTwo from "../../src/components/Navbar/NavbarTwo";
import Footer from "../../src/components/Footer/Footer";
import Newsletter from "../../src/components/NewsLetter/NewsLetter";
import Service from "../../src/components/Service/Service";

import { Checkbox } from "semantic-ui-react";
import { connect } from "react-redux";
import {
  fetchUserOrder,
  handleDeleteFromCart,
  fetchUserCartPricing,
} from "../../src/store/actions/cart";

class Cart extends Component {
  state = {
    coupon: "",
  };

  componentDidMount() {
    this.props.fetchUserCartPricing();
  }

  handleChange = (item) => {
    const config = {
      headers: {
        authorization: "Token " + localStorage.getItem("access_token"),
      },
    };

    axios
      .post("http://127.0.0.1:8000/v1/cart/add-to-order-item", item, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.response.data));
  };

  handleChange = (e) => {
    // console.log(e.target.value)
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
        console.log(res.data);
        this.props.fetchUserCartPricing();
      });
  };

  handlePayment = () => {};

  render() {
    const { cart } = this.props;
    console.log(this.state.coupon);
    return (
      <>
        <NavbarTwo />
        <div className="container">
          {/* Shopping Summery */}
          <div className="row mt-2 mb-2">
            <div className="col-md-8">
              <div className="cart_wrapper">
                <div className="cart_lists">
                  <div className="cart_title">
                    <span className="material-icons-outlined">local_mall</span>
                    Your Shopping Cart
                  </div>
                  <div className="cart_list_wrap">
                    <div className="cart_responsive">
                      {this.props.cart.map((item) => {
                        return (
                          <div className="tr_item">
                            <div className="td_item item_img">
                              <img src="https://i.ibb.co/vQHXcYb/b68912b3426baa0b1f4c410a02174879.jpg" />
                            </div>
                            <div className="td_item item_name">
                              <label className="main">
                                {item.product.name}
                              </label>
                              <label className="sub">Ref. 007891987</label>
                            </div>
                            <div className="td_item item_color">
                              <label>Blue</label>
                            </div>
                            {/* <div className="td_item item_qty">
                        <select>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value="more">More</option>
                        </select>
                      </div> */}
                            <div className="td_item item_color">
                              <label>Blue</label>
                            </div>
                            {item.product.discount_price ? (
                              <div className="td_item item_price">
                                <label>$ {item.product.discount_price}</label>
                              </div>
                            ) : (
                              <div className="td_item item_price">
                                <label>$ {item.product.price}</label>
                              </div>
                            )}
                            <div className="td_item item_remove">
                              <span className="material-icons">close</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="footer-cart">
                      <div className="back_cart">
                        <a href="#back">
                          <span className="material-icons">west</span>
                          Back to Shop
                        </a>
                      </div>
                      <div className="subtotal">
                        <label>Subtotal: </label>
                        <strong>$2451.00</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="right">
                <ul>
                  <li></li>
                  <li>
                    Shipping<span>Free</span>
                  </li>
                  <li>
                    You Save<span>$20.00</span>
                  </li>
                  <li>
                    You Save<span>$20.00</span>
                  </li>
                  <li>
                    You Save<span>$20.00</span>
                  </li>
                  <li>
                    You Save<span>$20.00</span>
                  </li>
                  <li>
                    You Save<span>$20.00</span>
                  </li>

                  <li className="last">
                    You Pay<span>${this.props.total}</span>
                  </li>
                </ul>
                <div className="d-flex">
                  <div className="d-flex  ">
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

                <div className="button5">
                  <a href="/user/checkout" className="btn">
                    Checkout
                  </a>
                  <a href="#" className="btn">
                    Continue shopping
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Service />
        <Newsletter />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.data,
    loading: state.cart.loading,
    error: state.cart.error,
    total: state.cart.total_price,
  };
};

export default connect(mapStateToProps, {
  fetchUserOrder,
  handleDeleteFromCart,
  fetchUserCartPricing,
})(Cart);
