import React from "react";
import Header from "../../Componrnts/Header/Header";
import Footer from "../../Componrnts/Footer/Footer";
import Banner from "../../Componrnts/Banner/Banner";
import RowList from "../../Componrnts/Rows/RowList/RowList";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </>
  );
}

export default Home;
