import React, { Component } from "react";
import axios from "axios";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

import { GoogleLoginButton } from "react-social-login-buttons";

import facebookLogin from "../../src/components/axios/facebookLogin";
import googleLoginReq from "../../src/components/axios/googleLoginReq";

import { NavbarTwo } from "../../src/components/Navbar/NavbarTwo";
import Footer from "../../src/components/Footer/Footer";
import Newsletter from "../../src/components/NewsLetter/NewsLetter";
import Service from "../../src/components/Service/Service";

export default class Login extends Component {
  responseFacebook = (response) => {
    console.log(response);
    facebookLogin(response.accessToken);
  };

  responseGoogle = (response) => {
    console.log(response);
    googleLoginReq(response.accessToken);
  };

  render() {
    return (
      <>
        <NavbarTwo />

        <section className="shop login section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-12">
                <div className="login-form">
                  <h2>Login</h2>
                  <p>Please register in order to checkout more quickly</p>
                  {/* Form */}
                  <div className="row">
                    <div className="col-md-6 col-6">
                      <FacebookLogin
                        appId="188661309759475"
                        fields="name,email,picture"
                        callback={this.responseFacebook}
                      />
                    </div>
                    <div className="col-md-6 col-6">
                      <GoogleLogin
                        clientId="448045876292-4h78svvsdr86fbon1s6jlcqnf2sorjpd.apps.googleusercontent.com"
                        render={(renderProps) => (
                          <GoogleLoginButton
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                          />
                        )}
                        buttonText="Login"
                        onSuccess={this.responseGoogle}
                        // onFailure={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                      />
                    </div>
                  </div>
                  ,{/*/ End Form */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Service />
        <Newsletter />
        <Footer />
      </>
    );
  }
}
