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
import axiosInstance from "../../src/api/axios";

import ProfileNavbar from "../../src/components/Navbar/ProfileNavbar";

class WishList extends Component {
  state = {
    isMobile: null,
    isBrowser: null,
    wishlist: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.fetchWishList();
    if (isMobile) {
      this.setState({ isMobile: true, isBrowser: false });
    } else {
      this.setState({ isMobile: false, isBrowser: true });
    }
  }

  fetchWishList = () => {
    this.setState({ loading: true });
    axiosInstance
      .get("/wishlist/list")
      .then((res) => {
        this.setState({
          wishlist: res.data,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({ loading: false, error: err.response.data });
      });
  };

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
              <div className="profile-section">
                {/* <div className="user-info"> */}
                <div className="cart_wrapper">
                  <div className="cart_lists">
                    <div className="cart_title">
                      <span className="material-icons-outlined">
                        local_mall
                      </span>
                      My Wishlist
                    </div>
                    <div className="cart_list_wrap">
                      <div className="cart_responsive">
                        {this.state.wishlist
                          ? this.state.wishlist.map((data) => {
                              return (
                                <div className="tr_item">
                                  <div className="td_item item_img">
                                    <img src={data.products.thumbnail} />
                                  </div>
                                  <div className="td_item item_name">
                                    <label
                                      style={{
                                        textTransform: "capitalize",
                                        fontFamily: "Ubuntu",
                                      }}
                                      className="main"
                                    >
                                      <Link href="/">{data.products.name}</Link>
                                    </label>
                                  </div>
                                  {/* <div className="td_item item_color">
                        <label>Qty :4 </label>
                      </div> */}

                                  <div className="td_item item_price">
                                    <label>
                                      <img
                                        width="15px"
                                        height="15px"
                                        src="/images/taka.png"
                                      />
                                      5
                                    </label>
                                  </div>
                                  <div className="td_item item_price">
                                    <label>
                                      <img
                                        width="15px"
                                        height="15px"
                                        src="/images/taka.png"
                                      />
                                      5
                                    </label>
                                  </div>
                                  <div className="td_item item_price">
                                    <label>
                                      <img
                                        width="15px"
                                        height="15px"
                                        src="/images/taka.png"
                                      />
                                      5
                                    </label>
                                  </div>
                                  <div className="td_item item_price">
                                    <img
                                      width="30px"
                                      height="30px"
                                      src="/images/plus.png"
                                    />
                                  </div>

                                  <div className="td_item item_remove">
                                    <span
                                      onClick={() => this.handleDelete(item.id)}
                                      className="material-icons"
                                    >
                                      close
                                    </span>
                                  </div>
                                </div>
                              );
                            })
                          : ""}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(WishList);