import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Amenities from "./components/Amenities";

import Form from "./components/form";
import { Route, Routes } from "react-router-dom";
import Servicios from "./components/servicios";
const App = () => {
  return (
    <div className="font-sans  min-h-screen bg-gray-950">
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/servicios" element={<Amenities />} />
        <Route path="/reserva" element={<Form />} />
        <Route path="/paquetes" element={<Servicios/>}/>
        {/* <Amenities /> */}
        {/* <Form/> */}
      </Routes>
    </div>
  );
};

export default App;
