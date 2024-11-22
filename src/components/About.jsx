import React from "react";
import zoom from "../img/zoom.png";
import spa from "../img/spa.png";
import frente from "../img/frente.png";
import dos from "../img/dos.png";

const About = () => (
  <section className="p-8 text-center">
    <section className="m-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="relative p-4  rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold items-cente  text-gray-400 mb-4">
          Sobre Nosotros
        </h3>
        <div className="relative p-4 text-justify rounded-lg shadow-lg">
          <p className="text-gray-400 leading-relaxed text-lg">
            En el corazón de las majestuosas montañas de Cacheuta, se erige el
            Cumbres Grand Resort, un hotel de 5 estrellas que ofrece 109
            habitaciones lujosas, cada una diseñada para brindar una experiencia
            única y memorable
          </p>
          
        </div>
        <div className="m-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
  {/* Información de contacto */}
  <div>
    <p className="mb-2 text-lg">📞: +54 2622555351</p>
    <p className="text-lg">
      📧:{" "}
      <a
        href="mailto:cumbresgr@reserva.com"
        className="text-blue-500 hover:underline"
      >
        cumbresgr@reserva.com
      </a>
    </p>
  </div>

  {/* Íconos alineados horizontalmente */}
  <div className="flex justify-center gap-6">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10 text-gray-700"
    >
      <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10 text-gray-700"
    >
      <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
      <path d="M16.5 7.5l0 .01"></path>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10 text-gray-700"
    >
      <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
    </svg>
  </div>
</div>

      </div>

      {/* Collage de Fotos */}
      <div className="grid-cols-2 ">
        <img
          src={zoom}
          alt="Vista panorámica del hotel"
          className="w-full h-full object-cover rounded-lg"
        />
        
      </div>
    </section>

    <p className="mt-2">
      Fundado el 11 de septiembre de 2023, este resort es el sueño hecho
      realidad de Milagros, inspirado por la majestuosidad de las montañas.
    </p>
  </section>
);

export default About;
