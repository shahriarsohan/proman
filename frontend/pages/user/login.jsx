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

class Login extends Component {
  state = {
    phoneNumber: null,
    loading: false,
  };

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
    if (this.props.successData.status === 200) {
      this.props.router.push({
        pathname: "/user/login/otp-verify",
        query: {
          pk: this.props.successData.data.pk,
          phoneNumber: this.state.phoneNumber,
        },
        asPath: "main",
      });
    }
    return (
      <>
        <NavbarTwo />
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
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-none d-xl-block">
              <div className="limiter">
                <div className="container-login100">
                  {/* <p
                    style={{
                      fontFamily: "Ubuntu",
                      fontWeight: "bolder",
                      fontSize: "24px",
                    }}
                  >
                    Welcome to the world of Bewakoof! Enjoy
                  </p> */}
                  <Image
                    width="auto"
                    height="auto"
                    src="/images/group-19-1617704502.webp"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="limiter">
                <div
                  className="container-login100"
                  style={{ backgroundImage: 'url("images/bg-01.jpg")' }}
                >
                  <div className="wrap-lon100">
                    {/* <div className="wrap-lon100"> */}
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
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Service />
        <Newsletter />
        <Footer />
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
