import React from "react";
import habitacion from "../img/habitacion.png";
import spa from "../img/spa.png";
import piletita from "../img/piletita.png";

const Amenities = () => (
  <section className="bg-gray-800 p-8 m-18 ">
    <h3 className="text-2xl font-bold  text-center">Comodidades</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      <div className="bg-white p-4 shadow-md">
        <h4 className="font-bold  text-black">Habitaciones Lujosas</h4>
        <img src={habitacion} alt="" />
        <p className="text-gray-700">
          Las habitaciones, decoradas con un estilo moderno y sofisticado,
          cuentan con ventanales que ofrecen vistas panorámicas de las montañas,
          creando un espacio donde la naturaleza y el lujo se encuentran.
        </p>
      </div>
      <div className="bg-white p-4 shadow-md">
        <h4 className="font-bold  text-black">Spa de Primera</h4>
        <img src={spa} alt="" />
        <p className="text-gray-700">
          Un spa de primer nivel ofrece tratamientos rejuvenecedores, mientras
          que un restaurante gourmet sirve delicias culinarias que destacan los
          sabores locales. Con opciones para el desayuno, el almuerzo y la cena,
          cada comida se convierte en una celebración de la gastronomía
        </p>
      </div>
      <div className="bg-white p-4 shadow-md">
        <h4 className="font-bold  text-black">Espacio recreativo</h4>
        <img src={piletita} alt="" />
        <p className="text-gray-700">
          Los días en Cumbres Grand Resort son una mezcla de aventura y
          tranquilidad. Los huéspedes pueden participar en excursiones de
          trekking guiadas, descubrir senderos ocultos y disfrutar de la belleza
          de la naturaleza circundante
        </p>
      </div>
    </div>
  </section>
);

export default Amenities;
