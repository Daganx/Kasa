import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import BannerBackground from "../assets/images/banner/banner.png";
import logements from "../data/logements.json";
import "../styles/home.scss";

const Home = () => {
  return (
    <>
      <Banner image={BannerBackground} text="Chez vous, partout et ailleurs" />
      <section className="gallery">
        {logements.map((lodging) => (
          <article key={lodging.id} className="lodging-card">
            <Link to={`/logement/${lodging.id}`}>
              <img
                src={lodging.cover}
                alt={lodging.title}
                className="lodging-card__image"
              />
            </Link>
            <h2 className="lodging-card__title">{lodging.title}</h2>
          </article>
        ))}
      </section>
    </>
  );
};

export default Home;
