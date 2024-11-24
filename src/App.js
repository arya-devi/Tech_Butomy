import React from "react";
import SliderComponent from "./components/SliderComponent";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Card from "./components/Card";
import Products from "./components/Products";
import Footer from "./components/Footer";
import FeaturedProduct from "./components/FeaturedProduct";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Card />
      <Products />
      <SliderComponent />
      <FeaturedProduct />
      <Footer />
    </div>
  );
};

export default App;
