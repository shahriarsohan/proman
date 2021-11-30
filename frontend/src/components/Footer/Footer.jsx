import React, { Component } from "react";
import Link from "next/link";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

export default class Footer extends Component {
  state = {
    expand: false,
    isMobile: null,
    isBrowser: null,
  };

  componentDidMount() {
    if (isBrowser) {
      this.setState({
        expand: true,
      });
    }
    if (isMobile) {
      this.setState({ isMobile: true, isBrowser: false });
    } else {
      this.setState({ isMobile: false, isBrowser: true });
    }
  }

  render() {
    return (
      <>
        <div className="colllaing-footer d-block d-sm-block d-md-none d-lg-none">
          <button
            onClick={() => this.setState({ expand: !this.state.expand })}
            className="text-center"
            style={{
              marginTop: "20px",
              padding: "10px",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              position: "relative",
              bottom: "50px",
            }}
          >
            <p style={{ marginLeft: "10px" }}>About Proman</p>
            {this.state.expand ? (
              <i className="material-icons">expand_less</i>
            ) : (
              <i className="material-icons">expand_more</i>
            )}
          </button>
        </div>
        {this.state.expand && (
          <footer className="footer">
            {/* Footer Top */}
            <div className="section">
              <div className="container">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="row"
                >
                  <div
                    className={
                      this.state.isMobile
                        ? "col-lg-3 col-md-6 col-12 text-center"
                        : "col-lg-3 col-md-6 col-12"
                    }
                  >
                    {/* Single Widget */}
                    <div className="single-footer about">
                      <div className="logo">
                        <Link href="/">
                          <a>
                            <img
                              // height="100px"
                              // width="100px"
                              src="/images/proman-logo-new.png"
                              alt="#"
                            />
                          </a>
                        </Link>
                      </div>
                      <p className="text">
                        Founded in 2021, Proman is a lifestyle fashion brand
                        that makes creative, distinctive fashion for the trendy,
                        contemporary Bangali Youth.
                      </p>
                      <p className="call">
                        Got Question? Call us 24/7
                        <span>
                          <a href="tel:+8801309466923">+88013 09466 923</a>
                        </span>
                      </p>
                    </div>
                    {/* End Single Widget */}
                  </div>
                  <div
                    className={
                      this.state.isMobile
                        ? "col-lg-3 col-md-6 col-12 text-center"
                        : "col-lg-3 col-md-6 col-12"
                    }
                  >
                    {/* Single Widget */}
                    <div className="single-footer links">
                      <h4>Information</h4>
                      <ul>
                        <li>
                          <Link href="/about-us/our-story">About Us</Link>
                        </li>

                        <li>
                          <a target="_blank" href="/terms-and-condition">
                            Terms &amp; Conditions
                          </a>
                        </li>
                        <li>
                          <a href="/contact-us">Contact Us</a>
                        </li>
                        <li>
                          <Link href="/careers">Careers</Link>
                        </li>
                        {/* <li>
                          <a href="#">Help</a>
                        </li> */}
                      </ul>
                    </div>
                    {/* End Single Widget */}
                  </div>
                  <div
                    className={
                      this.state.isMobile
                        ? "col-lg-3 col-md-6 col-12 text-center"
                        : "col-lg-3 col-md-6 col-12"
                    }
                  >
                    {/* Single Widget */}
                    <div className="single-footer links">
                      <h4>Customer Service</h4>
                      <ul>
                        <li>
                          <a href="#">Faq</a>
                        </li>

                        <li>
                          <a href="/refund-and-return" target="_blank">
                            Returns
                          </a>
                        </li>
                        <li>
                          <a href="#">Shipping</a>
                        </li>
                        <li>
                          <a href="/privacy-policy" target="_blank">
                            Privacy Policy
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* End Single Widget */}
                  </div>
                  <div
                    className={
                      this.state.isMobile
                        ? "col-lg-3 col-md-6 col-12 text-center"
                        : "col-lg-3 col-md-6 col-12"
                    }
                  >
                    {/* Single Widget */}
                    <div className="single-footer social">
                      <h4>Get In Tuch</h4>
                      {/* Single Widget */}
                      <div className="contact">
                        <ul>
                          <li>H 01,Road 04,Block-A,Section-10</li>
                          <li>Mirpur, Dhaka-1216</li>
                          <li>care@proman.com.bd</li>
                          <li>+88013 09466 923</li>
                        </ul>
                      </div>
                      {/* End Single Widget */}
                      <ul>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.facebook.com/proman.com.bd"
                          >
                            <i className="ti-facebook" />
                          </a>
                        </li>
                        {/* <li>
                          <a href="#">
                            <i className="ti-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="ti-flickr" />
                          </a>
                        </li> */}
                        <li>
                          <a
                            target="_blank"
                            href="https://www.instagram.com/proman.clothing/"
                          >
                            <i className="ti-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* End Single Widget */}
                  </div>
                </div>
              </div>
            </div>
            {/* End Footer Top */}
            <div
              className={this.state.isMobile ? "copyright mb-5" : "copyright"}
            >
              <div className="container">
                <div className="inner">
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <div className="left">
                        <p style={{ color: "#979797" }}>
                          Copyright © 2021 Proman All Rights Reserved.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="right">
                        <img src="/images/ssl-logo-1.png" alt="#" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        )}
      </>
    );
  }
}
