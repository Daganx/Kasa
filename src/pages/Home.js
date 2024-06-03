import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <>
      <section className="header">
        <Header />
      </section>
      <section className="banner">
        <Banner />
      </section>
      <section className="gallery">
        <Gallery />
      </section>
    </>
  );
};

export default Home;