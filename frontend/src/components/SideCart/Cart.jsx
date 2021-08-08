import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import Link from "next/link";

import { fetchUserOrder, handleDeleteFromCart } from "../../store/actions/cart";
import axios from "axios";

import LoginModal from "../LoginModal/login";

class Cart extends Component {
  state = {
    sub_total_amount: 0,
    shipping_charge: 0,
    total_amount: 0,
  };

  componentDidMount() {
    this.props.fetchCart();
    this.getOrderPricing();
  }

  getOrderPricing = () => {
    this.setState({ loading: true });
    const config = {
      headers: {
        authorization: "Token " + localStorage.getItem("access_token"),
      },
    };
    const data = {
      some: "thing",
    };
    axios
      .post(
        "http://192.168.0.8:8000/v1/orders/order-pricing-details",
        data,
        config
      )
      .then((res) =>
        this.setState({
          loading: false,
          sub_total_amount: res.data.order_sub_total,
          total_amount: res.data.total_amount,
          shipping_charge: res.data.shipping_charge,
        })
      )
      .catch((err) => console.log(err));
  };

  handleDelete = (id) => {
    const data = {
      id: id,
    };
    this.props.deleteItem(data);
    this.getOrderPricing();
  };

  render() {
    console.log(this.props.router.asPath);

    const token = localStorage.getItem("access_token");
    console.log(token);
    return (
      <>
        <div className="show-sidebar-cart">
          <aside id="sidebar-cart">
            <main>
              <a onClick={this.props.close} className="close-button">
                <span>X</span>
              </a>
              <h2>
                Shopping Bag <span className="count">2</span>
              </h2>
              {!token ? (
                // <div className="img-align">
                <button
                  onClick={() =>
                    this.props.router.push({
                      pathname: "/user/login/",
                      query: {
                        redirectURL: this.props.router.asPath,
                      },
                      asPath: "main",
                    })
                  }
                  className="btn"
                >
                  Login
                </button>
              ) : // </div>
              this.props.cart.length === 0 ? (
                <div className="img-align">
                  <img
                    width="150px"
                    height="150px"
                    src={"/images/undraw_feeling_blue_4b7q.svg"}
                  />
                </div>
              ) : (
                <div>
                  <ul className="products">
                    {this.props.cart.map((c) => {
                      return (
                        <li className="product">
                          <a href="#" className="product-link">
                            <span className="product-image">
                              <img
                                src={
                                  c.product.thumbnail
                                    ? `http://192.168.0.8:8000${c.product.thumbnail}`
                                    : "https://via.placeholder.com/70x70"
                                }
                                alt="#"
                              />
                            </span>
                            <span className="product-details">
                              <h3>{c.product.name}</h3>
                              <span className="qty-price">
                                <span className="qty">
                                  <form name="qty-form" id="qty-form-1">
                                    <button
                                      className="minus-button"
                                      id="minus-button-1"
                                      onClick={() => console.log("minus")}
                                    >
                                      -
                                    </button>
                                    <input
                                      type="number"
                                      id="qty-input-3"
                                      className="qty-input"
                                      step={1}
                                      min={1}
                                      max={1000}
                                      name="qty-input"
                                      defaultValue={c.quantity}
                                      pattern="[0-9]*"
                                      title="Quantity"
                                      inputMode="numeric"
                                    />
                                    <button
                                      className="plus-button"
                                      id="plus-button-1"
                                      onClick={() => console.log("plus")}
                                    >
                                      +
                                    </button>
                                    <input
                                      type="hidden"
                                      name="item-price"
                                      id="item-price-3"
                                      defaultValue={12.0}
                                    />
                                  </form>
                                </span>
                                <span className="price">
                                  $
                                  {c.product.discount_price
                                    ? c.product.discount_price
                                    : c.product.price}
                                </span>
                              </span>
                            </span>
                          </a>
                          <a
                            onClick={() => {
                              this.handleDelete(c.id);
                            }}
                            className="remove-button"
                          >
                            <span className="remove-icon">X</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="totals">
                    <div className="subtotal">
                      <span className="label">Subtotal:</span>{" "}
                      <span className="amount">
                        ${this.state.sub_total_amount}
                      </span>
                    </div>
                    {/* <div class="shipping">
                   <span class="label">Shipping:</span> <span class="amount">$7.95</span>
               </div>
               <div class="tax">
                   <span class="label">Tax:</span> <span class="amount">$71.95</span>
               </div> */}
                  </div>
                  <div className="action-buttons">
                    <Link href="/user/cart">
                      <a className="view-cart-button">Cart</a>
                    </Link>
                    <Link href="/user/checkout">
                      <a className="checkout-button">Checkout</a>
                    </Link>
                  </div>
                </div>
              )}
            </main>
          </aside>
          <div id="sidebar-cart-curtain" />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: () => dispatch(fetchUserOrder()),
    deleteItem: (data) => dispatch(handleDeleteFromCart(data)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
