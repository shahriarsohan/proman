import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "react-loader-spinner";
import axiosInstance from "../../api/axios";
import ShopGirdSingle from "../ShopList/ShopGirdSingle";

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8,
};

export default class Shop extends Component {
  state = {
    error: false,
    loading: false,
    products: [],
    hasMore: true,
    offset: 1,
    limit: 10,
  };

  componentDidMount() {
    if (this.props.p) {
      this.setState({
        products: this.props.p,
      });
    }
  }

  loadProducts = () => {
    this.setState({ loading: true });
    //console.log("loading prod");
    axiosInstance
      .get(
        `/products/list-infinite/?limit=${this.state.limit}&offset=${this.state.offset}`
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

  render() {
    const { p } = this.props;
    console.log("shooooooopp", p);
    return (
      <section className="section container p-2 mb-5">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Shop</h2>
            </div>
          </div>
          <div id="scrollableDiv" style={{ height: 700, overflow: "auto" }}>
            <div className="row">
              {this.state.products
                ? this.state.products.map((product) => {
                    return <ShopGirdSingle product={product} />;
                  })
                : ""}
              <InfiniteScroll
                dataLength={this.state.products.length}
                next={this.loadProducts}
                hasMore={this.state.hasMore}
                scrollThreshold="0.7"
                endMessage={
                  <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
                loader={
                  <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={50}
                    width={50}
                    timeout={3000} //3 secs
                  />
                }
              ></InfiniteScroll>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
