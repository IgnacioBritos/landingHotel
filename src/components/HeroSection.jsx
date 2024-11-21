import React from "react";
import frente from "../img/frente.png"
const HeroSection = () => (
    <section
    className="bg-cover bg-center h-96 text-white flex items-center justify-center mx-8 rounded-lg overflow-hidden"
    style={{ backgroundImage: `url(${frente})`,
    backgroundPosition: "center 70%",
    backgroundSize: "100%", }}
  >
  
  </section>
);

export default HeroSection;
