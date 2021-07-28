import React, { Component } from "react";
import {
  Button,
  Checkbox,
  Message,
  Dropdown,
  Form,
  Label,
  TextArea,
  Icon,
  Header,
  Image,
  Modal,
} from "semantic-ui-react";
import axios from "axios";

// import { Form } from "react-bootstrap";
import { withRouter } from "next/router";
import { Formik, Field } from "formik";

import "semantic-ui-css/semantic.min.css";

import Footer from "../../src/components/Footer/Footer";
import NavbarTwo from "../../src/components/Navbar/NavbarTwo";
import NewsLetter from "../../src/components/NewsLetter/NewsLetter";
import Service from "../../src/components/Service/Service";

const region = [
  { key: "dhaka", value: "dhaka", text: "Dhaka" },
  { key: "rajshahi", value: "rajshahi", text: "Rajshahi" },
  { key: "rangpur", value: "rangpur", text: "Rangpur" },
  { key: "chattogram", value: "chattogram", text: "Chattogram" },
  { key: "khulna", value: "khulna", text: "Khulna" },
  { key: "shylhet", value: "shylhet", text: "Shylhet" },
  { key: "barishal", value: "barishal", text: "Barishal" },
  { key: "mymensingh", value: "mymensingh", text: "Mymensingh" },
];

const countryOptions = [
  { key: "af", value: "af", flag: "af", text: "Afghanistan" },
  { key: "ax", value: "ax", flag: "ax", text: "Aland Islands" },
  { key: "al", value: "al", flag: "al", text: "Albania" },
  { key: "dz", value: "dz", flag: "dz", text: "Algeria" },
  { key: "as", value: "as", flag: "as", text: "American Samoa" },
  { key: "ad", value: "ad", flag: "ad", text: "Andorra" },
  { key: "ao", value: "ao", flag: "ao", text: "Angola" },
  { key: "ai", value: "ai", flag: "ai", text: "Anguilla" },
  { key: "ag", value: "ag", flag: "ag", text: "Antigua" },
  { key: "ar", value: "ar", flag: "ar", text: "Argentina" },
  { key: "am", value: "am", flag: "am", text: "Armenia" },
  { key: "aw", value: "aw", flag: "aw", text: "Aruba" },
  { key: "au", value: "au", flag: "au", text: "Australia" },
  { key: "at", value: "at", flag: "at", text: "Austria" },
  { key: "az", value: "az", flag: "az", text: "Azerbaijan" },
  { key: "bs", value: "bs", flag: "bs", text: "Bahamas" },
  { key: "bh", value: "bh", flag: "bh", text: "Bahrain" },
  { key: "bd", value: "bd", flag: "bd", text: "Bangladesh" },
  { key: "bb", value: "bb", flag: "bb", text: "Barbados" },
  { key: "by", value: "by", flag: "by", text: "Belarus" },
  { key: "be", value: "be", flag: "be", text: "Belgium" },
  { key: "bz", value: "bz", flag: "bz", text: "Belize" },
  { key: "bj", value: "bj", flag: "bj", text: "Benin" },
];

class checkout extends Component {
  state = {
    street_address: "",
    apartment_address: "",

    address_available: "",
    sub_total_amount: "",
    total_amount: "",
    user_address: {},
    user_have_address: null,
    loading: false,
    alternate_phone_number: "",
    shipping_charge: 60,
    payment_method: "",
    error: "",
    district: "",

    f_name: "",
    l_name: "",
    region: "",
    city: "",
    area: "",
    address: "",
    zip_code: "",
    email: "",
    city_options: [
      { key: "af", value: "af", flag: "af", text: "Afghanistan" },
      { key: "ax", value: "ax", flag: "ax", text: "Aland Islands" },
      { key: "al", value: "al", flag: "al", text: "Albania" },
    ],
    openAddressEditModal: null,
  };

  componentDidMount() {
    const config = {
      headers: {
        authorization: "Token " + localStorage.getItem("access_token"),
      },
    };
    axios.get("http://127.0.0.1:8000/v1/cart/payment", config).then((res) =>
      this.setState(
        {
          sub_total_amount: res.data.sub_total_amount,
          total_amount: res.data.total_amount,
        },
        () => {
          axios.post(
            "http://127.0.0.1:8000/v1/orders/pricing-details",
            {
              sub_total_amount: res.data.sub_total_amount,
            },
            config
          );
        }
      )
    );

    axios.get("http://127.0.0.1:8000/v1/address/list", config).then((res) => {
      this.setState(
        {
          user_address: res.data.user_address,
          user_have_address: res.data.user_have_address,
        },
        () => {
          if (!res.data.user_have_address) {
            this.props.router.push("/address/new");
          }
        }
      );
      if (res.data.user_have_address) {
        const region = res.data.user_address.region;
        console.log(region);
        const config = {
          headers: {
            authorization: "Token " + localStorage.getItem("access_token"),
          },
        };
        axios.post(
          "http://127.0.0.1:8000/v1/orders/update-shipping",
          {
            region,
          },
          config
        );
      }
    });
    console.log(
      "asddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
      this.state.sub_total_amount
    );
  }

  onChangeRegion = (e, data) => {
    this.setState({ region: data.value }, () => {
      if (data.value === "dhaka") {
        this.setState(
          {
            city_options: [
              { key: "be", value: "be", flag: "be", text: "Belgium" },
              { key: "bz", value: "bz", flag: "bz", text: "Belize" },
              { key: "bj", value: "bj", flag: "bj", text: "Benin" },
            ],
          },
          () => {
            const config = {
              headers: {
                authorization: "Token " + localStorage.getItem("access_token"),
              },
            };
            axios
              .post(
                "http://127.0.0.1:8000/v1/orders/update-shipping",
                {
                  region: data.value,
                },
                config
              )
              .then((response) => {
                this.setState({
                  msg: response.data.msg,
                  shipping_charge: 60,
                });
              });
          }
        );
      } else if (data.value === "rajshahi") {
        this.setState(
          {
            city_options: [
              { key: "be", value: "be", flag: "be", text: "Belgium" },
              { key: "bz", value: "bz", flag: "bz", text: "Belize" },
              { key: "bj", value: "bj", flag: "bj", text: "Benin" },
            ],
          },
          () => {
            const config = {
              headers: {
                authorization: "Token " + localStorage.getItem("access_token"),
              },
            };
            axios
              .post(
                "http://127.0.0.1:8000/v1/orders/update-shipping",
                {
                  region: data.value,
                },
                config
              )
              .then((response) => {
                this.setState({
                  msg: response.data.msg,
                  shipping_charge: 120,
                });
              });
          }
        );
      } else if (data.value === "rangpur") {
        this.setState(
          {
            city_options: [
              { key: "be", value: "be", flag: "be", text: "Belgium" },
              { key: "bz", value: "bz", flag: "bz", text: "Belize" },
              { key: "bj", value: "bj", flag: "bj", text: "Benin" },
            ],
          },
          () => {
            const config = {
              headers: {
                authorization: "Token " + localStorage.getItem("access_token"),
              },
            };
            axios
              .post(
                "http://127.0.0.1:8000/v1/orders/update-shipping",
                {
                  region: data.value,
                },
                config
              )
              .then((response) => {
                this.setState({
                  msg: response.data.msg,
                  shipping_charge: 120,
                });
              });
          }
        );
      } else if (data.value === "chattogram") {
        this.setState(
          {
            city_options: [
              { key: "be", value: "be", flag: "be", text: "Belgium" },
              { key: "bz", value: "bz", flag: "bz", text: "Belize" },
              { key: "bj", value: "bj", flag: "bj", text: "Benin" },
            ],
          },
          () => {
            const config = {
              headers: {
                authorization: "Token " + localStorage.getItem("access_token"),
              },
            };
            axios
              .post(
                "http://127.0.0.1:8000/v1/orders/update-shipping",
                {
                  region: data.value,
                },
                config
              )
              .then((response) => {
                this.setState({
                  msg: response.data.msg,
                  shipping_charge: 120,
                });
              });
          }
        );
      } else if (data.value === "khulna") {
        this.setState(
          {
            city_options: [
              { key: "ad", value: "ad", flag: "ad", text: "Andorra" },
              { key: "ao", value: "ao", flag: "ao", text: "Angola" },
              { key: "ai", value: "ai", flag: "ai", text: "Anguilla" },
            ],
          },
          () => {
            const config = {
              headers: {
                authorization: "Token " + localStorage.getItem("access_token"),
              },
            };
            axios
              .post(
                "http://127.0.0.1:8000/v1/orders/update-shipping",
                {
                  region: data.value,
                },
                config
              )
              .then((response) => {
                this.setState({
                  msg: response.data.msg,
                  shipping_charge: 120,
                });
              });
          }
        );
      } else if (data.value === "shylhet") {
        this.setState(
          {
            city_options: [
              { key: "bh", value: "bh", flag: "bh", text: "Bahrain" },
              { key: "bd", value: "bd", flag: "bd", text: "Bangladesh" },
              { key: "bb", value: "bb", flag: "bb", text: "Barbados" },
              { key: "by", value: "by", flag: "by", text: "Belarus" },
            ],
          },
          () => {
            const config = {
              headers: {
                authorization: "Token " + localStorage.getItem("access_token"),
              },
            };
            axios
              .post(
                "http://127.0.0.1:8000/v1/orders/update-shipping",
                {
                  region: data.value,
                },
                config
              )
              .then((response) => {
                this.setState({
                  msg: response.data.msg,
                  shipping_charge: 120,
                });
              });
          }
        );
      } else if (data.value === "barishal") {
        this.setState(
          {
            city_options: [
              { key: "az", value: "az", flag: "az", text: "Azerbaijan" },
              { key: "bs", value: "bs", flag: "bs", text: "Bahamas" },
            ],
          },
          () => {
            const config = {
              headers: {
                authorization: "Token " + localStorage.getItem("access_token"),
              },
            };
            axios.post(
              "http://127.0.0.1:8000/v1/orders/update-shipping",
              {
                region: data.value,
              },
              config
            );
          }
        );
      } else if (data.value === "mymensingh") {
        this.setState({
          city_options: [
            { key: "au", value: "au", flag: "au", text: "Australia" },
            { key: "at", value: "at", flag: "at", text: "Austria" },
          ],
        });
      }
    });
  };

  onChangeCity = (e, data) => {
    this.setState({
      city: data.value,
    });
  };

  onChangeArea = (e, data) => {
    this.setState({
      area: data.value,
    });
  };

  handleSubmitOrder = () => {
    const config = {
      headers: {
        authorization: "Token " + localStorage.getItem("access_token"),
      },
    };
    const data = {
      payment_method: this.state.payment_method,
    };

    axios
      .post("http://127.0.0.1:8000/v1/cart/order-confirm", data, config)
      .then()
      .catch((error) => {
        this.setState({ error: error.response.data.error });
      });
  };

  handlePayment = () => {
    const config = {
      headers: {
        authorization: "Token " + localStorage.getItem("access_token"),
      },
    };
    axios
      .post(
        "http://127.0.0.1:8000/v1/cart/test",
        {
          sub_total_amount: this.state.sub_total_amount,
        },
        config
      )
      .then((res) => this.props.router.push(res.data.GatewayPageURL));
  };

  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      f_name: this.state.f_name,
      l_name: this.state.l_name,
      alternate_phone_number: this.state.alternate_phone_number,
      email: this.state.email,
      region: this.state.region,
      city: this.state.city,
      area: this.state.area,
      street_address: this.state.street_address,
      zip_code: this.state.zip_code,
    };
    const config = {
      headers: {
        authorization: "Token " + localStorage.getItem("access_token"),
      },
    };
    axios
      .post("http://127.0.0.1:8000/v1/address/create", data, config)
      .then((res) => {
        // this.setState({ loading: false, cart: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { user_address, user_have_address, street_address } = this.state;
    console.log(this.state.street_address);

    return (
      <>
        <NavbarTwo />
        <Modal
          onClose={() =>
            this.setState({
              openAddressEditModal: false,
            })
          }
          onOpen={() => setOpen(true)}
          open={this.state.openAddressEditModal}
        >
          <Modal.Content>
            <Formik enableReinitialize={true} initialValues={user_address}>
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    this.setState({ loading: true });
                    const config = {
                      headers: {
                        authorization:
                          "Token " + localStorage.getItem("access_token"),
                      },
                    };

                    const data = {
                      f_name: values.f_name,
                      l_name: values.l_name,
                      alternate_phone_number: values.alternate_phone_number,
                      email: values.email,
                      region: this.state.region,
                      city: this.state.city,
                      area: this.state.area,
                      street_address: this.state.street_address,
                      zip_code: values.zip_code,
                    };

                    axios.put(
                      `http://127.0.0.1:8000/v1/address/edit/${this.state.user_address.id}`,
                      data,
                      config
                    );
                  }}
                  className="form"
                  method="post"
                  action="#"
                >
                  <h3>Personal Information</h3>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <Field
                          as={Form.Input}
                          fluid
                          value={values.f_name}
                          onChange={handleChange("f_name")}
                          label="Fisrt Name"
                          name="f_name"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    {/* <div className="col-lg-6 col-md-6 col-12">
                              <div className="form-group">
                                <Field
                                  as={Form.Input}
                                  fluid
                                  value={values.alternate_phone_number}
                                  onChange={handleChange("alternate_phone_number")}
                                  label="Phone Number"
                                  name="alternate_phone_number"
                                  placeholder="Phone Number"
                                />
                              </div>
                            </div> */}
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <Field
                          as={Form.Input}
                          fluid
                          value={values.l_name}
                          onChange={handleChange("l_name")}
                          label="Last Name"
                          name="l_name"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-6">
                      <div className="form-group">
                        <Field
                          as={Form.Input}
                          fluid
                          value={values.alternate_phone_number}
                          onChange={handleChange("alternate_phone_number")}
                          label="Alternate Phone Number"
                          name="alternate_phone_number"
                          placeholder="Alternate Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-6">
                      <div className="form-group">
                        <Field
                          as={Form.Input}
                          fluid
                          value={values.email}
                          onChange={handleChange("email")}
                          label="Email"
                          name="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <h3>Enter Proper Addresses</h3>
                    <div className="col-lg-4 col-md-4 col-4">
                      <Dropdown
                        placeholder="Select Region"
                        fluid
                        search
                        selection
                        onChange={this.onChangeRegion}
                        options={region}
                      />
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">
                      <Dropdown
                        placeholder="Select City"
                        fluid
                        search
                        selection
                        options={this.state.city_options}
                      />
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">
                      <Dropdown
                        placeholder="Select Area"
                        fluid
                        search
                        selection
                        options={countryOptions}
                      />
                    </div>

                    <div className="col-lg-12 col-md-12 col-12 mt-3">
                      <TextArea
                        placeholder="Address"
                        placeholder="Tell us more"
                        value={this.state.street_address}
                        onChange={this.handleChange}
                        label="Address"
                        name="street_address"
                        placeholder="Address"
                      />
                    </div>

                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <label>
                          Postal Code<span>*</span>
                        </label>
                        <input
                          type="text"
                          name="zip_code"
                          placeholder
                          name="zip_code"
                          value={values.zip_code}
                          onChange={handleChange("zip_code")}
                        />
                      </div>
                    </div>
                    {/* <div className="col-lg-6 col-md-6 col-12 mt-4">
                              <Dropdown
                                placeholder="Select Country"
                                fluid
                                search
                                selection
                                options={countryOptions}
                              />
                            </div> */}
                    <div className="col-12">
                      <button className="btn" type="submit">
                        Save
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </Modal.Content>
          <Modal.Actions>
            {/* <Button onClick={() => setOpen(false)}>Save</Button> */}
            <Button
              negative
              onClick={() =>
                this.setState({
                  openAddressEditModal: false,
                })
              }
            >
              Cancel
            </Button>
          </Modal.Actions>
        </Modal>
        <section className="shop checkout section">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-12 mt-4">
                {/* <p>Address List</p> */}

                {user_have_address ? (
                  <div className="row">
                    <div className="col-md-6 col-6">
                      <p>Shipping Address</p>
                      <ul style={{ listStylePosition: "inside" }}>
                        <li className="p-4" style={{ border: "2px solid red" }}>
                          Coffee - A brewed drink prepared from roasted coffee
                          beans, which are the seeds of berries from the Coffea
                          plant
                          <div style={{ float: "right", display: "flex" }}>
                            {/* <input type="checkbox" /> */}
                            <button
                              onClick={() => {
                                this.setState({
                                  openAddressEditModal: true,
                                });
                              }}
                              className="p-1 m-2"
                            >
                              <Icon name="edit outline"></Icon>
                              Edit
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 col-6">
                      <p>Billing Address</p>
                      <ul style={{ listStylePosition: "inside" }}>
                        <li className="p-4" style={{ border: "2px solid red" }}>
                          Same as shipping address
                          <div style={{ float: "right", display: "flex" }}>
                            {/* <input type="checkbox" /> */}
                            <button className="p-1 m-2">
                              <Icon name="edit outline"></Icon>
                              Edit
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <>
                    <Message
                      header="Changes in Service"
                      content="We updated our privacy policy here to better service our customers. We recommend reviewing the changes."
                    />
                  </>
                )}
              </div>
              <div className="col-lg-5 col-12">
                <div className="order-details">
                  {/* Order Widget */}
                  <div className="single-widget">
                    <h2>CART TOTALS</h2>
                    <div className="content">
                      <ul>
                        <li>
                          Sub Total<span>${this.state.sub_total_amount}</span>
                        </li>
                        <li>
                          (+) Shipping<span>${this.state.shipping_charge}</span>
                        </li>
                        <li className="last">
                          Total
                          <span>${this.state.total_amount}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*/ End Order Widget */}
                  {/* Order Widget */}
                  <div className="single-widget">
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
