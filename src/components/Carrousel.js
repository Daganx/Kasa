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
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = pictures.length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <figure className="carousel">
      {currentIndex > 0 && (
        <button
          className="carousel__button carousel__button--left"
          onClick={previousSlide}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel__image"
      />
      {currentIndex < pictures.length - 1 && (
        <button
          className="carousel__button carousel__button--right"
          onClick={nextSlide}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      )}
    </figure>
  );
};

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
