import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserOrder, handleDeleteFromCart } from "../../store/actions/cart";

class Cart extends Component {
  componentDidMount() {
    this.props.fetchCart();
  }

  handleDelete = (id) => {
    const data = {
      id: id,
    };
    this.props.deleteItem(data);
  };

  render() {
    console.log(this.props);
    return (
      <div className="show-sidebar-cart">
        <nav id="main-nav">
          <a className="cart-button" href="#">
            <span className="bag-count">3</span>
            <span className="bag-icon">Bag</span>
            <span className="bag-label">View Bag</span>
          </a>
        </nav>
        <aside id="sidebar-cart">
          <main>
            <a onClick={this.props.close} className="close-button">
              <span className="close-icon">X</span>
            </a>
            <h2>
              Shopping Bag <span className="count">2</span>
            </h2>
            <ul className="products">
              {this.props.cart.map((c) => {
                return (
                  <li className="product">
                    <a href="#" className="product-link">
                      <span className="product-image">
                        <img
                          src={
                            c.product.thumbnail
                              ? `http://127.0.0.1:8000${c.product.thumbnail}`
                              : "https://via.placeholder.com/70x70"
                          }
                          alt="#"
                        />
                      </span>
                      <span className="product-details">
                        <h3>{c.product.name}</h3>
                        <span className="qty-price">
                          <span className="qty">
                            <form name="qty-form" id="qty-form-1">
                              <button
                                className="minus-button"
                                id="minus-button-1"
                                onClick={() => console.log("minus")}
                              >
                                -
                              </button>
                              <input
                                type="number"
                                id="qty-input-3"
                                className="qty-input"
                                step={1}
                                min={1}
                                max={1000}
                                name="qty-input"
                                defaultValue={c.quantity}
                                pattern="[0-9]*"
                                title="Quantity"
                                inputMode="numeric"
                              />
                              <button
                                className="plus-button"
                                id="plus-button-1"
                                onClick={() => console.log("plus")}
                              >
                                +
                              </button>
                              <input
                                type="hidden"
                                name="item-price"
                                id="item-price-3"
                                defaultValue={12.0}
                              />
                            </form>
                          </span>
                          <span className="price">
                            $
                            {c.product.discount_price
                              ? c.product.discount_price
                              : c.product.price}
                          </span>
                        </span>
                      </span>
                    </a>
                    <a
                      onClick={() => {
                        this.handleDelete(c.id);
                      }}
                      className="remove-button"
                    >
                      <span className="remove-icon">X</span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="totals">
              <div className="subtotal">
                <span className="label">Subtotal:</span>{" "}
                <span className="amount">$54.00</span>
              </div>
              {/* <div class="shipping">
                  <span class="label">Shipping:</span> <span class="amount">$7.95</span>
              </div>
              <div class="tax">
                  <span class="label">Tax:</span> <span class="amount">$71.95</span>
              </div> */}
            </div>
            <div className="action-buttons">
              <a className="view-cart-button" href="#">
                Cart
              </a>
              <a className="checkout-button" href="#">
                Checkout
              </a>
            </div>
          </main>
        </aside>
        <div id="sidebar-cart-curtain" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: () => dispatch(fetchUserOrder()),
    deleteItem: (data) => dispatch(handleDeleteFromCart(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
