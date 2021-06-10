import React, { Component } from "react";
import { Button, Form, Checkbox, Message } from "semantic-ui-react";
import axios from "axios";

import { withRouter } from "next/router";
import { Formik, Field } from "formik";

import Footer from "../../src/components/Footer/Footer";
import { NavbarTwo } from "../../src/components/Navbar/NavbarTwo";
import NewsLetter from "../../src/components/NewsLetter/NewsLetter";
import Service from "../../src/components/Service/Service";

class checkout extends Component {
  state = {
    street_address: "",
    apartment_address: "",
    zip: "",
    address_available: "",
    total_amount: "",
    user_address: {},
    user_have_address: null,
    loading: false,
    phone_number: "",

    payment_method: "",
    error: "",
  };

  componentDidMount() {
    const config = {
      headers: {
        authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    };
    axios
      .get("http://127.0.0.1:8000/api/v1/cart/payment", config)
      .then((res) => this.setState({ total_amount: res.data.total_amount }));
    axios
      .get("http://127.0.0.1:8000/api/v1/address/create", config)
      .then((res) => {
        this.setState({ address_available: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
    axios.get("http://127.0.0.1:8000/api/v1/address/list", config).then((res) =>
      this.setState({
        user_address: res.data.user_address,
        user_have_address: res.data.user_have_address,
      })
    );
  }

  handleSubmitOrder = () => {
    const config = {
      headers: {
        authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    };
    const data = {
      payment_method: this.state.payment_method,
    };

    axios
      .post("http://127.0.0.1:8000/api/v1/cart/order-confirm", data, config)
      .then()
      .catch((error) => {
        this.setState({ error: error.response.data.error });
      });
  };

  handlePayment = () => {
    const config = {
      headers: {
        authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    };
    axios
      .post("http://127.0.0.1:8000/api/v1/cart/test", {
        config,
        total_amount: this.state.total_amount,
      })
      .then((res) => this.props.router.push(res.data.GatewayPageURL));
  };

  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      street_address: this.state.street_address,
      apartment_address: this.state.apartment_address,
      zip: this.state.zip,
    };
    const config = {
      headers: {
        authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    };
    axios
      .post("http://127.0.0.1:8000/api/v1/address/create", data, config)
      .then((res) => {
        // this.setState({ loading: false, cart: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { user_address, user_have_address } = this.state;
    console.log(user_have_address);
    return (
      <>
        <NavbarTwo />
        <section className="shop checkout section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12">
                <div className="checkout-form">
                  <h2>Make Your Checkout Here</h2>
                  <p>Please register in order to checkout more quickly</p>
                  {/* Form */}
                  {this.state.error ? (
                    <div className="error-msg text-center text-danger p-2">
                      <i class="fa fa-times-circle"></i>
                      {this.state.error}
                    </div>
                  ) : (
                    ""
                  )}

                  {user_have_address ? (
                    <Formik
                      enableReinitialize={true}
                      initialValues={user_address}
                    >
                      {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                      }) => (
                        <Form
                          onSubmit={() => {
                            this.setState({ loading: true });
                            const config = {
                              headers: {
                                authorization:
                                  "Bearer " +
                                  localStorage.getItem("access_token"),
                              },
                            };

                            const data = {
                              phone_number: values.phone_number,
                              street_address: values.street_address,
                              zip: values.zip,
                              district: values.district,
                            };

                            axios.put(
                              `http://127.0.0.1:8000/api/v1/address/edit/${this.state.user_address.id}`,
                              data,
                              config
                            );
                          }}
                          className="form"
                          method="post"
                          action="#"
                        >
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-12">
                              <div className="form-group">
                                <Field
                                  as={Form.Input}
                                  fluid
                                  value={values.user}
                                  onChange={handleChange("user")}
                                  label="User Name"
                                  name="user"
                                  placeholder="User"
                                  disabled
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                              <div className="form-group">
                                <Field
                                  as={Form.Input}
                                  fluid
                                  value={values.phone_number}
                                  onChange={handleChange("phone_number")}
                                  label="Phone Number"
                                  name="phone_number"
                                  placeholder="Phone Number"
                                />
                              </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-12">
                              <div className="form-group">
                                <Field
                                  as={Form.Input}
                                  fluid
                                  value={values.street_address}
                                  onChange={handleChange("street_address")}
                                  label="Address"
                                  name="street_address"
                                  placeholder="Address"
                                />
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-12">
                              <div className="form-group">
                                <label>
                                  Postal Code<span>*</span>
                                </label>
                                <input
                                  type="text"
                                  name="zip"
                                  placeholder
                                  name="zip"
                                  value={values.zip}
                                  onChange={handleChange("zip")}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                              <div className="form-group">
                                <label>
                                  Company<span>*</span>
                                </label>
                                <select name="company_name" id="company">
                                  <option value="company" selected="selected">
                                    Microsoft
                                  </option>
                                  <option>Apple</option>
                                  <option>Xaiomi</option>
                                  <option>Huawer</option>
                                  <option>Wpthemesgrid</option>
                                  <option>Samsung</option>
                                  <option>Motorola</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-12">
                              <button type="submit">Save</button>
                            </div>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  ) : (
                    <Form
                      onSubmit={this.handleSubmit}
                      className="form"
                      method="post"
                      action="#"
                    >
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="form-group">
                            <input
                              as={Form.Input}
                              fluid
                              value={this.state.phone_number}
                              onChange={this.handleChange}
                              label="Phone Number"
                              name="phone_number"
                              placeholder="Phone Number"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12 col-12">
                          <div className="form-group">
                            <input
                              as={Form.Input}
                              fluid
                              value={this.state.street_address}
                              onChange={this.handleChange}
                              label="Address"
                              name="street_address"
                              placeholder="Address"
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="form-group">
                            <label>
                              Postal Code<span>*</span>
                            </label>
                            <input
                              type="text"
                              name="zip"
                              placeholder
                              name="zip"
                              value={this.state.zip}
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="form-group">
                            <label>
                              Company<span>*</span>
                            </label>
                            <select name="company_name" id="company">
                              <option value="company" selected="selected">
                                Microsoft
                              </option>
                              <option>Apple</option>
                              <option>Xaiomi</option>
                              <option>Huawer</option>
                              <option>Wpthemesgrid</option>
                              <option>Samsung</option>
                              <option>Motorola</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12">
                          <button type="submit">Save</button>
                        </div>
                      </div>
                    </Form>
                  )}
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="order-details">
                  {/* Order Widget */}
                  <div className="single-widget">
                    <h2>CART TOTALS</h2>
                    <div className="content">
                      <ul>
                        <li>
                          Sub Total<span>$330.00</span>
                        </li>
                        <li>
                          (+) Shipping<span>$10.00</span>
                        </li>
                        <li className="last">
                          Total<span>${this.state.total_amount}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*/ End Order Widget */}
                  {/* Order Widget */}
                  <div className="single-widget payement">
                    <h2>Payments</h2>
                  </div>
                  <div style={{ marginLeft: "50px" }} className="P-5">
                    <Checkbox
                      label="cash on delivery"
                      value={this.state.payment_method}
                      onChange={() =>
                        this.setState({
                          payment_method: "cash_on_delivery",
                        })
                      }
                      toggle
                    />

                    <Checkbox
                      label="card or mobile banking"
                      value={this.state.card_or_mobile_banking}
                      onChange={() =>
                        this.setState({
                          payment_method: "card_or_mobile_banking",
                        })
                      }
                      toggle
                    />
                  </div>

                  {/* </div>. */}
                  {/*/ End Order Widget */}
                  {/* Payment Method Widget */}
                  <div className="single-widget payement">
                    <div className="content">
                      <img src="images/payment-method.png" alt="#" />
                    </div>
                  </div>
                  {/*/ End Payment Method Widget */}
                  {/* Button Widget */}
                  {this.state.payment_method === "cash_on_delivery" ? (
                    <div className="single-widget get-button">
                      <div className="content">
                        <div className="button">
                          <a
                            onClick={this.handleSubmitOrder}
                            href="#"
                            className="btn"
                          >
                            cofirm oder
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {this.state.payment_method === "card_or_mobile_banking" ? (
                    <div className="single-widget get-button">
                      <div className="content">
                        <div className="button">
                          <a
                            onClick={this.handlePayment}
                            href="#"
                            className="btn"
                          >
                            Procced to payment
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  {/*/ End Button Widget */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Service />
        <NewsLetter />
        <Footer />
      </>
    );
  }
}

export default withRouter(checkout);
