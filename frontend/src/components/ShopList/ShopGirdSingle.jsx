import Link from "next/link";
import React from "react";

const ShopGirdSingle = ({ product }) => {
  console.log(product);
  return (
    <div className="col-xl-3 col-lg-3 col-md-4 col-6">
      <div className="single-product">
        <div className="product-img">
          <Link href={`/details/${product.slug}`}>
            <a>
              <img
                className="default-img"
                src={
                  product.thumbnail
                    ? `http://127.0.0.1:8000${product.thumbnail}`
                    : "https://via.placeholder.com/550x750"
                }
                alt={product.name}
              />

              {product.buy_one_get_one && <span className="bogo">BOGO</span>}
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
              <a title="Wishlist" href="#">
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
          <h3>
            <Link href={`/details/${product.slug}`}>{product.name}</Link>
          </h3>
          {product.discount_price ? (
            <div className="product-price">
              <span style={{ marginRight: "10px" }}>
                ${product.discount_price}
                <span style={{ marginLeft: "10px" }} className="old">
                  ${product.price}
                </span>
              </span>
              <span
                style={{ float: "right", color: "red", fontWeight: "bold" }}
              >
                -10%
              </span>
            </div>
          ) : (
            <div className="product-price">
              <span style={{ marginLeft: "10px" }} className="old">
                ${product.price}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopGirdSingle;
