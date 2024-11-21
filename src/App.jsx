import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Amenities from "./components/Amenities";
import Footer from "./components/Footer";
import Form from "./components/form";

const App = () => {
  return (
    <div className="font-sans bg-gray-950">
      <Header />
      <HeroSection />
      <About />
      <Amenities />
      <Form/>
      <Footer />
    </div>
  );
};

export default App;
