import React, { Component } from "react";

import axios from "axios";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

import Footer from "../../src/components/Footer/Footer";
import NavbarTwo from "../../src/components/Navbar/NavbarTwo";
import NewsLetter from "../../src/components/NewsLetter/NewsLetter";
import Service from "../../src/components/Service/Service";
import ShopListSingle from "../../src/components/ShopList/ShopListSingle";
import ShopGirdSingle from "../../src/components/ShopList/ShopGirdSingle";
import Navigation from "../../src/components/Navigation";

class AllListShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
      products: [],
      hasMore: true,
      offset: 1,
      limit: 12,
      list: false,
      sort: "",
      min: 0,
      max: 0,
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
          console.log("loading");
        }
      };
    } else {
      console.log("loading");
    }
  }

  componentDidMount() {
    this.setState({
      loading: true,
    });
    if (this.props.details) {
      this.setState({ products: this.props.details, loading: false });
    }
  }

  loadProducts = () => {
    this.setState({ loading: true });
    console.log("loading prod");
    axios
      .get(
        `http://127.0.0.1:8000/api/v1/products/list-infinite/?limit=${this.state.limit}&offset=${this.state.offset}`
      )
      .then((res) => {
        const newProducts = res.data.products;
        const hasMore = res.data.hasMore;
        console.log(hasMore);

        this.setState({
          hasMore: hasMore,
          loading: false,
          products: [...this.state.products, ...newProducts],
          offset: this.state.offset + parseInt(this.state.limit),
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  };

  sortByPriceAsc() {
    this.setState((prevState) => {
      this.state.products.sort((a, b) => a.price - b.price);
    });
  }

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

  render() {
    console.log(this.props.details);
    console.log(this.state.limit);
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
                        <a href="#">T-shirts</a>
                      </li>
                      <li>
                        <a href="#">jacket</a>
                      </li>
                      <li>
                        <a href="#">jeans</a>
                      </li>
                      <li>
                        <a href="#">sweatshirts</a>
                      </li>
                      <li>
                        <a href="#">trousers</a>
                      </li>
                      <li>
                        <a href="#">kitwears</a>
                      </li>
                      <li>
                        <a href="#">accessories</a>
                      </li>
                    </ul>
                  </div>
                  {/*/ End Single Widget */}
                  {/* Shop By Price */}
                  <div className="single-widget range">
                    <h3 className="title">Shop by Price</h3>
                    {/* <div className="price-filter">
                      <div className="price-filter-inner">
                        <div id="slider-range" />
                        <div className="price_slider_amount">
                          <div className="label-input">
                            <span>Range:</span>
                            <input
                              onChange={(e) => console.log(e.target)}
                              type="text"
                              id="amount"
                              name="price"
                              // placeholder="Add Your Price"
                            />
                          </div>
                        </div>
                      </div>
                    </div> */}
                    <ul className="check-box-list">
                      <li>
                        <label className="checkbox-inline" htmlFor={1}>
                          <input name="news" id={1} type="checkbox" />
                          $200 - $250
                          <span className="count">(3)</span>
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
                      </div>
                      <ul className="view-mode">
                        <li>
                          <a onClick={() => this.setState({ list: false })}>
                            <i className="fa fa-th-large" />
                          </a>
                        </li>
                        <li className="active">
                          <a onClick={() => this.setState({ list: true })}>
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
                        if (this.state.list) {
                          return <ShopListSingle product={product} />;
                        } else {
                          return <ShopGirdSingle product={product} />;
                        }
                      })
                    : ""}
                </div>
              </div>
              {/* ) : ( */}
            </div>
          </div>
        </section>
        <Navigation />
        {/* <Footer /> */}
      </>
    );
  }
}

export async function getServerSideProps(context) {
  const details_qs = await axios.get(
    `http://127.0.0.1:8000/api/v1/products/list-infinite/?limit=20&offset=0`
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

export default AllListShop;
