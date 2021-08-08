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

class Home extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    console.log(this.props.router);
    return (
      <>
        <Navbar />

        <HeroSlider />

        <PromotionalSlider />

        <SmallBanner />
        <Featuredcat />
        <Products p={this.props.trending.trending_qs} />
        <MediumBanner />
        <BestSelling bestselling={this.props.bestselling.bestSelling_qs} />
        <FeaturedProducts featured={this.props.featured.featured_qs} />
        <Shop />
        <CountDownProducts />
        <Service />
        <NewsLetter />
        <Footer />
        <Navigation />
      </>
    );
  }
}

// console.log(props.data);

export async function getServerSideProps() {
  // Fetch data from external API
  const trending_res = await axios.get(
    "http://192.168.0.8:8000/v1/products/trending"
  );

  const bestselling_res = await axios.get(
    "http://192.168.0.8:8000/v1/products/best-selling"
  );
  const featured_res = await axios.get(
    "http://192.168.0.8:8000/v1/products/featured"
  );
  const bestselling = await bestselling_res.data;
  const trending = await trending_res.data;
  console.log(trending);
  const featured = await featured_res.data;

  if (!trending) {
    return {
      props: {
        trending_null: true,
      },
    };
  }
  // Pass data to the page via props
  return {
    props: { trending: trending, bestselling: bestselling, featured: featured },
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
