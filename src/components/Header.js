import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.scss";
import logo from "../assets/images/logo/logo.svg";

const Header = () => {
  return (
    <header>
      <figure className="logo">
        <img src={logo} alt="Logo of Kasa" />
      </figure>
      <nav className="nav-links">
        <Link to="/home">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  );
};

export default Header;