import axios from "axios";

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

import Navigation from "../src/components/Navigation";
import Featuredcat from "../src/components/featuredcat/featuredcat";
import { useEffect } from "react";

const Home = (props) => {
  useEffect(() => {
    axios.get("/api/v1/products/trending").then((res) => {
      console.log(res);
      console.log("okkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
    });
  }, []);
  console.log(props.trending);
  return (
    <>
      <Navbar />
      <HeroSlider />
      <PromotionalSlider />
      <SmallBanner />
      <Featuredcat />
      <Products p={props.trending} />
      <MediumBanner />
      {/* <BestSelling bestselling={props.bestselling.bestSelling_qs} /> */}
      {/* <FeaturedProducts featured={props.featured.featured_qs} /> */}
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
  const trending_res = await axios.get(
    "http://promen.ap-south-1.elasticbeanstalk.com/api/v1/products/trending"
  );

  //   // const bestselling_res = await axios
  //   //   .get("/api/v1/products/best-selling")
  //   //   .then((res) => {
  //   //     console.log(res);
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log(err);
  //   //   });
  //   // const featured_res = await axios.get("/api/v1/products/featured");
  //   // const bestselling = await bestselling_res.data;
  const trending = await trending_res.data.trending_qs;
  console.log(trending);
  //   // const featured = await featured_res.data;

  if (!trending) {
    return {
      props: {
        trending_null: true,
      },
    };
  }
  return {
    props: { trending: trending },
  };
  //   // Pass data to the page via props
}

export default Home;
