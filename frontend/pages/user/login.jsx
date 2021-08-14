import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, NextRouter } from "next/router";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

import { Message } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";

import facebookLogin from "../../src/components/axios/facebookLogin";
import googleLoginReq from "../../src/components/axios/googleLoginReq";

import Image from "next/image";
import Loader from "react-spinners/HashLoader";
import { otpSend } from "../../src/store/actions/auth";
import Navigation from "../../src/components/Navigation";
import { isBrowser, isMobile } from "react-device-detect";
import NavbarDetailsPage from "../../src/components/Navbar/NavbarDetailsPage";

class Login extends Component {
  state = {
    phoneNumber: null,
    redirectUrl: "",
    isMobile: null,
    isBrowser: null,
  };

  componentDidMount() {
    if (this.props.router) {
      this.setState({
        redirectUrl: this.props.router.query.redirectURL,
      });
    }

    if (isMobile) {
      this.setState({ isMobile: true, isBrowser: false });
    } else {
      this.setState({ isMobile: false, isBrowser: true });
    }
  }

  responseFacebook = (response) => {
    //console.log(response);
    facebookLogin(response.accessToken);
  };

  responseGoogle = (response) => {
    //console.log(response);
    googleLoginReq(response.accessToken);
  };

  sendOtp = (e) => {
    e.preventDefault();
    this.props.otpSend("+" + this.state.phoneNumber);
  };

  handleChange = (e) => {
    //console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    //console.log(this.state.phoneNumber);
    //console.log(this.props.data.status);
    //console.log(this.props.router);
    if (this.props.data.status === 200) {
      this.props.router.push({
        pathname: "/user/login/otp-verify",
        query: {
          pk: this.props.data.data.pk,
          phoneNumber: this.state.phoneNumber,
          redirect: this.state.redirectUrl,
        },
        asPath: "main",
      });
    }
    return (
      <>
        <NavbarDetailsPage
          route={this.props.router.back}
          isMobile={this.state.isMobile}
          name="Signin/Register"
        />

        {isBrowser ? (
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-sm-12">
                {/* <p
              style={{
                fontFamily: "Ubuntu",
                fontWeight: "bolder",
                fontSize: "24px",
              }}
            >
              Welcome to the world of Bewakoof! Enjoy
            </p> */}
                <div
                  style={{ width: "100%", display: "flex", padding: "20px" }}
                >
                  <img
                    width="auto"
                    height="auto"
                    src="/images/keagan-henman-Won79_9oUEk-unsplash.jpg"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12">
                {/* <div className="wrap-lon100"> */}
                <div style={{ width: "100%", padding: "20px" }}>
                  <div className="phone-input">
                    <PhoneInput
                      country={"us"}
                      value={this.state.phoneNumber}
                      onChange={(e) => this.setState({ phoneNumber: e })}
                      country="bd"
                      disableDropdown={true}
                      countryCodeEditable={false}
                      prefix="+"
                    />
                  </div>
                  {this.props.data.reason && (
                    <Message>
                      <Message.Header>Changes in Service</Message.Header>
                      <p>
                        We updated our privacy policy here to better service our
                        customers. We recommend reviewing the changes.
                      </p>
                    </Message>
                  )}
                  {this.props.loading ? (
                    <div className="d-flex justify-content-center align-items-center">
                      <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000} //3 secs
                      />
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="container-login100-form-btn m-t-17">
                    <button
                      onClick={this.sendOtp}
                      type="submit"
                      value="Submit"
                      className="login100-form-btn"
                    >
                      Send otp
                    </button>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container-fluid">
            <div className="row login-signup-body">
              <div className="col-md-6">
                <div className="login-mob-img-wrap">
                  <img
                    style={{ borderRadius: "2px" }}
                    width="auto"
                    height="auto"
                    src="/images/keagan-henman-Won79_9oUEk-unsplash.jpg"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="log-sign-mob-wrap slideFromBottomLogin">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="log-sign-mob-body">
                      <PhoneInput
                        country={"us"}
                        value={this.state.phoneNumber}
                        onChange={(e) => this.setState({ phoneNumber: e })}
                        country="bd"
                        disableDropdown={true}
                        countryCodeEditable={false}
                        prefix="+"
                      />
                    </div>
                  </div>

                  {this.props.data.reason && (
                    <Message negative>
                      <p>{this.props.data.reason.phone_number}</p>
                    </Message>
                  )}
                  {this.props.loading ? (
                    <div className="d-flex justify-content-center align-items-center">
                      <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000} //3 secs
                      />
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="container-login100-form-btn m-t-17">
                    <button
                      onClick={this.sendOtp}
                      type="submit"
                      value="Submit"
                      className="login100-form-btn"
                    >
                      Send OTP
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* <Service /> */}
        {/* <Newsletter /> */}
        {/* <Footer /> */}
        <Navigation />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
    data: state.auth.data || 400,
    loading: state.auth.loading,
  };
};

export default withRouter(connect(mapStateToProps, { otpSend })(Login));
