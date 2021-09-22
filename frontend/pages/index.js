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
    //console.log(this.props.router);
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
        <Shop p={this.props.trending.trending_qs} />
        <CountDownProducts weekly_qs={this.props.weekly_qs} />
        <Service />
        <NewsLetter />
        <Footer />
        <Navigation />
      </>
    );
  }
}

// //console.log(props.data);

export async function getServerSideProps() {
  // Fetch data from external API
  const trending_res = await axios.get(
    "http://127.0.0.1:8000/v1/products/trending"
  );

  // axios
  //   .get(
  //     "http://127.0.0.1:8000/v1/products/trending"
  //   )
  //   .then((response) => console.log("response", response))
  //   .catch((err) => console.log("error", err));

  const weekly_res = await axios.get(
    "http://127.0.0.1:8000/v1/products/deal-of-the-week"
  );

  const bestselling_res = await axios.get(
    "http://127.0.0.1:8000/v1/products/best-selling"
  );
  const featured_res = await axios.get(
    "http://127.0.0.1:8000/v1/products/featured"
  );
  const bestselling = await bestselling_res.data;
  const trending = await trending_res.data;
  //console.log(trending);
  const featured = await featured_res.data;
  const weekly_qs = await weekly_res.data.daily_deal_qs;

  console.log("weekly_qsssssssssssssssssssssssssssssss", weekly_qs);

  if (!trending) {
    return {
      props: {
        trending_null: true,
      },
    };
  }
  // Pass data to the page via props
  return {
    props: {
      trending: trending,
      bestselling: bestselling,
      featured: featured,
      weekly_qs: weekly_qs,
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
