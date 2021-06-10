import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export const Navbar = ({ cart }) => {
  // const [cart, setCart] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  // useEffect(() => {
  //   const config = {
  //     headers: {
  //       authorization: "Bearer " + localStorage.getItem("access_token"),
  //     },
  //   };

  //   axios
  //     .get("http://127.0.0.1:8000/api/v1/cart/user-cart", config)
  //     .then((res) => setCart(res.data))
  //     .catch((err) => setError(err));
  // }, []);

  // const handleDelete = (c) => {
  //   const config = {
  //     headers: {
  //       authorization: "Bearer " + localStorage.getItem("access_token"),
  //     },
  //   };
  //   const id = c.id;
  //   axios
  //     .delete(
  //       `http://127.0.0.1:8000/api/v1/cart/delete-from-cart/${id}`,
  //       config,
  //       id
  //     )
  //     .then((res) => {
  //       newCart = cart.filter((item) => {
  //         console.log(item);
  //         item.id !== item;
  //         setCart(newCart);
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // };

  console.log(cart);
  return (
    <header className="header shop">
      {/* Topbar */}
      <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12">
              {/* Top Left */}
              <div className="top-left">
                <ul className="list-main">
                  <li>
                    <i className="ti-headphone-alt" /> +060 (800) 801-582
                  </li>
                  <li>
                    <i className="ti-email" /> support@shophub.com
                  </li>
                </ul>
              </div>
              {/*/ End Top Left */}
            </div>
            <div className="col-lg-8 col-md-12 col-12">
              {/* Top Right */}
              <div className="right-content">
                <ul className="list-main">
                  <li>
                    <i className="ti-location-pin" /> Store location
                  </li>
                  <li>
                    <i className="ti-alarm-clock" /> <a href="#">Daily deal</a>
                  </li>
                  <li>
                    <i className="ti-user" /> <a href="#">My account</a>
                  </li>
                  <li>
                    <i className="ti-power-off" />
                    <a href="login.html#">Login</a>
                  </li>
                </ul>
              </div>
              {/* End Top Right */}
            </div>
          </div>
        </div>
      </div>
      {/* End Topbar */}
      <div className="middle-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-12">
              {/* Logo */}
              <div className="logo">
                <a href="index.html">
                  <img
                    src="https://cosmetica-eccom.s3.ap-south-1.amazonaws.com/shop-theme/images/logo.png"
                    alt="logo"
                  />
                </a>
              </div>
              {/*/ End Logo */}
              {/* Search Form */}
              <div className="search-top">
                <div className="top-search">
                  <a href="#0">
                    <i className="ti-search" />
                  </a>
                </div>
                {/* Search Form */}
                <div className="search-top">
                  <form className="search-form">
                    <input
                      type="text"
                      placeholder="Search here..."
                      name="search"
                    />
                    <button value="search" type="submit">
                      <i className="ti-search" />
                    </button>
                  </form>
                </div>
                {/*/ End Search Form */}
              </div>
              {/*/ End Search Form */}
              <div className="mobile-nav" />
            </div>
            <div className="col-lg-8 col-md-7 col-12">
              <div className="search-bar-top">
                <div className="search-bar">
                  <form>
                    <input
                      name="search"
                      placeholder="Search Products Here....."
                      type="search"
                    />
                    <button className="btnn">
                      <i className="ti-search" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-12">
              <div className="right-bar">
                {/* Search Form */}
                <div className="sinlge-bar">
                  <a href="#" className="single-icon">
                    <i className="fa fa-heart-o" aria-hidden="true" />
                  </a>
                </div>
                <div className="sinlge-bar">
                  <a href="#" className="single-icon">
                    <i className="fa fa-user-circle-o" aria-hidden="true" />
                  </a>
                </div>
                <div className="sinlge-bar shopping">
                  <a href="#" className="single-icon">
                    <i className="ti-bag" />{" "}
                    <span className="total-count">{cart.length}</span>
                  </a>
                  {/* Shopping Item */}
                  <div className="shopping-item">
                    <div className="dropdown-cart-header">
                      <span>{cart.length} Items</span>
                      <Link href="/user/cart">View Cart</Link>
                    </div>
                    <ul className="shopping-list">
                      {cart
                        ? cart.map((c) => {
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
                                        ? `http://127.0.0.1:8000${c.product.thumbnail}`
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
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header Inner */}
      <div className="header-inner">
        <div className="container">
          <div className="cat-nav-head">
            <div className="row">
              <div className="col-lg-3">
                <div className="all-category">
                  <h3 className="cat-heading">
                    <i className="fa fa-bars" aria-hidden="true" />
                    CATEGORIES
                  </h3>
                  <ul className="main-category">
                    <li>
                      <a href="#">
                        New Arrivals{" "}
                        <i className="fa fa-angle-right" aria-hidden="true" />
                      </a>
                      <ul className="sub-category">
                        <li>
                          <a href="#">accessories</a>
                        </li>
                        <li>
                          <a href="#">best selling</a>
                        </li>
                        <li>
                          <a href="#">top 100 offer</a>
                        </li>
                        <li>
                          <a href="#">sunglass</a>
                        </li>
                        <li>
                          <a href="#">watch</a>
                        </li>
                        <li>
                          <a href="#">man’s product</a>
                        </li>
                        <li>
                          <a href="#">ladies</a>
                        </li>
                        <li>
                          <a href="#">westrn dress</a>
                        </li>
                        <li>
                          <a href="#">denim </a>
                        </li>
                      </ul>
                    </li>
                    <li className="main-mega">
                      <a href="#">
                        best selling{" "}
                        <i className="fa fa-angle-right" aria-hidden="true" />
                      </a>
                      <ul className="mega-menu">
                        <li className="single-menu">
                          <a href="#" className="title-link">
                            Shop Kid's
                          </a>
                          <div className="image">
                            <img
                              src="https://via.placeholder.com/225x155"
                              alt="#"
                            />
                          </div>
                          <div className="inner-link">
                            <a href="#">Kids Toys</a>
                            <a href="#">Kids Travel Car</a>
                            <a href="#">Kids Color Shape</a>
                            <a href="#">Kids Tent</a>
                          </div>
                        </li>
                        <li className="single-menu">
                          <a href="#" className="title-link">
                            Shop Men's
                          </a>
                          <div className="image">
                            <img
                              src="https://via.placeholder.com/225x155"
                              alt="#"
                            />
                          </div>
                          <div className="inner-link">
                            <a href="#">Watch</a>
                            <a href="#">T-shirt</a>
                            <a href="#">Hoodies</a>
                            <a href="#">Formal Pant</a>
                          </div>
                        </li>
                        <li className="single-menu">
                          <a href="#" className="title-link">
                            Shop Women's
                          </a>
                          <div className="image">
                            <img
                              src="https://via.placeholder.com/225x155"
                              alt="#"
                            />
                          </div>
                          <div className="inner-link">
                            <a href="#">Ladies Shirt</a>
                            <a href="#">Ladies Frog</a>
                            <a href="#">Ladies Sun Glass</a>
                            <a href="#">Ladies Watch</a>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">accessories</a>
                    </li>
                    <li>
                      <a href="#">top 100 offer</a>
                    </li>
                    <li>
                      <a href="#">sunglass</a>
                    </li>
                    <li>
                      <a href="#">watch</a>
                    </li>
                    <li>
                      <a href="#">man’s product</a>
                    </li>
                    <li>
                      <a href="#">ladies</a>
                    </li>
                    <li>
                      <a href="#">westrn dress</a>
                    </li>
                    <li>
                      <a href="#">denim </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9 col-12">
                <div className="menu-area">
                  {/* Main Menu */}
                  <nav className="navbar navbar-expand-lg">
                    <div className="navbar-collapse">
                      <div className="nav-inner">
                        <ul className="nav main-menu menu navbar-nav">
                          <li className="active">
                            <a href="#">
                              Home
                              <i className="ti-angle-down" />
                            </a>
                            <ul className="dropdown">
                              <li>
                                <a href="index.html">Home Ecommerce V1</a>
                              </li>
                              <li>
                                <a href="index2.html">Home Ecommerce V2</a>
                              </li>
                              <li>
                                <a href="index3.html">Home Ecommerce V3</a>
                              </li>
                              <li>
                                <a href="index4.html">Home Ecommerce V4</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Product</a>
                          </li>
                          <li>
                            <a href="#">Service</a>
                          </li>
                          <li>
                            <a href="#">
                              Shop
                              <i className="ti-angle-down" />
                              <span className="new">New</span>
                            </a>
                            <ul className="dropdown">
                              <li>
                                <a href="shop-grid.html">Shop Grid</a>
                              </li>
                              <li>
                                <a href="shop-list.html">Shop List</a>
                              </li>
                              <li>
                                <a href="shop-single.html">shop Single</a>
                              </li>
                              <li>
                                <a href="cart.html">Cart</a>
                              </li>
                              <li>
                                <a href="checkout.html">Checkout</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">
                              Pages
                              <i className="ti-angle-down" />
                            </a>
                            <ul className="dropdown">
                              <li>
                                <a href="about-us.html">About Us</a>
                              </li>
                              <li>
                                <a href="login.html">Login</a>
                              </li>
                              <li>
                                <a href="register.html">Register</a>
                              </li>
                              <li>
                                <a href="mail-success.html">Mail Success</a>
                              </li>
                              <li>
                                <a href="404.html">404</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">
                              Blog
                              <i className="ti-angle-down" />
                            </a>
                            <ul className="dropdown">
                              <li>
                                <a href="blog-grid.html">Blog Grid</a>
                              </li>
                              <li>
                                <a href="blog-grid-sidebar.html">
                                  Blog Grid Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="blog-single.html">Blog Single</a>
                              </li>
                              <li>
                                <a href="blog-single-sidebar.html">
                                  Blog Single Sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact.html">Contact Us</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                  {/*/ End Main Menu */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/ End Header Inner */}
    </header>
  );
};
