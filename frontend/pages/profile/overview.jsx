import { Field, Formik } from "formik";
import Link from "next/link";
import { withRouter } from "next/router";
import React, { Component } from "react";
import { isBrowser, isMobile } from "react-device-detect";
import LoadingOverlay from "react-loading-overlay";
import { connect } from "react-redux";
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
  Dropdown,
  Message,
} from "semantic-ui-react";
import axiosInstance from "../../src/api/axios";

import ProfileNavbar from "../../src/components/Navbar/ProfileNavbar";
import { fetchUserProfile } from "../../src/store/actions/profile";

class Overview extends Component {
  state = {
    isMobile: null,
    isDesktop: null,
    user: {},
    loading: false,
    error: [],
    success: null,
  };

  componentDidMount() {
    this.setState({ loading: true });

    this.fetchDetails();
    if (isMobile) {
      this.setState({ isMobile: true, isBrowser: false });
    } else {
      this.setState({ isMobile: false, isDesktop: true });
    }
  }

  fetchDetails = () => {
    axiosInstance
      .get("/profile/details")
      .then((res) => {
        this.setState({
          user: res.data,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
          error: err.response.data,
        });
      });
  };

  onSubmit = (e, values) => {
    e.preventDefault();

    const data = {
      f_name: values.f_name,
      l_name: values.l_name,
      email: values.email,
    };

    axiosInstance.put("/profile/details", data);
  };

  render() {
    const { userdata } = this.props;
    console.log("props data", userdata);
    console.log("state data", this.state.error);
    return (
      <div>
        <ProfileNavbar
          // route={this.props.router.back}
          name="Account Overview"
          isMobile={this.state.isMobile}
        />
        <div className="container">
          <LoadingOverlay
            active={this.state.loading}
            spinner={<HashLoader />}
          ></LoadingOverlay>
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
              <h3>My Profile</h3>
              <div className="profile-section">
                <div className="user-info">
                  <Formik
                    enableReinitialize={true}
                    initialValues={this.state.user}
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
                          const data = {
                            f_name: values.f_name,
                            l_name: values.l_name,
                            email: values.email,
                          };
                          axiosInstance
                            .put("/profile/details", data)
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
                            value={values.f_name}
                            label="First name"
                            placeholder="First name"
                            onChange={handleChange("f_name")}
                            error={
                              this.state.error ? this.state.error.f_name : ""
                            }
                          />
                          <Field
                            as={Form.Input}
                            label="Last name"
                            value={values.l_name}
                            placeholder="Last name"
                            onChange={handleChange("l_name")}
                            error={
                              this.state.error ? this.state.error.l_name : ""
                            }
                          />
                        </Form.Group>
                        {/* <Field
                          as={Form.Input}
                          value={values.f_name}
                          control={TextArea}
                          label="Opinion"
                          placeholder="Opinion"
                        /> */}
                        <Field
                          as={Form.Input}
                          control={Input}
                          value={values.email}
                          onChange={handleChange("email")}
                          label="Email"
                          error={this.state.error ? this.state.error.email : ""}
                          placeholder="joe@schmoe.com"
                        />
                        {this.state.success && (
                          <Message positive>
                            <Message.Header>
                              <p className="text-center">
                                Profile Edited Successfully
                              </p>
                            </Message.Header>
                          </Message>
                        )}

                        <button type="submit" className="btn">
                          Apply
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    option: state.navOptions.showOption,
    loading: state.profile.loading,
    userdata: state.profile.userdata,
    error: state.profile.error,
  };
};

// export default connect((mapStateToProps)withRouter((Overview));

export default connect(mapStateToProps, { fetchUserProfile })(
  withRouter(Overview)
);
