import React, { Component } from "react";
import { withRouter } from "next/router";

import { Dropdown, Form, TextArea } from "semantic-ui-react";
import Footer from "../../src/components/Footer/Footer";
import NavbarTwo from "../../src/components/Navbar/NavbarTwo";
import NewsLetter from "../../src/components/NewsLetter/NewsLetter";
import Service from "../../src/components/Service/Service";

import "semantic-ui-css/semantic.min.css";
import axios from "axios";

const region = [
  { key: "dhaka", value: "dhaka", text: "Dhaka" },
  { key: "rajshahi", value: "rajshahi", text: "Rajshahi" },
  { key: "rangpur", value: "rangpur", text: "Rangpur" },
  { key: "chattogram", value: "chattogram", text: "Chattogram" },
  { key: "khulna", value: "khulna", text: "Khulna" },
  { key: "shylhet", value: "shylhet", text: "Shylhet" },
  { key: "barishal", value: "barishal", text: "Barishal" },
  { key: "mymensingh", value: "mymensingh", text: "Mymensingh" },
];

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

class NewAddress extends Component {
  state = {
    f_name: "",
    l_name: "",
    phone_number: "",
    email: "",
    zip: "",
    region: "",
    city: "",
    area: "",
    street_address: "",
    loading: null,

    city_options: [
      { key: "af", value: "af", flag: "af", text: "Afghanistan" },
      { key: "ax", value: "ax", flag: "ax", text: "Aland Islands" },
      { key: "al", value: "al", flag: "al", text: "Albania" },
    ],
  };

  handleChange = (e) => {
    // //console.log(e.target.value)
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeRegion = (e, data) => {
    this.setState({ region: data.value }, () => {
      if (data.value === "dhaka") {
        this.setState({
          city_options: [
            { key: "be", value: "be", flag: "be", text: "Belgium" },
            { key: "bz", value: "bz", flag: "bz", text: "Belize" },
            { key: "bj", value: "bj", flag: "bj", text: "Benin" },
          ],
        });
      } else if (data.value === "rajshahi") {
        this.setState({
          city_options: [
            { key: "be", value: "be", flag: "be", text: "Belgium" },
            { key: "bz", value: "bz", flag: "bz", text: "Belize" },
            { key: "bj", value: "bj", flag: "bj", text: "Benin" },
          ],
        });
      } else if (data.value === "rangpur") {
        this.setState({
          city_options: [
            { key: "be", value: "be", flag: "be", text: "Belgium" },
            { key: "bz", value: "bz", flag: "bz", text: "Belize" },
            { key: "bj", value: "bj", flag: "bj", text: "Benin" },
          ],
        });
      } else if (data.value === "chattogram") {
        this.setState({
          city_options: [
            { key: "be", value: "be", flag: "be", text: "Belgium" },
            { key: "bz", value: "bz", flag: "bz", text: "Belize" },
            { key: "bj", value: "bj", flag: "bj", text: "Benin" },
          ],
        });
      } else if (data.value === "khulna") {
        this.setState({
          city_options: [
            { key: "ad", value: "ad", flag: "ad", text: "Andorra" },
            { key: "ao", value: "ao", flag: "ao", text: "Angola" },
            { key: "ai", value: "ai", flag: "ai", text: "Anguilla" },
          ],
        });
      } else if (data.value === "shylhet") {
        this.setState({
          city_options: [
            { key: "bh", value: "bh", flag: "bh", text: "Bahrain" },
            { key: "bd", value: "bd", flag: "bd", text: "Bangladesh" },
            { key: "bb", value: "bb", flag: "bb", text: "Barbados" },
            { key: "by", value: "by", flag: "by", text: "Belarus" },
          ],
        });
      } else if (data.value === "barishal") {
        this.setState({
          city_options: [
            { key: "az", value: "az", flag: "az", text: "Azerbaijan" },
            { key: "bs", value: "bs", flag: "bs", text: "Bahamas" },
          ],
        });
      } else if (data.value === "mymensingh") {
        this.setState({
          city_options: [
            { key: "au", value: "au", flag: "au", text: "Australia" },
            { key: "at", value: "at", flag: "at", text: "Austria" },
          ],
        });
      }
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      f_name: this.state.f_name,
      l_name: this.state.l_name,
      alternate_phone_number: this.state.phone_number,
      email: this.state.email,
      region: this.state.region,
      city: this.state.city,
      area: this.state.area,
      street_address: this.state.street_address,
      zip_code: this.state.zip,
    };
    const config = {
      headers: {
        authorization: "Token " + localStorage.getItem("access_token"),
      },
    };
    axios
      .post("http://192.168.0.8:8000/v1/address/create", data, config)
      .then((res) => {
        // this.setState({ loading: false, cart: res.data });
        //console.log(res);
        if (res.status === 201) {
          this.props.router.push("/user/checkout");
        }
      })
      .catch((err) => {
        //console.log(err);
      });
  };

  render() {
    return (
      <>
        <NavbarTwo />
        <section className="shop checkout section container p-4">
          <p>Create Address</p>
          <Form
            loading={this.state.loading}
            onSubmit={this.handleSubmit}
            className="form"
            method="post"
            action="#"
          >
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="form-group">
                  <input
                    as={Form.Input}
                    fluid
                    value={this.state.f_name}
                    onChange={this.handleChange}
                    label="First Name"
                    name="f_name"
                    placeholder="First Name"
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-12">
                <div className="form-group">
                  <input
                    as={Form.Input}
                    fluid
                    value={this.state.l_name}
                    onChange={this.handleChange}
                    label="Last Name"
                    name="l_name"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="form-group">
                  <input
                    as={Form.Input}
                    fluid
                    value={this.state.phone_number}
                    onChange={this.handleChange}
                    label="Phone Number"
                    name="phone_number"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-12">
                <div className="form-group">
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
              </div>

              <div className="col-12">
                <div className="form-group">
                  <label>
                    Postal Code<span>*</span>
                  </label>
                  <input
                    type="text"
                    name="zip"
                    placeholder
                    name="zip"
                    value={this.state.zip}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-4">
                <Dropdown
                  placeholder="Select Region"
                  fluid
                  search
                  selection
                  onChange={this.onChangeRegion}
                  options={region}
                />
              </div>
              <div className="col-lg-4 col-md-4 col-4">
                <Dropdown
                  placeholder="Select City"
                  fluid
                  search
                  selection
                  onChange={this.onChangeCity}
                  options={this.state.city_options}
                />
              </div>
              <div className="col-lg-4 col-md-4 col-4">
                <Dropdown
                  placeholder="Select Area"
                  fluid
                  search
                  selection
                  onChange={this.onChangeArea}
                  options={countryOptions}
                />
              </div>

              <div className="col-lg-12 col-md-12 col-12 mt-3">
                <TextArea
                  placeholder="Address"
                  placeholder="Tell us more"
                  value={this.state.street_address}
                  onChange={this.handleChange}
                  label="Address"
                  name="street_address"
                  placeholder="Address"
                />
              </div>

              {/* <div className="col-lg-6 col-md-6 col-12">
                          <div className="form-group">
                            <label>
                              Company<span>*</span>
                            </label>
                            <select name="company_name" id="company">
                              <option value="company" selected="selected">
                                Microsoft
                              </option>
                              <option>Apple</option>
                              <option>Xaiomi</option>
                              <option>Huawer</option>
                              <option>Wpthemesgrid</option>
                              <option>Samsung</option>
                              <option>Motorola</option>
                            </select>
                          </div>
                        </div> */}
              <div className="col-12">
                <button className="btn" type="submit">
                  Save
                </button>
              </div>
            </div>
          </Form>
        </section>
        <Service />
        <NewsLetter />
        <Footer />
      </>
    );
  }
}

export default withRouter(NewAddress);
