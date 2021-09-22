import Link from "next/link";
import React, { Component } from "react";

class Cart extends Component {
  render() {
    return (
      <div className="sinlge-bar shopping">
        <a href="#" className="single-icon">
          <i className="ti-bag" />{" "}
        </a>
        {/* Shopping Item */}
        <div className="shopping-item">
          <div className="dropdown-cart-header">
            <Link href="/user/cart">View Cart</Link>
          </div>
          <ul className="shopping-list">
            {this.props.cart
              ? this.props.cart.map((c) => {
                  return (
                    <li>
                      <a
                        href="#"
                        className="remove"
                        title="Remove this item"
                        onClick={() => {
                          handleDelete(c);
                        }}
                      >
                        <i className="fa fa-remove" />
                      </a>
                      {/* <button
                              onClick={() => {
                                handleDelete(c);
                              }}
                            >
                              <i className="fa fa-remove" />
                            </button> */}
                      <a className="cart-img" href="#">
                        <img
                          src={
                            c.product.thumbnail
                              ? `https://proman.clothing${c.product.thumbnail}`
                              : "https://via.placeholder.com/70x70"
                          }
                          alt="#"
                        />
                      </a>
                      <h4>
                        <a href="#">{c.product.name}</a>
                      </h4>
                      <p className="quantity">
                        {c.quantity}x -{" "}
                        <span className="amount">
                          $
                          {c.product.discount_price
                            ? c.product.discount_price
                            : c.product.price}
                        </span>
                      </p>
                    </li>
                  );
                })
              : ""}
          </ul>

          <div className="bottom">
            <div className="total">
              <span>Total</span>
              <span className="total-amount">$134.00</span>
            </div>
            <Link href="/user/checkout" className="btn animate">
              Checkout
            </Link>
          </div>
        </div>
        {/*/ End Shopping Item */}
      </div>
    );
  }
}

export default Cart;
