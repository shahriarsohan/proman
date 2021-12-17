import axios from "axios";
import { connect } from "react-redux";
import FeaturedProducts from "../src/components/Featured/FeaturedProducts";
import Footer from "../src/components/Footer/Footer";
import HeroSlider from "../src/components/Hero/HeroSlider";
import PromotionalSlider from "../src/components/Hero/PromotinalSlider";
import SmallBanner from "../src/components/Hero/SmallBanner";
import Navbar from "../src/components/Navbar/Navbar";
import NewsLetter from "../src/components/NewsLetter/NewsLetter";
import MediumBanner from "../src/components/Products/MediumBanner";
import BestSelling from "../src/components/Products/PopularProducts";
import Products from "../src/components/Products/TrendingProducts";
import Shop from "../src/components/Products/Shop";
import Service from "../src/components/Service/Service";
import CountDownProducts from "../src/components/Products/CountDownProducts";

import Navigation from "../src/components/Navigation";
import Featuredcat from "../src/components/featuredcat/featuredcat";
import Cart from "../src/components/SideCart/Cart";

import * as actions from "../src/store/actions/auth";
import { useEffect } from "react";
import { Component } from "react";
import { withRouter } from "next/router";
import { closeSideBarCart } from "../src/store/actions/cartSideBar";

class Home extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  componentWillUnmount() {
    console.log("unmount");
    this.props.closeSideCart();
  }

  render() {
    return (
      <>
        <Navbar />

        <HeroSlider />

        {/* <PromotionalSlider /> */}

        <SmallBanner />
        <Featuredcat />
        <Products p={this.props.trending} />
        <MediumBanner />
        <BestSelling bestselling={this.props.bestselling} />
        <FeaturedProducts featured={this.props.featured} />
        <Shop p={this.props.trending} />
        {/* <CountDownProducts weekly_qs={this.props.weekly_qs} /> */}
        <Service />
        <NewsLetter />
        <Footer />
        <Navigation />
      </>
    );
  }
}

export async function getServerSideProps() {
  // Fetch data from external API
  const trending_res = await axios.get(
    "https://proman.com.bd/api/v1/products/trending"
  );

  // const weekly_res = await axios.get(
  //   "https://proman.com.bd/api/v1/products/deal-of-the-week"
  // );
  // console.log("weekly_res", weekly_res.data);
  const bestselling_res = await axios.get(
    "https://proman.com.bd/api/v1/products/best-selling"
  );
  const featured_res = await axios.get(
    "https://proman.com.bd/api/v1/products/featured"
  );
  const bestselling = await bestselling_res.data.bestSelling_qs;
  const trending = await trending_res.data.trending_qs;
  const featured = await featured_res.data.featured_qs;
  // const weekly_qs = await weekly_res.data.daily_deal_qs;
  // console.log("weekly_res_final", weekly_qs);

  // console.log("weekly_qsssssssssssssssssssssssssssssss", weekly_qs);

  if (!trending) {
    return {
      props: {
        trending_null: true,
      },
    };
  }
  return {
    props: {
      trending: trending,
      bestselling: bestselling,
      featured: featured,
      // weekly_qs: weekly_qs,
    },
  };
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
    closeSideCart: () => dispatch(closeSideBarCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
