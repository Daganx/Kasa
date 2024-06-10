import React from "react";
import "../styles/footer.scss";
import logo from "../assets/images/footer/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <figure>
        <img src={logo} alt="logo of Kasa"></img>
      </figure>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
