import React, { Component } from "react";
import Link from "next/link";
import { Modal } from "react-bootstrap";
import axios from "axios";

import QuickLookModal from "../container/QuickLookModal";

export default class TrendingProductCard extends Component {
  state = {
    modal: false,
    loading: true,
    error: "",
    details: {},
  };

  handleAddToCart = (slug) => {
    const product = {
      slug: slug,
    };

    const config = {
      headers: {
        authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    };
    // console.log(config);
    axios
      .post("http://127.0.0.1:8000/api/v1/cart/add-to-cart", product, config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  showModalwithInfo = (slug) => {
    this.setState({ modal: !this.state.modal });
    console.log(slug);

    axios
      .get(`http://127.0.0.1:8000/api/v1/products/details/${slug}`)
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

  render() {
    const { modal } = this.state;
    // console.log(this.props);
    return (
      <>
        <div className="col-xl-3 col-lg-3 col-md-4 col-5">
          <div className="single-product">
            <div className="product-img">
              <a href="product-details.html">
                <img
                  className="default-img"
                  src={
                    this.props.thumbnail
                      ? `http://127.0.0.1:8000${this.props.thumbnail}`
                      : "https://via.placeholder.com/550x750"
                  }
                  alt={this.props.name}
                />
                <img
                  className="hover-img"
                  src={
                    this.props.thumbnail
                      ? `http://127.0.0.1:8000${this.props.thumbnail}`
                      : "https://via.placeholder.com/550x750"
                  }
                  alt="#"
                />
              </a>
              <div className="button-head">
                <div className="product-action">
                  <a
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
                  </a>
                  <a title="Wishlist" href="#">
                    <i className=" ti-heart " />
                    <span>Add to Wishlist</span>
                  </a>
                  <a title="Compare" href="#">
                    <i className="ti-bar-chart-alt" />
                    <span>Add to Compare</span>
                  </a>
                </div>
                <div className="product-action-2">
                  <button
                    onClick={() => this.handleAddToCart(this.props.slug)}
                    title="Add to cart"
                    href="#"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className="product-content">
              <h3>
                <Link href={`/details/${this.props.slug}`}>
                  {this.props.name}
                </Link>
              </h3>
              <div className="product-price">
                <span>$29.00</span>
              </div>
            </div>
          </div>
        </div>

        {modal && (
          <Modal onHide={this.onHide} show={true}>
            <Modal.Body>
              <QuickLookModal
                details={this.state.details}
                loading={this.state.loading}
              />
            </Modal.Body>
          </Modal>
        )}
      </>
    );
  }
}
