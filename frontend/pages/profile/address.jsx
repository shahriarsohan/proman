import Link from "next/link";
import { withRouter } from "next/router";
import React, { Component } from "react";
import { isMobile } from "react-device-detect";

import "semantic-ui-css/semantic.min.css";

import {
  Form,
  Input,
  TextArea,
  Button,
  Select,
  List,
  Segment,
  Image,
} from "semantic-ui-react";

import ProfileNavbar from "../../src/components/Navbar/ProfileNavbar";

class Address extends Component {
  state = {
    isMobile: null,
    isBrowser: null,
  };

  componentDidMount() {
    if (isMobile) {
      this.setState({ isMobile: true, isBrowser: false });
    } else {
      this.setState({ isMobile: false, isBrowser: true });
    }
  }

  render() {
    return (
      <div>
        <ProfileNavbar
          // route={this.props.router.back}
          name="Account Overview"
          isMobile={this.state.isMobile}
        />
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 mt-5">
              <Segment>
                <List divided relaxed>
                  <List.Item>
                    <div className="p-2">
                      <Link href="/profile/overview">Account Overview</Link>
                    </div>
                  </List.Item>
                  <List.Item>
                    <div className="p-2">
                      <Link href="/profile/address">Address Book</Link>
                    </div>
                  </List.Item>
                  <List.Item>
                    <div className="p-2">
                      <Link href="/profile/orders">My Orders</Link>
                    </div>
                  </List.Item>
                  <List.Item>
                    <div className="p-2">
                      <Link href="/profile/wishlist">My Wishlist</Link>
                    </div>
                  </List.Item>
                  <List.Item>
                    <div className="p-2">
                      <Link href="/profile/cancellations">
                        My Cancellations
                      </Link>
                    </div>
                  </List.Item>
                  <List.Item>
                    <div className="p-2">
                      <Link href="/profile/review">My Review</Link>
                    </div>
                  </List.Item>
                </List>
              </Segment>
            </div>

            <div className="col-md-8 col-sm-12 mt-5 option-list">
              <h4>Shipping Address</h4>
              <div className="profile-section">
                <div className="user-info">
                  <Form>
                    <Form.Group widths="equal">
                      <Form.Field
                        id="form-input-control-first-name"
                        control={Input}
                        label="First name"
                        placeholder="First name"
                      />
                      <Form.Field
                        id="form-input-control-last-name"
                        control={Input}
                        label="Last name"
                        placeholder="Last name"
                      />
                      <Form.Field
                        control={Select}
                        label={{
                          children: "Gender",
                          htmlFor: "form-select-control-gender",
                        }}
                        placeholder="Gender"
                        search
                        searchInput={{ id: "form-select-control-gender" }}
                      />
                    </Form.Group>
                    <Form.Field
                      id="form-textarea-control-opinion"
                      control={TextArea}
                      label="Opinion"
                      placeholder="Opinion"
                    />
                    <Form.Field
                      id="form-input-control-error-email"
                      control={Input}
                      label="Email"
                      placeholder="joe@schmoe.com"
                      error={{
                        content: "Please enter a valid email address",
                        pointing: "below",
                      }}
                    />
                    <button className="btn">Apply</button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Address);
