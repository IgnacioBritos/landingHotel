import React from "react";
import habitacion from "../img/habitacion.png"
import spa from "../img/spa.png"
import piletita from "../img/piletita.png"

const Amenities = () => (
  <section className="bg-gray-800 p-8 m-8 ">
    <h3 className="text-2xl font-bold  text-center">Comodidades</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      <div className="bg-white p-4 shadow-md">
        <h4 className="font-bold  text-black">Habitaciones Lujosas</h4>
        <img src={habitacion} alt="" />
        <p>109 habitaciones con vistas panorámicas y diseño sofisticado.</p>
      </div>
      <div className="bg-white p-4 shadow-md">
        <h4 className="font-bold  text-black">Spa de Primera</h4>
        <img src={spa} alt="" />
        <p>Tratamientos rejuvenecedores para su bienestar.</p>
      </div>
      <div className="bg-white p-4 shadow-md">
        <h4 className="font-bold  text-black">Espacio recreativo</h4>
        <img src={piletita} alt="" />
        <p>Disfruta y relajate en nuestro espacio recreativo.</p>
      </div>
    </div>
  </section>
);

export default Amenities;
