// About.js
import React from "react";
import Banner from "../components/Banner";
import BannerBackgroundAbout from "../assets/images/banner/bannerAbout.png";
import Collapse from "../components/Collapse";
import collapseData from "../data/collapse.json";
import "../styles/about.scss";

const About = () => {
  return (
    <>
      <Banner image={BannerBackgroundAbout} />
      <section className="about-container">
        {collapseData.map((item, index) => (
          <Collapse key={index} title={item.title} text={item.text} containerClass="about-collapse" />
        ))}
      </section>
    </>
  );
};

export default About;
