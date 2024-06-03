import React from "react";
import "../styles/banner.scss";
import bannerBackground from "../assets/images/banner/banner.png";

const Banner = () => {
  return (
    <section className="banner-image" style={{ backgroundImage: `url(${bannerBackground})`, backgroundSize: 'cover' }}>
        <h1>Chez vous, partout et ailleurs</h1>
        <div className="overlay"></div>
    </section>
  );
};

export default Banner;