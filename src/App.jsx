import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Amenities from "./components/Amenities";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans bg-gray-950">
      <Header />
      <HeroSection />
      <About />
      <Amenities />
      <Footer />
    </div>
  );
};

export default App;
