import React, { Component } from "react";

import { withRouter, NextRouter } from "next/router";
import { connect } from "react-redux";
import OtpInput from "react-otp-input";

import NavbarTwo from "../../../src/components/Navbar/NavbarTwo";
import Footer from "../../../src/components/Footer/Footer";
import Newsletter from "../../../src/components/NewsLetter/NewsLetter";
import Service from "../../../src/components/Service/Service";
import { otpVerify } from "../../../src/store/actions/auth";

class Verify extends Component {
  state = { otp: "" };

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

    if (this.props.status === 200) {
      if (this.props.router.query.redirect) {
        this.props.router.push(this.props.router.query.redirect);
      }
    }

    return (
      <>
        <NavbarTwo />
        <div className="container">
          <div className="row p-5">
            <div className="col-12">
              <div className="d-flex justify-content-center align-items-center pb-5">
                <p
                  style={{
                    fontFamily: "Ubuntu",
                    fontSize: 26,
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
        <Service />
        <Newsletter />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.auth.status);
  return {
    status: state.auth.status,
  };
};

export default connect(mapStateToProps, { otpVerify })(withRouter(Verify));
