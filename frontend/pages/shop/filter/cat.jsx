import React, { Component } from "react";

import axios from "axios";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import queryString from "query-string";
import { withRouter } from "next/router";
import Router from "next/router";

import Footer from "../../../src/components/Footer/Footer";
import NavbarTwo from "../../../src/components/Navbar/NavbarTwo";
import NewsLetter from "../../../src/components/NewsLetter/NewsLetter";
import Service from "../../../src/components/Service/Service";
import ShopListSingle from "../../../src/components/ShopList/ShopListSingle";
import ShopGirdSingle from "../../../src/components/ShopList/ShopGirdSingle";
import Link from "next/link";

class AllListShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
      products: [],
      hasMore: true,
      offset: 1,
      limit: 20,
      list: false,
      query: "",
    };

    if (typeof window !== "undefined") {
      window.onscroll = () => {
        const {
          state: { error, loading, hasMore },
        } = this;
        if (error || loading || !hasMore) return;
        if (
          document.documentElement.scrollHeight -
            document.documentElement.scrollTop ===
          document.documentElement.clientHeight
        ) {
          this.loadProducts();
          //console.log("loading");
        }
      };
    } else {
      //console.log("loading");
    }
  }

  loadProducts = () => {
    this.setState({ loading: true });
    //console.log("loading prod");
    axios
      .get(
        `http://127.0.0.1:8000/v1/products/product-filter-cat/?limit=${this.state.limit}&offset=${this.state.offset}`,
        {
          params: {
            query: this.state.query,
          },
        }
      )
      .then((res) => {
        const newProducts = res.data.products;
        const hasMore = res.data.hasMore;
        //console.log(hasMore);

        this.setState({
          hasMore: hasMore,
          loading: false,
          products: [...this.state.products, ...newProducts],
          offset: this.state.offset + this.state.limit,
        });
      })
      .catch((err) => {
        //console.log(err);
        this.setState({ loading: false });
      });
  };

  componentWillMount() {
    // console.log(
    //   "queryyyyyyyyy",
    //   this.props.router.query[Object.keys(this.props.router.query)[0]]
    // );
    this.setState({
      query: this.props.router.query[Object.keys(this.props.router.query)[0]],
    });
  }

  componentDidMount() {
    if (!this.state.query) {
      Router.push("/");
    }
    //console.log(this.state.query);
    axios
      .get(
        "http://127.0.0.1:5000/v1/products/product-filter-cat/?limit=1&offset=0",
        {
          params: {
            query: this.state.query,
          },
        }
      )
      .then((res) => {
        const newProducts = res.data.products;
        const hasMore = res.data.hasMore;
        //console.log(hasMore);

        this.setState({
          hasMore: hasMore,
          loading: false,
          products: [...this.state.products, ...newProducts],
          offset: this.state.offset + this.state.limit,
        });
      })
      .catch((err) => {
        //console.log(err);
        this.setState({ loading: false });
      });
  }

  render() {
    //console.log(this.state.query);

    return (
      <>
        <NavbarTwo />
        <section className="product-area shop-sidebar shop-list shop section">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-12">
                <div className="shop-sidebar">
                  {/* Single Widget */}
                  <div className="single-widget category">
                    <h3 className="title">Categories</h3>
                    <ul className="categor-list">
                      <li>
                        <Link href="/shop/filter/cat?=Movie">Movie</Link>
                      </li>
                      <li>
                        <Link href="/shop/filter/cat?=Game">Game</Link>
                      </li>
                      <li>
                        <Link href="/shop/filter/cat?=Life">Life</Link>
                      </li>
                      <li>
                        <Link href="/shop/filter/cat?=Sports">Sports</Link>
                      </li>
                      <li>
                        <Link href="/shop/filter/cat?=Trend">Trend</Link>
                      </li>
                      <li>
                        <Link href="/shop/filter/cat?=Programming">
                          Programming
                        </Link>
                      </li>
                      {/* <li>
                        <Link href="/shop/filter/cat?=Game">Game</Link>
                      </li> */}
                    </ul>
                  </div>
                  {/*/ End Single Widget */}
                  {/* Shop By Price */}
                  <div className="single-widget range">
                    <h3 className="title">Shop by Price</h3>
                    <div className="price-filter">
                      <div className="price-filter-inner">
                        <div id="slider-range" />
                        <div className="price_slider_amount">
                          <div className="label-input">
                            <span>Range:</span>
                            <input
                              type="text"
                              id="amount"
                              name="price"
                              placeholder="Add Your Price"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="check-box-list">
                      <li>
                        <label className="checkbox-inline" htmlFor={1}>
                          <input name="news" id={1} type="checkbox" />
                          $20 - $50<span className="count">(3)</span>
                        </label>
                      </li>
                      <li>
                        <label className="checkbox-inline" htmlFor={2}>
                          <input name="news" id={2} type="checkbox" />
                          $50 - $100<span className="count">(5)</span>
                        </label>
                      </li>
                      <li>
                        <label className="checkbox-inline" htmlFor={3}>
                          <input name="news" id={3} type="checkbox" />
                          $100 - $250<span className="count">(8)</span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  {/*/ End Shop By Price */}
                  {/* Single Widget */}
                  <div className="single-widget recent-post">
                    <h3 className="title">Recent post</h3>
                    {/* Single Post */}
                    <div className="single-post first">
                      <div className="image">
                        <img src="https://via.placeholder.com/75x75" alt="#" />
                      </div>
                      <div className="content">
                        <h5>
                          <a href="#">Girls Dress</a>
                        </h5>
                        <p className="price">$99.50</p>
                        <ul className="reviews">
                          <li className="yellow">
                            <i className="ti-star" />
                          </li>
                          <li className="yellow">
                            <i className="ti-star" />
                          </li>
                          <li className="yellow">
                            <i className="ti-star" />
                          </li>
                          <li>
                            <i className="ti-star" />
                          </li>
                          <li>
                            <i className="ti-star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Single Post */}
                    {/* Single Post */}
                    <div className="single-post first">
                      <div className="image">
                        <img src="https://via.placeholder.com/75x75" alt="#" />
                      </div>
                      <div className="content">
                        <h5>
                          <a href="#">Women Clothings</a>
                        </h5>
                        <p className="price">$99.50</p>
                        <ul className="reviews">
                          <li className="yellow">
                            <i className="ti-star" />
                          </li>
                          <li className="yellow">
                            <i className="ti-star" />
                          </li>
                          <li className="yellow">
                            <i className="ti-star" />
                          </li>
                          <li className="yellow">
                            <i className="ti-star" />
                          </li>
                          <li>
                            <i className="ti-star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Single Post */}
                    {/* Single Post */}
                    <div className="single-post first">
                      <div className="image">
                        <img src="https://via.placeholder.com/75x75" alt="#" />
                      </div>
                      <div className="content">
                        <h5>
                          <a href="#">Man Tshirt</a>
                        </h5>
                        <p className="price">$99.50</p>
                        <ul className="reviews">
                          <li className="yellow">
                            <i className="ti-star" />
                          </li>
                          <li className="yellow">
                            <i className="ti-star" />
                          </li>
                          <li className="yellow">
                            <i className="ti-star" />
                          </li>
                          <li className="yellow">
                            <i className="ti-star" />
                          </li>
                          <li className="yellow">
                            <i className="ti-star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Single Post */}
                  </div>
                  {/*/ End Single Widget */}
                  {/* Single Widget */}
                  <div className="single-widget category">
                    <h3 className="title">Manufacturers</h3>
                    <ul className="categor-list">
                      <li>
                        <a href="#">Forever</a>
                      </li>
                      <li>
                        <a href="#">giordano</a>
                      </li>
                      <li>
                        <a href="#">abercrombie</a>
                      </li>
                      <li>
                        <a href="#">ecko united</a>
                      </li>
                      <li>
                        <a href="#">zara</a>
                      </li>
                    </ul>
                  </div>
                  {/*/ End Single Widget */}
                </div>
              </div>
              {this.state.list ? (
                <div className="col-lg-9 col-md-8 col-12">
                  <div className="row">
                    <div className="col-12">
                      {/* Shop Top */}
                      <div className="shop-top">
                        <div className="shop-shorter">
                          <div className="single-shorter">
                            <label>Show :</label>
                            <select>
                              <option selected="selected">09</option>
                              <option>15</option>
                              <option>25</option>
                              <option>30</option>
                            </select>
                          </div>
                          <div className="single-shorter">
                            <label>Sort By :</label>
                            <select>
                              <option selected="selected">Name</option>
                              <option>Price</option>
                              <option>Size</option>
                            </select>
                          </div>
                        </div>
                        <ul className="view-mode">
                          <li>
                            <a
                              onClick={() =>
                                this.setState({ list: !this.state.list })
                              }
                            >
                              <i className="fa fa-th-large" />
                            </a>
                          </li>
                          <li className="active">
                            <a
                              onClick={() =>
                                this.setState({ list: !this.state.list })
                              }
                            >
                              <i className="fa fa-th-list" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/*/ End Shop Top */}
                    </div>
                  </div>
                  <div className="row">
                    {/* Start Single List */}

                    {this.state.products
                      ? this.state.products.map((product) => {
                          return <ShopListSingle product={product} />;
                        })
                      : ""}

                    {/* End Single List */}
                    {/* Start Single List */}
                  </div>
                </div>
              ) : (
                <div className="col-lg-9 col-md-8 col-12">
                  <div className="row">
                    <div className="col-12">
                      {/* Shop Top */}
                      <div className="shop-top">
                        <div className="shop-shorter">
                          <div className="single-shorter">
                            <label>Show :</label>
                            <select>
                              <option selected="selected">09</option>
                              <option>15</option>
                              <option>25</option>
                              <option>30</option>
                            </select>
                          </div>
                          <div className="single-shorter">
                            <label>Sort By :</label>
                            <select>
                              <option selected="selected">Name</option>
                              <option>Price</option>
                              <option>Size</option>
                            </select>
                          </div>
                        </div>
                        <ul className="view-mode">
                          <li className="active">
                            <a
                              onClick={() =>
                                this.setState({ list: !this.state.list })
                              }
                            >
                              <i className="fa fa-th-large" />
                            </a>
                          </li>
                          <li>
                            <a
                              onClick={() =>
                                this.setState({ list: !this.state.list })
                              }
                            >
                              <i className="fa fa-th-list" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/*/ End Shop Top */}
                    </div>
                  </div>
                  <div className="row">
                    {this.state.products
                      ? this.state.products.map((product) => {
                          return <ShopGirdSingle product={product} />;
                        })
                      : ""}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        {/* <Footer /> */}
      </>
    );
  }
}

export default withRouter(AllListShop);
