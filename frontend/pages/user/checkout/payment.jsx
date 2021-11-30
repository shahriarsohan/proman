import axios from "axios";
import { withRouter } from "next/router";
import React, { Component } from "react";
import Loader from "react-spinners/HashLoader";
import { isMobile } from "react-device-detect";

import Footer from "../../../src/components/Footer/Footer";
import NavbarTwo from "../../../src/components/Navbar/NavbarTwo";
import Service from "../../../src/components/Service/Service";
import NavbarDetailsPage from "../../../src/components/Navbar/NavbarDetailsPage";
import Navigation from "../../../src/components/Navigation";

class Payment extends Component {
  state = {
    loading: true,
    error: "",
    sub_total_amount: null,
    total_amount: null,
    card_payment: false,
    baksh_payment: false,
    cash_on_delivery: false,

    agree: false,

    paymentGateWayUrl: "",
    isMobile: null,
    isBrowser: null,
  };

  componentDidMount() {
    if (isMobile) {
      this.setState({ isMobile: true, isBrowser: false });
    } else {
      this.setState({ isMobile: false, isBrowser: true });
    }
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
        "https://proman.com.bd/api/v1/orders/order-pricing-details",
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

  handlePayment = () => {
    this.setState({ loading: true });
    const config = {
      headers: {
        authorization: "Token " + localStorage.getItem("access_token"),
      },
    };

    const data = {
      dumy: 5,
    };

    axios
      .post("https://proman.com.bd/api/v1/orders/ssl-payment", data, config)
      .then((res) =>
        this.setState(
          {
            loading: false,
            paymentGateWayUrl: res.data.GatewayPageURL,
          },
          () => this.props.router.push(res.data.GatewayPageURL)
        )
      )
      .catch((err) => console.log(err));
  };

  handleCodOrder = () => {
    this.setState({ loading: true });
    const config = {
      headers: {
        authorization: "Token " + localStorage.getItem("access_token"),
      },
    };

    const data = {
      payment_method: "cash_on_delivery",
    };

    axios
      .post("https://proman.com.bd/api/v1/orders/order-confirm", data, config)
      .then((res) =>
        this.setState({ loading: false }, () => {
          this.props.router.push(
            `/user/track-order/query?=${res.data.order_qs.order_id}`
          );
        })
      )
      .catch((err) => console.log(err));
  };

  updateCardMethod = () => {
    this.setState({
      card_payment: true,
      cash_on_delivery: false,
    });
  };

  updateCodMethod = () => {
    this.setState({
      card_payment: false,
      cash_on_delivery: true,
    });
  };

  render() {
    return (
      <div>
        <NavbarDetailsPage
          // route={this.props.router.back}
          name="Payment"
          isMobile={this.state.isMobile}
        />
        {this.state.loading ? (
          <div
            style={{
              width: "100%vw",
              height: "30vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loader type="Circles" color="#00BFFF" height={80} width={80} />
          </div>
        ) : (
          <section className="shop checkout section single">
            <div className="container">
              <div className="row">
                <div className="col-md-7 col-12">
                  <div className="single-widget mt-5">
                    <h2>Select Payment Options</h2>
                    <div className="row text-center d-flex justify-content-center align-items-center p-2">
                      <div className="col-md-3 col-6 p-2">
                        <ul style={{ listStylePosition: "inside" }}>
                          <li
                            className={`p-4 ${
                              this.state.card_payment ? "active-method" : ""
                            }`}
                            style={{
                              border: "2px solid #08d9d6",
                              cursor: "pointer",
                            }}
                            onClick={this.updateCardMethod}
                          >
                            <img
                              //   width="50px"
                              //   height="50px"
                              src="/images/accept-credit-card-payments.jpg"
                              alt="bkash"
                            />
                            Online payment
                            <div
                              style={{ float: "right", display: "flex" }}
                            ></div>
                          </li>
                        </ul>
                      </div>
                      {/* <div className="col-md-3 col-6 p-2 text-center">
                      <ul style={{ listStylePosition: "inside" }}>
                        <li
                          className={`p-4 ${
                            this.state.card_payment ? "active-method" : ""
                          }`}
                          style={{
                            border: "2px solid #08d9d6",
                            cursor: "pointer",
                          }}
                          // onClick={this.handlePayment}
                        >
                          <img
                            //   width="50px"
                            //   height="50px"
                            src="https://download.logo.wine/logo/BKash/BKash-Logo.wine.png"
                            alt="bkash"
                          />
                          Pay with bkash
                          <div
                            style={{ float: "right", display: "flex" }}
                          ></div>
                        </li>
                      </ul>
                    </div> */}
                      <div className="col-md-3 col-6 p-2">
                        <ul style={{ listStylePosition: "inside" }}>
                          <li
                            onClick={this.updateCodMethod}
                            className="p-4 text-center"
                            style={{
                              border: "2px solid #08d9d6",
                              cursor: "pointer",
                            }}
                          >
                            <img
                              // width="65px"
                              // height="65px"
                              src="/images/4770613.jpg"
                              alt="bkash"
                            />
                            Cash on delivery
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-12">
                  <div className="single-widget">
                    <h2>CART TOTALS</h2>
                    <div className="content">
                      <ul>
                        <li>
                          Sub Total
                          <span>
                            <img
                              width="15px"
                              height="15px"
                              src="/images/taka.png"
                            />
                            {this.state.sub_total_amount}
                          </span>
                        </li>
                        {/* <li>
                            (+) Shipping
                            <span>${this.state.shipping_charge}</span>
                          </li> */}
                        <li className="last">
                          Total
                          <span>
                            <img
                              width="15px"
                              height="15px"
                              src="/images/taka.png"
                            />
                            {this.state.total_amount}
                          </span>
                        </li>
                      </ul>
                      <div className="single-widget payement p-4">
                        <div className="content">
                          <img src="/images/ssl-logo-1.png" alt="#" />
                        </div>
                      </div>
                    </div>

                    {this.state.cash_on_delivery ? (
                      <div className="single-widget get-button">
                        <div className="content">
                          <div className="button">
                            <button
                              onClick={this.handleCodOrder}
                              // disabled={!this.state.agree}
                              className="btn"
                            >
                              Confirm Order
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="single-widget get-button">
                        <div className="content">
                          <div className="button">
                            {/* <button
                              // onClick={this.handlePayment}
                              disabled={!this.state.card_payment}
                              className="btn btn-warning"
                            > */}
                            <p className="text-danger">
                              Currently not accepting
                            </p>
                            {/* </button> */}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <Service />
        <Footer />
        <Navigation />
      </div>
    );
  }
}
export default withRouter(Payment);
