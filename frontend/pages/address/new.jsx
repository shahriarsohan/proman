import React, { Component } from "react";
import { withRouter } from "next/router";

import { Dropdown, Form, TextArea } from "semantic-ui-react";
import Footer from "../../src/components/Footer/Footer";
import NavbarTwo from "../../src/components/Navbar/NavbarTwo";
import NewsLetter from "../../src/components/NewsLetter/NewsLetter";
import Service from "../../src/components/Service/Service";
import NavbarDetailsPage from "../../src/components/Navbar/NavbarDetailsPage";
import { isMobile } from "react-device-detect";
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
  { key: "Afghanistan", value: "Afghanistan", text: "Afghanistan" },
  { key: "Aland Islands", value: "Aland Islands", text: "Aland Islands" },
  { key: "Albania", value: "Albania", text: "Albania" },
  { key: "Algeria", value: "Algeria", text: "Algeria" },
  { key: "American Samoa", value: "American Samoa", text: "American Samoa" },
  { key: "Andorra", value: "Andorra", text: "Andorra" },
  { key: "Angola", value: "Angola", text: "Angola" },
  { key: "Anguilla", value: "Anguilla", text: "Anguilla" },
  { key: "Antigua", value: "Antigua", text: "Antigua" },
  { key: "Argentina", value: "Argentina", text: "Argentina" },
  { key: "Argentina", value: "Argentina", text: "Argentina" },
  { key: "Aruba", value: "Aruba", text: "Aruba" },
  { key: "Australia", value: "Australia", text: "Australia" },
  { key: "Austria", value: "Austria", text: "Austria" },
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
    isMobile: false,
    recipient_landmark: "",

    city_options: [
      // { key: "Aruba", value: "Aruba", text: "Aruba" },
      // { key: "Australia", value: "Australia", text: "Australia" },
      // { key: "Austria", value: "Austria", text: "Austria" },
    ],
  };

  handleChange = (e) => {
    // //console.log(e.target.value)
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    if (isMobile) {
      this.setState({ isMobile: true, isBrowser: false });
    } else {
      this.setState({ isMobile: false, isBrowser: true });
    }
  }

  onChangeRegion = (e, data) => {
    this.setState({ region: data.value }, () => {
      if (data.value === "dhaka") {
        this.setState({
          city_options: [
            { key: "Dhaka", value: "Dhaka", text: "Dhaka" },
            { key: "Faridpur", value: "Faridpur", text: "Faridpur" },
            { key: "Gazipur", value: "Gazipur", text: "Gazipur" },
            { key: "Gopalganj", value: "Gopalganj", text: "Gopalganj" },
            { key: "Kishoreganj", value: "Kishoreganj", text: "Kishoreganj" },
            { key: "Madaripur", value: "Madaripur", text: "Madaripur" },
            { key: "Manikganj", value: "Narayanganj", text: "Narayanganj" },
            { key: "Narsingdi", value: "Narsingdi", text: "Narsingdi" },
            { key: "Rajbari", value: "Rajbari", text: "Rajbari" },
            { key: "Shariatpur", value: "Shariatpur", text: "Shariatpur" },
            { key: "Tangail", value: "Tangail", text: "Tangail" },
          ],
        });
      } else if (data.value === "rajshahi") {
        this.setState({
          city_options: [
            { key: "Rajshahi", value: "Rajshahi", text: "Rajshahi" },
            { key: "Natore", value: "Natore", text: "Natore" },
            { key: "Pabna", value: "Pabna", text: "Pabna" },
            { key: "Bogura", value: "Bogura", text: "Bogura" },
            {
              key: "Chapainawabganj",
              value: "Chapainawabganj",
              text: "Chapainawabganj",
            },
            { key: "Joypurhat", value: "Joypurhat", text: "Joypurhat" },
            { key: "Naogaon", value: "Naogaon", text: "Naogaon" },
            { key: "Sirajganj", value: "Sirajganj", text: "Sirajganj" },
          ],
        });
      } else if (data.value === "rangpur") {
        this.setState({
          city_options: [
            { key: "Rangpur", value: "Rangpur", text: "Rangpur" },
            { key: "Gaibandha", value: "Gaibandha", text: "Gaibandha" },
            { key: "Nilphamari", value: "Nilphamari", text: "Nilphamari" },
            { key: "Kurigram", value: "Kurigram", text: "Kurigram" },
            { key: "Lalmonirhat", value: "Lalmonirhat", text: "Lalmonirhat" },
            { key: "Dinajpur", value: "Dinajpur", text: "Dinajpur" },
            { key: "Thakurgaon", value: "Thakurgaon", text: "Thakurgaon" },
            { key: "Panchagarh", value: "Panchagarh", text: "Panchagarh" },
          ],
        });
      } else if (data.value === "chattogram") {
        this.setState({
          city_options: [
            { key: "Chittagong", value: "Chittagong", text: "Chittagong" },
            { key: "Rangamati", value: "Rangamati", text: "Rangamati" },
            { key: "Bandarban", value: "Bandarban", text: "Bandarban" },
            { key: "Khagrachari", value: "Khagrachari", text: "Khagrachari" },
            { key: "Cox's Bazar", value: "Cox's Bazar", text: "Cox's Bazar" },
            { key: "Feni", value: "Feni", text: "Feni" },
            {
              key: "Brahmanbaria",
              value: "Brahmanbaria",
              text: "Brahmanbaria",
            },
            { key: "Lakshmipur", value: "Lakshmipur", text: "Lakshmipur" },
            { key: "Comilla", value: "Comilla", text: "Comilla" },
            { key: "Chandpur", value: "Chandpur", text: "Chandpur" },
            { key: "Noakhali", value: "Noakhali", text: "Noakhali" },
          ],
        });
      } else if (data.value === "khulna") {
        this.setState({
          city_options: [
            { key: "Satkhira", value: "Satkhira", text: "Satkhira" },
            { key: "Jessore", value: "Jessore", text: "Jessore" },
            { key: "Chuadanga", value: "Chuadanga", text: "Chuadanga" },
            { key: "Narail", value: "Narail", text: "Narail" },
            { key: "Bagerhat", value: "Bagerhat", text: "Bagerhat" },
            { key: "Magura", value: "Magura", text: "Magura" },
            { key: "Jhenaidah", value: "Jhenaidah", text: "Jhenaidah" },
            { key: "Kushtia", value: "Kushtia", text: "Kushtia" },
            { key: "Meherpur", value: "Meherpur", text: "Meherpur" },
          ],
        });
      } else if (data.value === "shylhet") {
        this.setState({
          city_options: [
            { key: "Habiganj", value: "Habiganj", text: "Habiganj" },
            { key: "Moulvibazar", value: "Moulvibazar", text: "Moulvibazar" },
            { key: "Sunamganj", value: "Sunamganj", text: "Sunamganj" },
            { key: "Sylhet", value: "Sylhet", text: "Sylhet" },
          ],
        });
      } else if (data.value === "barishal") {
        this.setState({
          city_options: [
            { key: "Barisal", value: "Barisal", text: "Barisal" },
            { key: "Barguna", value: "Barguna", text: "Barguna" },
            { key: "Bhola", value: "Bhola", text: "Bhola" },
            { key: "Jhalokati", value: "Jhalokati", text: "Jhalokati" },
            { key: "Patuakhali", value: "Patuakhali", text: "Patuakhali" },
            { key: "Pirojpur", value: "Pirojpur", text: "Pirojpur" },
          ],
        });
      } else if (data.value === "mymensingh") {
        this.setState({
          city_options: [
            { key: "Mymensingh", value: "Mymensingh", text: "Mymensingh" },
            { key: "Netrokona", value: "Netrokona", text: "Netrokona" },
            { key: "Jamalpur", value: "Jamalpur", text: "Jamalpur" },
            { key: "Sherpur", value: "Sherpur", text: "Sherpur" },
          ],
        });
      }
    });
  };

  onChangeCity = (e, data) => {
    this.setState({ city: data.value });
  };

  handleSubmit = (e) => {
    this.setState({ loading: true });
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
      recipient_landmark: this.state.recipient_landmark,
    };
    const config = {
      headers: {
        authorization: "Token " + localStorage.getItem("access_token"),
      },
    };
    axios
      .post("http://127.0.0.1:8000/v1/address/create", data, config)
      .then((res) => {
        // this.setState({ loading: false, cart: res.data });
        //console.log(res);
        // if (res.status === 201) {
        //   this.props.router.push("/user/checkout");
        // }
        // console.log(res.status);
        // console.log(this.props.router);
        // if (this.props.router.query.redirectURL) {
        this.props.router.push(this.props.router.query.redirectURL);
        // } else {
        // this.props.router.push("/");
        // }
      })
      .catch((err) => {
        //console.log(err);
      });
  };

  render() {
    console.log("redirect url", this.props.router.query.redirectURL);
    return (
      <>
        <NavbarDetailsPage isMobile={this.state.isMobile} />
        <section className="shop checkout section container p-4 ">
          <p
            style={{
              fontFamily: "Ubuntu",
              fontWeight: "600",
              fontSize: "20px",
            }}
            className="text-center"
          >
            Create Address
          </p>
          <hr />
          <Form
            loading={this.state.loading}
            onSubmit={this.handleSubmit}
            className="form mt-5"
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
                  {/* <label>
                    Postal Code<span>*</span>
                  </label> */}
                  <input
                    type="text"
                    name="zip"
                    placeholder="Postal Code"
                    value={this.state.zip}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-6">
                <Dropdown
                  placeholder="Select Region"
                  fluid
                  search
                  selection
                  onChange={this.onChangeRegion}
                  options={region}
                />
              </div>
              <div className="col-lg-6 col-md-6 col-6">
                <Dropdown
                  placeholder="Select City"
                  fluid
                  search
                  selection
                  onChange={this.onChangeCity}
                  options={this.state.city_options}
                />
              </div>
              {/* <div className="col-12 mt-4">
                <Dropdown
                  placeholder="Select Area"
                  fluid
                  search
                  selection
                  onChange={this.onChangeArea}
                  options={countryOptions}
                />
              </div> */}
              <div className="col-12 mt-3">
                <div className="form-group">
                  {/* <label>
                    Postal Code<span>*</span>
                  </label> */}
                  <input
                    type="text"
                    name="recipient_landmark"
                    placeholder="Nearby landmark (Optinal)"
                    value={this.state.recipient_landmark}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-12 mt-3">
                <TextArea
                  placeholder="Address"
                  value={this.state.street_address}
                  onChange={this.handleChange}
                  label="Address"
                  name="street_address"
                />
              </div>

              <div className="col-12">
                <button className="btn mt-3" type="submit">
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
