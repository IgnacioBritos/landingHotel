import React from 'react';

const Servicios = () => {
  return (
    <div className="flex flex-col items-center justify-center items-center p-8">
      <h2 className=" text-3xl font-bold text-gray-300 mb-6">Servicios Ofrecidos</h2>
      <ul className="space-y-4 text-lg text-gray-700">
        <li>✔ Alojamiento de lujo con vistas panorámicas.</li>
        <li>✔ Gastronomía gourmet con menús locales elaborados por chefs reconocidos.</li>
        <li>✔ Roomservice.</li>
        <li>✔ Niñera.</li>
        <li>✔ Spa y bienestar con tratamientos rejuvenecedores.</li>
        <li>✔ Actividades al aire libre como trekking y excursiones guiadas.</li>
        <li>✔ Servicio de concierge para atención personalizada.</li>
        <li>✔ Piscina y áreas de relax.</li>
        <li>✔ Actividades culturales que involucren a la comunidad local.</li>
        <li>✔ Transporte desde y hacia el aeropuerto.</li>
        <li>✔ Conexión Wi-Fi gratuita en todo el resort.</li>
      </ul>
    </div>
  );
};

export default Servicios;
