import axios from "axios";
import React, { Component } from "react";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";

import NavbarTwo from "../../src/components/Navbar/NavbarTwo";
import ShopGirdSingle from "../../src/components/ShopList/ShopGirdSingle";
import Navigation from "../../src/components/Navigation";
import { isMobile, isBrowser } from "react-device-detect";
import { withRouter } from "next/router";

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: Array.from({ length: 20 }),
      error: false,
      loading: false,
      products: [],
      hasMore: true,
      offset: 1,
      limit: 1,
      list: false,
      sort: "",
      min: 0,
      max: 0,

      cat: "",
      size: "",
      trendingProducts: [],

      openFilterSideBar: false,
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

  componentDidMount() {
    this.setState({
      loading: true,
    });
    if (this.props.details) {
      this.setState({ products: this.props.details, loading: false });
    }
    this.loadTrendingProducts();
  }

  loadTrendingProducts = () => {
    //console.log("ok.................");
    axios
      .get(
        "http://Proman-prod.eba-faitp54h.ap-south-1.elasticbeanstalk.com/api/v1/products/trending-products"
      )
      .then((res) => {
        this.setState({
          trendingProducts: res.data.new_qs,
        });
      });
  };

  loadProducts = () => {
    this.setState({ loading: true });
    //console.log("loading prod");
    axios
      .get(
        `http://Proman-prod.eba-faitp54h.ap-south-1.elasticbeanstalk.com/api/v1/products/list-infinite/?limit=${this.state.limit}&offset=${this.state.offset}&cat=${this.state.cat}`
      )
      .then((res) => {
        const newProducts = res.data.products;
        const hasMore = res.data.hasMore;
        //console.log(hasMore);

        this.setState({
          hasMore: hasMore,
          loading: false,
          products: [...this.state.products, ...newProducts],
          offset: this.state.offset + parseInt(this.state.limit),
        });
      })
      .catch((err) => {
        //console.log(err);
        this.setState({ loading: false });
      });
  };

  sortByPriceAsc() {
    this.setState((prevState) => {
      this.state.products.sort((a, b) => a.price - b.price);
    });
  }

  opeFilterSidebar = () => {
    this.setState({ openFilterSideBar: !this.state.openFilterSideBar });
  };

  sortByPriceDesc() {
    this.setState((prevState) => {
      this.state.products.sort((a, b) => b.price - a.price);
    });
  }

  sortAscending = () => {
    const { products } = this.state;
    products.sort((a, b) => b.name.localeCompare(a.name));
    this.setState({ products });
  };

  sortDescending = () => {
    const { products } = this.state;
    products.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({ products });
  };

  handleChange = (e) => {
    this.setState({ sort: e.target.value });
    if (this.state.sort === "asc") {
      return this.sortAscending();
    } else if (this.state.sort === "desc") {
      return this.sortDescending();
    }
  };

  handleUpdateSize = (e) => {
    this.setState({ size: e.target.innerHTML }, () => this.updateProducts());
  };

  handleUpdateCat = (e) => {
    this.setState({ cat: e.target.innerHTML, offset: 0 }, () =>
      this.updateProducts()
    );
  };

  updateProducts = (e) => {
    axios
      .get(
        `http://Proman-prod.eba-faitp54h.ap-south-1.elasticbeanstalk.com/api/v1/products/product-filter-cat/?limit=1&offset=0&cat=${this.state.cat}&size=${this.state.size}`
      )
      .then((res) => {
        const newProducts = res.data.products;
        const hasMore = res.data.hasMore;
        //console.log(hasMore);

        this.setState(
          {
            hasMore: hasMore,
            loading: false,
            products: newProducts,
            offset: this.state.offset + this.state.limit,
          },
          () => {
            this.props.router.push(
              {
                pathname: "/shop/all",
                query: {
                  cat: this.state.cat,
                  // size: this.state.size,
                },
              },
              undefined,
              { shallow: true }
            );
          }
        );
      })
      .catch((err) => {
        //console.log(err);
        this.setState({ loading: false });
      });
  };

  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 })),
      });
    }, 1500);
  };

  render() {
    return (
      <>
        <NavbarTwo />
        {this.state.openFilterSideBar && (
          <div className="show-sidebar-cart">
            <aside id="sidebar-cart">
              {/* <div className="filter-head"> */}
              <a
                onClick={() => this.opeFilterSidebar()}
                className="close-button"
              >
                <span>X</span>
              </a>
              {/* </div> */}
              <div className="container-fluid mt-4">
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-12">
                    <div className="shop-sidebar">
                      {/* Single Widget */}
                      <div className="single-widget category">
                        <h3 className="title">Categories</h3>
                        <ul className="categor-list">
                          <li>
                            <a
                              onClick={(e) => this.handleUpdateCat(e)}
                              value="Movie"
                              name="cat"
                            >
                              Movie
                            </a>
                          </li>

                          <li>
                            <a
                              onClick={(e) => this.handleUpdateCat(e)}
                              value="Game"
                              name="cat"
                            >
                              Game
                            </a>
                          </li>
                          <li>
                            <a
                              onClick={(e) => this.handleUpdateCat(e)}
                              value="Life"
                              name="cat"
                            >
                              Life
                            </a>
                          </li>
                          <li>
                            <a
                              onClick={(e) => this.handleUpdateCat(e)}
                              value="Sports"
                              name="cat"
                            >
                              Sports
                            </a>
                          </li>
                          <li>
                            <a
                              onClick={(e) => this.handleUpdateCat(e)}
                              value="Trend"
                              name="cat"
                            >
                              Trend
                            </a>
                          </li>
                          <li>
                            <a
                              onClick={(e) => this.handleUpdateCat(e)}
                              value="Programming"
                              name="cat"
                            >
                              Programming
                            </a>
                          </li>
                          {/* <li>
                      <Link href="/shop/filter/cat?=Game">Game</Link>
                    </li> */}
                        </ul>
                      </div>
                      {/*/ End Single Widget */}
                      {/* Shop By Price */}
                      {/* <div className="single-widget range">
                  <h3 className="title">Shop by Price</h3>
                  <div className="price-filter">
                    <div className="price-filter-inner">
                      <div id="slider-range" />
                      <div className="price_slider_amount">
                        <div className="label-input">
                          <span>Range:</span>
                          <input
                            onChange={(e) => //console.log(e.target)}
                            type="text"
                            id="amount"
                            name="price"
                            placeholder="Add Your Price"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="categor-list">
                    <li>
                      <a
                        onClick={(e) => this.handleUpdateSize(e)}
                        value="M"
                        name="size"
                      >
                        L
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={(e) => this.handleUpdateSize(e)}
                        value="L"
                        name="size"
                      >
                        M
                      </a>
                    </li>
                    <li>
                      <Link href="/shop/filter/cat?=Game">Game</Link>
                    </li>
                  </ul>
                </div>
           */}

                      {/*/ End Shop By Price */}
                      {/* Single Widget */}
                      <div
                        style={{ padding: "10px" }}
                        className="single-widget recent-post"
                      >
                        <h3 className="title">Trending Product</h3>
                        {/* Single Post */}
                        {this.state.trendingProducts &&
                          this.state.trendingProducts.map((product) => {
                            return (
                              <div className="single-post first">
                                <div className="image">
                                  <img
                                    src={
                                      product.thumbnail
                                        ? `http://Proman-prod.eba-faitp54h.ap-south-1.elasticbeanstalk.com/api${product.thumbnail}`
                                        : "https://via.placeholder.com/550x750"
                                    }
                                  />
                                </div>
                                <div className="content">
                                  <h5 style={{ textTransform: "capitalize" }}>
                                    <Link href={`/details/${product.slug}`}>
                                      <a>{product.name}</a>
                                    </Link>
                                  </h5>
                                  <div style={{ display: "flex" }}>
                                    <p className="price">
                                      {" "}
                                      <img
                                        width="15px"
                                        height="15px"
                                        src="/images/taka.png"
                                      />
                                      {product.discount_price
                                        ? product.discount_price
                                        : product.price}
                                    </p>
                                    <p className="price old-price">
                                      {" "}
                                      <img
                                        width="15px"
                                        height="15px"
                                        src="/images/taka.png"
                                      />
                                      <del>{product.price}</del>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}

                        {/* End Single Post */}
                      </div>
                      {/*/ End Single Widget */}
                      {/* Single Widget */}
                      {/* <div className="single-widget category">
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
                </div> */}
                      {/*/ End Single Widget */}
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            <div id="sidebar-cart-curtain" />
          </div>
        )}
        <section className="product-area shop-sidebar shop-list shop section">
          <div className="container">
            <div className="row">
              <p>{this.state.hasMore}</p>
              {isBrowser && (
                <div className="col-lg-3 col-md-4 col-12">
                  <div className="shop-sidebar">
                    {/* Single Widget */}
                    <div className="single-widget category">
                      <h3 className="title">Categories</h3>
                      <ul className="categor-list">
                        <li>
                          <a
                            onClick={(e) => this.handleUpdateCat(e)}
                            value="Movie"
                            name="cat"
                          >
                            Movie
                          </a>
                        </li>

                        <li>
                          <a
                            onClick={(e) => this.handleUpdateCat(e)}
                            value="Game"
                            name="cat"
                          >
                            Game
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={(e) => this.handleUpdateCat(e)}
                            value="Life"
                            name="cat"
                          >
                            Life
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={(e) => this.handleUpdateCat(e)}
                            value="Sports"
                            name="cat"
                          >
                            Sports
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={(e) => this.handleUpdateCat(e)}
                            value="Trend"
                            name="cat"
                          >
                            Trend
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={(e) => this.handleUpdateCat(e)}
                            value="Programming"
                            name="cat"
                          >
                            Programming
                          </a>
                        </li>
                        {/* <li>
                      <Link href="/shop/filter/cat?=Game">Game</Link>
                    </li> */}
                      </ul>
                    </div>
                    {/*/ End Single Widget */}
                    {/* Shop By Price */}
                    {/* <div className="single-widget range">
                  <h3 className="title">Shop by Price</h3>
                  <div className="price-filter">
                    <div className="price-filter-inner">
                      <div id="slider-range" />
                      <div className="price_slider_amount">
                        <div className="label-input">
                          <span>Range:</span>
                          <input
                            onChange={(e) => //console.log(e.target)}
                            type="text"
                            id="amount"
                            name="price"
                            placeholder="Add Your Price"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="categor-list">
                    <li>
                      <a
                        onClick={(e) => this.handleUpdateSize(e)}
                        value="M"
                        name="size"
                      >
                        L
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={(e) => this.handleUpdateSize(e)}
                        value="L"
                        name="size"
                      >
                        M
                      </a>
                    </li>
                    <li>
                      <Link href="/shop/filter/cat?=Game">Game</Link>
                    </li>
                  </ul>
                </div>
           */}

                    {/*/ End Shop By Price */}
                    {/* Single Widget */}
                    <div className="single-widget recent-post">
                      <h3 className="title">Recent post</h3>
                      {this.state.trendingProducts &&
                        this.state.trendingProducts.map((product) => {
                          return (
                            <div className="single-post first">
                              <div className="image">
                                <img
                                  src={
                                    product.thumbnail
                                      ? `http://Proman-prod.eba-faitp54h.ap-south-1.elasticbeanstalk.com/api${product.thumbnail}`
                                      : "https://via.placeholder.com/550x750"
                                  }
                                />
                              </div>
                              <div className="content">
                                <h5 style={{ textTransform: "capitalize" }}>
                                  <Link href={`/details/${product.slug}`}>
                                    <a>{product.name}</a>
                                  </Link>
                                </h5>
                                <div style={{ display: "flex" }}>
                                  <p className="price">
                                    {" "}
                                    <img
                                      width="15px"
                                      height="15px"
                                      src="/images/taka.png"
                                    />
                                    {product.discount_price
                                      ? product.discount_price
                                      : product.price}
                                  </p>
                                  <p className="price old-price">
                                    {" "}
                                    <img
                                      width="15px"
                                      height="15px"
                                      src="/images/taka.png"
                                    />
                                    <del>{product.price}</del>
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                    {/*/ End Single Widget */}
                    {/* Single Widget */}
                    {/* <div className="single-widget category">
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
                </div> */}
                    {/*/ End Single Widget */}
                  </div>
                </div>
              )}
              {/* {this.state.list ? ( */}
              <div className="col-lg-9 col-md-8 col-12">
                <div className="row">
                  <div className="col-12">
                    {/* Shop Top */}
                    <div className="shop-top">
                      <div className="shop-shorter">
                        <div className="single-shorter">
                          <label>Show :</label>
                          <select
                            onChange={(e) =>
                              this.setState({ limit: e.target.value })
                            }
                          >
                            <option>09</option>
                            <option>15</option>
                            <option>25</option>
                            <option>30</option>
                          </select>
                        </div>
                        <div className="single-shorter">
                          <label>Sort By :</label>
                          <select onChange={(e) => this.handleChange(e)}>
                            <option value="asc">A - Z</option>
                            <option value="desc">Z- A</option>
                          </select>
                        </div>
                        {isMobile && (
                          <div
                            onClick={() =>
                              this.setState({
                                openFilterSideBar:
                                  !this.state.openFilterSideBar,
                              })
                            }
                            className="single-shorter-filter"
                          >
                            <img
                              src="/images/filter.png"
                              width="20px"
                              height="20px"
                            />
                          </div>
                        )}
                      </div>
                      {/* <ul className="view-mode">
                      <li className={this.state.list ? "" : "active"}>
                        <a onClick={() => this.setState({ list: false })}>
                          <i className="fa fa-th-large" />
                        </a>
                      </li>
                      <li className={this.state.list ? "active" : ""}>
                        <a onClick={() => this.setState({ list: true })}>
                          <i className="fa fa-th-list" />
                        </a>
                      </li>
                    </ul> */}
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
                  <InfiniteScroll
                    dataLength={this.state.products.length}
                    next={this.loadProducts}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                  ></InfiniteScroll>
                </div>
              </div>
              {/* ) : ( */}
            </div>
          </div>
        </section>
        {/* <Navigation /> */}
        {/* <Footer /> */}
      </>
    );
  }
}

export async function getServerSideProps(context) {
  //console.log("cat =>", context.query.cat);

  const details_qs = await axios.get(
    `http://Proman-prod.eba-faitp54h.ap-south-1.elasticbeanstalk.com/api/v1/products/list-infinite/?limit=4&offset=0`,
    {
      params: {
        cat: context.query.cat,
        size: context.query.size,
      },
    }
  );

  const details = await details_qs.data.products;

  if (!details) {
    return {
      props: {
        not_found: true,
      },
    };
  }
  // Pass data to the page via props
  return {
    props: { details: details },
  };
}

export default withRouter(App);
