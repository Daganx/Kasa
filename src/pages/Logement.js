import React from "react";
import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import Carousel from "../components/Carrousel";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import "../styles/logement.scss";
import "../styles/collapse.scss";
import "../styles/carrousel.scss";

const Logement = () => {
  const { id } = useParams();
  const lodging = logements.find((logement) => logement.id === id);

  if (!lodging) {
    return <Navigate to="/notfound" />;
  }

  return (
    <section className="logement-container">
      <Carousel pictures={lodging.pictures} />
      <section className="lodging-details">
        <section className="logding-title">
          <h1>{lodging.title}</h1>
          <h2>{lodging.location}</h2>
        </section>
        <section className="lodging-info">
          <span>{lodging.host.name}</span>
          <img src={lodging.host.picture} alt={lodging.host.name} />
        </section>
      </section>
      <section className="tags-and-rating">
        <div className="tags">
          {lodging.tags.map((tag, index) => (
            <span key={index} className="lodging-tag">
              {tag}
            </span>
          ))}
        </div>
        <Rating rating={parseInt(lodging.rating, 10)} />
      </section>
      <section className="lodging-menu">
        <Collapse
          title="Description"
          text={lodging.description}
          containerClass="logement-collapse"
        />
        <Collapse
          title="Équipements"
          text={lodging.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
          containerClass="logement-collapse"
        />
      </section>
    </section>
  );
};

export default Logement;
