import React from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";

import QuickLookModal from "../container/QuickLookModal";
import Link from "next/link";

class BestSellingCard extends React.Component {
  state = {
    modal: false,
    loading: true,
    error: "",
    details: {},
  };

  showModalwithInfo = (slug) => {
    this.setState({ modal: !this.state.modal });
    // //console.log(slug);

    axios
      .get(`http://127.0.0.1:8000/v1/products/details/${slug}`)
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
    const { img, slug, name, price, discount_price } = this.props;

    // //console.log(img);
    return (
      <>
        <div className="single-product">
          <div className="product-img">
            <a href="product-details.html">
              <img
                className="default-img"
                src={img ? `${img}` : "https://via.placeholder.com/550x750"}
                alt={this.props.name}
              />

              <span className="out-of-stock">Hot</span>
            </a>
            <div className="button-head">
              <div className="product-action">
                <a
                  data-toggle="modal"
                  data-target="#exampleModal"
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
              </div>
              <div className="product-action-2">
                <a title="Add to cart" href="#">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
          <div className="product-content">
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
                <span style={{ float: "right", color: "red" }}>-10%</span>
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
        {this.state.modal && (
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

export default BestSellingCard;
