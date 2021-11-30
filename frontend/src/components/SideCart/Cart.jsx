import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import Link from "next/link";
import HashLoader from "react-spinners/HashLoader";
import { withAlert } from "react-alert";

import { fetchUserOrder, handleDeleteFromCart } from "../../store/actions/cart";

import LoadingOverlay from "react-loading-overlay";
import axios from "../../api/axios";
import { closeSideBarCart } from "../../store/actions/cartSideBar";

class Cart extends Component {
  state = {
    sub_total_amount: 0,
    shipping_charge: 0,
    total_amount: 0,
    loading: false,
  };

  componentDidMount() {
    // console.log(this.props.alert);
    this.props.fetchCart();
    // this.getOrderPricing();
  }

  handleDelete = (id) => {
    const data = {
      id: id,
      alert: this.props.alert,
    };
    this.props.deleteItem(data);
  };

  plusQuantity = (id) => {
    this.setState({
      loading: true,
    });
    const data = {
      id: id,
    };
    axios
      .post("/cart/plus-quantity", data)
      .then((res) =>
        this.setState(
          {
            loading: false,
          },
          this.props.fetchCart()
        )
      )
      .catch((err) => console.log(err));
  };

  minusQuantity = (id) => {
    this.setState({
      loading: true,
    });
    const data = {
      id: id,
    };
    axios
      .post("/cart/minus-quantity", data)
      .then((res) =>
        this.setState(
          {
            loading: false,
          },
          this.props.fetchCart()
        )
      )
      .catch((err) => console.log(err));
  };

  render() {
    //console.log(this.props.cart);

    //console.log(this.props.authError);
    return (
      <>
        <div className="show-sidebar-cart">
          <aside id="sidebar-cart">
            <main>
              <a onClick={this.props.close} className="close-button">
                <span>X</span>
              </a>
              <h2>Shopping Bag</h2>
              {/* {this.props.loading && ( */}
              <div>
                <LoadingOverlay
                  active={
                    this.props.loading ||
                    this.props.pricingLoader ||
                    this.state.loading
                  }
                  spinner={<HashLoader />}
                ></LoadingOverlay>
              </div>

              {/* )} */}
              {this.props.authError === "false" ? (
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
                      //console.log(c.product.thumbnail);
                      return (
                        <li className="product">
                          <a href="#" className="product-link">
                            <span className="product-image">
                              <img
                                src={
                                  c.product.thumbnail
                                    ? `${c.product.thumbnail}`
                                    : "https://via.placeholder.com/70x70"
                                }
                                alt="#"
                              />
                            </span>
                            <span className="product-details">
                              <h3>{c.product.name}</h3>
                              <span className="qty-price">
                                <span className="qty">
                                  <button
                                    className="minus-button"
                                    disabled={c.quantity === 1 ? true : false}
                                    onClick={() => this.minusQuantity(c.id)}
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
                                    value={c.quantity}
                                    pattern="[0-9]*"
                                    title="Quantity"
                                    inputMode="numeric"
                                    disabled
                                  />
                                  <button
                                    disabled={c.quantity === 6 ? true : false}
                                    className="plus-button"
                                    onClick={() => this.plusQuantity(c.id)}
                                  >
                                    +
                                  </button>
                                </span>
                                <span className="price">
                                  <img
                                    width="15px"
                                    height="15px"
                                    src="/images/taka.png"
                                  />
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
                        ${this.props.sub_total_amount}
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
    loading: state.cart.loading,
    pricingLoader: state.cart.pricingLoader,
    authError: state.cart.data.msg,
    sub_total_amount: state.cart.cart_total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: () => dispatch(fetchUserOrder()),
    deleteItem: (data) => dispatch(handleDeleteFromCart(data)),
    closeSideCart: () => dispatch(closeSideBarCart()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(withAlert()(Cart))
);
