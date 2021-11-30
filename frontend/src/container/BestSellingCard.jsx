import React from "react";
import axios from "axios";
import Image from "next/image";

import Link from "next/link";
import NotificationContainer from "react-notifications/lib/NotificationContainer";
import { withAlert } from "react-alert";

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
      .get(`https://proman.com.bd/api/v1/products/details/${slug}`)
      .then((res) =>
        this.setState({ loading: false, details: res.data.products })
      )
      .catch((err) =>
        this.setState({ loading: false, error: err.response.data })
      );
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

  handleAddToWish = (value) => {
    console.log(value);
    const data = {
      slug: value,
      alert: this.props.alert,
    };
    this.props.addToWish(data, this.props.alert);
  };

  onHide = () => {
    this.setState({ modal: false });
  };

  render() {
    const { img, slug, name, price, discount_price } = this.props;
    if (typeof window !== "undefined") {
      var token = localStorage.getItem("access_token");
    }
    // //console.log(img);
    return (
      <>
        <div className="single-product">
          <div className="product-img">
            <a href="product-details.html">
              <Image
                width="400"
                height="500"
                className="default-img"
                src={img ? `${img}` : "https://via.placeholder.com/550x750"}
                alt={this.props.name}
              />

              <span className="out-of-stock">Hot</span>
            </a>
            <div className="button-head">
              <div className="product-action">
                {/* <a
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
                <span style={{ float: "right", color: "red" }}>
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
        <NotificationContainer />
      </>
    );
  }
}

export default withAlert()(BestSellingCard);
