import { withRouter } from "next/router";
import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import { Dropdown, Form, TextArea, Message } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Head from "next/head";
import NavbarDetailsPage from "../../src/components/Navbar/NavbarDetailsPage";
import Navigation from "../../src/components/Navigation";
import Footer from "../../src/components/Footer/Footer";
import Newsletter from "../../src/components/NewsLetter/NewsLetter";
import Service from "../../src/components/Service/Service";
import axios from "axios";
import axiosInstance from "../../src/api/axios";
import LiveChat from "react-livechat";

import { Freshchat } from "reactjs-freshchat";
import "reactjs-freshchat/dist/index.css";

const countryOptions = [
  { key: "af", value: "af", flag: "af", text: "Afghanistan" },
  { key: "ax", value: "ax", flag: "ax", text: "Aland Islands" },
  { key: "al", value: "al", flag: "al", text: "Albania" },
  { key: "dz", value: "dz", flag: "dz", text: "Algeria" },
  { key: "as", value: "as", flag: "as", text: "American Samoa" },
  { key: "ad", value: "ad", flag: "ad", text: "Andorra" },
  { key: "ao", value: "ao", flag: "ao", text: "Angola" },
  { key: "ai", value: "ai", flag: "ai", text: "Anguilla" },
  { key: "ag", value: "ag", flag: "ag", text: "Antigua" },
  { key: "ar", value: "ar", flag: "ar", text: "Argentina" },
  { key: "am", value: "am", flag: "am", text: "Armenia" },
  { key: "aw", value: "aw", flag: "aw", text: "Aruba" },
  { key: "au", value: "au", flag: "au", text: "Australia" },
  { key: "at", value: "at", flag: "at", text: "Austria" },
  { key: "az", value: "az", flag: "az", text: "Azerbaijan" },
  { key: "bs", value: "bs", flag: "bs", text: "Bahamas" },
  { key: "bh", value: "bh", flag: "bh", text: "Bahrain" },
  { key: "bd", value: "bd", flag: "bd", text: "Bangladesh" },
  { key: "bb", value: "bb", flag: "bb", text: "Barbados" },
  { key: "by", value: "by", flag: "by", text: "Belarus" },
  { key: "be", value: "be", flag: "be", text: "Belgium" },
  { key: "bz", value: "bz", flag: "bz", text: "Belize" },
  { key: "bj", value: "bj", flag: "bj", text: "Benin" },
];

class Contact extends Component {
  state = {
    isMobile: null,
    isBrowser: null,
    email: "",
    category: "",
    sub_category: "",
    subject: "",
    meesage: "",
    loading: false,
    success: null,
    error: "",
    initChat: false,
  };

  componentDidMount() {
    if (isMobile) {
      this.setState({ isMobile: true, isBrowser: false });
    } else {
      this.setState({ isMobile: false, isBrowser: true });
    }
    this.setState({
      initChat: true,
    });
  }

  handleSubmit = (e) => {
    this.setState({ loading: true });
    e.preventDefault();

    const data = {
      email: this.state.email,
      category: this.state.category,
      sub_category: this.state.sub_category,
      subject: this.state.subject,
      meesage: this.state.meesage,
    };

    axiosInstance
      .post("/contact/create", data)
      .then((res) => {
        this.setState({ loading: false, success: true });
      })
      .catch((err) =>
        this.setState({
          loading: false,
          success: false,
          error: err.response.data,
        })
      );
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChangeDropdownSub = (e, data) => {
    this.setState({ sub_category: data.value });
  };

  handleChangeDropdownCategory = (e, data) => {
    this.setState({ category: data.value });
  };

  render() {
    // console.log(this.state.error);
    return (
      <>
        <NavbarDetailsPage
          route={this.props.router.back}
          name="Our Story"
          isMobile={this.state.isMobile}
        />
        {this.state.initChat === true && (
          <Freshchat token={"ce224b8a-926b-4f4f-9627-c3b2296f2ba6"} />
        )}
        <div className="container">
          <div className="row p-5">
            <div className="col-6 mt-5">
              {/* <p style={{ fontWeight: "bold", fontSize: "40px" }}> */}
              <div className="checkout-custom-heading mb-5">
                <h2>What’s your query about?</h2>
              </div>
              {/* </p> */}
            </div>
            <div className="col-6 mt-5">
              <img src="https://images.bewakoof.com/web/airoplane.png" />
            </div>
          </div>
          <div className="row p-5">
            <div className="col-12">
              <div className="row">
                <div className="col-md-4 p-2">
                  <div className="checkout-custom-heading">
                    <h2>Address</h2>
                  </div>
                  <div className="contact-address p-2">
                    <p>Bewakoof Brands Pvt. Ltd.</p>
                    <p>WeWorks Chromium,</p>
                    <p>3rd Floor, B114-116,</p>
                    <p>Next to L&T Flyover, Jogeshwari Vikhroli Link Road,</p>
                    <p>Andheri (East) Mumbai, Maharashtra, 400076</p>
                    <br />
                    <span style={{ marginTop: "30px" }}>
                      You can reach us at{" "}
                      <span>
                        <a
                          href="mailto:care@proman.clothing"
                          style={{ fontWeight: "bold" }}
                        >
                          care@proman.clothing
                        </a>
                      </span>{" "}
                      with all queries. We do not have a Bewakoof customer care
                      number.
                    </span>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="checkout-custom-heading">
                    <h2>Give us your query details</h2>
                  </div>
                  <Form
                    loading={this.state.loading}
                    onSubmit={this.handleSubmit}
                  >
                    <div className="p-2">
                      <Dropdown
                        fluid
                        search
                        selection
                        name="category"
                        placeholder="Category"
                        onChange={this.handleChangeDropdownCategory}
                        options={countryOptions}
                      />
                    </div>
                    <div className="p-2">
                      <Dropdown
                        placeholder="Select Country"
                        fluid
                        search
                        selection
                        placeholder="Sub Category"
                        onChange={this.handleChangeDropdownSub}
                        options={countryOptions}
                      />
                    </div>
                    <div className="p-2">
                      <input
                        as={Form.Input}
                        fluid
                        value={this.state.email}
                        onChange={this.handleChange}
                        label="Email"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="p-2">
                      <input
                        as={Form.Input}
                        fluid
                        value={this.state.subject}
                        onChange={this.handleChange}
                        label="Subject"
                        name="subject"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="p-2">
                      <TextArea
                        placeholder="Address"
                        placeholder="Tell us more"
                        value={this.state.meesage}
                        onChange={this.handleChange}
                        label="Address"
                        name="meesage"
                        placeholder="meesage"
                      />
                    </div>

                    <button type="submit" className="btn m-2">
                      Send
                    </button>
                  </Form>
                  {this.state.error ? (
                    <Message warning>
                      <Message.Header>Something went wrong</Message.Header>
                      <p>
                        <span style={{ marginTop: "30px" }}>
                          You can reach us at{" "}
                          <span>
                            <a
                              href="mailto:care@proman.clothing"
                              style={{ fontWeight: "bold" }}
                            >
                              care@proman.clothing
                            </a>
                          </span>{" "}
                          with all queries. We do not have a Bewakoof customer
                          care number.
                        </span>
                      </p>
                    </Message>
                  ) : (
                    ""
                  )}
                  {this.state.success ? (
                    <Message info>
                      <Message.Header>Successful</Message.Header>
                      <p>One of our customer manager will reply you ASAP</p>
                    </Message>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Service />
        <Newsletter />
        <Footer />
        <Navigation />
      </>
    );
  }
}

export default withRouter(Contact);
