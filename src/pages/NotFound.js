import React from "react";
import { Link } from "react-router-dom";
import "../styles/notFound.scss";

const NotFound = () => {
  return (
    <section className="error-container">
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-text">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link className="not-found-link" to="/">
        Retourner sur la page d’accueil
      </Link>
    </section>
  );
};

export default NotFound;
