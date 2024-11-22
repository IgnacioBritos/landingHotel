import React from "react";
import frente from "../img/frente.png"
import About from "./About";
const HeroSection = () => (
    <div>

    <section
    className="bg-cover h-96 text-white flex flex-col justify-end items-center mx-8 rounded-lg overflow-hidden"
    style={{ backgroundImage: `url(${frente})`,
    backgroundPosition: "center 70%",
    backgroundSize: "100%", }}
  >
   <div className="bg-black bg-opacity-50 p-4 m-1 text-center">
    <p className="text-lg italic">"Tu experiencia de lujo en la serenidad de la naturaleza"</p>
  </div>
  </section>
  <About />
    </div>
);

export default HeroSection;
