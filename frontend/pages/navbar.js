import React, { Component } from "react";
import { connect } from "react-redux";

import Image from "next/image";
import Link from "next/link";
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class Navbar extends Component {
  render() {
    const { cart } = this.props;
    //console.log(cart);
    return (
      <div>
        <div className="page-wrapper">
          <header className="header header-10 header-intro-clearance">
            <div className="header-top">
              <div className="container">
                <div className="header-left">
                  <a href="tel:#">
                    <i className="icon-phone" />
                    Call: +0123 456 789
                  </a>
                </div>
                {/* End .header-left */}
                <div className="header-right">
                  <ul className="top-menu">
                    <li>
                      <a href="#">Links</a>
                      <ul>
                        <li>
                          <div className="header-dropdown">
                            <a href="#">USD</a>
                            <div className="header-menu">
                              <ul>
                                <li>
                                  <a href="#">Eur</a>
                                </li>
                                <li>
                                  <a href="#">Usd</a>
                                </li>
                              </ul>
                            </div>
                            {/* End .header-menu */}
                          </div>
                          {/* End .header-dropdown */}
                        </li>
                        <li>
                          <div className="header-dropdown">
                            <a href="#">Engligh</a>
                            <div className="header-menu">
                              <ul>
                                <li>
                                  <a href="#">English</a>
                                </li>
                                <li>
                                  <a href="#">French</a>
                                </li>
                                <li>
                                  <a href="#">Spanish</a>
                                </li>
                              </ul>
                            </div>
                            {/* End .header-menu */}
                          </div>
                          {/* End .header-dropdown */}
                        </li>
                        <li className="login">
                          <a href="#signin-modal" data-toggle="modal">
                            Sign in / Sign up
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  {/* End .top-menu */}
                </div>
                {/* End .header-right */}
              </div>
              {/* End .container */}
            </div>
            {/* End .header-top */}
            <div className="header-middle">
              <div className="container">
                <div className="header-left">
                  <button className="mobile-menu-toggler">
                    <span className="sr-only">Toggle mobile menu</span>
                    <i className="icon-bars" />
                  </button>
                  <a href="index.html" className="logo">
                    <img
                      src="assets/images/demos/demo-13/logo.png"
                      alt="Molla Logo"
                      width={105}
                      height={25}
                    />
                  </a>
                </div>
                {/* End .header-left */}
                <div className="header-center">
                  <div className="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block">
                    <a href="#" className="search-toggle" role="button">
                      <i className="icon-search" />
                    </a>
                    <form action="#" method="get">
                      <div className="header-search-wrapper search-wrapper-wide">
                        <div className="select-custom">
                          <select id="cat" name="cat">
                            <option value>All Departments</option>
                            <option value={1}>Fashion</option>
                            <option value={2}>- Women</option>
                            <option value={3}>- Men</option>
                            <option value={4}>- Jewellery</option>
                            <option value={5}>- Kids Fashion</option>
                            <option value={6}>Electronics</option>
                            <option value={7}>- Smart TVs</option>
                            <option value={8}>- Cameras</option>
                            <option value={9}>- Games</option>
                            <option value={10}>Home &amp; Garden</option>
                            <option value={11}>Motors</option>
                            <option value={12}>- Cars and Trucks</option>
                            <option value={15}>- Boats</option>
                            <option value={16}>
                              - Auto Tools &amp; Supplies
                            </option>
                          </select>
                        </div>
                        {/* End .select-custom */}
                        <label htmlFor="q" className="sr-only">
                          Search
                        </label>
                        <input
                          type="search"
                          className="form-control"
                          name="q"
                          id="q"
                          placeholder="Search product ..."
                          required
                        />
                        <button className="btn btn-primary" type="submit">
                          <i className="icon-search" />
                        </button>
                      </div>
                      {/* End .header-search-wrapper */}
                    </form>
                  </div>
                  {/* End .header-search */}
                </div>
                <div className="header-right">
                  <div className="header-dropdown-link">
                    <div className="dropdown compare-dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-display="static"
                        title="Compare Products"
                        aria-label="Compare Products"
                      >
                        <i className="icon-random" />
                        <span className="compare-txt">Compare</span>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <ul className="compare-products">
                          <li className="compare-product">
                            <a
                              href="#"
                              className="btn-remove"
                              title="Remove Product"
                            >
                              <i className="icon-close" />
                            </a>
                            <h4 className="compare-product-title">
                              <a href="product.html">Blue Night Dress</a>
                            </h4>
                          </li>
                          <li className="compare-product">
                            <a
                              href="#"
                              className="btn-remove"
                              title="Remove Product"
                            >
                              <i className="icon-close" />
                            </a>
                            <h4 className="compare-product-title">
                              <a href="product.html">White Long Skirt</a>
                            </h4>
                          </li>
                        </ul>
                        <div className="compare-actions">
                          <a href="#" className="action-link">
                            Clear All
                          </a>
                          <a href="#" className="btn btn-outline-primary-2">
                            <span>Compare</span>
                            <i className="icon-long-arrow-right" />
                          </a>
                        </div>
                      </div>
                      {/* End .dropdown-menu */}
                    </div>
                    {/* End .compare-dropdown */}
                    <a href="wishlist.html" className="wishlist-link">
                      <i className="icon-heart-o" />
                      <span className="wishlist-count">3</span>
                      <span className="wishlist-txt">Wishlist</span>
                    </a>
                    <div className="dropdown cart-dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-display="static"
                      >
                        <i className="icon-shopping-cart" />
                        <span className="cart-count">2</span>
                        <span className="cart-txt">Cart</span>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <div className="dropdown-cart-products">
                          <div className="product">
                            <div className="product-cart-details">
                              <h4 className="product-title">
                                <a href="product.html">
                                  Beige knitted elastic runner shoes
                                </a>
                              </h4>
                              <span className="cart-product-info">
                                <span className="cart-product-qty">1</span>x
                                $84.00
                              </span>
                            </div>
                            {/* End .product-cart-details */}
                            <figure className="product-image-container">
                              <a href="product.html" className="product-image">
                                <img
                                  src="assets/images/products/cart/product-1.jpg"
                                  alt="product"
                                />
                              </a>
                            </figure>
                            <a
                              href="#"
                              className="btn-remove"
                              title="Remove Product"
                            >
                              <i className="icon-close" />
                            </a>
                          </div>
                          {/* End .product */}
                          <div className="product">
                            <div className="product-cart-details">
                              <h4 className="product-title">
                                <a href="product.html">
                                  Blue utility pinafore denim dress
                                </a>
                              </h4>
                              <span className="cart-product-info">
                                <span className="cart-product-qty">1</span>x
                                $76.00
                              </span>
                            </div>
                            {/* End .product-cart-details */}
                            <figure className="product-image-container">
                              <a href="product.html" className="product-image">
                                <img
                                  src="assets/images/products/cart/product-2.jpg"
                                  alt="product"
                                />
                              </a>
                            </figure>
                            <a
                              href="#"
                              className="btn-remove"
                              title="Remove Product"
                            >
                              <i className="icon-close" />
                            </a>
                          </div>
                          {/* End .product */}
                        </div>
                        {/* End .cart-product */}
                        <div className="dropdown-cart-total">
                          <span>Total</span>
                          <span className="cart-total-price">$160.00</span>
                        </div>
                        {/* End .dropdown-cart-total */}
                        <div className="dropdown-cart-action">
                          <a href="cart.html" className="btn btn-primary">
                            View Cart
                          </a>
                          <a
                            href="checkout.html"
                            className="btn btn-outline-primary-2"
                          >
                            <span>Checkout</span>
                            <i className="icon-long-arrow-right" />
                          </a>
                        </div>
                        {/* End .dropdown-cart-total */}
                      </div>
                      {/* End .dropdown-menu */}
                    </div>
                    {/* End .cart-dropdown */}
                  </div>
                </div>
                {/* End .header-right */}
              </div>
              {/* End .container */}
            </div>
            {/* End .header-middle */}
            <div className="header-bottom sticky-header">
              <div className="container">
                <div className="header-left">
                  <div
                    className="dropdown category-dropdown show is-on"
                    data-visible="true"
                  >
                    <a
                      href="#"
                      className="dropdown-toggle"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="true"
                      data-display="static"
                      title="Browse Categories"
                    >
                      Browse Categories
                    </a>
                    <div className="dropdown-menu show">
                      <nav className="side-nav">
                        <ul className="menu-vertical sf-arrows">
                          <li className="megamenu-container">
                            <a className="sf-with-ul" href="#">
                              Electronics
                            </a>
                            <div className="megamenu">
                              <div className="row no-gutters">
                                <div className="col-md-8">
                                  <div className="menu-col">
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="menu-title">
                                          Laptops &amp; Computers
                                        </div>
                                        {/* End .menu-title */}
                                        <ul>
                                          <li>
                                            <a href="#">Desktop Computers</a>
                                          </li>
                                          <li>
                                            <a href="#">Monitors</a>
                                          </li>
                                          <li>
                                            <a href="#">Laptops</a>
                                          </li>
                                          <li>
                                            <a href="#">iPad &amp; Tablets</a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              Hard Drives &amp; Storage
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              Printers &amp; Supplies
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">Computer Accessories</a>
                                          </li>
                                        </ul>
                                        <div className="menu-title">
                                          TV &amp; Video
                                        </div>
                                        {/* End .menu-title */}
                                        <ul>
                                          <li>
                                            <a href="#">TVs</a>
                                          </li>
                                          <li>
                                            <a href="#">Home Audio Speakers</a>
                                          </li>
                                          <li>
                                            <a href="#">Projectors</a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              Media Streaming Devices
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      {/* End .col-md-6 */}
                                      <div className="col-md-6">
                                        <div className="menu-title">
                                          Cell Phones
                                        </div>
                                        {/* End .menu-title */}
                                        <ul>
                                          <li>
                                            <a href="#">Carrier Phones</a>
                                          </li>
                                          <li>
                                            <a href="#">Unlocked Phones</a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              Phone &amp; Cellphone Cases
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">Cellphone Chargers </a>
                                          </li>
                                        </ul>
                                        <div className="menu-title">
                                          Digital Cameras
                                        </div>
                                        {/* End .menu-title */}
                                        <ul>
                                          <li>
                                            <a href="#">Digital SLR Cameras</a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              Sports &amp; Action Cameras
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">Camcorders</a>
                                          </li>
                                          <li>
                                            <a href="#">Camera Lenses</a>
                                          </li>
                                          <li>
                                            <a href="#">Photo Printer</a>
                                          </li>
                                          <li>
                                            <a href="#">Digital Memory Cards</a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              Camera Bags, Backpacks &amp; Cases
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      {/* End .col-md-6 */}
                                    </div>
                                    {/* End .row */}
                                  </div>
                                  {/* End .menu-col */}
                                </div>
                                {/* End .col-md-8 */}
                                <div className="col-md-4">
                                  <div className="banner banner-overlay">
                                    <a
                                      href="category.html"
                                      className="banner banner-menu"
                                    >
                                      <img
                                        src="assets/images/demos/demo-13/menu/banner-1.jpg"
                                        alt="Banner"
                                      />
                                    </a>
                                  </div>
                                  {/* End .banner banner-overlay */}
                                </div>
                                {/* End .col-md-4 */}
                              </div>
                              {/* End .row */}
                            </div>
                            {/* End .megamenu */}
                          </li>
                          <li className="megamenu-container">
                            <a className="sf-with-ul" href="#">
                              Furniture
                            </a>
                            <div className="megamenu">
                              <div className="row no-gutters">
                                <div className="col-md-8">
                                  <div className="menu-col">
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="menu-title">
                                          Bedroom
                                        </div>
                                        {/* End .menu-title */}
                                        <ul>
                                          <li>
                                            <a href="#">
                                              Beds, Frames &amp; Bases
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">Dressers</a>
                                          </li>
                                          <li>
                                            <a href="#">Nightstands</a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              Kids' Beds &amp; Headboards
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">Armoires</a>
                                          </li>
                                        </ul>
                                        <div className="menu-title">
                                          Living Room
                                        </div>
                                        {/* End .menu-title */}
                                        <ul>
                                          <li>
                                            <a href="#">Coffee Tables</a>
                                          </li>
                                          <li>
                                            <a href="#">Chairs</a>
                                          </li>
                                          <li>
                                            <a href="#">Tables</a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              Futons &amp; Sofa Beds
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              Cabinets &amp; Chests
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      {/* End .col-md-6 */}
                                      <div className="col-md-6">
                                        <div className="menu-title">Office</div>
                                        {/* End .menu-title */}
                                        <ul>
                                          <li>
                                            <a href="#">Office Chairs</a>
                                          </li>
                                          <li>
                                            <a href="#">Desks</a>
                                          </li>
                                          <li>
                                            <a href="#">Bookcases</a>
                                          </li>
                                          <li>
                                            <a href="#">File Cabinets</a>
                                          </li>
                                          <li>
                                            <a href="#">Breakroom Tables</a>
                                          </li>
                                        </ul>
                                        <div className="menu-title">
                                          Kitchen &amp; Dining
                                        </div>
                                        {/* End .menu-title */}
                                        <ul>
                                          <li>
                                            <a href="#">Dining Sets</a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              Kitchen Storage Cabinets
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">Bakers Racks</a>
                                          </li>
                                          <li>
                                            <a href="#">Dining Chairs</a>
                                          </li>
                                          <li>
                                            <a href="#">Dining Room Tables</a>
                                          </li>
                                          <li>
                                            <a href="#">Bar Stools</a>
                                          </li>
                                        </ul>
                                      </div>
                                      {/* End .col-md-6 */}
                                    </div>
                                    {/* End .row */}
                                  </div>
                                  {/* End .menu-col */}
                                </div>
                                {/* End .col-md-8 */}
                                <div className="col-md-4">
                                  <div className="banner banner-overlay">
                                    <a
                                      href="category.html"
                                      className="banner banner-menu"
                                    >
                                      <img
                                        src="assets/images/demos/demo-13/menu/banner-2.jpg"
                                        alt="Banner"
                                      />
                                    </a>
                                  </div>
                                  {/* End .banner banner-overlay */}
                                </div>
                                {/* End .col-md-4 */}
                              </div>
                              {/* End .row */}
                            </div>
                            {/* End .megamenu */}
                          </li>
                          <li className="megamenu-container">
                            <a className="sf-with-ul" href="#">
                              Cooking
                            </a>
                            <div className="megamenu">
                              <div className="menu-col">
                                <div className="row">
                                  <div className="col-md-4">
                                    <div className="menu-title">Cookware</div>
                                    {/* End .menu-title */}
                                    <ul>
                                      <li>
                                        <a href="#">Cookware Sets</a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          Pans, Griddles &amp; Woks
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">Pots</a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          Skillets &amp; Grill Pans
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">Kettles</a>
                                      </li>
                                      <li>
                                        <a href="#">Soup &amp; Stockpots</a>
                                      </li>
                                    </ul>
                                  </div>
                                  {/* End .col-md-4 */}
                                  <div className="col-md-4">
                                    <div className="menu-title">
                                      Dinnerware &amp; Tabletop
                                    </div>
                                    {/* End .menu-title */}
                                    <ul>
                                      <li>
                                        <a href="#">Plates</a>
                                      </li>
                                      <li>
                                        <a href="#">Cups &amp; Mugs</a>
                                      </li>
                                      <li>
                                        <a href="#">Trays &amp; Platters</a>
                                      </li>
                                      <li>
                                        <a href="#">Coffee &amp; Tea Serving</a>
                                      </li>
                                      <li>
                                        <a href="#">Salt &amp; Pepper Shaker</a>
                                      </li>
                                    </ul>
                                  </div>
                                  {/* End .col-md-4 */}
                                  <div className="col-md-4">
                                    <div className="menu-title">
                                      Cooking Appliances
                                    </div>
                                    {/* End .menu-title */}
                                    <ul>
                                      <li>
                                        <a href="#">Microwaves</a>
                                      </li>
                                      <li>
                                        <a href="#">Coffee Makers</a>
                                      </li>
                                      <li>
                                        <a href="#">Mixers &amp; Attachments</a>
                                      </li>
                                      <li>
                                        <a href="#">Slow Cookers</a>
                                      </li>
                                      <li>
                                        <a href="#">Air Fryers</a>
                                      </li>
                                      <li>
                                        <a href="#">Toasters &amp; Ovens</a>
                                      </li>
                                    </ul>
                                  </div>
                                  {/* End .col-md-4 */}
                                </div>
                                {/* End .row */}
                                <div className="row menu-banners">
                                  <div className="col-md-4">
                                    <div className="banner">
                                      <a href="#">
                                        <img
                                          src="assets/images/demos/demo-13/menu/1.jpg"
                                          alt="image"
                                        />
                                      </a>
                                    </div>
                                    {/* End .banner */}
                                  </div>
                                  {/* End .col-md-4 */}
                                  <div className="col-md-4">
                                    <div className="banner">
                                      <a href="#">
                                        <img
                                          src="assets/images/demos/demo-13/menu/2.jpg"
                                          alt="image"
                                        />
                                      </a>
                                    </div>
                                    {/* End .banner */}
                                  </div>
                                  {/* End .col-md-4 */}
                                  <div className="col-md-4">
                                    <div className="banner">
                                      <a href="#">
                                        <img
                                          src="assets/images/demos/demo-13/menu/3.jpg"
                                          alt="image"
                                        />
                                      </a>
                                    </div>
                                    {/* End .banner */}
                                  </div>
                                  {/* End .col-md-4 */}
                                </div>
                                {/* End .row */}
                              </div>
                              {/* End .menu-col */}
                            </div>
                            {/* End .megamenu */}
                          </li>
                          <li className="megamenu-container">
                            <a className="sf-with-ul" href="#">
                              Clothing
                            </a>
                            <div className="megamenu">
                              <div className="row no-gutters">
                                <div className="col-md-8">
                                  <div className="menu-col">
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="menu-title">Women</div>
                                        {/* End .menu-title */}
                                        <ul>
                                          <li>
                                            <a href="#">
                                              <strong>New Arrivals</strong>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              <strong>Best Sellers</strong>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              <strong>Trending</strong>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">Clothing</a>
                                          </li>
                                          <li>
                                            <a href="#">Shoes</a>
                                          </li>
                                          <li>
                                            <a href="#">Bags</a>
                                          </li>
                                          <li>
                                            <a href="#">Accessories</a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              Jewlery &amp; Watches
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              <strong>Sale</strong>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      {/* End .col-md-6 */}
                                      <div className="col-md-6">
                                        <div className="menu-title">Men</div>
                                        {/* End .menu-title */}
                                        <ul>
                                          <li>
                                            <a href="#">
                                              <strong>New Arrivals</strong>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              <strong>Best Sellers</strong>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              <strong>Trending</strong>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">Clothing</a>
                                          </li>
                                          <li>
                                            <a href="#">Shoes</a>
                                          </li>
                                          <li>
                                            <a href="#">Bags</a>
                                          </li>
                                          <li>
                                            <a href="#">Accessories</a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              Jewlery &amp; Watches
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      {/* End .col-md-6 */}
                                    </div>
                                    {/* End .row */}
                                  </div>
                                  {/* End .menu-col */}
                                </div>
                                {/* End .col-md-8 */}
                                <div className="col-md-4">
                                  <div className="banner banner-overlay">
                                    <a
                                      href="category.html"
                                      className="banner banner-menu"
                                    >
                                      <img
                                        src="assets/images/demos/demo-13/menu/banner-3.jpg"
                                        alt="Banner"
                                      />
                                    </a>
                                  </div>
                                  {/* End .banner banner-overlay */}
                                </div>
                                {/* End .col-md-4 */}
                              </div>
                              {/* End .row */}
                              <div className="menu-col menu-brands">
                                <div className="row">
                                  <div className="col-lg-2">
                                    <a href="#" className="brand">
                                      <img
                                        src="assets/images/brands/1.png"
                                        alt="Brand Name"
                                      />
                                    </a>
                                  </div>
                                  {/* End .col-lg-2 */}
                                  <div className="col-lg-2">
                                    <a href="#" className="brand">
                                      <img
                                        src="assets/images/brands/2.png"
                                        alt="Brand Name"
                                      />
                                    </a>
                                  </div>
                                  {/* End .col-lg-2 */}
                                  <div className="col-lg-2">
                                    <a href="#" className="brand">
                                      <img
                                        src="assets/images/brands/3.png"
                                        alt="Brand Name"
                                      />
                                    </a>
                                  </div>
                                  {/* End .col-lg-2 */}
                                  <div className="col-lg-2">
                                    <a href="#" className="brand">
                                      <img
                                        src="assets/images/brands/4.png"
                                        alt="Brand Name"
                                      />
                                    </a>
                                  </div>
                                  {/* End .col-lg-2 */}
                                  <div className="col-lg-2">
                                    <a href="#" className="brand">
                                      <img
                                        src="assets/images/brands/5.png"
                                        alt="Brand Name"
                                      />
                                    </a>
                                  </div>
                                  {/* End .col-lg-2 */}
                                  <div className="col-lg-2">
                                    <a href="#" className="brand">
                                      <img
                                        src="assets/images/brands/6.png"
                                        alt="Brand Name"
                                      />
                                    </a>
                                  </div>
                                  {/* End .col-lg-2 */}
                                </div>
                                {/* End .row */}
                              </div>
                              {/* End .menu-brands */}
                            </div>
                            {/* End .megamenu */}
                          </li>
                          <li>
                            <a href="#">Home Appliances</a>
                          </li>
                          <li>
                            <a href="#">Healthy &amp; Beauty</a>
                          </li>
                          <li>
                            <a href="#">Shoes &amp; Boots</a>
                          </li>
                          <li>
                            <a href="#">Travel &amp; Outdoor</a>
                          </li>
                          <li>
                            <a href="#">Smart Phones</a>
                          </li>
                          <li>
                            <a href="#">TV &amp; Audio</a>
                          </li>
                          <li>
                            <a href="#">Gift Ideas</a>
                          </li>
                        </ul>
                        {/* End .menu-vertical */}
                      </nav>
                      {/* End .side-nav */}
                    </div>
                    {/* End .dropdown-menu */}
                  </div>
                  {/* End .category-dropdown */}
                </div>
                {/* End .col-lg-3 */}
                <div className="header-center">
                  <nav className="main-nav">
                    <ul className="menu sf-arrows">
                      <li className="megamenu-container active">
                        <a href="index.html" className="sf-with-ul">
                          Home
                        </a>
                        <div className="megamenu demo">
                          <div className="menu-col">
                            <div className="menu-title">Choose your demo</div>
                            {/* End .menu-title */}
                            <div className="demo-list">
                              <div className="demo-item">
                                <a href="index-1.html">
                                  <span
                                    className="demo-bg"
                                    style={{
                                      backgroundImage:
                                        "url(assets/images/menu/demos/1.jpg)",
                                    }}
                                  />
                                  <span className="demo-title">
                                    01 - furniture store
                                  </span>
                                </a>
                              </div>
                              {/* End .demo-item */}
                              <div className="demo-item">
                                <a href="index-2.html">
                                  <span
                                    className="demo-bg"
                                    style={{
                                      backgroundImage:
                                        "url(assets/images/menu/demos/2.jpg)",
                                    }}
                                  />
                                  <span className="demo-title">
                                    02 - furniture store
                                  </span>
                                </a>
                              </div>
                              {/* End .demo-item */}
                              <div className="demo-item">
                                <a href="index-3.html">
                                  <span
                                    className="demo-bg"
                                    style={{
                                      backgroundImage:
                                        "url(assets/images/menu/demos/3.jpg)",
                                    }}
                                  />
                                  <span className="demo-title">
                                    03 - electronic store
                                  </span>
                                </a>
                              </div>
                              {/* End .demo-item */}
                              <div className="demo-item">
                                <a href="index-4.html">
                                  <span
                                    className="demo-bg"
                                    style={{
                                      backgroundImage:
                                        "url(assets/images/menu/demos/4.jpg)",
                                    }}
                                  />
                                  <span className="demo-title">
                                    04 - electronic store
                                  </span>
                                </a>
                              </div>
                              {/* End .demo-item */}
                              <div className="demo-item">
                                <a href="index-5.html">
                                  <span
                                    className="demo-bg"
                                    style={{
                                      backgroundImage:
                                        "url(assets/images/menu/demos/5.jpg)",
                                    }}
                                  />
                                  <span className="demo-title">
                                    05 - fashion store
                                  </span>
                                </a>
                              </div>
                              {/* End .demo-item */}
                              <div className="demo-item">
                                <a href="index-6.html">
                                  <span
                                    className="demo-bg"
                                    style={{
                                      backgroundImage:
                                        "url(assets/images/menu/demos/6.jpg)",
                                    }}
                                  />
                                  <span className="demo-title">
                                    06 - fashion store
                                  </span>
                                </a>
                              </div>
                              {/* End .demo-item */}
                              <div className="demo-item">
                                <a href="index-7.html">
                                  <span
                                    className="demo-bg"
                                    style={{
                                      backgroundImage:
                                        "url(assets/images/menu/demos/7.jpg)",
                                    }}
                                  />
                                  <span className="demo-title">
                                    07 - fashion store
                                  </span>
                                </a>
                              </div>
                              {/* End .demo-item */}
                              <div className="demo-item">
                                <a href="index-8.html">
                                  <span
                                    className="demo-bg"
                                    style={{
                                      backgroundImage:
                                        "url(assets/images/menu/demos/8.jpg)",
                                    }}
                                  />
                                  <span className="demo-title">
                                    08 - fashion store
                                  </span>
                                </a>
                              </div>
                              {/* End .demo-item */}
                              <div className="demo-item">
                                <a href="index-9.html">
                                  <span
                                    className="demo-bg"
                                    style={{
                                      backgroundImage:
                                        "url(assets/images/menu/demos/9.jpg)",
                                    }}
                                  />
                                  <span className="demo-title">
                                    09 - fashion store
                                  </span>
                                </a>
                              </div>
                              {/* End .demo-item */}
                              <div className="demo-item">
                                <a href="index-10.html">
                                  <span
                                    className="demo-bg"
                                    style={{
                                      backgroundImage:
                                        "url(assets/images/menu/demos/10.jpg)",
                                    }}
                                  />
                                  <span className="demo-title">
                                    10 - shoes store
                                  </span>
                                </a>
                              </div>
                              {/* End .demo-item */}
                              <div className="demo-item hidden">
                                <a href="index-11.html">
                                  <span
                                    className="demo-bg"
                                    style={{
                                      backgroundImage:
                                        "url(assets/images/menu/demos/11.jpg)",
                                    }}
                                  />
                                  <span className="demo-title">
                                    11 - furniture simple store
                                  </span>
                                </a>
                              </div>
                              {/* End .demo-item */}
                              <div className="demo-item hidden">
                                <a href="index-12.html">
                                  <span
                                    className="demo-bg"
                                    style={{
                                      backgroundImage:
                                        "url(assets/images/menu/demos/12.jpg)",
                                    }}
                                  />
                                  <span className="demo-title">
                                    12 - fashion simple store
                                  </span>
                                </a>
                              </div>
                              {/* End .demo-item */}
                              <div className="demo-item hidden">
                                <a href="index-13.html">
                                  <span
                                    className="demo-bg"
                                    style={{
                                      backgroundImage:
                                        "url(assets/images/menu/demos/13.jpg)",
                                    }}
                                  />
                                  <span className="demo-title">
                                    13 - market
                                  </span>
                                </a>
                              </div>
                              {/* End .demo-item */}
                              <div className="demo-item hidden">
                                <a href="index-14.html">
                                  <span
                                    className="demo-bg"
                                    style={{
                                      backgroundImage:
                                        "url(assets/images/menu/demos/14.jpg)",
                                    }}
                                  />
                                  <span className="demo-title">
                                    14 - market fullwidth
                                  </span>
                                </a>
                              </div>
                              {/* End .demo-item */}
                              <div className="demo-item hidden">
                                <a href="index-15.html">
                                  <span
                                    className="demo-bg"
                                    style={{
                                      backgroundImage:
                                        "url(assets/images/menu/demos/15.jpg)",
                                    }}
                                  />
                                  <span className="demo-title">
                                    15 - lookbook 1
                                  </span>
                                </a>
                              </div>
                              {/* End .demo-item */}
                              <div className="demo-item hidden">
                                <a href="index-16.html">
                                  <span
                                    className="demo-bg"
                                    style={{
                                      backgroundImage:
                                        "url(assets/images/menu/demos/16.jpg)",
                                    }}
                                  />
                                  <span className="demo-title">
                                    16 - lookbook 2
                                  </span>
                                </a>
                              </div>
                              {/* End .demo-item */}
                              <div className="demo-item hidden">
                                <a href="index-17.html">
                                  <span
                                    className="demo-bg"
                                    style={{
                                      backgroundImage:
                                        "url(assets/images/menu/demos/17.jpg)",
                                    }}
                                  />
                                  <span className="demo-title">
                                    17 - fashion store
                                  </span>
                                </a>
                              </div>
                              {/* End .demo-item */}
                              <div className="demo-item hidden">
                                <a href="index-18.html">
                                  <span
                                    className="demo-bg"
                                    style={{
                                      backgroundImage:
                                        "url(assets/images/menu/demos/18.jpg)",
                                    }}
                                  />
                                  <span className="demo-title">
                                    18 - fashion store (with sidebar)
                                  </span>
                                </a>
                              </div>
                              {/* End .demo-item */}
                              <div className="demo-item hidden">
                                <a href="index-19.html">
                                  <span
                                    className="demo-bg"
                                    style={{
                                      backgroundImage:
                                        "url(assets/images/menu/demos/19.jpg)",
                                    }}
                                  />
                                  <span className="demo-title">
                                    19 - games store
                                  </span>
                                </a>
                              </div>
                              {/* End .demo-item */}
                              <div className="demo-item hidden">
                                <a href="index-20.html">
                                  <span
                                    className="demo-bg"
                                    style={{
                                      backgroundImage:
                                        "url(assets/images/menu/demos/20.jpg)",
                                    }}
                                  />
                                  <span className="demo-title">
                                    20 - book store
                                  </span>
                                </a>
                              </div>
                              {/* End .demo-item */}
                              <div className="demo-item hidden">
                                <a href="index-21.html">
                                  <span
                                    className="demo-bg"
                                    style={{
                                      backgroundImage:
                                        "url(assets/images/menu/demos/21.jpg)",
                                    }}
                                  />
                                  <span className="demo-title">
                                    21 - sport store
                                  </span>
                                </a>
                              </div>
                              {/* End .demo-item */}
                              <div className="demo-item hidden">
                                <a href="index-22.html">
                                  <span
                                    className="demo-bg"
                                    style={{
                                      backgroundImage:
                                        "url(assets/images/menu/demos/22.jpg)",
                                    }}
                                  />
                                  <span className="demo-title">
                                    22 - tools store
                                  </span>
                                </a>
                              </div>
                              {/* End .demo-item */}
                              <div className="demo-item hidden">
                                <a href="index-23.html">
                                  <span
                                    className="demo-bg"
                                    style={{
                                      backgroundImage:
                                        "url(assets/images/menu/demos/23.jpg)",
                                    }}
                                  />
                                  <span className="demo-title">
                                    23 - fashion left navigation store
                                  </span>
                                </a>
                              </div>
                              {/* End .demo-item */}
                              <div className="demo-item hidden">
                                <a href="index-24.html">
                                  <span
                                    className="demo-bg"
                                    style={{
                                      backgroundImage:
                                        "url(assets/images/menu/demos/24.jpg)",
                                    }}
                                  />
                                  <span className="demo-title">
                                    24 - extreme sport store
                                  </span>
                                </a>
                              </div>
                              {/* End .demo-item */}
                            </div>
                            {/* End .demo-list */}
                            <div className="megamenu-action text-center">
                              <a
                                href="#"
                                className="btn btn-outline-primary-2 view-all-demos"
                              >
                                <span>View All Demos</span>
                                <i className="icon-long-arrow-right" />
                              </a>
                            </div>
                            {/* End .text-center */}
                          </div>
                          {/* End .menu-col */}
                        </div>
                        {/* End .megamenu */}
                      </li>
                      <li>
                        <a href="category.html" className="sf-with-ul">
                          Shop
                        </a>
                        <div className="megamenu megamenu-md">
                          <div className="row no-gutters">
                            <div className="col-md-8">
                              <div className="menu-col">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="menu-title">
                                      Shop with sidebar
                                    </div>
                                    {/* End .menu-title */}
                                    <ul>
                                      <li>
                                        <a href="category-list.html">
                                          Shop List
                                        </a>
                                      </li>
                                      <li>
                                        <a href="category-2cols.html">
                                          Shop Grid 2 Columns
                                        </a>
                                      </li>
                                      <li>
                                        <a href="category.html">
                                          Shop Grid 3 Columns
                                        </a>
                                      </li>
                                      <li>
                                        <a href="category-4cols.html">
                                          Shop Grid 4 Columns
                                        </a>
                                      </li>
                                      <li>
                                        <a href="category-market.html">
                                          <span>
                                            Shop Market
                                            <span className="tip tip-new">
                                              New
                                            </span>
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                    <div className="menu-title">
                                      Shop no sidebar
                                    </div>
                                    {/* End .menu-title */}
                                    <ul>
                                      <li>
                                        <a href="category-boxed.html">
                                          <span>
                                            Shop Boxed No Sidebar
                                            <span className="tip tip-hot">
                                              Hot
                                            </span>
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="category-fullwidth.html">
                                          Shop Fullwidth No Sidebar
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  {/* End .col-md-6 */}
                                  <div className="col-md-6">
                                    <div className="menu-title">
                                      Product Category
                                    </div>
                                    {/* End .menu-title */}
                                    <ul>
                                      <li>
                                        <a href="product-category-boxed.html">
                                          Product Category Boxed
                                        </a>
                                      </li>
                                      <li>
                                        <a href="product-category-fullwidth.html">
                                          <span>
                                            Product Category Fullwidth
                                            <span className="tip tip-new">
                                              New
                                            </span>
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                    <div className="menu-title">Shop Pages</div>
                                    {/* End .menu-title */}
                                    <ul>
                                      <li>
                                        <a href="cart.html">Cart</a>
                                      </li>
                                      <li>
                                        <a href="checkout.html">Checkout</a>
                                      </li>
                                      <li>
                                        <a href="wishlist.html">Wishlist</a>
                                      </li>
                                      <li>
                                        <a href="dashboard.html">My Account</a>
                                      </li>
                                      <li>
                                        <a href="#">Lookbook</a>
                                      </li>
                                    </ul>
                                  </div>
                                  {/* End .col-md-6 */}
                                </div>
                                {/* End .row */}
                              </div>
                              {/* End .menu-col */}
                            </div>
                            {/* End .col-md-8 */}
                            <div className="col-md-4">
                              <div className="banner banner-overlay">
                                <a
                                  href="category.html"
                                  className="banner banner-menu"
                                >
                                  <img
                                    src="assets/images/menu/banner-1.jpg"
                                    alt="Banner"
                                  />
                                  <div className="banner-content banner-content-top">
                                    <div className="banner-title text-white">
                                      Last <br />
                                      Chance
                                      <br />
                                      <span>
                                        <strong>Sale</strong>
                                      </span>
                                    </div>
                                    {/* End .banner-title */}
                                  </div>
                                  {/* End .banner-content */}
                                </a>
                              </div>
                              {/* End .banner banner-overlay */}
                            </div>
                            {/* End .col-md-4 */}
                          </div>
                          {/* End .row */}
                        </div>
                        {/* End .megamenu megamenu-md */}
                      </li>
                      <li>
                        <a href="product.html" className="sf-with-ul">
                          Product
                        </a>
                        <div className="megamenu megamenu-sm">
                          <div className="row no-gutters">
                            <div className="col-md-6">
                              <div className="menu-col">
                                <div className="menu-title">
                                  Product Details
                                </div>
                                {/* End .menu-title */}
                                <ul>
                                  <li>
                                    <a href="product.html">Default</a>
                                  </li>
                                  <li>
                                    <a href="product-centered.html">Centered</a>
                                  </li>
                                  <li>
                                    <a href="product-extended.html">
                                      <span>
                                        Extended Info
                                        <span className="tip tip-new">New</span>
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-gallery.html">Gallery</a>
                                  </li>
                                  <li>
                                    <a href="product-sticky.html">
                                      Sticky Info
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-sidebar.html">
                                      Boxed With Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-fullwidth.html">
                                      Full Width
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-masonry.html">
                                      Masonry Sticky Info
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* End .menu-col */}
                            </div>
                            {/* End .col-md-6 */}
                            <div className="col-md-6">
                              <div className="banner banner-overlay">
                                <a href="category.html">
                                  <img
                                    src="assets/images/menu/banner-2.jpg"
                                    alt="Banner"
                                  />
                                  <div className="banner-content banner-content-bottom">
                                    <div className="banner-title text-white">
                                      New Trends
                                      <br />
                                      <span>
                                        <strong>spring 2019</strong>
                                      </span>
                                    </div>
                                    {/* End .banner-title */}
                                  </div>
                                  {/* End .banner-content */}
                                </a>
                              </div>
                              {/* End .banner */}
                            </div>
                            {/* End .col-md-6 */}
                          </div>
                          {/* End .row */}
                        </div>
                        {/* End .megamenu megamenu-sm */}
                      </li>
                      <li>
                        <a href="#" className="sf-with-ul">
                          Pages
                        </a>
                        <ul>
                          <li>
                            <a href="about.html" className="sf-with-ul">
                              About
                            </a>
                            <ul>
                              <li>
                                <a href="about.html">About 01</a>
                              </li>
                              <li>
                                <a href="about-2.html">About 02</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact.html" className="sf-with-ul">
                              Contact
                            </a>
                            <ul>
                              <li>
                                <a href="contact.html">Contact 01</a>
                              </li>
                              <li>
                                <a href="contact-2.html">Contact 02</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="login.html">Login</a>
                          </li>
                          <li>
                            <a href="faq.html">FAQs</a>
                          </li>
                          <li>
                            <a href="404.html">Error 404</a>
                          </li>
                          <li>
                            <a href="coming-soon.html">Coming Soon</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="blog.html" className="sf-with-ul">
                          Blog
                        </a>
                        <ul>
                          <li>
                            <a href="blog.html">Classic</a>
                          </li>
                          <li>
                            <a href="blog-listing.html">Listing</a>
                          </li>
                          <li>
                            <a href="#">Grid</a>
                            <ul>
                              <li>
                                <a href="blog-grid-2cols.html">
                                  Grid 2 columns
                                </a>
                              </li>
                              <li>
                                <a href="blog-grid-3cols.html">
                                  Grid 3 columns
                                </a>
                              </li>
                              <li>
                                <a href="blog-grid-4cols.html">
                                  Grid 4 columns
                                </a>
                              </li>
                              <li>
                                <a href="blog-grid-sidebar.html">
                                  Grid sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Masonry</a>
                            <ul>
                              <li>
                                <a href="blog-masonry-2cols.html">
                                  Masonry 2 columns
                                </a>
                              </li>
                              <li>
                                <a href="blog-masonry-3cols.html">
                                  Masonry 3 columns
                                </a>
                              </li>
                              <li>
                                <a href="blog-masonry-4cols.html">
                                  Masonry 4 columns
                                </a>
                              </li>
                              <li>
                                <a href="blog-masonry-sidebar.html">
                                  Masonry sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Mask</a>
                            <ul>
                              <li>
                                <a href="blog-mask-grid.html">Blog mask grid</a>
                              </li>
                              <li>
                                <a href="blog-mask-masonry.html">
                                  Blog mask masonry
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Single Post</a>
                            <ul>
                              <li>
                                <a href="single.html">Default with sidebar</a>
                              </li>
                              <li>
                                <a href="single-fullwidth.html">
                                  Fullwidth no sidebar
                                </a>
                              </li>
                              <li>
                                <a href="single-fullwidth-sidebar.html">
                                  Fullwidth with sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="elements-list.html" className="sf-with-ul">
                          Elements
                        </a>
                        <ul>
                          <li>
                            <a href="elements-products.html">Products</a>
                          </li>
                          <li>
                            <a href="elements-typography.html">Typography</a>
                          </li>
                          <li>
                            <a href="elements-titles.html">Titles</a>
                          </li>
                          <li>
                            <a href="elements-banners.html">Banners</a>
                          </li>
                          <li>
                            <a href="elements-product-category.html">
                              Product Category
                            </a>
                          </li>
                          <li>
                            <a href="elements-video-banners.html">
                              Video Banners
                            </a>
                          </li>
                          <li>
                            <a href="elements-buttons.html">Buttons</a>
                          </li>
                          <li>
                            <a href="elements-accordions.html">Accordions</a>
                          </li>
                          <li>
                            <a href="elements-tabs.html">Tabs</a>
                          </li>
                          <li>
                            <a href="elements-testimonials.html">
                              Testimonials
                            </a>
                          </li>
                          <li>
                            <a href="elements-blog-posts.html">Blog Posts</a>
                          </li>
                          <li>
                            <a href="elements-portfolio.html">Portfolio</a>
                          </li>
                          <li>
                            <a href="elements-cta.html">Call to Action</a>
                          </li>
                          <li>
                            <a href="elements-icon-boxes.html">Icon Boxes</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    {/* End .menu */}
                  </nav>
                  {/* End .main-nav */}
                </div>
                {/* End .col-lg-9 */}
                <div className="header-right">
                  <i className="la la-lightbulb-o" />
                  <p>Clearance Up to 30% Off</p>
                </div>
              </div>
              {/* End .container */}
            </div>
            {/* End .header-bottom */}
          </header>
          {/* End .header */}
          <main className="main">
            <div className="intro-slider-container">
              <div
                className="intro-slider owl-carousel owl-simple owl-nav-inside"
                data-toggle="owl"
                data-owl-options='{
                      "nav": false,
                      "responsive": {
                          "992": {
                              "nav": true
                          }
                      }
                  }'
              >
                <div
                  className="intro-slide"
                  style={{
                    backgroundImage:
                      "url(assets/images/demos/demo-13/slider/slide-1.png)",
                  }}
                >
                  <div className="container intro-content">
                    <div className="row">
                      <div className="col-auto offset-lg-3 intro-col">
                        <h3 className="intro-subtitle">Trade-In Offer</h3>
                        {/* End .h3 intro-subtitle */}
                        <h1 className="intro-title">
                          MacBook Air <br />
                          Latest Model
                          <span>
                            <sup className="font-weight-light">from</sup>
                            <span className="text-primary">
                              $999<sup>,99</sup>
                            </span>
                          </span>
                        </h1>
                        {/* End .intro-title */}
                        <a
                          href="category.html"
                          className="btn btn-outline-primary-2"
                        >
                          <span>Shop Now</span>
                          <i className="icon-long-arrow-right" />
                        </a>
                      </div>
                      {/* End .col-auto offset-lg-3 */}
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End .container intro-content */}
                </div>
                {/* End .intro-slide */}
                <div
                  className="intro-slide"
                  style={{
                    backgroundImage:
                      "url(assets/images/demos/demo-13/slider/slide-2.jpg)",
                  }}
                >
                  <div className="container intro-content">
                    <div className="row">
                      <div className="col-auto offset-lg-3 intro-col">
                        <h3 className="intro-subtitle">Trevel &amp; Outdoor</h3>
                        {/* End .h3 intro-subtitle */}
                        <h1 className="intro-title">
                          Original Outdoor <br />
                          Beanbag
                          <span>
                            <sup className="font-weight-light line-through">
                              $89,99
                            </sup>
                            <span className="text-primary">
                              $29<sup>,99</sup>
                            </span>
                          </span>
                        </h1>
                        {/* End .intro-title */}
                        <a
                          href="category.html"
                          className="btn btn-outline-primary-2"
                        >
                          <span>Shop Now</span>
                          <i className="icon-long-arrow-right" />
                        </a>
                      </div>
                      {/* End .col-auto offset-lg-3 */}
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End .container intro-content */}
                </div>
                {/* End .intro-slide */}
                <div
                  className="intro-slide"
                  style={{
                    backgroundImage:
                      "url(assets/images/demos/demo-13/slider/slide-3.jpg)",
                  }}
                >
                  <div className="container intro-content">
                    <div className="row">
                      <div className="col-auto offset-lg-3 intro-col">
                        <h3 className="intro-subtitle">Fashion Promotions</h3>
                        {/* End .h3 intro-subtitle */}
                        <h1 className="intro-title">
                          Tan Suede <br />
                          Biker Jacket
                          <span>
                            <sup className="font-weight-light line-through">
                              $240,00
                            </sup>
                            <span className="text-primary">
                              $180<sup>,99</sup>
                            </span>
                          </span>
                        </h1>
                        {/* End .intro-title */}
                        <a
                          href="category.html"
                          className="btn btn-outline-primary-2"
                        >
                          <span>Shop Now</span>
                          <i className="icon-long-arrow-right" />
                        </a>
                      </div>
                      {/* End .col-auto offset-lg-3 */}
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End .container intro-content */}
                </div>
                {/* End .intro-slide */}
              </div>
              {/* End .owl-carousel owl-simple */}
              <span className="slider-loader" />
              {/* End .slider-loader */}
            </div>
            {/* End .intro-slider-container */}
            <div className="mb-4" />
            {/* End .mb-2 */}
            <div className="container">
              <h2 className="title text-center mb-2">
                Explore Popular Categories
              </h2>
              {/* End .title */}
              <div className="cat-blocks-container">
                <div className="row">
                  <div className="col-6 col-sm-4 col-lg-2">
                    <a href="category.html" className="cat-block">
                      <figure>
                        <span>
                          <img
                            src="assets/images/demos/demo-13/cats/1.jpg"
                            alt="Category image"
                          />
                        </span>
                      </figure>
                      <h3 className="cat-block-title">Computer &amp; Laptop</h3>
                      {/* End .cat-block-title */}
                    </a>
                  </div>
                  {/* End .col-sm-4 col-lg-2 */}
                  <div className="col-6 col-sm-4 col-lg-2">
                    <a href="category.html" className="cat-block">
                      <figure>
                        <span>
                          <img
                            src="assets/images/demos/demo-13/cats/2.jpg"
                            alt="Category image"
                          />
                        </span>
                      </figure>
                      <h3 className="cat-block-title">Lighting</h3>
                      {/* End .cat-block-title */}
                    </a>
                  </div>
                  {/* End .col-sm-4 col-lg-2 */}
                  <div className="col-6 col-sm-4 col-lg-2">
                    <a href="category.html" className="cat-block">
                      <figure>
                        <span>
                          <img
                            src="assets/images/demos/demo-13/cats/3.jpg"
                            alt="Category image"
                          />
                        </span>
                      </figure>
                      <h3 className="cat-block-title">Smart Phones</h3>
                      {/* End .cat-block-title */}
                    </a>
                  </div>
                  {/* End .col-sm-4 col-lg-2 */}
                  <div className="col-6 col-sm-4 col-lg-2">
                    <a href="category.html" className="cat-block">
                      <figure>
                        <span>
                          <img
                            src="assets/images/demos/demo-13/cats/4.jpg"
                            alt="Category image"
                          />
                        </span>
                      </figure>
                      <h3 className="cat-block-title">Televisions</h3>
                      {/* End .cat-block-title */}
                    </a>
                  </div>
                  {/* End .col-sm-4 col-lg-2 */}
                  <div className="col-6 col-sm-4 col-lg-2">
                    <a href="category.html" className="cat-block">
                      <figure>
                        <span>
                          <img
                            src="assets/images/demos/demo-13/cats/5.jpg"
                            alt="Category image"
                          />
                        </span>
                      </figure>
                      <h3 className="cat-block-title">Cooking</h3>
                      {/* End .cat-block-title */}
                    </a>
                  </div>
                  {/* End .col-sm-4 col-lg-2 */}
                  <div className="col-6 col-sm-4 col-lg-2">
                    <a href="category.html" className="cat-block">
                      <figure>
                        <span>
                          <img
                            src="assets/images/demos/demo-13/cats/6.jpg"
                            alt="Category image"
                          />
                        </span>
                      </figure>
                      <h3 className="cat-block-title">Furniture</h3>
                      {/* End .cat-block-title */}
                    </a>
                  </div>
                  {/* End .col-sm-4 col-lg-2 */}
                </div>
                {/* End .row */}
              </div>
              {/* End .cat-blocks-container */}
            </div>
            {/* End .container */}
            <div className="mb-2" />
            {/* End .mb-2 */}
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-lg-3">
                  <div className="banner banner-overlay">
                    <a href="#">
                      <img
                        src="assets/images/demos/demo-13/banners/banner-1.jpg"
                        alt="Banner"
                      />
                    </a>
                    <div className="banner-content">
                      <h4 className="banner-subtitle text-white">
                        <a href="#">Weekend Sale</a>
                      </h4>
                      {/* End .banner-subtitle */}
                      <h3 className="banner-title text-white">
                        <a href="#">
                          Lighting <br />
                          &amp; Accessories <br />
                          <span>25% off</span>
                        </a>
                      </h3>
                      {/* End .banner-title */}
                      <a href="#" className="banner-link">
                        Shop Now <i className="icon-long-arrow-right" />
                      </a>
                    </div>
                    {/* End .banner-content */}
                  </div>
                  {/* End .banner */}
                </div>
                {/* End .col-lg-3 */}
                <div className="col-sm-6 col-lg-3 order-lg-last">
                  <div className="banner banner-overlay">
                    <a href="#">
                      <img
                        src="assets/images/demos/demo-13/banners/banner-3.jpg"
                        alt="Banner"
                      />
                    </a>
                    <div className="banner-content">
                      <h4 className="banner-subtitle text-white">
                        <a href="#">Smart Offer</a>
                      </h4>
                      {/* End .banner-subtitle */}
                      <h3 className="banner-title text-white">
                        <a href="#">
                          Anniversary <br />
                          Special <br />
                          <span>15% off</span>
                        </a>
                      </h3>
                      {/* End .banner-title */}
                      <a href="#" className="banner-link">
                        Shop Now <i className="icon-long-arrow-right" />
                      </a>
                    </div>
                    {/* End .banner-content */}
                  </div>
                  {/* End .banner */}
                </div>
                {/* End .col-lg-3 */}
                <div className="col-lg-6">
                  <div className="banner banner-overlay">
                    <a href="#">
                      <img
                        src="assets/images/demos/demo-13/banners/banner-2.jpg"
                        alt="Banner"
                      />
                    </a>
                    <div className="banner-content">
                      <h4 className="banner-subtitle text-white d-none d-sm-block">
                        <a href="#">Amazing Value</a>
                      </h4>
                      {/* End .banner-subtitle */}
                      <h3 className="banner-title text-white">
                        <a href="#">
                          Clothes Trending <br />
                          Spring Collection 2019 <br />
                          <span>from $12,99</span>
                        </a>
                      </h3>
                      {/* End .banner-title */}
                      <a href="#" className="banner-link">
                        Discover Now <i className="icon-long-arrow-right" />
                      </a>
                    </div>
                    {/* End .banner-content */}
                  </div>
                  {/* End .banner */}
                </div>
                {/* End .col-lg-6 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
            <div className="mb-3" />
            {/* End .mb-3 */}
            <div className="bg-light pt-3 pb-5">
              <div className="container">
                <div className="heading heading-flex heading-border mb-3">
                  <div className="heading-left">
                    <h2 className="title">Hot Deals Products</h2>
                    {/* End .title */}
                  </div>
                  {/* End .heading-left */}
                  <div className="heading-right">
                    <ul
                      className="nav nav-pills nav-border-anim justify-content-center"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="hot-all-link"
                          data-toggle="tab"
                          href="#hot-all-tab"
                          role="tab"
                          aria-controls="hot-all-tab"
                          aria-selected="true"
                        >
                          All
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="hot-elec-link"
                          data-toggle="tab"
                          href="#hot-elec-tab"
                          role="tab"
                          aria-controls="hot-elec-tab"
                          aria-selected="false"
                        >
                          Electronics
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="hot-furn-link"
                          data-toggle="tab"
                          href="#hot-furn-tab"
                          role="tab"
                          aria-controls="hot-furn-tab"
                          aria-selected="false"
                        >
                          Furniture
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="hot-clot-link"
                          data-toggle="tab"
                          href="#hot-clot-tab"
                          role="tab"
                          aria-controls="hot-clot-tab"
                          aria-selected="false"
                        >
                          Clothes
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="hot-acc-link"
                          data-toggle="tab"
                          href="#hot-acc-tab"
                          role="tab"
                          aria-controls="hot-acc-tab"
                          aria-selected="false"
                        >
                          Accessories
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* End .heading-right */}
                </div>
                {/* End .heading */}
                <div className="tab-content tab-content-carousel">
                  <div
                    className="tab-pane p-0 fade show active"
                    id="hot-all-tab"
                    role="tabpanel"
                    aria-labelledby="hot-all-link"
                  >
                    <div
                      className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                      data-toggle="owl"
                      data-owl-options='{
                                  "nav": false, 
                                  "dots": true,
                                  "margin": 20,
                                  "loop": false,
                                  "responsive": {
                                      "0": {
                                          "items":2
                                      },
                                      "480": {
                                          "items":2
                                      },
                                      "768": {
                                          "items":3
                                      },
                                      "992": {
                                          "items":4
                                      },
                                      "1280": {
                                          "items":5,
                                          "nav": true
                                      }
                                  }
                              }'
                    >
                      <div className="product">
                        <figure className="product-media">
                          <span className="product-label label-sale">Sale</span>
                          <a href="product.html">
                            <img
                              src="assets/images/demos/demo-13/products/product-1.jpg"
                              alt="Product image"
                              className="product-image"
                            />
                          </a>
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist btn-expandable"
                            >
                              <span>add to wishlist</span>
                            </a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare"
                              title="Compare"
                            >
                              <span>Compare</span>
                            </a>
                            <a
                              href="popup/quickView.html"
                              className="btn-product-icon btn-quickview"
                              title="Quick view"
                            >
                              <span>Quick view</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-cart"
                              title="Add to cart"
                            >
                              <span>add to cart</span>
                            </a>
                          </div>
                          {/* End .product-action */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">Furniture</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">Butler Stool Ladder</a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">
                            <span className="new-price">$251.99</span>
                            <span className="old-price">Was $290.00</span>
                          </div>
                          {/* End .product-price */}
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                            <span className="ratings-text">( 2 Reviews )</span>
                          </div>
                          {/* End .rating-container */}
                        </div>
                        {/* End .product-body */}
                      </div>
                      {/* End .product */}
                      <div className="product">
                        <figure className="product-media">
                          <span className="product-label label-top">Top</span>
                          <span className="product-label label-sale">Sale</span>
                          <a href="product.html">
                            <img
                              src="assets/images/demos/demo-13/products/product-2.jpg"
                              alt="Product image"
                              className="product-image"
                            />
                          </a>
                          <div
                            className="product-countdown"
                            data-until="+9h"
                            data-format="HMS"
                            data-relative="true"
                            data-labels-short="true"
                          />
                          {/* End .product-countdown */}
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist btn-expandable"
                            >
                              <span>add to wishlist</span>
                            </a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare"
                              title="Compare"
                            >
                              <span>Compare</span>
                            </a>
                            <a
                              href="popup/quickView.html"
                              className="btn-product-icon btn-quickview"
                              title="Quick view"
                            >
                              <span>Quick view</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-cart"
                              title="Add to cart"
                            >
                              <span>add to cart</span>
                            </a>
                          </div>
                          {/* End .product-action */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">Electronics</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">
                              Bose - SoundSport wireless headphones
                            </a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">
                            <span className="new-price">$179.99</span>
                            <span className="old-price">Was $199.99</span>
                          </div>
                          {/* End .product-price */}
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                            <span className="ratings-text">( 4 Reviews )</span>
                          </div>
                          {/* End .rating-container */}
                          <div className="product-nav product-nav-dots">
                            <a
                              href="#"
                              className="active"
                              style={{ background: "#69b4ff" }}
                            >
                              <span className="sr-only">Color name</span>
                            </a>
                            <a href="#" style={{ background: "#ff887f" }}>
                              <span className="sr-only">Color name</span>
                            </a>
                            <a href="#" style={{ background: "#333333" }}>
                              <span className="sr-only">Color name</span>
                            </a>
                          </div>
                          {/* End .product-nav */}
                        </div>
                        {/* End .product-body */}
                      </div>
                      {/* End .product */}
                      <div className="product">
                        <figure className="product-media">
                          <span className="product-label label-sale">Sale</span>
                          <a href="product.html">
                            <img
                              src="assets/images/demos/demo-13/products/product-3.jpg"
                              alt="Product image"
                              className="product-image"
                            />
                          </a>
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist btn-expandable"
                            >
                              <span>add to wishlist</span>
                            </a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare"
                              title="Compare"
                            >
                              <span>Compare</span>
                            </a>
                            <a
                              href="popup/quickView.html"
                              className="btn-product-icon btn-quickview"
                              title="Quick view"
                            >
                              <span>Quick view</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-cart"
                              title="Add to cart"
                            >
                              <span>add to cart</span>
                            </a>
                          </div>
                          {/* End .product-action */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">Furniture</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">
                              Can 2-Seater Sofa <br />
                              frame charcoal
                            </a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">
                            <span className="new-price">$3.050.00</span>
                            <span className="old-price">Was $3.200.00</span>
                          </div>
                          {/* End .product-price */}
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "60%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                            <span className="ratings-text">( 6 Reviews )</span>
                          </div>
                          {/* End .rating-container */}
                          <div className="product-nav product-nav-dots">
                            <a
                              href="#"
                              className="active"
                              style={{ background: "#b58555" }}
                            >
                              <span className="sr-only">Color name</span>
                            </a>
                            <a href="#" style={{ background: "#93a6b0" }}>
                              <span className="sr-only">Color name</span>
                            </a>
                          </div>
                          {/* End .product-nav */}
                        </div>
                        {/* End .product-body */}
                      </div>
                      {/* End .product */}
                      <div className="product">
                        <figure className="product-media">
                          <span className="product-label label-sale">Sale</span>
                          <a href="product.html">
                            <img
                              src="assets/images/demos/demo-13/products/product-4.jpg"
                              alt="Product image"
                              className="product-image"
                            />
                          </a>
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist btn-expandable"
                            >
                              <span>add to wishlist</span>
                            </a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare"
                              title="Compare"
                            >
                              <span>Compare</span>
                            </a>
                            <a
                              href="popup/quickView.html"
                              className="btn-product-icon btn-quickview"
                              title="Quick view"
                            >
                              <span>Quick view</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-cart"
                              title="Add to cart"
                            >
                              <span>add to cart</span>
                            </a>
                          </div>
                          {/* End .product-action */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">Clothes</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">Tan suede biker jacket</a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">
                            <span className="new-price">$240.00</span>
                            <span className="old-price">Was $310.00</span>
                          </div>
                          {/* End .product-price */}
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "80%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                            <span className="ratings-text">( 4 Reviews )</span>
                          </div>
                          {/* End .rating-container */}
                          <div className="product-nav product-nav-dots">
                            <a
                              href="#"
                              className="active"
                              style={{ background: "#b58555" }}
                            >
                              <span className="sr-only">Color name</span>
                            </a>
                            <a href="#" style={{ background: "#93a6b0" }}>
                              <span className="sr-only">Color name</span>
                            </a>
                          </div>
                          {/* End .product-nav */}
                        </div>
                        {/* End .product-body */}
                      </div>
                      {/* End .product */}
                      <div className="product">
                        <figure className="product-media">
                          <span className="product-label label-top">Top</span>
                          <span className="product-label label-sale">Sale</span>
                          <a href="product.html">
                            <img
                              src="assets/images/demos/demo-13/products/product-5.jpg"
                              alt="Product image"
                              className="product-image"
                            />
                          </a>
                          <div
                            className="product-countdown"
                            data-until="+7h"
                            data-format="HMS"
                            data-relative="true"
                            data-labels-short="true"
                          />
                          {/* End .product-countdown */}
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist btn-expandable"
                            >
                              <span>add to wishlist</span>
                            </a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare"
                              title="Compare"
                            >
                              <span>Compare</span>
                            </a>
                            <a
                              href="popup/quickView.html"
                              className="btn-product-icon btn-quickview"
                              title="Quick view"
                            >
                              <span>Quick view</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-cart"
                              title="Add to cart"
                            >
                              <span>add to cart</span>
                            </a>
                          </div>
                          {/* End .product-action */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">Electronics</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">
                              Sony - Class LED 2160p Smart 4K Ultra HD
                            </a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">
                            <span className="new-price">$1699.99</span>
                            <span className="old-price">Was $1999.99</span>
                          </div>
                          {/* End .product-price */}
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "80%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                            <span className="ratings-text">( 10 Reviews )</span>
                          </div>
                          {/* End .rating-container */}
                        </div>
                        {/* End .product-body */}
                      </div>
                      {/* End .product */}
                      <div className="product">
                        <figure className="product-media">
                          <span className="product-label label-new">New</span>
                          <a href="product.html">
                            <img
                              src="assets/images/demos/demo-13/products/product-6.jpg"
                              alt="Product image"
                              className="product-image"
                            />
                          </a>
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist btn-expandable"
                            >
                              <span>add to wishlist</span>
                            </a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare"
                              title="Compare"
                            >
                              <span>Compare</span>
                            </a>
                            <a
                              href="popup/quickView.html"
                              className="btn-product-icon btn-quickview"
                              title="Quick view"
                            >
                              <span>Quick view</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-cart"
                              title="Add to cart"
                            >
                              <span>add to cart</span>
                            </a>
                          </div>
                          {/* End .product-action */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">Appliances</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">Neato Robotics</a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">$399.00</div>
                          {/* End .product-price */}
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "80%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                            <span className="ratings-text">( 12 Reviews )</span>
                          </div>
                          {/* End .rating-container */}
                        </div>
                        {/* End .product-body */}
                      </div>
                      {/* End .product */}
                    </div>
                    {/* End .owl-carousel */}
                  </div>
                  {/* .End .tab-pane */}
                  <div
                    className="tab-pane p-0 fade"
                    id="hot-elec-tab"
                    role="tabpanel"
                    aria-labelledby="hot-elec-link"
                  >
                    <div
                      className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                      data-toggle="owl"
                      data-owl-options='{
                                  "nav": false, 
                                  "dots": true,
                                  "margin": 20,
                                  "loop": false,
                                  "responsive": {
                                      "0": {
                                          "items":2
                                      },
                                      "480": {
                                          "items":2
                                      },
                                      "768": {
                                          "items":3
                                      },
                                      "992": {
                                          "items":4
                                      },
                                      "1280": {
                                          "items":5,
                                          "nav": true
                                      }
                                  }
                              }'
                    >
                      <div className="product">
                        <figure className="product-media">
                          <span className="product-label label-sale">Sale</span>
                          <a href="product.html">
                            <img
                              src="assets/images/demos/demo-13/products/product-4.jpg"
                              alt="Product image"
                              className="product-image"
                            />
                          </a>
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist btn-expandable"
                            >
                              <span>add to wishlist</span>
                            </a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare"
                              title="Compare"
                            >
                              <span>Compare</span>
                            </a>
                            <a
                              href="popup/quickView.html"
                              className="btn-product-icon btn-quickview"
                              title="Quick view"
                            >
                              <span>Quick view</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-cart"
                              title="Add to cart"
                            >
                              <span>add to cart</span>
                            </a>
                          </div>
                          {/* End .product-action */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">Clothes</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">Tan suede biker jacket</a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">
                            <span className="new-price">$240.00</span>
                            <span className="old-price">Was $310.00</span>
                          </div>
                          {/* End .product-price */}
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "80%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                            <span className="ratings-text">( 4 Reviews )</span>
                          </div>
                          {/* End .rating-container */}
                          <div className="product-nav product-nav-dots">
                            <a
                              href="#"
                              className="active"
                              style={{ background: "#b58555" }}
                            >
                              <span className="sr-only">Color name</span>
                            </a>
                            <a href="#" style={{ background: "#93a6b0" }}>
                              <span className="sr-only">Color name</span>
                            </a>
                          </div>
                          {/* End .product-nav */}
                        </div>
                        {/* End .product-body */}
                      </div>
                      {/* End .product */}
                      <div className="product">
                        <figure className="product-media">
                          <span className="product-label label-sale">Sale</span>
                          <a href="product.html">
                            <img
                              src="assets/images/demos/demo-13/products/product-1.jpg"
                              alt="Product image"
                              className="product-image"
                            />
                          </a>
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist btn-expandable"
                            >
                              <span>add to wishlist</span>
                            </a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare"
                              title="Compare"
                            >
                              <span>Compare</span>
                            </a>
                            <a
                              href="popup/quickView.html"
                              className="btn-product-icon btn-quickview"
                              title="Quick view"
                            >
                              <span>Quick view</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-cart"
                              title="Add to cart"
                            >
                              <span>add to cart</span>
                            </a>
                          </div>
                          {/* End .product-action */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">Furniture</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">Butler Stool Ladder</a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">
                            <span className="new-price">$251.99</span>
                            <span className="old-price">Was $290.00</span>
                          </div>
                          {/* End .product-price */}
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                            <span className="ratings-text">( 2 Reviews )</span>
                          </div>
                          {/* End .rating-container */}
                        </div>
                        {/* End .product-body */}
                      </div>
                      {/* End .product */}
                      <div className="product">
                        <figure className="product-media">
                          <span className="product-label label-top">Top</span>
                          <span className="product-label label-sale">Sale</span>
                          <a href="product.html">
                            <img
                              src="assets/images/demos/demo-13/products/product-2.jpg"
                              alt="Product image"
                              className="product-image"
                            />
                          </a>
                          <div
                            className="product-countdown"
                            data-until="+9h"
                            data-format="HMS"
                            data-relative="true"
                            data-labels-short="true"
                          />
                          {/* End .product-countdown */}
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist btn-expandable"
                            >
                              <span>add to wishlist</span>
                            </a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare"
                              title="Compare"
                            >
                              <span>Compare</span>
                            </a>
                            <a
                              href="popup/quickView.html"
                              className="btn-product-icon btn-quickview"
                              title="Quick view"
                            >
                              <span>Quick view</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-cart"
                              title="Add to cart"
                            >
                              <span>add to cart</span>
                            </a>
                          </div>
                          {/* End .product-action */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">Electronics</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">
                              Bose - SoundSport wireless headphones
                            </a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">
                            <span className="new-price">$179.99</span>
                            <span className="old-price">Was $199.99</span>
                          </div>
                          {/* End .product-price */}
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                            <span className="ratings-text">( 4 Reviews )</span>
                          </div>
                          {/* End .rating-container */}
                          <div className="product-nav product-nav-dots">
                            <a
                              href="#"
                              className="active"
                              style={{ background: "#69b4ff" }}
                            >
                              <span className="sr-only">Color name</span>
                            </a>
                            <a href="#" style={{ background: "#ff887f" }}>
                              <span className="sr-only">Color name</span>
                            </a>
                            <a href="#" style={{ background: "#333333" }}>
                              <span className="sr-only">Color name</span>
                            </a>
                          </div>
                          {/* End .product-nav */}
                        </div>
                        {/* End .product-body */}
                      </div>
                      {/* End .product */}
                      <div className="product">
                        <figure className="product-media">
                          <span className="product-label label-sale">Sale</span>
                          <a href="product.html">
                            <img
                              src="assets/images/demos/demo-13/products/product-3.jpg"
                              alt="Product image"
                              className="product-image"
                            />
                          </a>
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist btn-expandable"
                            >
                              <span>add to wishlist</span>
                            </a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare"
                              title="Compare"
                            >
                              <span>Compare</span>
                            </a>
                            <a
                              href="popup/quickView.html"
                              className="btn-product-icon btn-quickview"
                              title="Quick view"
                            >
                              <span>Quick view</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-cart"
                              title="Add to cart"
                            >
                              <span>add to cart</span>
                            </a>
                          </div>
                          {/* End .product-action */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">Furniture</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">
                              Can 2-Seater Sofa <br />
                              frame charcoal
                            </a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">
                            <span className="new-price">$3.050.00</span>
                            <span className="old-price">Was $3.200.00</span>
                          </div>
                          {/* End .product-price */}
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "60%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                            <span className="ratings-text">( 6 Reviews )</span>
                          </div>
                          {/* End .rating-container */}
                          <div className="product-nav product-nav-dots">
                            <a
                              href="#"
                              className="active"
                              style={{ background: "#b58555" }}
                            >
                              <span className="sr-only">Color name</span>
                            </a>
                            <a href="#" style={{ background: "#93a6b0" }}>
                              <span className="sr-only">Color name</span>
                            </a>
                          </div>
                          {/* End .product-nav */}
                        </div>
                        {/* End .product-body */}
                      </div>
                      {/* End .product */}
                      <div className="product">
                        <figure className="product-media">
                          <span className="product-label label-top">Top</span>
                          <span className="product-label label-sale">Sale</span>
                          <a href="product.html">
                            <img
                              src="assets/images/demos/demo-13/products/product-5.jpg"
                              alt="Product image"
                              className="product-image"
                            />
                          </a>
                          <div
                            className="product-countdown"
                            data-until="+7h"
                            data-format="HMS"
                            data-relative="true"
                            data-labels-short="true"
                          />
                          {/* End .product-countdown */}
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist btn-expandable"
                            >
                              <span>add to wishlist</span>
                            </a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare"
                              title="Compare"
                            >
                              <span>Compare</span>
                            </a>
                            <a
                              href="popup/quickView.html"
                              className="btn-product-icon btn-quickview"
                              title="Quick view"
                            >
                              <span>Quick view</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-cart"
                              title="Add to cart"
                            >
                              <span>add to cart</span>
                            </a>
                          </div>
                          {/* End .product-action */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">Electronics</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">
                              Sony - Class LED 2160p Smart 4K Ultra HD
                            </a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">
                            <span className="new-price">$1699.99</span>
                            <span className="old-price">Was $1999.99</span>
                          </div>
                          {/* End .product-price */}
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "80%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                            <span className="ratings-text">( 10 Reviews )</span>
                          </div>
                          {/* End .rating-container */}
                        </div>
                        {/* End .product-body */}
                      </div>
                      {/* End .product */}
                    </div>
                    {/* End .owl-carousel */}
                  </div>
                  {/* .End .tab-pane */}
                  <div
                    className="tab-pane p-0 fade"
                    id="hot-furn-tab"
                    role="tabpanel"
                    aria-labelledby="hot-furn-link"
                  >
                    <div
                      className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                      data-toggle="owl"
                      data-owl-options='{
                                  "nav": false, 
                                  "dots": true,
                                  "margin": 20,
                                  "loop": false,
                                  "responsive": {
                                      "0": {
                                          "items":2
                                      },
                                      "480": {
                                          "items":2
                                      },
                                      "768": {
                                          "items":3
                                      },
                                      "992": {
                                          "items":4
                                      },
                                      "1280": {
                                          "items":5,
                                          "nav": true
                                      }
                                  }
                              }'
                    >
                      <div className="product">
                        <figure className="product-media">
                          <span className="product-label label-sale">Sale</span>
                          <a href="product.html">
                            <img
                              src="assets/images/demos/demo-13/products/product-3.jpg"
                              alt="Product image"
                              className="product-image"
                            />
                          </a>
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist btn-expandable"
                            >
                              <span>add to wishlist</span>
                            </a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare"
                              title="Compare"
                            >
                              <span>Compare</span>
                            </a>
                            <a
                              href="popup/quickView.html"
                              className="btn-product-icon btn-quickview"
                              title="Quick view"
                            >
                              <span>Quick view</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-cart"
                              title="Add to cart"
                            >
                              <span>add to cart</span>
                            </a>
                          </div>
                          {/* End .product-action */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">Furniture</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">
                              Can 2-Seater Sofa <br />
                              frame charcoal
                            </a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">
                            <span className="new-price">$3.050.00</span>
                            <span className="old-price">Was $3.200.00</span>
                          </div>
                          {/* End .product-price */}
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "60%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                            <span className="ratings-text">( 6 Reviews )</span>
                          </div>
                          {/* End .rating-container */}
                          <div className="product-nav product-nav-dots">
                            <a
                              href="#"
                              className="active"
                              style={{ background: "#b58555" }}
                            >
                              <span className="sr-only">Color name</span>
                            </a>
                            <a href="#" style={{ background: "#93a6b0" }}>
                              <span className="sr-only">Color name</span>
                            </a>
                          </div>
                          {/* End .product-nav */}
                        </div>
                        {/* End .product-body */}
                      </div>
                      {/* End .product */}
                      <div className="product">
                        <figure className="product-media">
                          <span className="product-label label-top">Top</span>
                          <span className="product-label label-sale">Sale</span>
                          <a href="product.html">
                            <img
                              src="assets/images/demos/demo-13/products/product-5.jpg"
                              alt="Product image"
                              className="product-image"
                            />
                          </a>
                          <div
                            className="product-countdown"
                            data-until="+7h"
                            data-format="HMS"
                            data-relative="true"
                            data-labels-short="true"
                          />
                          {/* End .product-countdown */}
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist btn-expandable"
                            >
                              <span>add to wishlist</span>
                            </a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare"
                              title="Compare"
                            >
                              <span>Compare</span>
                            </a>
                            <a
                              href="popup/quickView.html"
                              className="btn-product-icon btn-quickview"
                              title="Quick view"
                            >
                              <span>Quick view</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-cart"
                              title="Add to cart"
                            >
                              <span>add to cart</span>
                            </a>
                          </div>
                          {/* End .product-action */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">Electronics</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">
                              Sony - Class LED 2160p Smart 4K Ultra HD
                            </a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">
                            <span className="new-price">$1699.99</span>
                            <span className="old-price">Was $1999.99</span>
                          </div>
                          {/* End .product-price */}
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "80%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                            <span className="ratings-text">( 10 Reviews )</span>
                          </div>
                          {/* End .rating-container */}
                        </div>
                        {/* End .product-body */}
                      </div>
                      {/* End .product */}
                      <div className="product">
                        <figure className="product-media">
                          <span className="product-label label-new">New</span>
                          <a href="product.html">
                            <img
                              src="assets/images/demos/demo-13/products/product-6.jpg"
                              alt="Product image"
                              className="product-image"
                            />
                          </a>
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist btn-expandable"
                            >
                              <span>add to wishlist</span>
                            </a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare"
                              title="Compare"
                            >
                              <span>Compare</span>
                            </a>
                            <a
                              href="popup/quickView.html"
                              className="btn-product-icon btn-quickview"
                              title="Quick view"
                            >
                              <span>Quick view</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-cart"
                              title="Add to cart"
                            >
                              <span>add to cart</span>
                            </a>
                          </div>
                          {/* End .product-action */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">Appliances</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">Neato Robotics</a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">$399.00</div>
                          {/* End .product-price */}
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "80%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                            <span className="ratings-text">( 12 Reviews )</span>
                          </div>
                          {/* End .rating-container */}
                        </div>
                        {/* End .product-body */}
                      </div>
                      {/* End .product */}
                      <div className="product">
                        <figure className="product-media">
                          <span className="product-label label-sale">Sale</span>
                          <a href="product.html">
                            <img
                              src="assets/images/demos/demo-13/products/product-4.jpg"
                              alt="Product image"
                              className="product-image"
                            />
                          </a>
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist btn-expandable"
                            >
                              <span>add to wishlist</span>
                            </a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare"
                              title="Compare"
                            >
                              <span>Compare</span>
                            </a>
                            <a
                              href="popup/quickView.html"
                              className="btn-product-icon btn-quickview"
                              title="Quick view"
                            >
                              <span>Quick view</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-cart"
                              title="Add to cart"
                            >
                              <span>add to cart</span>
                            </a>
                          </div>
                          {/* End .product-action */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">Clothes</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">Tan suede biker jacket</a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">
                            <span className="new-price">$240.00</span>
                            <span className="old-price">Was $310.00</span>
                          </div>
                          {/* End .product-price */}
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "80%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                            <span className="ratings-text">( 4 Reviews )</span>
                          </div>
                          {/* End .rating-container */}
                          <div className="product-nav product-nav-dots">
                            <a
                              href="#"
                              className="active"
                              style={{ background: "#b58555" }}
                            >
                              <span className="sr-only">Color name</span>
                            </a>
                            <a href="#" style={{ background: "#93a6b0" }}>
                              <span className="sr-only">Color name</span>
                            </a>
                          </div>
                          {/* End .product-nav */}
                        </div>
                        {/* End .product-body */}
                      </div>
                      {/* End .product */}
                      <div className="product">
                        <figure className="product-media">
                          <span className="product-label label-sale">Sale</span>
                          <a href="product.html">
                            <img
                              src="assets/images/demos/demo-13/products/product-1.jpg"
                              alt="Product image"
                              className="product-image"
                            />
                          </a>
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist btn-expandable"
                            >
                              <span>add to wishlist</span>
                            </a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare"
                              title="Compare"
                            >
                              <span>Compare</span>
                            </a>
                            <a
                              href="popup/quickView.html"
                              className="btn-product-icon btn-quickview"
                              title="Quick view"
                            >
                              <span>Quick view</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-cart"
                              title="Add to cart"
                            >
                              <span>add to cart</span>
                            </a>
                          </div>
                          {/* End .product-action */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">Furniture</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">Butler Stool Ladder</a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">
                            <span className="new-price">$251.99</span>
                            <span className="old-price">Was $290.00</span>
                          </div>
                          {/* End .product-price */}
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                            <span className="ratings-text">( 2 Reviews )</span>
                          </div>
                          {/* End .rating-container */}
                        </div>
                        {/* End .product-body */}
                      </div>
                      {/* End .product */}
                      <div className="product">
                        <figure className="product-media">
                          <span className="product-label label-top">Top</span>
                          <span className="product-label label-sale">Sale</span>
                          <a href="product.html">
                            <img
                              src="assets/images/demos/demo-13/products/product-2.jpg"
                              alt="Product image"
                              className="product-image"
                            />
                          </a>
                          <div
                            className="product-countdown"
                            data-until="+9h"
                            data-format="HMS"
                            data-relative="true"
                            data-labels-short="true"
                          />
                          {/* End .product-countdown */}
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist btn-expandable"
                            >
                              <span>add to wishlist</span>
                            </a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare"
                              title="Compare"
                            >
                              <span>Compare</span>
                            </a>
                            <a
                              href="popup/quickView.html"
                              className="btn-product-icon btn-quickview"
                              title="Quick view"
                            >
                              <span>Quick view</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-cart"
                              title="Add to cart"
                            >
                              <span>add to cart</span>
                            </a>
                          </div>
                          {/* End .product-action */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">Electronics</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">
                              Bose - SoundSport wireless headphones
                            </a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">
                            <span className="new-price">$179.99</span>
                            <span className="old-price">Was $199.99</span>
                          </div>
                          {/* End .product-price */}
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                            <span className="ratings-text">( 4 Reviews )</span>
                          </div>
                          {/* End .rating-container */}
                          <div className="product-nav product-nav-dots">
                            <a
                              href="#"
                              className="active"
                              style={{ background: "#69b4ff" }}
                            >
                              <span className="sr-only">Color name</span>
                            </a>
                            <a href="#" style={{ background: "#ff887f" }}>
                              <span className="sr-only">Color name</span>
                            </a>
                            <a href="#" style={{ background: "#333333" }}>
                              <span className="sr-only">Color name</span>
                            </a>
                          </div>
                          {/* End .product-nav */}
                        </div>
                        {/* End .product-body */}
                      </div>
                      {/* End .product */}
                    </div>
                    {/* End .owl-carousel */}
                  </div>
                  {/* .End .tab-pane */}
                  <div
                    className="tab-pane p-0 fade"
                    id="hot-clot-tab"
                    role="tabpanel"
                    aria-labelledby="hot-clot-link"
                  >
                    <div
                      className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                      data-toggle="owl"
                      data-owl-options='{
                                  "nav": false, 
                                  "dots": true,
                                  "margin": 20,
                                  "loop": false,
                                  "responsive": {
                                      "0": {
                                          "items":2
                                      },
                                      "480": {
                                          "items":2
                                      },
                                      "768": {
                                          "items":3
                                      },
                                      "992": {
                                          "items":4
                                      },
                                      "1280": {
                                          "items":5,
                                          "nav": true
                                      }
                                  }
                              }'
                    >
                      <div className="product">
                        <figure className="product-media">
                          <span className="product-label label-sale">Sale</span>
                          <a href="product.html">
                            <img
                              src="assets/images/demos/demo-13/products/product-1.jpg"
                              alt="Product image"
                              className="product-image"
                            />
                          </a>
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist btn-expandable"
                            >
                              <span>add to wishlist</span>
                            </a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare"
                              title="Compare"
                            >
                              <span>Compare</span>
                            </a>
                            <a
                              href="popup/quickView.html"
                              className="btn-product-icon btn-quickview"
                              title="Quick view"
                            >
                              <span>Quick view</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-cart"
                              title="Add to cart"
                            >
                              <span>add to cart</span>
                            </a>
                          </div>
                          {/* End .product-action */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">Furniture</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">Butler Stool Ladder</a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">
                            <span className="new-price">$251.99</span>
                            <span className="old-price">Was $290.00</span>
                          </div>
                          {/* End .product-price */}
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                            <span className="ratings-text">( 2 Reviews )</span>
                          </div>
                          {/* End .rating-container */}
                        </div>
                        {/* End .product-body */}
                      </div>
                      {/* End .product */}
                      <div className="product">
                        <figure className="product-media">
                          <span className="product-label label-sale">Sale</span>
                          <a href="product.html">
                            <img
                              src="assets/images/demos/demo-13/products/product-3.jpg"
                              alt="Product image"
                              className="product-image"
                            />
                          </a>
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist btn-expandable"
                            >
                              <span>add to wishlist</span>
                            </a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare"
                              title="Compare"
                            >
                              <span>Compare</span>
                            </a>
                            <a
                              href="popup/quickView.html"
                              className="btn-product-icon btn-quickview"
                              title="Quick view"
                            >
                              <span>Quick view</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-cart"
                              title="Add to cart"
                            >
                              <span>add to cart</span>
                            </a>
                          </div>
                          {/* End .product-action */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">Furniture</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">
                              Can 2-Seater Sofa <br />
                              frame charcoal
                            </a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">
                            <span className="new-price">$3.050.00</span>
                            <span className="old-price">Was $3.200.00</span>
                          </div>
                          {/* End .product-price */}
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "60%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                            <span className="ratings-text">( 6 Reviews )</span>
                          </div>
                          {/* End .rating-container */}
                          <div className="product-nav product-nav-dots">
                            <a
                              href="#"
                              className="active"
                              style={{ background: "#b58555" }}
                            >
                              <span className="sr-only">Color name</span>
                            </a>
                            <a href="#" style={{ background: "#93a6b0" }}>
                              <span className="sr-only">Color name</span>
                            </a>
                          </div>
                          {/* End .product-nav */}
                        </div>
                        {/* End .product-body */}
                      </div>
                      {/* End .product */}
                      <div className="product">
                        <figure className="product-media">
                          <span className="product-label label-sale">Sale</span>
                          <a href="product.html">
                            <img
                              src="assets/images/demos/demo-13/products/product-4.jpg"
                              alt="Product image"
                              className="product-image"
                            />
                          </a>
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist btn-expandable"
                            >
                              <span>add to wishlist</span>
                            </a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare"
                              title="Compare"
                            >
                              <span>Compare</span>
                            </a>
                            <a
                              href="popup/quickView.html"
                              className="btn-product-icon btn-quickview"
                              title="Quick view"
                            >
                              <span>Quick view</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-cart"
                              title="Add to cart"
                            >
                              <span>add to cart</span>
                            </a>
                          </div>
                          {/* End .product-action */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">Clothes</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">Tan suede biker jacket</a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">
                            <span className="new-price">$240.00</span>
                            <span className="old-price">Was $310.00</span>
                          </div>
                          {/* End .product-price */}
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "80%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                            <span className="ratings-text">( 4 Reviews )</span>
                          </div>
                          {/* End .rating-container */}
                          <div className="product-nav product-nav-dots">
                            <a
                              href="#"
                              className="active"
                              style={{ background: "#b58555" }}
                            >
                              <span className="sr-only">Color name</span>
                            </a>
                            <a href="#" style={{ background: "#93a6b0" }}>
                              <span className="sr-only">Color name</span>
                            </a>
                          </div>
                          {/* End .product-nav */}
                        </div>
                        {/* End .product-body */}
                      </div>
                      {/* End .product */}
                      <div className="product">
                        <figure className="product-media">
                          <span className="product-label label-top">Top</span>
                          <span className="product-label label-sale">Sale</span>
                          <a href="product.html">
                            <img
                              src="assets/images/demos/demo-13/products/product-2.jpg"
                              alt="Product image"
                              className="product-image"
                            />
                          </a>
                          <div
                            className="product-countdown"
                            data-until="+9h"
                            data-format="HMS"
                            data-relative="true"
                            data-labels-short="true"
                          />
                          {/* End .product-countdown */}
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist btn-expandable"
                            >
                              <span>add to wishlist</span>
                            </a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare"
                              title="Compare"
                            >
                              <span>Compare</span>
                            </a>
                            <a
                              href="popup/quickView.html"
                              className="btn-product-icon btn-quickview"
                              title="Quick view"
                            >
                              <span>Quick view</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-cart"
                              title="Add to cart"
                            >
                              <span>add to cart</span>
                            </a>
                          </div>
                          {/* End .product-action */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">Electronics</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">
                              Bose - SoundSport wireless headphones
                            </a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">
                            <span className="new-price">$179.99</span>
                            <span className="old-price">Was $199.99</span>
                          </div>
                          {/* End .product-price */}
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                            <span className="ratings-text">( 4 Reviews )</span>
                          </div>
                          {/* End .rating-container */}
                          <div className="product-nav product-nav-dots">
                            <a
                              href="#"
                              className="active"
                              style={{ background: "#69b4ff" }}
                            >
                              <span className="sr-only">Color name</span>
                            </a>
                            <a href="#" style={{ background: "#ff887f" }}>
                              <span className="sr-only">Color name</span>
                            </a>
                            <a href="#" style={{ background: "#333333" }}>
                              <span className="sr-only">Color name</span>
                            </a>
                          </div>
                          {/* End .product-nav */}
                        </div>
                        {/* End .product-body */}
                      </div>
                      {/* End .product */}
                    </div>
                    {/* End .owl-carousel */}
                  </div>
                  {/* .End .tab-pane */}
                  <div
                    className="tab-pane p-0 fade"
                    id="hot-acc-tab"
                    role="tabpanel"
                    aria-labelledby="hot-acc-link"
                  >
                    <div
                      className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                      data-toggle="owl"
                      data-owl-options='{
                                  "nav": false, 
                                  "dots": true,
                                  "margin": 20,
                                  "loop": false,
                                  "responsive": {
                                      "0": {
                                          "items":2
                                      },
                                      "480": {
                                          "items":2
                                      },
                                      "768": {
                                          "items":3
                                      },
                                      "992": {
                                          "items":4
                                      },
                                      "1280": {
                                          "items":5,
                                          "nav": true
                                      }
                                  }
                              }'
                    >
                      <div className="product">
                        <figure className="product-media">
                          <span className="product-label label-new">New</span>
                          <a href="product.html">
                            <img
                              src="assets/images/demos/demo-13/products/product-6.jpg"
                              alt="Product image"
                              className="product-image"
                            />
                          </a>
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist btn-expandable"
                            >
                              <span>add to wishlist</span>
                            </a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare"
                              title="Compare"
                            >
                              <span>Compare</span>
                            </a>
                            <a
                              href="popup/quickView.html"
                              className="btn-product-icon btn-quickview"
                              title="Quick view"
                            >
                              <span>Quick view</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-cart"
                              title="Add to cart"
                            >
                              <span>add to cart</span>
                            </a>
                          </div>
                          {/* End .product-action */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">Appliances</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">Neato Robotics</a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">$399.00</div>
                          {/* End .product-price */}
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "80%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                            <span className="ratings-text">( 12 Reviews )</span>
                          </div>
                          {/* End .rating-container */}
                        </div>
                        {/* End .product-body */}
                      </div>
                      {/* End .product */}
                      <div className="product">
                        <figure className="product-media">
                          <span className="product-label label-sale">Sale</span>
                          <a href="product.html">
                            <img
                              src="assets/images/demos/demo-13/products/product-1.jpg"
                              alt="Product image"
                              className="product-image"
                            />
                          </a>
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist btn-expandable"
                            >
                              <span>add to wishlist</span>
                            </a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare"
                              title="Compare"
                            >
                              <span>Compare</span>
                            </a>
                            <a
                              href="popup/quickView.html"
                              className="btn-product-icon btn-quickview"
                              title="Quick view"
                            >
                              <span>Quick view</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-cart"
                              title="Add to cart"
                            >
                              <span>add to cart</span>
                            </a>
                          </div>
                          {/* End .product-action */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">Furniture</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">Butler Stool Ladder</a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">
                            <span className="new-price">$251.99</span>
                            <span className="old-price">Was $290.00</span>
                          </div>
                          {/* End .product-price */}
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                            <span className="ratings-text">( 2 Reviews )</span>
                          </div>
                          {/* End .rating-container */}
                        </div>
                        {/* End .product-body */}
                      </div>
                      {/* End .product */}
                      <div className="product">
                        <figure className="product-media">
                          <span className="product-label label-top">Top</span>
                          <span className="product-label label-sale">Sale</span>
                          <a href="product.html">
                            <img
                              src="assets/images/demos/demo-13/products/product-5.jpg"
                              alt="Product image"
                              className="product-image"
                            />
                          </a>
                          <div
                            className="product-countdown"
                            data-until="+7h"
                            data-format="HMS"
                            data-relative="true"
                            data-labels-short="true"
                          />
                          {/* End .product-countdown */}
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist btn-expandable"
                            >
                              <span>add to wishlist</span>
                            </a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare"
                              title="Compare"
                            >
                              <span>Compare</span>
                            </a>
                            <a
                              href="popup/quickView.html"
                              className="btn-product-icon btn-quickview"
                              title="Quick view"
                            >
                              <span>Quick view</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-cart"
                              title="Add to cart"
                            >
                              <span>add to cart</span>
                            </a>
                          </div>
                          {/* End .product-action */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">Electronics</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">
                              Sony - Class LED 2160p Smart 4K Ultra HD
                            </a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">
                            <span className="new-price">$1699.99</span>
                            <span className="old-price">Was $1999.99</span>
                          </div>
                          {/* End .product-price */}
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "80%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                            <span className="ratings-text">( 10 Reviews )</span>
                          </div>
                          {/* End .rating-container */}
                        </div>
                        {/* End .product-body */}
                      </div>
                      {/* End .product */}
                      <div className="product">
                        <figure className="product-media">
                          <span className="product-label label-sale">Sale</span>
                          <a href="product.html">
                            <img
                              src="assets/images/demos/demo-13/products/product-3.jpg"
                              alt="Product image"
                              className="product-image"
                            />
                          </a>
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist btn-expandable"
                            >
                              <span>add to wishlist</span>
                            </a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare"
                              title="Compare"
                            >
                              <span>Compare</span>
                            </a>
                            <a
                              href="popup/quickView.html"
                              className="btn-product-icon btn-quickview"
                              title="Quick view"
                            >
                              <span>Quick view</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-cart"
                              title="Add to cart"
                            >
                              <span>add to cart</span>
                            </a>
                          </div>
                          {/* End .product-action */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">Furniture</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">
                              Can 2-Seater Sofa <br />
                              frame charcoal
                            </a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">
                            <span className="new-price">$3.050.00</span>
                            <span className="old-price">Was $3.200.00</span>
                          </div>
                          {/* End .product-price */}
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "60%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                            <span className="ratings-text">( 6 Reviews )</span>
                          </div>
                          {/* End .rating-container */}
                          <div className="product-nav product-nav-dots">
                            <a
                              href="#"
                              className="active"
                              style={{ background: "#b58555" }}
                            >
                              <span className="sr-only">Color name</span>
                            </a>
                            <a href="#" style={{ background: "#93a6b0" }}>
                              <span className="sr-only">Color name</span>
                            </a>
                          </div>
                          {/* End .product-nav */}
                        </div>
                        {/* End .product-body */}
                      </div>
                      {/* End .product */}
                      <div className="product">
                        <figure className="product-media">
                          <span className="product-label label-sale">Sale</span>
                          <a href="product.html">
                            <img
                              src="assets/images/demos/demo-13/products/product-4.jpg"
                              alt="Product image"
                              className="product-image"
                            />
                          </a>
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist btn-expandable"
                            >
                              <span>add to wishlist</span>
                            </a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare"
                              title="Compare"
                            >
                              <span>Compare</span>
                            </a>
                            <a
                              href="popup/quickView.html"
                              className="btn-product-icon btn-quickview"
                              title="Quick view"
                            >
                              <span>Quick view</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-cart"
                              title="Add to cart"
                            >
                              <span>add to cart</span>
                            </a>
                          </div>
                          {/* End .product-action */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">Clothes</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">Tan suede biker jacket</a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">
                            <span className="new-price">$240.00</span>
                            <span className="old-price">Was $310.00</span>
                          </div>
                          {/* End .product-price */}
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "80%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                            <span className="ratings-text">( 4 Reviews )</span>
                          </div>
                          {/* End .rating-container */}
                          <div className="product-nav product-nav-dots">
                            <a
                              href="#"
                              className="active"
                              style={{ background: "#b58555" }}
                            >
                              <span className="sr-only">Color name</span>
                            </a>
                            <a href="#" style={{ background: "#93a6b0" }}>
                              <span className="sr-only">Color name</span>
                            </a>
                          </div>
                          {/* End .product-nav */}
                        </div>
                        {/* End .product-body */}
                      </div>
                      {/* End .product */}
                    </div>
                    {/* End .owl-carousel */}
                  </div>
                  {/* .End .tab-pane */}
                </div>
                {/* End .tab-content */}
              </div>
              {/* End .container */}
            </div>
            {/* End .bg-light pt-5 pb-5 */}
            <div className="mb-3" />
            {/* End .mb-3 */}
            <div className="container electronics">
              <div className="heading heading-flex heading-border mb-3">
                <div className="heading-left">
                  <h2 className="title">Electronics</h2>
                  {/* End .title */}
                </div>
                {/* End .heading-left */}
                <div className="heading-right">
                  <ul
                    className="nav nav-pills nav-border-anim justify-content-center"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="elec-new-link"
                        data-toggle="tab"
                        href="#elec-new-tab"
                        role="tab"
                        aria-controls="elec-new-tab"
                        aria-selected="true"
                      >
                        New
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="elec-featured-link"
                        data-toggle="tab"
                        href="#elec-featured-tab"
                        role="tab"
                        aria-controls="elec-featured-tab"
                        aria-selected="false"
                      >
                        Featured
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="elec-best-link"
                        data-toggle="tab"
                        href="#elec-best-tab"
                        role="tab"
                        aria-controls="elec-best-tab"
                        aria-selected="false"
                      >
                        Best Seller
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End .heading-right */}
              </div>
              {/* End .heading */}
              <div className="tab-content tab-content-carousel">
                <div
                  className="tab-pane p-0 fade show active"
                  id="elec-new-tab"
                  role="tabpanel"
                  aria-labelledby="elec-new-link"
                >
                  <div
                    className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                    data-toggle="owl"
                    data-owl-options='{
                              "nav": false, 
                              "dots": true,
                              "margin": 20,
                              "loop": false,
                              "responsive": {
                                  "0": {
                                      "items":2
                                  },
                                  "480": {
                                      "items":2
                                  },
                                  "768": {
                                      "items":3
                                  },
                                  "992": {
                                      "items":4
                                  },
                                  "1280": {
                                      "items":5,
                                      "nav": true
                                  }
                              }
                          }'
                  >
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-new">New</span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-6.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Appliances</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Neato Robotics</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$399.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 12 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-top">Top</span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-7.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">MacBook Pro 13" Display, i5</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$1,199.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-8.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Audio</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Bose - SoundLink Bluetooth Speaker
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$79.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-new">New</span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-9.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Tablets</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Apple - 11 Inch iPad Pro with Wi-Fi 256GB{" "}
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$899.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#edd2c8" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-10.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Cell Phone</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Google - Pixel 3 XL 128GB</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$350.00</span>
                          <span className="old-price">Was $410.00</span>
                        </div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#333333" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .owl-carousel */}
                </div>
                {/* .End .tab-pane */}
                <div
                  className="tab-pane p-0 fade"
                  id="elec-featured-tab"
                  role="tabpanel"
                  aria-labelledby="elec-featured-link"
                >
                  <div
                    className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                    data-toggle="owl"
                    data-owl-options='{
                              "nav": false, 
                              "dots": true,
                              "margin": 20,
                              "loop": false,
                              "responsive": {
                                  "0": {
                                      "items":2
                                  },
                                  "480": {
                                      "items":2
                                  },
                                  "768": {
                                      "items":3
                                  },
                                  "992": {
                                      "items":4
                                  },
                                  "1280": {
                                      "items":5,
                                      "nav": true
                                  }
                              }
                          }'
                  >
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-new">New</span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-9.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Tablets</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Apple - 11 Inch iPad Pro with Wi-Fi 256GB{" "}
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$899.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#edd2c8" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-10.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Cell Phone</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Google - Pixel 3 XL 128GB</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">
                          $899.99
                          <span className="new-price">$350.00</span>
                          <span className="old-price">Was $410.00</span>
                        </div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#333333" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-8.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Audio</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Bose - SoundLink Bluetooth Speaker
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$79.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-top">Top</span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-7.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">MacBook Pro 13" Display, i5</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$1,199.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .owl-carousel */}
                </div>
                {/* .End .tab-pane */}
                <div
                  className="tab-pane p-0 fade"
                  id="elec-best-tab"
                  role="tabpanel"
                  aria-labelledby="elec-best-link"
                >
                  <div
                    className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                    data-toggle="owl"
                    data-owl-options='{
                              "nav": false, 
                              "dots": true,
                              "margin": 20,
                              "loop": false,
                              "responsive": {
                                  "0": {
                                      "items":2
                                  },
                                  "480": {
                                      "items":2
                                  },
                                  "768": {
                                      "items":3
                                  },
                                  "992": {
                                      "items":4
                                  },
                                  "1280": {
                                      "items":5,
                                      "nav": true
                                  }
                              }
                          }'
                  >
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-top">Top</span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-7.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">MacBook Pro 13" Display, i5</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$1,199.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-8.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Audio</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Bose - SoundLink Bluetooth Speaker
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$79.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-new">New</span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-6.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Appliances</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Neato Robotics</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$399.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 12 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-10.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Cell Phone</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Google - Pixel 3 XL 128GB</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">
                          $899.99
                          <span className="new-price">$350.00</span>
                          <span className="old-price">Was $410.00</span>
                        </div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#333333" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-new">New</span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-9.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Tablets</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Apple - 11 Inch iPad Pro with Wi-Fi 256GB{" "}
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$899.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#edd2c8" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .owl-carousel */}
                </div>
                {/* .End .tab-pane */}
              </div>
              {/* End .tab-content */}
            </div>
            {/* End .container */}
            <div className="mb-3" />
            {/* End .mb-3 */}
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="banner banner-overlay banner-overlay-light">
                    <a href="#">
                      <img
                        src="assets/images/demos/demo-13/banners/banner-4.jpg"
                        alt="Banner"
                      />
                    </a>
                    <div className="banner-content">
                      <h4 className="banner-subtitle d-none d-sm-block">
                        <a href="#">Spring Sale is Coming</a>
                      </h4>
                      {/* End .banner-subtitle */}
                      <h3 className="banner-title">
                        <a href="#">
                          All Smart Watches <br />
                          Discount <br />
                          <span className="text-primary">15% off</span>
                        </a>
                      </h3>
                      {/* End .banner-title */}
                      <a href="#" className="banner-link banner-link-dark">
                        Discover Now <i className="icon-long-arrow-right" />
                      </a>
                    </div>
                    {/* End .banner-content */}
                  </div>
                  {/* End .banner */}
                </div>
                {/* End .col-lg-6 */}
                <div className="col-lg-6">
                  <div className="banner banner-overlay">
                    <a href="#">
                      <img
                        src="assets/images/demos/demo-13/banners/banner-5.png"
                        alt="Banner"
                      />
                    </a>
                    <div className="banner-content">
                      <h4 className="banner-subtitle text-white  d-none d-sm-block">
                        <a href="#">Amazing Value</a>
                      </h4>
                      {/* End .banner-subtitle */}
                      <h3 className="banner-title text-white">
                        <a href="#">
                          Headphones Trending <br />
                          JBL Harman <br />
                          <span>from $59,99</span>
                        </a>
                      </h3>
                      {/* End .banner-title */}
                      <a href="#" className="banner-link">
                        Discover Now <i className="icon-long-arrow-right" />
                      </a>
                    </div>
                    {/* End .banner-content */}
                  </div>
                  {/* End .banner */}
                </div>
                {/* End .col-lg-6 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
            <div className="mb-1" />
            {/* End .mb-1 */}
            <div className="container furniture">
              <div className="heading heading-flex heading-border mb-3">
                <div className="heading-left">
                  <h2 className="title">Furniture</h2>
                  {/* End .title */}
                </div>
                {/* End .heading-left */}
                <div className="heading-right">
                  <ul
                    className="nav nav-pills nav-border-anim justify-content-center"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="furn-new-link"
                        data-toggle="tab"
                        href="#furn-new-tab"
                        role="tab"
                        aria-controls="furn-new-tab"
                        aria-selected="true"
                      >
                        New
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="furn-featured-link"
                        data-toggle="tab"
                        href="#furn-featured-tab"
                        role="tab"
                        aria-controls="furn-featured-tab"
                        aria-selected="false"
                      >
                        Featured
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="furn-best-link"
                        data-toggle="tab"
                        href="#furn-best-tab"
                        role="tab"
                        aria-controls="furn-best-tab"
                        aria-selected="false"
                      >
                        Best Seller
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End .heading-right */}
              </div>
              {/* End .heading */}
              <div className="tab-content tab-content-carousel">
                <div
                  className="tab-pane p-0 fade show active"
                  id="furn-new-tab"
                  role="tabpanel"
                  aria-labelledby="furn-new-link"
                >
                  <div
                    className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                    data-toggle="owl"
                    data-owl-options='{
                              "nav": false, 
                              "dots": true,
                              "margin": 20,
                              "loop": false,
                              "responsive": {
                                  "0": {
                                      "items":2
                                  },
                                  "480": {
                                      "items":2
                                  },
                                  "768": {
                                      "items":3
                                  },
                                  "992": {
                                      "items":4
                                  },
                                  "1280": {
                                      "items":5,
                                      "nav": true
                                  }
                              }
                          }'
                  >
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-new">New</span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-11.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Tables</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Block Side Table/Trolley</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$229.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 12 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#333333" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#e2e2e2" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-12.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Sofas</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Roots Sofa Bed</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$1,199.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-13.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Lighting</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Carronade Large Suspension Lamp
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$892.00</span>
                          <span className="old-price">Was $939.00</span>
                        </div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#dddad5" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#825a45" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-14.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Chairs</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Wingback Chair</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$210.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "40%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#999999" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#cc9999" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-15.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Chairs</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Flow Slim Armchair</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$737,00</span>
                          <span className="old-price">Was $820.00</span>
                        </div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#877666" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .owl-carousel */}
                </div>
                {/* .End .tab-pane */}
                <div
                  className="tab-pane p-0 fade"
                  id="furn-featured-tab"
                  role="tabpanel"
                  aria-labelledby="furn-featured-link"
                >
                  <div
                    className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                    data-toggle="owl"
                    data-owl-options='{
                              "nav": false, 
                              "dots": true,
                              "margin": 20,
                              "loop": false,
                              "responsive": {
                                  "0": {
                                      "items":2
                                  },
                                  "480": {
                                      "items":2
                                  },
                                  "768": {
                                      "items":3
                                  },
                                  "992": {
                                      "items":4
                                  },
                                  "1280": {
                                      "items":5,
                                      "nav": true
                                  }
                              }
                          }'
                  >
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-13.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Lighting</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Carronade Large Suspension Lamp
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$892.00</span>
                          <span className="old-price">Was $939.00</span>
                        </div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#dddad5" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#825a45" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-14.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Chairs</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Wingback Chair</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$210.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "40%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#999999" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#cc9999" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-new">New</span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-11.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Tables</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Block Side Table/Trolley</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$229.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 12 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#333333" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#e2e2e2" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-15.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Chairs</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Flow Slim Armchair</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$737,00</span>
                          <span className="old-price">Was $820.00</span>
                        </div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#877666" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-12.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Sofas</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Roots Sofa Bed</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$1,199.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .owl-carousel */}
                </div>
                {/* .End .tab-pane */}
                <div
                  className="tab-pane p-0 fade"
                  id="furn-best-tab"
                  role="tabpanel"
                  aria-labelledby="furn-best-link"
                >
                  <div
                    className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                    data-toggle="owl"
                    data-owl-options='{
                              "nav": false, 
                              "dots": true,
                              "margin": 20,
                              "loop": false,
                              "responsive": {
                                  "0": {
                                      "items":2
                                  },
                                  "480": {
                                      "items":2
                                  },
                                  "768": {
                                      "items":3
                                  },
                                  "992": {
                                      "items":4
                                  },
                                  "1280": {
                                      "items":5,
                                      "nav": true
                                  }
                              }
                          }'
                  >
                    <div className="product">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-12.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Sofas</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Roots Sofa Bed</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$1,199.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-13.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Lighting</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Carronade Large Suspension Lamp
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$892.00</span>
                          <span className="old-price">Was $939.00</span>
                        </div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#dddad5" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#825a45" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-14.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Chairs</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Wingback Chair</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$210.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "40%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#999999" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#cc9999" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-15.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Chairs</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Flow Slim Armchair</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$737,00</span>
                          <span className="old-price">Was $820.00</span>
                        </div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#877666" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .owl-carousel */}
                </div>
                {/* .End .tab-pane */}
              </div>
              {/* End .tab-content */}
            </div>
            {/* End .container */}
            <div className="mb-3" />
            {/* End .mb-3 */}
            <div className="container clothing ">
              <div className="heading heading-flex heading-border mb-3">
                <div className="heading-left">
                  <h2 className="title">Clothing &amp; Apparel</h2>
                  {/* End .title */}
                </div>
                {/* End .heading-left */}
                <div className="heading-right">
                  <ul
                    className="nav nav-pills nav-border-anim justify-content-center"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="clot-new-link"
                        data-toggle="tab"
                        href="#clot-new-tab"
                        role="tab"
                        aria-controls="clot-new-tab"
                        aria-selected="true"
                      >
                        New
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="clot-featured-link"
                        data-toggle="tab"
                        href="#clot-featured-tab"
                        role="tab"
                        aria-controls="clot-featured-tab"
                        aria-selected="false"
                      >
                        Featured
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="clot-best-link"
                        data-toggle="tab"
                        href="#clot-best-tab"
                        role="tab"
                        aria-controls="clot-best-tab"
                        aria-selected="false"
                      >
                        Best Seller
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End .heading-right */}
              </div>
              {/* End .heading */}
              <div className="tab-content tab-content-carousel">
                <div
                  className="tab-pane p-0 fade show active"
                  id="clot-new-tab"
                  role="tabpanel"
                  aria-labelledby="clot-new-link"
                >
                  <div
                    className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                    data-toggle="owl"
                    data-owl-options='{
                              "nav": false, 
                              "dots": true,
                              "margin": 20,
                              "loop": false,
                              "responsive": {
                                  "0": {
                                      "items":2
                                  },
                                  "480": {
                                      "items":2
                                  },
                                  "768": {
                                      "items":3
                                  },
                                  "992": {
                                      "items":4
                                  },
                                  "1280": {
                                      "items":5,
                                      "nav": true
                                  }
                              }
                          }'
                  >
                    <div className="product">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-16.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Shoes</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Beige faux suede runner trainers
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$64.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 12 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-new">New</span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-17.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Accessories</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Black boucle check scarf</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$36.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-18.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">T-Shirts</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Red stripe tie front shirt</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$56.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#dddad5" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#825a45" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-19.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Bags</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Triple compartment cross body bag
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$64.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#f1f1f1" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-20.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Shirts</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Oxford grandad shirt</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$44.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 3 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#b8b8b8" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#ebebeb" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .owl-carousel */}
                </div>
                {/* .End .tab-pane */}
                <div
                  className="tab-pane p-0 fade"
                  id="clot-featured-tab"
                  role="tabpanel"
                  aria-labelledby="clot-featured-link"
                >
                  <div
                    className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                    data-toggle="owl"
                    data-owl-options='{
                              "nav": false, 
                              "dots": true,
                              "margin": 20,
                              "loop": false,
                              "responsive": {
                                  "0": {
                                      "items":2
                                  },
                                  "480": {
                                      "items":2
                                  },
                                  "768": {
                                      "items":3
                                  },
                                  "992": {
                                      "items":4
                                  },
                                  "1280": {
                                      "items":5,
                                      "nav": true
                                  }
                              }
                          }'
                  >
                    <div className="product">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-18.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">T-Shirts</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Red stripe tie front shirt</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$56.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#dddad5" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#825a45" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-19.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Bags</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Triple compartment cross body bag
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$64.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#f1f1f1" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-16.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Shoes</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Beige faux suede runner trainers
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$64.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 12 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-20.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Shirts</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Oxford grandad shirt</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$44.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 3 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#b8b8b8" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#ebebeb" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-new">New</span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-17.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Accessories</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Black boucle check scarf</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$36.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .owl-carousel */}
                </div>
                {/* .End .tab-pane */}
                <div
                  className="tab-pane p-0 fade"
                  id="clot-best-tab"
                  role="tabpanel"
                  aria-labelledby="clot-best-link"
                >
                  <div
                    className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                    data-toggle="owl"
                    data-owl-options='{
                              "nav": false, 
                              "dots": true,
                              "margin": 20,
                              "loop": false,
                              "responsive": {
                                  "0": {
                                      "items":2
                                  },
                                  "480": {
                                      "items":2
                                  },
                                  "768": {
                                      "items":3
                                  },
                                  "992": {
                                      "items":4
                                  },
                                  "1280": {
                                      "items":5,
                                      "nav": true
                                  }
                              }
                          }'
                  >
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-new">New</span>
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-17.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Accessories</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Black boucle check scarf</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$36.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-20.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Shirts</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Oxford grandad shirt</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$44.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 3 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#b8b8b8" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#ebebeb" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-19.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Bags</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Triple compartment cross body bag
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$64.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#f1f1f1" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-13/products/product-18.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">T-Shirts</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Red stripe tie front shirt</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$56.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#dddad5" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#825a45" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .owl-carousel */}
                </div>
                {/* .End .tab-pane */}
              </div>
              {/* End .tab-content */}
            </div>
            {/* End .container */}
            <div className="mb-3" />
            {/* End .mb-3 */}
            <div className="container">
              <h2 className="title title-border mb-5">Shop by Brands</h2>
              {/* End .title */}
              <div
                className="owl-carousel mb-5 owl-simple"
                data-toggle="owl"
                data-owl-options='{
                      "nav": false, 
                      "dots": true,
                      "margin": 30,
                      "loop": false,
                      "responsive": {
                          "0": {
                              "items":2
                          },
                          "420": {
                              "items":3
                          },
                          "600": {
                              "items":4
                          },
                          "900": {
                              "items":5
                          },
                          "1024": {
                              "items":6
                          },
                          "1280": {
                              "items":6,
                              "nav": true,
                              "dots": false
                          }
                      }
                  }'
              >
                <a href="#" className="brand">
                  <img src="assets/images/brands/1.png" alt="Brand Name" />
                </a>
                <a href="#" className="brand">
                  <img src="assets/images/brands/2.png" alt="Brand Name" />
                </a>
                <a href="#" className="brand">
                  <img src="assets/images/brands/3.png" alt="Brand Name" />
                </a>
                <a href="#" className="brand">
                  <img src="assets/images/brands/4.png" alt="Brand Name" />
                </a>
                <a href="#" className="brand">
                  <img src="assets/images/brands/5.png" alt="Brand Name" />
                </a>
                <a href="#" className="brand">
                  <img src="assets/images/brands/6.png" alt="Brand Name" />
                </a>
                <a href="#" className="brand">
                  <img src="assets/images/brands/7.png" alt="Brand Name" />
                </a>
              </div>
              {/* End .owl-carousel */}
            </div>
            {/* End .container */}
            <div className="cta cta-horizontal cta-horizontal-box bg-primary">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-2xl-5col">
                    <h3 className="cta-title text-white">
                      Join Our Newsletter
                    </h3>
                    {/* End .cta-title */}
                    <p className="cta-desc text-white">
                      Subcribe to get information about products and coupons
                    </p>
                    {/* End .cta-desc */}
                  </div>
                  {/* End .col-lg-5 */}
                  <div className="col-3xl-5col">
                    <form action="#">
                      <div className="input-group">
                        <input
                          type="email"
                          className="form-control form-control-white"
                          placeholder="Enter your Email Address"
                          aria-label="Email Adress"
                          required
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-outline-white-2"
                            type="submit"
                          >
                            <span>Subscribe</span>
                            <i className="icon-long-arrow-right" />
                          </button>
                        </div>
                        {/* .End .input-group-append */}
                      </div>
                      {/* .End .input-group */}
                    </form>
                  </div>
                  {/* End .col-lg-7 */}
                </div>
                {/* End .row */}
              </div>
              {/* End .container */}
            </div>
            {/* End .cta */}
            <div className="blog-posts bg-light pt-4 pb-7">
              <div className="container">
                <h2 className="title">From Our Blog</h2>
                {/* End .title-lg text-center */}
                <div
                  className="owl-carousel owl-simple"
                  data-toggle="owl"
                  data-owl-options='{
                          "nav": false, 
                          "dots": true,
                          "items": 3,
                          "margin": 20,
                          "loop": false,
                          "responsive": {
                              "0": {
                                  "items":1
                              },
                              "600": {
                                  "items":2
                              },
                              "992": {
                                  "items":3
                              },
                              "1280": {
                                  "items":4,
                                  "nav": true, 
                                  "dots": false
                              }
                          }
                      }'
                >
                  <article className="entry">
                    <figure className="entry-media">
                      <a href="single.html">
                        <img
                          src="assets/images/demos/demo-13/blog/post-1.jpg"
                          alt="image desc"
                        />
                      </a>
                    </figure>
                    {/* End .entry-media */}
                    <div className="entry-body">
                      <div className="entry-meta">
                        <a href="#">Nov 22, 2018</a>, 0 Comments
                      </div>
                      {/* End .entry-meta */}
                      <h3 className="entry-title">
                        <a href="single.html">Sed adipiscing ornare.</a>
                      </h3>
                      {/* End .entry-title */}
                      <div className="entry-content">
                        <p>
                          Lorem ipsum dolor consectetuer adipiscing elit.
                          Phasellus hendrerit. Pelletesque aliquet nibh ...
                        </p>
                        <a href="single.html" className="read-more">
                          Read More
                        </a>
                      </div>
                      {/* End .entry-content */}
                    </div>
                    {/* End .entry-body */}
                  </article>
                  {/* End .entry */}
                  <article className="entry">
                    <figure className="entry-media">
                      <a href="single.html">
                        <img
                          src="assets/images/demos/demo-13/blog/post-2.jpg"
                          alt="image desc"
                        />
                      </a>
                    </figure>
                    {/* End .entry-media */}
                    <div className="entry-body">
                      <div className="entry-meta">
                        <a href="#">Dec 12, 2018</a>, 0 Comments
                      </div>
                      {/* End .entry-meta */}
                      <h3 className="entry-title">
                        <a href="single.html">Vivamus vestibulum ntulla.</a>
                      </h3>
                      {/* End .entry-title */}
                      <div className="entry-content">
                        <p>
                          Phasellus hendrerit. Pelletesque aliquet nibh necurna
                          In nisi neque, aliquet vel, dapibus id ...{" "}
                        </p>
                        <a href="single.html" className="read-more">
                          Read More
                        </a>
                      </div>
                      {/* End .entry-content */}
                    </div>
                    {/* End .entry-body */}
                  </article>
                  {/* End .entry */}
                  <article className="entry">
                    <figure className="entry-media">
                      <a href="single.html">
                        <img
                          src="assets/images/demos/demo-13/blog/post-3.jpg"
                          alt="image desc"
                        />
                      </a>
                    </figure>
                    {/* End .entry-media */}
                    <div className="entry-body">
                      <div className="entry-meta">
                        <a href="#">Dec 19, 2018</a>, 2 Comments
                      </div>
                      {/* End .entry-meta */}
                      <h3 className="entry-title">
                        <a href="single.html">Praesent placerat risus.</a>
                      </h3>
                      {/* End .entry-title */}
                      <div className="entry-content">
                        <p>
                          Sed pretium, ligula sollicitudin laoreet viverra,
                          tortor libero sodales leo, eget blandit nunc ...
                        </p>
                        <a href="single.html" className="read-more">
                          Read More
                        </a>
                      </div>
                      {/* End .entry-content */}
                    </div>
                    {/* End .entry-body */}
                  </article>
                  {/* End .entry */}
                  <article className="entry">
                    <figure className="entry-media">
                      <a href="single.html">
                        <img
                          src="assets/images/demos/demo-13/blog/post-4.jpg"
                          alt="image desc"
                        />
                      </a>
                    </figure>
                    {/* End .entry-media */}
                    <div className="entry-body">
                      <div className="entry-meta">
                        <a href="#">Dec 19, 2018</a>, 2 Comments
                      </div>
                      {/* End .entry-meta */}
                      <h3 className="entry-title">
                        <a href="single.html">Fusce pellentesque suscipit.</a>
                      </h3>
                      {/* End .entry-title */}
                      <div className="entry-content">
                        <p>
                          Sed egestas, ante et vulputate volutpat, eros pede
                          semper est, vitae luctus metus libero augue.{" "}
                        </p>
                        <a href="single.html" className="read-more">
                          Read More
                        </a>
                      </div>
                      {/* End .entry-content */}
                    </div>
                    {/* End .entry-body */}
                  </article>
                  {/* End .entry */}
                  <article className="entry">
                    <figure className="entry-media">
                      <a href="single.html">
                        <img
                          src="assets/images/demos/demo-13/blog/post-1.jpg"
                          alt="image desc"
                        />
                      </a>
                    </figure>
                    {/* End .entry-media */}
                    <div className="entry-body">
                      <div className="entry-meta">
                        <a href="#">Nov 22, 2018</a>, 0 Comments
                      </div>
                      {/* End .entry-meta */}
                      <h3 className="entry-title">
                        <a href="single.html">Sed adipiscing ornare.</a>
                      </h3>
                      {/* End .entry-title */}
                      <div className="entry-content">
                        <p>
                          Lorem ipsum dolor consectetuer adipiscing elit.
                          Phasellus hendrerit. Pelletesque aliquet nibh ...
                        </p>
                        <a href="single.html" className="read-more">
                          Read More
                        </a>
                      </div>
                      {/* End .entry-content */}
                    </div>
                    {/* End .entry-body */}
                  </article>
                  {/* End .entry */}
                </div>
                {/* End .owl-carousel */}
              </div>
              {/* End .container */}
            </div>
            {/* End .blog-posts */}
          </main>
          {/* End .main */}
          <footer className="footer footer-2">
            <div className="icon-boxes-container">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 col-lg-3">
                    <div className="icon-box icon-box-side">
                      <span className="icon-box-icon">
                        <i className="icon-rocket" />
                      </span>
                      <div className="icon-box-content">
                        <h3 className="icon-box-title">Free Shipping</h3>
                        {/* End .icon-box-title */}
                        <p>Orders $50 or more</p>
                      </div>
                      {/* End .icon-box-content */}
                    </div>
                    {/* End .icon-box */}
                  </div>
                  {/* End .col-sm-6 col-lg-3 */}
                  <div className="col-sm-6 col-lg-3">
                    <div className="icon-box icon-box-side">
                      <span className="icon-box-icon">
                        <i className="icon-rotate-left" />
                      </span>
                      <div className="icon-box-content">
                        <h3 className="icon-box-title">Free Returns</h3>
                        {/* End .icon-box-title */}
                        <p>Within 30 days</p>
                      </div>
                      {/* End .icon-box-content */}
                    </div>
                    {/* End .icon-box */}
                  </div>
                  {/* End .col-sm-6 col-lg-3 */}
                  <div className="col-sm-6 col-lg-3">
                    <div className="icon-box icon-box-side">
                      <span className="icon-box-icon">
                        <i className="icon-info-circle" />
                      </span>
                      <div className="icon-box-content">
                        <h3 className="icon-box-title">Get 20% Off 1 Item</h3>
                        {/* End .icon-box-title */}
                        <p>When you sign up</p>
                      </div>
                      {/* End .icon-box-content */}
                    </div>
                    {/* End .icon-box */}
                  </div>
                  {/* End .col-sm-6 col-lg-3 */}
                  <div className="col-sm-6 col-lg-3">
                    <div className="icon-box icon-box-side">
                      <span className="icon-box-icon">
                        <i className="icon-life-ring" />
                      </span>
                      <div className="icon-box-content">
                        <h3 className="icon-box-title">We Support</h3>
                        {/* End .icon-box-title */}
                        <p>24/7 amazing services</p>
                      </div>
                      {/* End .icon-box-content */}
                    </div>
                    {/* End .icon-box */}
                  </div>
                  {/* End .col-sm-6 col-lg-3 */}
                </div>
                {/* End .row */}
              </div>
              {/* End .container */}
            </div>
            {/* End .icon-boxes-container */}
            <div className="footer-middle border-0">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-lg-6">
                    <div className="widget widget-about">
                      <img
                        src="assets/images/demos/demo-13/logo-footer.png"
                        className="footer-logo"
                        alt="Footer Logo"
                        width={105}
                        height={25}
                      />
                      <p>
                        Praesent dapibus, neque id cursus ucibus, tortor neque
                        egestas augue, eu vulputate magna eros eu erat. Aliquam
                        erat volutpat. Nam dui mi, tincidunt quis, accumsan
                        porttitor, facilisis luctus, metus.{" "}
                      </p>
                      <div className="widget-about-info">
                        <div className="row">
                          <div className="col-sm-6 col-md-4">
                            <span className="widget-about-title">
                              Got Question? Call us 24/7
                            </span>
                            <a href="tel:123456789">+0123 456 789</a>
                          </div>
                          {/* End .col-sm-6 */}
                          <div className="col-sm-6 col-md-8">
                            <span className="widget-about-title">
                              Payment Method
                            </span>
                            <figure className="footer-payments">
                              <img
                                src="assets/images/payments.png"
                                alt="Payment methods"
                                width={272}
                                height={20}
                              />
                            </figure>
                            {/* End .footer-payments */}
                          </div>
                          {/* End .col-sm-6 */}
                        </div>
                        {/* End .row */}
                      </div>
                      {/* End .widget-about-info */}
                    </div>
                    {/* End .widget about-widget */}
                  </div>
                  {/* End .col-sm-12 col-lg-3 */}
                  <div className="col-sm-4 col-lg-2">
                    <div className="widget">
                      <h4 className="widget-title">Information</h4>
                      {/* End .widget-title */}
                      <ul className="widget-list">
                        <li>
                          <a href="about.html">About Molla</a>
                        </li>
                        <li>
                          <a href="#">How to shop on Molla</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQ</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact us</a>
                        </li>
                        <li>
                          <a href="login.html">Log in</a>
                        </li>
                      </ul>
                      {/* End .widget-list */}
                    </div>
                    {/* End .widget */}
                  </div>
                  {/* End .col-sm-4 col-lg-3 */}
                  <div className="col-sm-4 col-lg-2">
                    <div className="widget">
                      <h4 className="widget-title">Customer Service</h4>
                      {/* End .widget-title */}
                      <ul className="widget-list">
                        <li>
                          <a href="#">Payment Methods</a>
                        </li>
                        <li>
                          <a href="#">Money-back guarantee!</a>
                        </li>
                        <li>
                          <a href="#">Returns</a>
                        </li>
                        <li>
                          <a href="#">Shipping</a>
                        </li>
                        <li>
                          <a href="#">Terms and conditions</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                      </ul>
                      {/* End .widget-list */}
                    </div>
                    {/* End .widget */}
                  </div>
                  {/* End .col-sm-4 col-lg-3 */}
                  <div className="col-sm-4 col-lg-2">
                    <div className="widget">
                      <h4 className="widget-title">My Account</h4>
                      {/* End .widget-title */}
                      <ul className="widget-list">
                        <li>
                          <a href="#">Sign In</a>
                        </li>
                        <li>
                          <a href="cart.html">View Cart</a>
                        </li>
                        <li>
                          <a href="#">My Wishlist</a>
                        </li>
                        <li>
                          <a href="#">Track My Order</a>
                        </li>
                        <li>
                          <a href="#">Help</a>
                        </li>
                      </ul>
                      {/* End .widget-list */}
                    </div>
                    {/* End .widget */}
                  </div>
                  {/* End .col-sm-64 col-lg-3 */}
                </div>
                {/* End .row */}
              </div>
              {/* End .container */}
            </div>
            {/* End .footer-middle */}
            <div className="footer-bottom">
              <div className="container">
                <p className="footer-copyright">
                  Copyright © 2019 Molla Store. All Rights Reserved.
                </p>
                {/* End .footer-copyright */}
                <ul className="footer-menu">
                  <li>
                    <a href="#">Terms Of Use</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
                {/* End .footer-menu */}
                <div className="social-icons social-icons-color">
                  <span className="social-label">Social Media</span>
                  <a
                    href="#"
                    className="social-icon social-facebook"
                    title="Facebook"
                    target="_blank"
                  >
                    <i className="icon-facebook-f" />
                  </a>
                  <a
                    href="#"
                    className="social-icon social-twitter"
                    title="Twitter"
                    target="_blank"
                  >
                    <i className="icon-twitter" />
                  </a>
                  <a
                    href="#"
                    className="social-icon social-instagram"
                    title="Instagram"
                    target="_blank"
                  >
                    <i className="icon-instagram" />
                  </a>
                  <a
                    href="#"
                    className="social-icon social-youtube"
                    title="Youtube"
                    target="_blank"
                  >
                    <i className="icon-youtube" />
                  </a>
                  <a
                    href="#"
                    className="social-icon social-pinterest"
                    title="Pinterest"
                    target="_blank"
                  >
                    <i className="icon-pinterest" />
                  </a>
                </div>
                {/* End .soial-icons */}
              </div>
              {/* End .container */}
            </div>
            {/* End .footer-bottom */}
          </footer>
          {/* End .footer */}
        </div>
        {/* End .page-wrapper */}
        <button id="scroll-top" title="Back to Top">
          <i className="icon-arrow-up" />
        </button>
        {/* Mobile Menu */}
        <div className="mobile-menu-overlay" />
        {/* End .mobil-menu-overlay */}
        <div className="mobile-menu-container mobile-menu-light">
          <div className="mobile-menu-wrapper">
            <span className="mobile-menu-close">
              <i className="icon-close" />
            </span>
            <form action="#" method="get" className="mobile-search">
              <label htmlFor="mobile-search" className="sr-only">
                Search
              </label>
              <input
                type="search"
                className="form-control"
                name="mobile-search"
                id="mobile-search"
                placeholder="Search in..."
                required
              />
              <button className="btn btn-primary" type="submit">
                <i className="icon-search" />
              </button>
            </form>
            <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="mobile-menu-link"
                  data-toggle="tab"
                  href="#mobile-menu-tab"
                  role="tab"
                  aria-controls="mobile-menu-tab"
                  aria-selected="true"
                >
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="mobile-cats-link"
                  data-toggle="tab"
                  href="#mobile-cats-tab"
                  role="tab"
                  aria-controls="mobile-cats-tab"
                  aria-selected="false"
                >
                  Categories
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="mobile-menu-tab"
                role="tabpanel"
                aria-labelledby="mobile-menu-link"
              >
                <nav className="mobile-nav">
                  <ul className="mobile-menu">
                    <li className="active">
                      <a href="index.html">Home</a>
                      <ul>
                        <li>
                          <a href="index-1.html">01 - furniture store</a>
                        </li>
                        <li>
                          <a href="index-2.html">02 - furniture store</a>
                        </li>
                        <li>
                          <a href="index-3.html">03 - electronic store</a>
                        </li>
                        <li>
                          <a href="index-4.html">04 - electronic store</a>
                        </li>
                        <li>
                          <a href="index-5.html">05 - fashion store</a>
                        </li>
                        <li>
                          <a href="index-6.html">06 - fashion store</a>
                        </li>
                        <li>
                          <a href="index-7.html">07 - fashion store</a>
                        </li>
                        <li>
                          <a href="index-8.html">08 - fashion store</a>
                        </li>
                        <li>
                          <a href="index-9.html">09 - fashion store</a>
                        </li>
                        <li>
                          <a href="index-10.html">10 - shoes store</a>
                        </li>
                        <li>
                          <a href="index-11.html">
                            11 - furniture simple store
                          </a>
                        </li>
                        <li>
                          <a href="index-12.html">12 - fashion simple store</a>
                        </li>
                        <li>
                          <a href="index-13.html">13 - market</a>
                        </li>
                        <li>
                          <a href="index-14.html">14 - market fullwidth</a>
                        </li>
                        <li>
                          <a href="index-15.html">15 - lookbook 1</a>
                        </li>
                        <li>
                          <a href="index-16.html">16 - lookbook 2</a>
                        </li>
                        <li>
                          <a href="index-17.html">17 - fashion store</a>
                        </li>
                        <li>
                          <a href="index-18.html">
                            18 - fashion store (with sidebar)
                          </a>
                        </li>
                        <li>
                          <a href="index-19.html">19 - games store</a>
                        </li>
                        <li>
                          <a href="index-20.html">20 - book store</a>
                        </li>
                        <li>
                          <a href="index-21.html">21 - sport store</a>
                        </li>
                        <li>
                          <a href="index-22.html">22 - tools store</a>
                        </li>
                        <li>
                          <a href="index-23.html">
                            23 - fashion left navigation store
                          </a>
                        </li>
                        <li>
                          <a href="index-24.html">24 - extreme sport store</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="category.html">Shop</a>
                      <ul>
                        <li>
                          <a href="category-list.html">Shop List</a>
                        </li>
                        <li>
                          <a href="category-2cols.html">Shop Grid 2 Columns</a>
                        </li>
                        <li>
                          <a href="category.html">Shop Grid 3 Columns</a>
                        </li>
                        <li>
                          <a href="category-4cols.html">Shop Grid 4 Columns</a>
                        </li>
                        <li>
                          <a href="category-boxed.html">
                            <span>
                              Shop Boxed No Sidebar
                              <span className="tip tip-hot">Hot</span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="category-fullwidth.html">
                            Shop Fullwidth No Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="product-category-boxed.html">
                            Product Category Boxed
                          </a>
                        </li>
                        <li>
                          <a href="product-category-fullwidth.html">
                            <span>
                              Product Category Fullwidth
                              <span className="tip tip-new">New</span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="cart.html">Cart</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                        <li>
                          <a href="wishlist.html">Wishlist</a>
                        </li>
                        <li>
                          <a href="#">Lookbook</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="product.html" className="sf-with-ul">
                        Product
                      </a>
                      <ul>
                        <li>
                          <a href="product.html">Default</a>
                        </li>
                        <li>
                          <a href="product-centered.html">Centered</a>
                        </li>
                        <li>
                          <a href="product-extended.html">
                            <span>
                              Extended Info
                              <span className="tip tip-new">New</span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="product-gallery.html">Gallery</a>
                        </li>
                        <li>
                          <a href="product-sticky.html">Sticky Info</a>
                        </li>
                        <li>
                          <a href="product-sidebar.html">Boxed With Sidebar</a>
                        </li>
                        <li>
                          <a href="product-fullwidth.html">Full Width</a>
                        </li>
                        <li>
                          <a href="product-masonry.html">Masonry Sticky Info</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul>
                        <li>
                          <a href="about.html">About</a>
                          <ul>
                            <li>
                              <a href="about.html">About 01</a>
                            </li>
                            <li>
                              <a href="about-2.html">About 02</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                          <ul>
                            <li>
                              <a href="contact.html">Contact 01</a>
                            </li>
                            <li>
                              <a href="contact-2.html">Contact 02</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="login.html">Login</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQs</a>
                        </li>
                        <li>
                          <a href="404.html">Error 404</a>
                        </li>
                        <li>
                          <a href="coming-soon.html">Coming Soon</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                      <ul>
                        <li>
                          <a href="blog.html">Classic</a>
                        </li>
                        <li>
                          <a href="blog-listing.html">Listing</a>
                        </li>
                        <li>
                          <a href="#">Grid</a>
                          <ul>
                            <li>
                              <a href="blog-grid-2cols.html">Grid 2 columns</a>
                            </li>
                            <li>
                              <a href="blog-grid-3cols.html">Grid 3 columns</a>
                            </li>
                            <li>
                              <a href="blog-grid-4cols.html">Grid 4 columns</a>
                            </li>
                            <li>
                              <a href="blog-grid-sidebar.html">Grid sidebar</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Masonry</a>
                          <ul>
                            <li>
                              <a href="blog-masonry-2cols.html">
                                Masonry 2 columns
                              </a>
                            </li>
                            <li>
                              <a href="blog-masonry-3cols.html">
                                Masonry 3 columns
                              </a>
                            </li>
                            <li>
                              <a href="blog-masonry-4cols.html">
                                Masonry 4 columns
                              </a>
                            </li>
                            <li>
                              <a href="blog-masonry-sidebar.html">
                                Masonry sidebar
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Mask</a>
                          <ul>
                            <li>
                              <a href="blog-mask-grid.html">Blog mask grid</a>
                            </li>
                            <li>
                              <a href="blog-mask-masonry.html">
                                Blog mask masonry
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Single Post</a>
                          <ul>
                            <li>
                              <a href="single.html">Default with sidebar</a>
                            </li>
                            <li>
                              <a href="single-fullwidth.html">
                                Fullwidth no sidebar
                              </a>
                            </li>
                            <li>
                              <a href="single-fullwidth-sidebar.html">
                                Fullwidth with sidebar
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="elements-list.html">Elements</a>
                      <ul>
                        <li>
                          <a href="elements-products.html">Products</a>
                        </li>
                        <li>
                          <a href="elements-typography.html">Typography</a>
                        </li>
                        <li>
                          <a href="elements-titles.html">Titles</a>
                        </li>
                        <li>
                          <a href="elements-banners.html">Banners</a>
                        </li>
                        <li>
                          <a href="elements-product-category.html">
                            Product Category
                          </a>
                        </li>
                        <li>
                          <a href="elements-video-banners.html">
                            Video Banners
                          </a>
                        </li>
                        <li>
                          <a href="elements-buttons.html">Buttons</a>
                        </li>
                        <li>
                          <a href="elements-accordions.html">Accordions</a>
                        </li>
                        <li>
                          <a href="elements-tabs.html">Tabs</a>
                        </li>
                        <li>
                          <a href="elements-testimonials.html">Testimonials</a>
                        </li>
                        <li>
                          <a href="elements-blog-posts.html">Blog Posts</a>
                        </li>
                        <li>
                          <a href="elements-portfolio.html">Portfolio</a>
                        </li>
                        <li>
                          <a href="elements-cta.html">Call to Action</a>
                        </li>
                        <li>
                          <a href="elements-icon-boxes.html">Icon Boxes</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
                {/* End .mobile-nav */}
              </div>
              {/* .End .tab-pane */}
              <div
                className="tab-pane fade"
                id="mobile-cats-tab"
                role="tabpanel"
                aria-labelledby="mobile-cats-link"
              >
                <nav className="mobile-cats-nav">
                  <ul className="mobile-cats-menu">
                    <li>
                      <a className="mobile-cats-lead" href="#">
                        Daily offers
                      </a>
                    </li>
                    <li>
                      <a className="mobile-cats-lead" href="#">
                        Gift Ideas
                      </a>
                    </li>
                    <li>
                      <a href="#">Beds</a>
                    </li>
                    <li>
                      <a href="#">Lighting</a>
                    </li>
                    <li>
                      <a href="#">Sofas &amp; Sleeper sofas</a>
                    </li>
                    <li>
                      <a href="#">Storage</a>
                    </li>
                    <li>
                      <a href="#">Armchairs &amp; Chaises</a>
                    </li>
                    <li>
                      <a href="#">Decoration </a>
                    </li>
                    <li>
                      <a href="#">Kitchen Cabinets</a>
                    </li>
                    <li>
                      <a href="#">Coffee &amp; Tables</a>
                    </li>
                    <li>
                      <a href="#">Outdoor Furniture </a>
                    </li>
                  </ul>
                  {/* End .mobile-cats-menu */}
                </nav>
                {/* End .mobile-cats-nav */}
              </div>
              {/* .End .tab-pane */}
            </div>
            {/* End .tab-content */}
            <div className="social-icons">
              <a
                href="#"
                className="social-icon"
                target="_blank"
                title="Facebook"
              >
                <i className="icon-facebook-f" />
              </a>
              <a
                href="#"
                className="social-icon"
                target="_blank"
                title="Twitter"
              >
                <i className="icon-twitter" />
              </a>
              <a
                href="#"
                className="social-icon"
                target="_blank"
                title="Instagram"
              >
                <i className="icon-instagram" />
              </a>
              <a
                href="#"
                className="social-icon"
                target="_blank"
                title="Youtube"
              >
                <i className="icon-youtube" />
              </a>
            </div>
            {/* End .social-icons */}
          </div>
          {/* End .mobile-menu-wrapper */}
        </div>
        {/* End .mobile-menu-container */}
        {/* Sign in / Register Modal */}
        <div
          className="modal fade"
          id="signin-modal"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i className="icon-close" />
                  </span>
                </button>
                <div className="form-box">
                  <div className="form-tab">
                    <ul
                      className="nav nav-pills nav-fill nav-border-anim"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="signin-tab"
                          data-toggle="tab"
                          href="#signin"
                          role="tab"
                          aria-controls="signin"
                          aria-selected="true"
                        >
                          Sign In
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="register-tab"
                          data-toggle="tab"
                          href="#register"
                          role="tab"
                          aria-controls="register"
                          aria-selected="false"
                        >
                          Register
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content" id="tab-content-5">
                      <div
                        className="tab-pane fade show active"
                        id="signin"
                        role="tabpanel"
                        aria-labelledby="signin-tab"
                      >
                        <form action="#">
                          <div className="form-group">
                            <label htmlFor="singin-email">
                              Username or email address *
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="singin-email"
                              name="singin-email"
                              required
                            />
                          </div>
                          {/* End .form-group */}
                          <div className="form-group">
                            <label htmlFor="singin-password">Password *</label>
                            <input
                              type="password"
                              className="form-control"
                              id="singin-password"
                              name="singin-password"
                              required
                            />
                          </div>
                          {/* End .form-group */}
                          <div className="form-footer">
                            <button
                              type="submit"
                              className="btn btn-outline-primary-2"
                            >
                              <span>LOG IN</span>
                              <i className="icon-long-arrow-right" />
                            </button>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="signin-remember"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="signin-remember"
                              >
                                Remember Me
                              </label>
                            </div>
                            {/* End .custom-checkbox */}
                            <a href="#" className="forgot-link">
                              Forgot Your Password?
                            </a>
                          </div>
                          {/* End .form-footer */}
                        </form>
                        <div className="form-choice">
                          <p className="text-center">or sign in with</p>
                          <div className="row">
                            <div className="col-sm-6">
                              <a href="#" className="btn btn-login btn-g">
                                <i className="icon-google" />
                                Login With Google
                              </a>
                            </div>
                            {/* End .col-6 */}
                            <div className="col-sm-6">
                              <a href="#" className="btn btn-login btn-f">
                                <i className="icon-facebook-f" />
                                Login With Facebook
                              </a>
                            </div>
                            {/* End .col-6 */}
                          </div>
                          {/* End .row */}
                        </div>
                        {/* End .form-choice */}
                      </div>
                      {/* .End .tab-pane */}
                      <div
                        className="tab-pane fade"
                        id="register"
                        role="tabpanel"
                        aria-labelledby="register-tab"
                      >
                        <form action="#">
                          <div className="form-group">
                            <label htmlFor="register-email">
                              Your email address *
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="register-email"
                              name="register-email"
                              required
                            />
                          </div>
                          {/* End .form-group */}
                          <div className="form-group">
                            <label htmlFor="register-password">
                              Password *
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="register-password"
                              name="register-password"
                              required
                            />
                          </div>
                          {/* End .form-group */}
                          <div className="form-footer">
                            <button
                              type="submit"
                              className="btn btn-outline-primary-2"
                            >
                              <span>SIGN UP</span>
                              <i className="icon-long-arrow-right" />
                            </button>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="register-policy"
                                required
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="register-policy"
                              >
                                I agree to the <a href="#">privacy policy</a> *
                              </label>
                            </div>
                            {/* End .custom-checkbox */}
                          </div>
                          {/* End .form-footer */}
                        </form>
                        <div className="form-choice">
                          <p className="text-center">or sign in with</p>
                          <div className="row">
                            <div className="col-sm-6">
                              <a href="#" className="btn btn-login btn-g">
                                <i className="icon-google" />
                                Login With Google
                              </a>
                            </div>
                            {/* End .col-6 */}
                            <div className="col-sm-6">
                              <a href="#" className="btn btn-login  btn-f">
                                <i className="icon-facebook-f" />
                                Login With Facebook
                              </a>
                            </div>
                            {/* End .col-6 */}
                          </div>
                          {/* End .row */}
                        </div>
                        {/* End .form-choice */}
                      </div>
                      {/* .End .tab-pane */}
                    </div>
                    {/* End .tab-content */}
                  </div>
                  {/* End .form-tab */}
                </div>
                {/* End .form-box */}
              </div>
              {/* End .modal-body */}
            </div>
            {/* End .modal-content */}
          </div>
          {/* End .modal-dialog */}
        </div>
        {/* End .modal */}
        <div
          className="container newsletter-popup-container mfp-hide"
          id="newsletter-popup-form"
        >
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="row no-gutters bg-white newsletter-popup-content">
                <div className="col-xl-3-5col col-lg-7 banner-content-wrap">
                  <div className="banner-content text-center">
                    <img
                      src="assets/images/popup/newsletter/logo.png"
                      className="logo"
                      alt="logo"
                      width={60}
                      height={15}
                    />
                    <h2 className="banner-title">
                      get{" "}
                      <span>
                        25<light>%</light>
                      </span>{" "}
                      off
                    </h2>
                    <p>
                      Subscribe to the Molla eCommerce newsletter to receive
                      timely updates from your favorite products.
                    </p>
                    <form action="#">
                      <div className="input-group input-group-round">
                        <input
                          type="email"
                          className="form-control form-control-white"
                          placeholder="Your Email Address"
                          aria-label="Email Adress"
                          required
                        />
                        <div className="input-group-append">
                          <button className="btn" type="submit">
                            <span>go</span>
                          </button>
                        </div>
                        {/* .End .input-group-append */}
                      </div>
                      {/* .End .input-group */}
                    </form>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="register-policy-2"
                        required
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="register-policy-2"
                      >
                        Do not show this popup again
                      </label>
                    </div>
                    {/* End .custom-checkbox */}
                  </div>
                </div>
                <div className="col-xl-2-5col col-lg-5 ">
                  <img
                    src="assets/images/popup/newsletter/img-1.jpg"
                    className="newsletter-img"
                    alt="newsletter"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Plugins JS File */}
        {/* Main JS File */}
      </div>
    );
  }
}

export default Navbar;
