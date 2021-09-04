import { Formik, Field } from "formik";
import Link from "next/link";
import { withRouter } from "next/router";
import React, { Component } from "react";
import { isMobile } from "react-device-detect";

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
  Message,
} from "semantic-ui-react";
import axiosInstance from "../../src/api/axios";
import { DropdownField } from "../../src/components/DropdownField";

import ProfileNavbar from "../../src/components/Navbar/ProfileNavbar";

const regionOptions = [
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
];

class Address extends Component {
  state = {
    isMobile: null,
    isBrowser: null,
    user_have_address: null,
    shipping_address: {},
    loading: false,
    error: [],
    success: false,
  };

  componentDidMount() {
    this.fetchAddress();
    if (isMobile) {
      this.setState({ isMobile: true, isBrowser: false });
    } else {
      this.setState({ isMobile: false, isBrowser: true });
    }
  }

  fetchAddress = () => {
    this.setState({ loading: true });
    axiosInstance
      .get(
        "http://Proman-prod.eba-faitp54h.ap-south-1.elasticbeanstalk.com/v1/address/user-address"
      )
      .then((res) => {
        this.setState({
          loading: false,
          user_have_address: res.data.user_have_address,
          shipping_address: res.data.user_address,
        });
      });
  };

  render() {
    console.log(typeof this.state.error);
    return (
      <div>
        <ProfileNavbar
          // route={this.props.router.back}
          name="Account Overview"
          isMobile={this.state.isMobile}
        />
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 mt-5">
              <Segment>
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
              {this.state.user_have_address === false ? (
                <div className="user-dont-have-address">
                  <img
                    width="190px"
                    height="190px"
                    src="/images/sad.png"
                    alt="blank-address"
                  />
                  <div className="user-dont-have-address-text">
                    <p>Dear user, you don't have any shipping address</p>
                    <button className="btn btn-primary">Add Address</button>
                  </div>
                </div>
              ) : (
                <>
                  <h4>Shipping Address</h4>
                  <div className="profile-section">
                    <div className="user-info">
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
                            loading={this.state.loading}
                            onSubmit={(e) => {
                              this.setState({
                                loading: true,
                              });
                              e.preventDefault();
                              axiosInstance
                                .put(`address/edit/${values.id}`, values)
                                .then((res) => {
                                  this.setState({
                                    loading: false,
                                    success: true,
                                    error: [],
                                  });
                                })
                                .catch((err) => {
                                  this.setState({
                                    loading: false,
                                    error: err.response.data,
                                  });
                                });
                            }}
                          >
                            <Form.Group widths="equal">
                              <Field
                                as={Form.Input}
                                name="f_name"
                                value={values.f_name}
                                control={Input}
                                label="First name"
                                placeholder="First name"
                                error={
                                  this.state.error
                                    ? this.state.error.f_name
                                    : ""
                                }
                              />
                              <Field
                                as={Form.Input}
                                name="l_name"
                                value={values.l_name}
                                control={Input}
                                label="Last name"
                                placeholder="Last name"
                                error={
                                  this.state.error
                                    ? this.state.error.l_name
                                    : ""
                                }
                              />
                            </Form.Group>

                            <Form.Group widths="equal">
                              <Field
                                as={Form.Input}
                                name="alternate_phone_number"
                                value={values.alternate_phone_number}
                                control={Input}
                                error={
                                  this.state.error
                                    ? this.state.error.alternate_phone_number
                                    : ""
                                }
                                type="number"
                                label="Alternate Phone Number (Optional)"
                                placeholder="Alternate Phone Number (Optional)"
                              />
                              <Field
                                as={Form.Input}
                                name="email"
                                value={values.email}
                                control={Input}
                                error={
                                  this.state.error ? this.state.error.email : ""
                                }
                                label="Email"
                                placeholder="Email"
                              />
                            </Form.Group>
                            <Form.Group widths="equal">
                              <Field
                                label="Select Region"
                                component={DropdownField}
                                handleChange={handleChange("region")}
                                placeholder="Select Region"
                                name="region"
                                error={
                                  this.state.error
                                    ? this.state.error.region
                                    : ""
                                }
                                options={regionOptions}
                              />
                              <Field
                                label="Select Region"
                                component={DropdownField}
                                handleChange={handleChange("city")}
                                placeholder="Select City"
                                name="city"
                                error={
                                  this.state.error ? this.state.error.city : ""
                                }
                                options={countryOptions}
                              />
                              <Field
                                label="Select Region"
                                component={DropdownField}
                                handleChange={handleChange("area")}
                                placeholder="Select Area"
                                name="area"
                                error={
                                  this.state.error ? this.state.error.area : ""
                                }
                                options={countryOptions}
                              />
                            </Form.Group>
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

                            {this.state.error.length !== 0 ? (
                              <Message negative>
                                <Message.Header>
                                  Something went wrong
                                </Message.Header>
                                {Object.entries(this.state.error).map(
                                  ([key, value]) => (
                                    <Message.Item key={key}>
                                      {value}
                                    </Message.Item>
                                  )
                                )}
                              </Message>
                            ) : (
                              ""
                            )}

                            {this.state.success && (
                              <Message positive>
                                <Message.Header>
                                  <p className="text-center">
                                    Address Updated Successfully
                                  </p>
                                </Message.Header>
                              </Message>
                            )}

                            <button className="btn">Apply</button>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Address);
