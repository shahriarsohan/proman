import axios from "axios";
import React, { Component } from "react";
import Footer from "../../../src/components/Footer/Footer";
import NavbarTwo from "../../../src/components/Navbar/NavbarTwo";
import Service from "../../../src/components/Service/Service";

class Payment extends Component {
  state = {
    loading: false,
    error: "",
    sub_total_amount: null,
    total_amount: null,
  };

  componentDidMount() {
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
        "http://127.0.0.1:8000/v1/orders/order-pricing-details",
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

  render() {
    return (
      <div>
        <NavbarTwo />

        <section className="shop checkout section container p-4">
          <div className="row">
            <div className="col-md-7 col-12">
              <div className="single-widget">
                <h2>Select Payment Options</h2>
                <div className="row text-center d-flex justify-content-center align-items-center p-2">
                  <div className="col-md-3 col-6 p-2">
                    <ul style={{ listStylePosition: "inside" }}>
                      <li className="p-4" style={{ border: "2px solid red" }}>
                        <img
                          //   width="50px"
                          //   height="50px"
                          src="https://www.paytheory.com/wp-content/uploads/2021/06/accept-credit-card-payments.jpg"
                          alt="bkash"
                        />
                        Card payment
                        <div style={{ float: "right", display: "flex" }}></div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3 col-6 p-2 text-center">
                    <ul style={{ listStylePosition: "inside" }}>
                      <li className="p-4" style={{ border: "2px solid red" }}>
                        <img
                          //   width="50px"
                          //   height="50px"
                          src="https://download.logo.wine/logo/BKash/BKash-Logo.wine.png"
                          alt="bkash"
                        />
                        Pay with bkash
                        <div style={{ float: "right", display: "flex" }}></div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3 col-12 p-2">
                    <ul style={{ listStylePosition: "inside" }}>
                      <li
                        className="p-4 text-center"
                        style={{ border: "2px solid red" }}
                      >
                        <img
                          //   width="50px"
                          //   height="50px"
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
                      Sub Total<span>${this.state.sub_total_amount}</span>
                    </li>
                    {/* <li>
                            (+) Shipping
                            <span>${this.state.shipping_charge}</span>
                          </li> */}
                    <li className="last">
                      Total
                      <span>${this.state.total_amount}</span>
                    </li>
                  </ul>
                </div>
                <div className="single-widget get-button">
                  <div className="content">
                    <div className="button">
                      <a onClick={this.handlePayment} href="#" className="btn">
                        Procced to payment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Service />
        <Footer />
      </div>
    );
  }
}
export default Payment;
