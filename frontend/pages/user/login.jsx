import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, NextRouter } from "next/router";

import PhoneInput from "react-phone-number-input";
import { Input } from "semantic-ui-react";

import facebookLogin from "../../src/components/axios/facebookLogin";
import googleLoginReq from "../../src/components/axios/googleLoginReq";

import NavbarTwo from "../../src/components/Navbar/NavbarTwo";
import Footer from "../../src/components/Footer/Footer";
import Newsletter from "../../src/components/NewsLetter/NewsLetter";
import Service from "../../src/components/Service/Service";
import Image from "next/image";
import Loader from "react-spinners/HashLoader";
import { otpSend } from "../../src/store/actions/auth";
import Navigation from "../../src/components/Navigation";
import { isBrowser, isMobile } from "react-device-detect";

class Login extends Component {
  state = {
    phoneNumber: null,
    loading: false,
    redirectUrl: "",
  };

  componentDidMount() {
    if (this.props.router) {
      this.setState({
        redirectUrl: this.props.router.query.redirectURL,
      });
    }
  }

  responseFacebook = (response) => {
    console.log(response);
    facebookLogin(response.accessToken);
  };

  responseGoogle = (response) => {
    console.log(response);
    googleLoginReq(response.accessToken);
  };

  sendOtp = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    this.props.otpSend(this.state.phoneNumber);
    // axios
    //   .post("http://192.168.0.8:8000/auth/email/", {
    //     email: this.state.email,
    //   })
    //   .then((res) => {
    //     if (res.status === 200) {
    //       console.log(
    //         this.props.router.push({
    //           pathname: "/user/login/otp-verify",
    //           query: { email: this.state.email },
    //           asPath: "main",
    //         })
    //       );
    //     }
    //     this.setState({ loading: false });
    //   })
    //   .catch((err) => console.log(err));
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.state.phoneNumber);
    console.log(this.props.successData);
    console.log(this.props.router);
    if (this.props.successData.status === 200) {
      this.props.router.push({
        pathname: "/user/login/otp-verify",
        query: {
          pk: this.props.successData.data.pk,
          phoneNumber: this.state.phoneNumber,
          redirect: this.state.redirectUrl,
        },
        asPath: "main",
      });
    }
    return (
      <>
        <NavbarTwo isMobile={isMobile} />
        {this.state.loading ? (
          <div className="d-flex justify-content-center align-items-center pb-5">
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
                      placeholder="Enter phone number"
                      country="BD"
                      defaultCountry="BD"
                      value={this.state.phoneNumber}
                      name="phoneNumber"
                      countries={["BD"]}
                      // className="phonenumberinput"
                      addInternationalOption={false}
                      className="phonenumberinput"
                      onChange={(e) => this.setState({ phoneNumber: e })}
                      style={{ color: "black" }}
                    />
                  </div>

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
                  <div className="log-sign-mob-body">
                    <PhoneInput
                      placeholder="Enter phone number"
                      country="BD"
                      defaultCountry="BD"
                      value={this.state.phoneNumber}
                      name="phoneNumber"
                      countries={["BD"]}
                      // className="phonenumberinput"
                      addInternationalOption={false}
                      className="phonenumberinput"
                      onChange={(e) => this.setState({ phoneNumber: e })}
                      style={{ color: "black" }}
                    />
                  </div>
                  <div className="container-login100-form-btn m-t-17">
                    <button
                      onClick={this.sendOtp}
                      type="submit"
                      value="Submit"
                      className="login100-form-btn"
                    >
                      Send otp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* <Service /> */}
        <Newsletter />
        <Footer />
        <Navigation />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    successData: state.auth.successData,
    loading: state.auth.loading,
    error: state.auth.error,
  };
};

export default connect(mapStateToProps, { otpSend })(withRouter(Login));
