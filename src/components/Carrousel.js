import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/carrousel.scss";

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    const lastIndex = pictures.length - 1;
    const newIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const lastIndex = pictures.length - 1;
    const newIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <figure className="carousel">
      <button
        className="carousel__button carousel__button--left"
        onClick={previousSlide}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel__image"
      />
      <button
        className="carousel__button carousel__button--right"
        onClick={nextSlide}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <figcaption className="carousel__counter">
        {currentIndex + 1} / {pictures.length}
      </figcaption>
    </figure>
  );
};

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
