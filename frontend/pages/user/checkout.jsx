// @refresh reset

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
  Input,
} from "semantic-ui-react";
import axios from "axios";
import Link from "next/link";
import { withAlert } from "react-alert";

// import { Form } from "react-bootstrap";
import { withRouter } from "next/router";
import { Formik, Field } from "formik";
import { isMobile } from "react-device-detect";

import Loader from "react-loader-spinner";

import "semantic-ui-css/semantic.min.css";

import Footer from "../../src/components/Footer/Footer";
import NavbarTwo from "../../src/components/Navbar/NavbarTwo";
import NewsLetter from "../../src/components/NewsLetter/NewsLetter";
import Service from "../../src/components/Service/Service";
import NavbarDetailsPage from "../../src/components/Navbar/NavbarDetailsPage";
import Navigation from "../../src/components/Navigation";

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
  { key: "Afghanistan", value: "Afghanistan", text: "Afghanistan" },
  { key: "Aland Islands", value: "Aland Islands", text: "Aland Islands" },
  { key: "Albania", value: "Albania", text: "Albania" },
  { key: "Algeria", value: "Algeria", text: "Algeria" },
  { key: "American Samoa", value: "American Samoa", text: "American Samoa" },
  { key: "Andorra", value: "Andorra", text: "Andorra" },
  { key: "Angola", value: "Angola", text: "Angola" },
  { key: "Anguilla", value: "Anguilla", text: "Anguilla" },
  { key: "Antigua", value: "Antigua", text: "Antigua" },
  { key: "Argentina", value: "Argentina", text: "Argentina" },
  { key: "Argentina", value: "Argentina", text: "Argentina" },
  { key: "Aruba", value: "Aruba", text: "Aruba" },
  { key: "Australia", value: "Australia", text: "Australia" },
  { key: "Austria", value: "Austria", text: "Austria" },
];

class checkout extends Component {
  state = {
    loading: null,
    modalLoading: null,
    errorMessage: null,

    shipping_address: {},
    updated: false,
    user_have_address: null,
    error: "",
    f_name: "",
    l_name: "",
    region: "",
    city: "",
    area: "",
    address: "",
    zip_code: "",
    email: "",
    street_address: "",
    city_options: [
      { key: "Afghanistan", value: "Afghanistan", text: "Afghanistan" },
      { key: "Aland Islands", value: "Aland Islands", text: "Aland Islands" },
      { key: "Albania", value: "Albania", text: "Albania" },
    ],

    sub_total_amount: 0,
    shipping_charge: 0,
    total_amount: 0,

    openAddressEditModal: null,
    agree: false,
    lol: "",
    isMobile: null,
    isBrowser: null,
    shippingUpdated: "",
    newsletteragree: false,
  };

  componentDidMount() {
    // this.props.router.reload("/");
    this.createOrder();
    if (isMobile) {
      this.setState({ isMobile: true, isBrowser: false });
    } else {
      this.setState({ isMobile: false, isBrowser: true });
    }
    // this.checkUserAddress();
    // this.assosiateAddressToOrder();
    // this.updateDeliveryCharge();
    // this.updateOrderTotal();
    // this.getOrderPricing();
  }

  createOrder = () => {
    const config = {
      headers: {
        authorization: "Token " + localStorage.getItem("access_token"),
      },
    };

    const data = {
      s: "s",
    };

    axios
      .post(
        "https://proman.com.bd/api/v1/orders/create-new-order",
        data,
        config
      )
      .then((res) => {
        this.setState({ lol: "data" }, () => {
          this.checkUserAddress();
        });
      })
      .catch((err) => {
        // console.log(err);
        this.setState({ loading: false, error: err.response.data.msg });
      });
  };

  checkUserAddress = () => {
    const config = {
      headers: {
        authorization: "Token " + localStorage.getItem("access_token"),
      },
    };
    this.setState({ loading: true });
    axios
      .get("https://proman.com.bd/api/v1/address/user-address", config)
      .then((res) => {
        if (!res.data.user_have_address) {
          this.props.router.push({
            pathname: "/address/new",
            query: {
              redirectURL: this.props.router.asPath,
            },
            asPath: "main",
          });
        } else {
          this.setState(
            {
              loading: false,
              user_have_address: res.data.user_have_address,
              shipping_address: res.data.user_address,
            },
            () => this.assosiateAddressToOrder()
          );
        }
      })
      .catch((err) => {
        this.setState({
          loading: false,
          error: err.response.data?.msg,
        });
      });
  };

  assosiateAddressToOrder = () => {
    const config = {
      headers: {
        authorization: "Token " + localStorage.getItem("access_token"),
      },
    };
    this.setState({ loading: true });
    const data = {
      some: "thing",
    };

    axios
      .post(
        "https://proman.com.bd/api/v1/orders/assosiate-to-order",
        data,
        config
      )
      .then((res) =>
        this.setState({ error: null, loading: false }, () =>
          this.updateDeliveryCharge()
        )
      )
      .catch((err) => {
        this.setState({
          loading: false,
          error: err.response.data?.msg,
        });
      });
  };

  updateDeliveryCharge = () => {
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
        "https://proman.com.bd/api/v1/orders/update-shipping-charge",
        data,
        config
      )
      .then((res) =>
        this.setState(
          { error: null, loading: false, shippingUpdated: res.data.msg },
          () => this.updateOrderTotal()
        )
      )
      .catch((err) => {
        this.setState({
          loading: false,
          error: err.response.data?.msg,
        });
      });
  };

  updateOrderTotal = () => {
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
        "https://proman.com.bd/api/v1/orders/update-order-total",
        data,
        config
      )
      .then((res) =>
        this.setState({ error: null, loading: false }, () =>
          this.getOrderPricing()
        )
      )
      .catch((err) => {
        this.setState({
          loading: false,
          error: err.response.data?.msg,
        });
      });
  };

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
      .catch((err) => {
        this.setState({
          loading: false,
          error: err.response.data?.msg,
        });
      });
  };

  onChangeRegion = (e, data) => {
    this.setState({ modalLoading: true });
    this.setState({ region: data.value }, () => {
      if (data.value === "dhaka") {
        this.setState(
          {
            city_options: [
              { key: "Afghanistan", value: "Afghanistan", text: "Afghanistan" },
              {
                key: "Aland Islands",
                value: "Aland Islands",
                text: "Aland Islands",
              },
              { key: "Albania", value: "Albania", text: "Albania" },
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
                "https://proman.com.bd/api/v1/orders/update-shipping",
                {
                  region: data.value,
                },
                config
              )
              .then((response) => {
                this.setState({
                  // msg: response.data.msg,
                  shipping_charge: 60,
                  modalLoading: false,
                  updated: true,
                });
              });
          }
        );
      } else if (data.value === "rajshahi") {
        this.setState(
          {
            city_options: [
              { key: "Algeria", value: "Algeria", text: "Algeria" },
              {
                key: "American Samoa",
                value: "American Samoa",
                text: "American Samoa",
              },
              { key: "Andorra", value: "Andorra", text: "Andorra" },
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
                "https://proman.com.bd/api/v1/orders/update-shipping",
                {
                  region: data.value,
                },
                config
              )
              .then((response) => {
                this.setState({
                  // msg: response.data.msg,
                  shipping_charge: 100,
                  modalLoading: false,
                  updated: true,
                });
              });
          }
        );
      } else if (data.value === "rangpur") {
        this.setState(
          {
            city_options: [
              { key: "Angola", value: "Angola", text: "Angola" },
              { key: "Anguilla", value: "Anguilla", text: "Anguilla" },
              { key: "Antigua", value: "Antigua", text: "Antigua" },
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
                "https://proman.com.bd/api/v1/orders/update-shipping",
                {
                  region: data.value,
                },
                config
              )
              .then((response) => {
                this.setState({
                  updatedShipping: true,
                  msg: response.data.msg,
                  shipping_charge: 100,
                  modalLoading: false,
                });
              });
          }
        );
      } else if (data.value === "chattogram") {
        this.setState(
          {
            city_options: [
              { key: "Argentina", value: "Argentina", text: "Argentina" },
              { key: "Argentina", value: "Argentina", text: "Argentina" },
              { key: "Aruba", value: "Aruba", text: "Aruba" },
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
                "https://proman.com.bd/api/v1/orders/update-shipping",
                {
                  region: data.value,
                },
                config
              )
              .then((response) => {
                this.setState({
                  updatedShipping: true,
                  msg: response.data.msg,
                  shipping_charge: 100,
                  modalLoading: false,
                });
              });
          }
        );
      } else if (data.value === "khulna") {
        this.setState(
          {
            city_options: [
              { key: "Aruba", value: "Aruba", text: "Aruba" },
              { key: "Australia", value: "Australia", text: "Australia" },
              { key: "Austria", value: "Austria", text: "Austria" },
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
                "https://proman.com.bd/api/v1/orders/update-shipping",
                {
                  region: data.value,
                },
                config
              )
              .then((response) => {
                this.setState({
                  updatedShipping: true,
                  msg: response.data.msg,
                  shipping_charge: 100,
                  modalLoading: false,
                });
              });
          }
        );
      } else if (data.value === "shylhet") {
        this.setState(
          {
            city_options: [
              { key: "Andorra", value: "Andorra", text: "Andorra" },
              { key: "Angola", value: "Angola", text: "Angola" },
              { key: "Anguilla", value: "Anguilla", text: "Anguilla" },
              { key: "Antigua", value: "Antigua", text: "Antigua" },
              { key: "Argentina", value: "Argentina", text: "Argentina" },
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
                "https://proman.com.bd/api/v1/orders/update-shipping",
                {
                  region: data.value,
                },
                config
              )
              .then((response) => {
                this.setState({
                  updatedShipping: true,
                  msg: response.data.msg,
                  shipping_charge: 100,
                  modalLoading: false,
                });
              });
          }
        );
      } else if (data.value === "barishal") {
        this.setState(
          {
            city_options: [
              { key: "Aruba", value: "Aruba", text: "Aruba" },
              { key: "Australia", value: "Australia", text: "Australia" },
              { key: "Austria", value: "Austria", text: "Austria" },
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
                "https://proman.com.bd/api/v1/orders/update-shipping",
                {
                  region: data.value,
                },
                config
              )
              .then((response) => {
                this.setState({
                  updatedShipping: true,
                  msg: response.data.msg,
                  shipping_charge: 100,
                  modalLoading: false,
                });
              });
          }
        );
      } else if (data.value === "mymensingh") {
        this.setState(
          {
            city_options: [
              { key: "au", value: "au", flag: "au", text: "Australia" },
              { key: "at", value: "at", flag: "at", text: "Austria" },
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
                "https://proman.com.bd/api/v1/orders/update-shipping",
                {
                  region: data.value,
                },
                config
              )
              .then((response) => {
                this.setState({
                  updatedShipping: true,
                  msg: response.data.msg,
                  shipping_charge: 100,
                  modalLoading: false,
                });
              });
          }
        );
      }
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const alert = this.props.alert;
    return (
      <>
        <NavbarDetailsPage
          // route={this.props.router.back}
          name="Checkout"
          isMobile={this.state.isMobile}
        />
        <Modal
          onClose={() =>
            this.setState(
              {
                openAddressEditModal: false,
              },
              this.getOrderPricing()
            )
          }
          onOpen={() => setOpen(true)}
          open={this.state.openAddressEditModal}
        >
          <Modal.Content>
            {this.state.modalLoading && (
              <div
                style={{
                  // width: "100%vw",
                  // height: "30vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Loader type="Circles" color="#00BFFF" height={80} width={80} />
              </div>
            )}

            <div className={this.state.modalLoading ? "d-none" : ""}>
              <Formik
                enableReinitialize={true}
                initialValues={this.state.shipping_address}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                }) => (
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      this.setState({ modalLoading: true });
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

                      axios
                        .put(
                          `https://proman.clothing/v1/address/edit/${this.state.shipping_address.id}`,
                          data,
                          config
                        )
                        .then((res) =>
                          this.setState(
                            {
                              modalLoading: false,
                              openAddressEditModal: false,
                            },
                            () => this.getOrderPricing()
                          )
                        );
                    }}
                    className="form"
                    method="post"
                    action="#"
                  >
                    <h3>Personal Information</h3>
                    {this.state.updated && (
                      <div className="text-center text-capitalize">
                        <Message positive>Shipping Charge Updated</Message>
                      </div>
                    )}
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

                      <div className="col-lg-12 col-md-12 col-12">
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
                      <div className="p-2">
                        <input
                          onChange={() =>
                            this.setState({
                              newsletteragree: !this.state.newsletteragree,
                            })
                          }
                          className="agree-checkbox"
                          type="checkbox"
                        />
                        Send me excluside offer and new design every week
                      </div>

                      <h5>Enter Proper Addresses</h5>
                      <div className="col-lg-6 col-md-6 col-6">
                        <Dropdown
                          placeholder="Select Region"
                          fluid
                          search
                          selection
                          onChange={this.onChangeRegion}
                          options={region}
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-6">
                        <Dropdown
                          placeholder="Select City"
                          fluid
                          search
                          selection
                          options={this.state.city_options}
                        />
                      </div>
                      <div className="col-12 mt-4">
                        <Dropdown
                          placeholder="Select Area"
                          fluid
                          search
                          selection
                          options={countryOptions}
                        />
                      </div>

                      <div className="col-lg-12 col-md-12 col-12 mt-3">
                        {/* <TextArea
                          placeholder="Address"
                          placeholder="Tell us more"
                          value={this.state.street_address}
                          onChange={this.handleChange}
                          label="Address"
                          name="street_address"
                          placeholder="Address"
                        /> */}

                        <Field
                          as={TextArea}
                          name="street_address"
                          value={values.street_address}
                          control={Input}
                          error={
                            this.state.error
                              ? this.state.error.street_address
                              : ""
                          }
                          label="Street Address"
                          placeholder="Street Address"
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
            </div>
          </Modal.Content>

          <Modal.Actions>
            <Button
              negative
              onClick={() =>
                this.setState(
                  {
                    openAddressEditModal: false,
                  },
                  this.getOrderPricing()
                )
              }
            >
              Cancel
            </Button>
          </Modal.Actions>
        </Modal>
        <section className="shop checkout section">
          <div className="container mt-4">
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
              <div className="row">
                <div className="col-md-7 col-12 mt-4">
                  {this.state.user_have_address ? (
                    <div className="row">
                      <div className="col-12">
                        <div className="checkout-custom-heading">
                          <h2>Select Delivery Options</h2>
                        </div>
                        <div className="row">
                          <div className="col-md-6 col-6">
                            <p>Shipping Address</p>
                            <ul style={{ listStylePosition: "inside" }}>
                              {/* <Link href/</ul>="/profile/address"> */}
                              <li
                                // onClick={() => {
                                //   this.setState({
                                //     openAddressEditModal: true,
                                //   });
                                // }}
                                className="p-4 address-box"
                              >
                                {this.state.shipping_address.l_name ? (
                                  <p>
                                    {this.state.shipping_address.f_name}{" "}
                                    {this.state.shipping_address.l_name}
                                  </p>
                                ) : (
                                  <p>{this.state.shipping_address.f_name}</p>
                                )}
                                <p>
                                  {
                                    this.state.shipping_address
                                      .alternate_phone_number
                                  }
                                </p>
                                <p>{this.state.shipping_address.region}</p>
                                <p>{this.state.shipping_address.city}</p>
                                <p>{this.state.shipping_address.area}</p>
                                <p>{this.state.shipping_address.zip_code}</p>
                                <div
                                  style={{ float: "right", display: "flex" }}
                                >
                                  {/* <button
                                onClick={() => {
                                  this.setState({
                                    openAddressEditModal: true,
                                  });
                                }}
                                className="p-1 m-2"
                              >
                                <Icon name="edit outline"></Icon>
                                Edit
                              </button> */}
                                </div>
                              </li>
                              {/* </Link> */}
                            </ul>
                          </div>
                          <div className="col-md-6 col-6 ">
                            <p>Billing Address</p>
                            <ul style={{ listStylePosition: "inside" }}>
                              <li className="p-4 address-box">
                                Same as shipping address
                                <div
                                  style={{ float: "right", display: "flex" }}
                                >
                                  {/* <button className="p-1 m-2">
                                <Icon name="edit outline"></Icon>
                                Edit
                              </button> */}
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-capitalize">
                      <Message
                        negative
                        header="Something went wrong"
                        content={this.state.error}
                      />
                    </div>
                  )}
                  {this.state.updated && (
                    <Message positive floating>
                      Delivery charge updated
                    </Message>
                  )}
                </div>
                <div className="col-lg-5 col-12">
                  <div className="order-details">
                    <div className="single-widget">
                      <h2>CART TOTALS</h2>
                      <div className="content">
                        <ul>
                          <li>
                            Sub Total
                            <span>
                              {" "}
                              <img
                                width="15px"
                                height="15px"
                                src="/images/taka.png"
                              />
                              {this.state.sub_total_amount}
                            </span>
                          </li>
                          <li>
                            (+) Shipping
                            <span>
                              {" "}
                              <img
                                width="15px"
                                height="15px"
                                src="/images/taka.png"
                              />
                              {this.state.shipping_charge}
                            </span>
                          </li>
                          <li>
                            <Message className="text-center" positive>
                              <p>Free Home Delivery</p>
                            </Message>
                          </li>

                          <li className="last">
                            Total
                            <span>
                              {" "}
                              <img
                                width="15px"
                                height="15px"
                                src="/images/taka.png"
                              />
                              {this.state.total_amount}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* 
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
            </div> */}

                    <div className="single-widget payement">
                      <div className="content">
                        <img src="/images/ssl-logo-1.png" alt="#" />
                      </div>
                    </div>

                    <div className="terms-aggrement">
                      <input
                        onChange={() =>
                          this.setState({ agree: !this.state.agree })
                        }
                        className="agree-checkbox"
                        type="checkbox"
                      />
                      I Read and agree to the{" "}
                      <a href="/terms-and-condition" target="_blank">
                        Terms & Conditions
                      </a>
                      ,{" "}
                      <a href="/privacy-policy" target="_blank">
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a href="/refund-and-return" target="_blank">
                        Return Refund Policy
                      </a>
                    </div>

                    <div className="single-widget get-button">
                      <div className="content">
                        <div className="button">
                          <Link href="/user/checkout/payment">
                            <button
                              disabled={!this.state.agree}
                              onClick={this.handlePayment}
                              className="btn"
                            >
                              Procced to payment
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
        <Service />
        <NewsLetter />
        <Footer />
        <Navigation />
      </>
    );
  }
}

export default withRouter(withAlert()(checkout));
