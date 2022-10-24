import React from "react";
import Announcement from "../Components/Announcement";
import Categories from "../Components/Categories";
import Navabr from "../Components/Navabr";
import Slider from "../Components/Slider";
import Products from "../Components/Products";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navabr />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
