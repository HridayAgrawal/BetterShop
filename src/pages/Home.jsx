import React from "react";
import Announcement from "../Components/Announcement";
import Categories from "../Components/Categories";
import Navabr from "../Components/Navabr";
import Slider from "../Components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navabr />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
