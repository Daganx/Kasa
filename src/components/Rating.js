import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../styles/rating.scss";

const Rating = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className={i < rating ? "star filled" : "star"}>
        <FontAwesomeIcon icon={faStar} />
      </span>
    );
  }

  return <div className="rating">{stars}</div>;
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
