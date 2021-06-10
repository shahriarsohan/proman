import axios from "../src/api/axios";

import FeaturedProducts from "../src/components/Featured/FeaturedProducts";
import Footer from "../src/components/Footer/Footer";
import { HeroSlider } from "../src/components/Hero/HeroSlider";
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
import { useEffect, useState } from "react";
import Navigation from "../src/components/Navigation";

const Home = (props) => {
  // console.log(props.data);
  return (
    <>
      <Navbar />
      <HeroSlider />
      <PromotionalSlider />
      <SmallBanner />
      <Products p={props.trending.trending_qs} />
      <MediumBanner />
      <BestSelling bestselling={props.bestselling.bestSelling_qs} />
      <FeaturedProducts featured={props.featured.featured_qs} />
      <Shop />
      <CountDownProducts />
      <Service />
      <NewsLetter />
      <Footer />
      <Navigation />
    </>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const trending_res = await axios.get("products/trending");

  const bestselling_res = await axios.get("products/best-selling");
  const featured_res = await axios.get("products/featured");
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

export default Home;
