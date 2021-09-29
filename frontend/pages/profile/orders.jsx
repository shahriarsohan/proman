import Link from "next/link";
import { withRouter } from "next/router";
import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import HashLoader from "react-spinners/HashLoader";

import "semantic-ui-css/semantic.min.css";

import {
  Form,
  Input,
  TextArea,
  Button,
  Select,
  List,
  Segment,
  Image,
  Label,
} from "semantic-ui-react";
import axiosInstance from "../../src/api/axios";

import Footer from "../../src/components/Footer/Footer";
import Services from "../../src/components/Service/Service";
import Navigation from "../../src/components/Navigation";

import NavbarDetailsPage from "../../src/components/Navbar/NavbarDetailsPage";
import LoadingOverlay from "react-loading-overlay";

class Order extends Component {
  state = {
    isMobile: null,
    isBrowser: null,
    userOrder: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.getUserOrders();
    if (isMobile) {
      this.setState({ isMobile: true, isBrowser: false });
    } else {
      this.setState({ isMobile: false, isBrowser: true });
    }
    if (typeof window !== "undefined") {
      var token = localStorage.getItem("access_token");
    }
    if (!token) {
      this.props.router.push({
        pathname: "/user/login/",
        query: {
          redirectURL: this.props.router.asPath,
        },
        asPath: "main",
      });
    }
  }

  getUserOrders = () => {
    this.setState({ loading: true });
    axiosInstance
      .get("/orders/user-order")
      .then((res) => {
        this.setState({
          loading: false,
          userOrder: res.data,
        });
      })
      .catch((err) => {
        this.setState({
          err: err.response.data,
          loading: false,
        });
      });
  };

  render() {
    return (
      <div>
        <NavbarDetailsPage
          route={this.props.router.back}
          name="Account Overview"
          isMobile={this.state.isMobile}
        />
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 mt-5">
              <Segment className="mt-5">
                <List divided relaxed>
                  <List.Item>
                    <div className="p-2">
                      <Link href="/profile/overview">Account Overview</Link>
                    </div>
                  </List.Item>
                  <List.Item>
                    <div className="p-2">
                      <Link href="/profile/address">Address Book</Link>
                    </div>
                  </List.Item>
                  <List.Item>
                    <div className="p-2">
                      <Link href="/profile/orders">My Orders</Link>
                    </div>
                  </List.Item>
                  <List.Item>
                    <div className="p-2">
                      <Link href="/profile/wishlist">My Wishlist</Link>
                    </div>
                  </List.Item>
                  <List.Item>
                    <div className="p-2">
                      <Link href="/profile/cancellations">
                        My Cancellations
                      </Link>
                    </div>
                  </List.Item>
                  <List.Item>
                    <div className="p-2">
                      <Link href="/profile/review">My Review</Link>
                    </div>
                  </List.Item>
                </List>
              </Segment>
            </div>

            <div className="col-md-8 col-sm-12 mt-5 option-list">
              <div className="profile-section">
                {/* <div className="user-info"> */}

                <div className="cart_list_wrap">
                  <LoadingOverlay
                    active={this.state.loading}
                    spinner={<HashLoader color="#08d9d6" />}
                  ></LoadingOverlay>
                  {this.state.userOrder
                    ? this.state.userOrder.map((order) => {
                        return (
                          <div className="orders">
                            <div className="order">
                              <div className="order-info-head">
                                <div className="order-id">
                                  <p style={{ textTransform: "uppercase" }}>
                                    Order #{order.order_id}
                                  </p>
                                  <p className="order-date">
                                    Placed on {order.ordered_date}
                                  </p>
                                </div>
                                <Link
                                  href={`/user/track-order/query?=${order.order_id}`}
                                >
                                  <div className="order-status">
                                    Track Order
                                  </div>
                                </Link>
                              </div>
                              <hr />
                              <div className="order-cart-items">
                                {order.products.cart.map((cart) => {
                                  return (
                                    <div className="order-cart-item">
                                      <div className="cart-item-info">
                                        <img
                                          width="50px"
                                          height="50px"
                                          src={`${cart.product.thumbnail}`}
                                        />
                                        <p className="cart-item-info__name">
                                          <Link
                                            href={`/details/${cart.product.slug}`}
                                          >
                                            {cart.product.name}
                                          </Link>
                                        </p>
                                        <p className="cart-item-info__size">
                                          {cart.size}
                                        </p>
                                        <p>{cart.quantity}</p>
                                        {cart.product.discount_price ? (
                                          <>
                                            <span>
                                              <img
                                                width="15px"
                                                height="15px"
                                                src="/images/taka.png"
                                              />
                                              {cart.product.discount_price}
                                            </span>
                                          </>
                                        ) : (
                                          cart.product.price
                                        )}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Services />
        <Footer />
        <Navigation />
      </div>
    );
  }
}

export default withRouter(Order);
