import React from "react";

const ShopGirdSingle = ({ product }) => {
  return (
    <div className="col-lg-3 col-md-6 col-6">
      <div className="single-product">
        <div className="product-img">
          <a href="product-details.html">
            <img
              className="default-img"
              src="https://via.placeholder.com/550x750"
              alt="#"
            />
            <img
              className="hover-img"
              src="https://via.placeholder.com/550x750"
              alt="#"
            />
          </a>
          <div className="button-head">
            <div className="product-action">
              <a
                data-toggle="modal"
                data-target="#exampleModal"
                title="Quick View"
                href="#"
              >
                <i className=" ti-eye" />
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
              <a title="Add to cart" href="#">
                Add to cart
              </a>
            </div>
          </div>
        </div>
        <div className="product-content">
          <h3>
            <a href="product-details.html">{product.name}</a>
          </h3>
          <div className="product-price">
            <span>${product.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopGirdSingle;
