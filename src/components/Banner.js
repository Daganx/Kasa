import React from "react";
import PropTypes from "prop-types";
import "../styles/banner.scss";

const Banner = ({ image, text }) => {
  return (
    <section
      className="banner-container"
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
    >
      {text && <h1 className="banner__text">{text}</h1>}
      <div className="overlay"></div>
    </section>
  );
};

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default Banner;
