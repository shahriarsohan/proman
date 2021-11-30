import { Formik, Field } from "formik";
import Link from "next/link";
import { withRouter } from "next/router";
import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import { Dropdown } from "semantic-ui-react";

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

class Address extends Component {
  state = {
    isMobile: null,
    isBrowser: null,
    user_have_address: null,
    shipping_address: {},
    loading: false,
    error: [],
    success: false,
    region: "",
    city: "",

    city_options: [
      // { key: "Aruba", value: "Aruba", text: "Aruba" },
      // { key: "Australia", value: "Australia", text: "Australia" },
      // { key: "Austria", value: "Austria", text: "Austria" },
    ],
  };

  componentDidMount() {
    this.fetchAddress();
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

  onChangeCity = (e, data) => {
    this.setState({ city: data.value });
  };

  redirectToAddress = () => {
    this.props.router.push({
      pathname: "/address/new",
      query: {
        redirectURL: this.props.router.asPath,
      },
      asPath: "main",
    });
  };

  fetchAddress = () => {
    this.setState({ loading: true });
    axiosInstance
      .get("https://proman.com.bd/api/v1/address/user-address")
      .then((res) => {
        this.setState({
          loading: false,
          user_have_address: res.data.user_have_address,
          shipping_address: res.data.user_address,
        });
      });
  };

  onChangeRegion = (e, data) => {
    this.setState({ region: data.value }, () => {
      if (data.value === "dhaka") {
        this.setState({
          city_options: [
            { key: "Dhaka", value: "Dhaka", text: "Dhaka" },
            { key: "Faridpur", value: "Faridpur", text: "Faridpur" },
            { key: "Gazipur", value: "Gazipur", text: "Gazipur" },
            { key: "Gopalganj", value: "Gopalganj", text: "Gopalganj" },
            { key: "Kishoreganj", value: "Kishoreganj", text: "Kishoreganj" },
            { key: "Madaripur", value: "Madaripur", text: "Madaripur" },
            { key: "Manikganj", value: "Narayanganj", text: "Narayanganj" },
            { key: "Narsingdi", value: "Narsingdi", text: "Narsingdi" },
            { key: "Rajbari", value: "Rajbari", text: "Rajbari" },
            { key: "Shariatpur", value: "Shariatpur", text: "Shariatpur" },
            { key: "Tangail", value: "Tangail", text: "Tangail" },
          ],
        });
      } else if (data.value === "rajshahi") {
        this.setState({
          city_options: [
            { key: "Rajshahi", value: "Rajshahi", text: "Rajshahi" },
            { key: "Natore", value: "Natore", text: "Natore" },
            { key: "Pabna", value: "Pabna", text: "Pabna" },
            { key: "Bogura", value: "Bogura", text: "Bogura" },
            {
              key: "Chapainawabganj",
              value: "Chapainawabganj",
              text: "Chapainawabganj",
            },
            { key: "Joypurhat", value: "Joypurhat", text: "Joypurhat" },
            { key: "Naogaon", value: "Naogaon", text: "Naogaon" },
            { key: "Sirajganj", value: "Sirajganj", text: "Sirajganj" },
          ],
        });
      } else if (data.value === "rangpur") {
        this.setState({
          city_options: [
            { key: "Rangpur", value: "Rangpur", text: "Rangpur" },
            { key: "Gaibandha", value: "Gaibandha", text: "Gaibandha" },
            { key: "Nilphamari", value: "Nilphamari", text: "Nilphamari" },
            { key: "Kurigram", value: "Kurigram", text: "Kurigram" },
            { key: "Lalmonirhat", value: "Lalmonirhat", text: "Lalmonirhat" },
            { key: "Dinajpur", value: "Dinajpur", text: "Dinajpur" },
            { key: "Thakurgaon", value: "Thakurgaon", text: "Thakurgaon" },
            { key: "Panchagarh", value: "Panchagarh", text: "Panchagarh" },
          ],
        });
      } else if (data.value === "chattogram") {
        this.setState({
          city_options: [
            { key: "Chittagong", value: "Chittagong", text: "Chittagong" },
            { key: "Rangamati", value: "Rangamati", text: "Rangamati" },
            { key: "Bandarban", value: "Bandarban", text: "Bandarban" },
            { key: "Khagrachari", value: "Khagrachari", text: "Khagrachari" },
            { key: "Cox's Bazar", value: "Cox's Bazar", text: "Cox's Bazar" },
            { key: "Feni", value: "Feni", text: "Feni" },
            {
              key: "Brahmanbaria",
              value: "Brahmanbaria",
              text: "Brahmanbaria",
            },
            { key: "Lakshmipur", value: "Lakshmipur", text: "Lakshmipur" },
            { key: "Comilla", value: "Comilla", text: "Comilla" },
            { key: "Chandpur", value: "Chandpur", text: "Chandpur" },
            { key: "Noakhali", value: "Noakhali", text: "Noakhali" },
          ],
        });
      } else if (data.value === "khulna") {
        this.setState({
          city_options: [
            { key: "Satkhira", value: "Satkhira", text: "Satkhira" },
            { key: "Jessore", value: "Jessore", text: "Jessore" },
            { key: "Chuadanga", value: "Chuadanga", text: "Chuadanga" },
            { key: "Narail", value: "Narail", text: "Narail" },
            { key: "Bagerhat", value: "Bagerhat", text: "Bagerhat" },
            { key: "Magura", value: "Magura", text: "Magura" },
            { key: "Jhenaidah", value: "Jhenaidah", text: "Jhenaidah" },
            { key: "Kushtia", value: "Kushtia", text: "Kushtia" },
            { key: "Meherpur", value: "Meherpur", text: "Meherpur" },
          ],
        });
      } else if (data.value === "shylhet") {
        this.setState({
          city_options: [
            { key: "Habiganj", value: "Habiganj", text: "Habiganj" },
            { key: "Moulvibazar", value: "Moulvibazar", text: "Moulvibazar" },
            { key: "Sunamganj", value: "Sunamganj", text: "Sunamganj" },
            { key: "Sylhet", value: "Sylhet", text: "Sylhet" },
          ],
        });
      } else if (data.value === "barishal") {
        this.setState({
          city_options: [
            { key: "Barisal", value: "Barisal", text: "Barisal" },
            { key: "Barguna", value: "Barguna", text: "Barguna" },
            { key: "Bhola", value: "Bhola", text: "Bhola" },
            { key: "Jhalokati", value: "Jhalokati", text: "Jhalokati" },
            { key: "Patuakhali", value: "Patuakhali", text: "Patuakhali" },
            { key: "Pirojpur", value: "Pirojpur", text: "Pirojpur" },
          ],
        });
      } else if (data.value === "mymensingh") {
        this.setState({
          city_options: [
            { key: "Mymensingh", value: "Mymensingh", text: "Mymensingh" },
            { key: "Netrokona", value: "Netrokona", text: "Netrokona" },
            { key: "Jamalpur", value: "Jamalpur", text: "Jamalpur" },
            { key: "Sherpur", value: "Sherpur", text: "Sherpur" },
          ],
        });
      }
    });
  };

  render() {
    console.log("regionnnnnnn", this.state.region);

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
                    <button
                      onClick={this.redirectToAddress}
                      className="btn btn-primary"
                    >
                      Add Address
                    </button>
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

                              const data = {
                                f_name: values.f_name,
                                l_name: values.l_name,
                                alternate_phone_number:
                                  values.alternate_phone_number,
                                email: values.email,
                                region: this.state.region,
                                street_address: values.street_address,
                                city: this.state.city,
                                zip_code: values.zip_code,
                              };
                              axiosInstance
                                .put(`address/edit/${values.id}`, data)
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
                            {/* <div className="d-flex"> */}
                            <Form.Group className="p-2" widths="equal">
                              <Dropdown
                                className=" p-2"
                                placeholder="Select Region"
                                fluid
                                search
                                selection
                                onChange={this.onChangeRegion}
                                options={regionOptions}
                              />
                              <Dropdown
                                className=" p-2"
                                placeholder="Select City"
                                fluid
                                search
                                selection
                                onChange={this.onChangeCity}
                                options={this.state.city_options}
                              />

                              {/* <Field
                                  label="Select Region"
                                  component={DropdownField}
                                  handleChange={handleChange("area")}
                                  placeholder="Select Area"
                                  name="area"
                                  error={
                                    this.state.error
                                      ? this.state.error.area
                                      : ""
                                  }
                                  options={countryOptions}
                                /> */}
                            </Form.Group>
                            {/* </div> */}
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

                            <button className="btn mt-2">Apply</button>
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
