import React, { Component } from "react";
import { withRouter, NextRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { connect } from "react-redux";
import OtpInput from "react-otp-input";

import { Message } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";

import { otpVerify } from "../../../src/store/actions/auth";
import Navigation from "../../../src/components/Navigation";
import NavbarDetailsPage from "../../../src/components/Navbar/NavbarDetailsPage";

class Verify extends Component {
  state = { otp: "", isMobile: null, isBrowser: null };

  componentDidMount() {
    if (isMobile) {
      this.setState({ isMobile: true, isBrowser: false });
    } else {
      this.setState({ isMobile: false, isBrowser: true });
    }
  }

  handleChange = (otp) => this.setState({ otp });

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      otp: this.state.otp,

      pk: this.props.router.query.pk,
    };
    this.props.otpVerify(data);
  };

  render() {
    console.log(this.state.otp);
    const { query } = this.props.router;
    console.log(this.state.status);

    const token = localStorage.getItem("access_token");

    if (token) {
      this.props.router.push("/");
    }

    if (this.props.status === 200) {
      if (this.props.router.query.redirect) {
        this.props.router.push(this.props.router.query.redirect);
      }
    }

    return (
      <>
        <NavbarDetailsPage
          route={this.props.router.back}
          name="Verify OTP"
          isMobile={this.state.isMobile}
        />
        <div className="container">
          <div className="row p-5">
            <div className="col-12">
              <div className="d-flex justify-content-center align-items-center pb-5">
                <p
                  style={{
                    fontFamily: "Ubuntu",
                    fontSize: 26,
                    marginTop: 20,
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  Verify with OTP
                </p>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <p
                  style={{
                    fontFamily: "Ubuntu",
                    fontSize: 20,
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  sent to
                </p>
              </div>
              <div className="d-flex justify-content-center align-items-center pb-5">
                <p
                  style={{
                    fontFamily: "Ubuntu",
                    fontSize: 20,
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    color: "#39a6a3",
                  }}
                >
                  {query.phoneNumber}
                </p>
                <hr />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <OtpInput
                  containerStyle={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  inputStyle="input"
                  value={this.state.otp}
                  onChange={this.handleChange}
                  numInputs={6}
                />
              </div>

              {this.props.error && (
                <Message floating negative>
                  <p>Something went wrong</p>
                </Message>
              )}

              <div className="d-flex justify-content-center align-items-center">
                <button
                  onClick={(e) => this.handleSubmit(e)}
                  type="submit"
                  className="btn btn-primary m-2"
                >
                  Verify
                </button>
              </div>
            </div>
          </div>
        </div>

        <Navigation />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.auth.status);
  return {
    status: state.auth.status,
    error: state.auth.error,
    loading: state.auth.loading,
  };
};

export default withRouter(connect(mapStateToProps, { otpVerify })(Verify));
