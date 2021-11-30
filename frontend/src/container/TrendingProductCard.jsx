import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";
import { withAlert } from "react-alert";

import { fetchUserOrder } from "../store/actions/cart";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { withRouter } from "next/router";
import axiosInstance from "../api/axios";
import { addToWish } from "../store/actions/wishlist";

class TrendingProductCard extends Component {
  state = {
    modal: false,
    loading: true,
    error: "",
    details: {},
    order_added_success: null,
    order_added_error: null,
  };

  handleAddToWish = (value) => {
    console.log(value);
    const data = {
      slug: value,
      alert: this.props.alert,
    };
    this.props.addToWish(data, this.props.alert);
  };

  handleAddToCart = (slug) => {
    const product = {
      slug: slug,
    };

    const config = {
      headers: {
        authorization: "Token " + localStorage.getItem("access_token"),
      },
    };
    // //console.log(config);
    axios
      .post("http://192.168.1.108:8000/v1/cart/add-to-cart", product, config)
      .then((res) => {
        this.props.fetchUserOrder(),
          this.setState({ order_added_success: true });
        setTimeout(() => {
          this.setState({ order_added_success: false });
        }, 10);
      })
      .catch((err) => {
        this.setState({ order_added_error: true });
        setTimeout(() => {
          this.setState({ order_added_error: false });
        }, 10);
      });
  };

  showModalwithInfo = (slug) => {
    this.setState({ modal: !this.state.modal });
    //console.log(slug);

    axios
      .get(`http://192.168.1.108:8000/v1/products/details/${slug}`)
      .then((res) =>
        this.setState({ loading: false, details: res.data.products })
      )
      .catch((err) =>
        this.setState({ loading: false, error: err.response.data })
      );
  };

  onHide = () => {
    this.setState({ modal: false });
  };

  redirectToLogin = () => {
    //console.log("redirecting");
    this.props.router.push({
      pathname: "/user/login/",
      query: {
        redirectURL: this.props.router.asPath,
      },
      asPath: "main",
    });
  };

  onSubmitCart = (slug) => {
    this.setState({
      loading: false,
    });

    axiosInstance
      .post("/wishlist/add", {
        slug: slug,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { modal, order_added_success, order_added_error } = this.state;
    //console.log(order_added_success);
    console.log(this.props.thumbnail);

    if (typeof window !== "undefined") {
      var token = localStorage.getItem("access_token");
    }
    return (
      <>
        {order_added_success
          ? NotificationManager.success("success message")
          : ""}
        {order_added_error ? NotificationManager.error("error message") : ""}
        <div className="col-xl-3 col-lg-3 col-md-4 col-6">
          <div className="single-product">
            <div className="product-img">
              <Link href={`/details/${this.props.slug}`}>
                <a>
                  <Image
                    className="default-img"
                    src={
                      this.props.thumbnail
                        ? `${this.props.thumbnail}`
                        : "https://via.placeholder.com/550x750"
                    }
                    height="500"
                    width="400"
                    alt={this.props.name}
                  />

                  {this.props.bogo && <span className="bogo">BOGO</span>}
                </a>
              </Link>
              <div className="button-head">
                <div className="product-action">
                  {/* <a
                    data-toggle="modal"
                    // data-target="#exampleModal"
                    title="Quick View"
                    href="#"
                  >
                    <i
                      onClick={() => this.showModalwithInfo(this.props.slug)}
                      className=" ti-eye"
                    />
                    <span>Quick Shop</span>
                  </a> */}
                  <a
                    title="Wishlist"
                    onClick={
                      token === null
                        ? () => this.redirectToLogin()
                        : () => this.handleAddToWish(this.props.slug)
                    }
                  >
                    <i className=" ti-heart " />
                    <span>Add to Wishlist</span>
                  </a>
                  {/* <a title="Compare" href="#">
                    <i className="ti-bar-chart-alt" />
                    <span>Add to Compare</span>
                  </a> */}
                </div>
                {/* <div className="product-action-2">
                  <button
                    onClick={() => this.handleAddToCart(this.props.slug)}
                    title="Add to cart"
                    href="#"
                  >
                    Add to cart
                  </button>
                </div> */}
              </div>
            </div>
            <div className="product-content text-capitalize">
              <h3 className="product-head">
                <Link href={`/details/${this.props.slug}`}>
                  {this.props.name}
                </Link>
              </h3>
              {this.props.discount_price ? (
                <div className="product-price">
                  <span style={{ marginRight: "10px" }}>
                    <img width="15px" height="15px" src="/images/taka.png" />
                    {this.props.discount_price}
                    <span style={{ marginLeft: "10px" }} className="old">
                      <img width="15px" height="15px" src="/images/taka.png" />
                      {this.props.price}
                    </span>
                  </span>
                  {this.props.few_left && (
                    <div className="sellingFastWrapperForProduct-few">
                      <p>Few Left</p>
                    </div>
                  )}
                  {this.props.out_of_stock && (
                    <div className="sellingFastWrapperForProduct">
                      <p>Out of stock</p>
                    </div>
                  )}
                  <span
                    style={{ float: "right", color: "red", fontWeight: "bold" }}
                  >
                    -{this.props.discount_percentage}%
                  </span>
                </div>
              ) : (
                <div className="product-price">
                  <span style={{ marginLeft: "10px" }} className="old">
                    <img width="15px" height="15px" src="/images/taka.png" />
                    {this.props.price}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* {modal && (
          <Modal onHide={this.onHide} show={true}>
            <Modal.Body>
              <QuickLookModal
                details={this.state.details}
                loading={this.state.loading}
              />
            </Modal.Body>
          </Modal>
        )} */}
        <NotificationContainer />
      </>
    );
  }
}

export default connect(null, { fetchUserOrder, addToWish })(
  withRouter(withAlert()(TrendingProductCard))
);
