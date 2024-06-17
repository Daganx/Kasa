import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../styles/collapse.scss";

const Collapse = ({ title, text, containerClass }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse-container ${containerClass}`}>
      <button className="collapse-button" onClick={toggleCollapse}>
        <span>{title}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`rotate ${isOpen ? "open" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="collapse-text">
          <p>
            {Array.isArray(text)
              ? text.map((item, index) => <span key={index}>{item}</span>)
              : text}
          </p>
        </div>
      )}
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  containerClass: PropTypes.string,
};

export default Collapse;
