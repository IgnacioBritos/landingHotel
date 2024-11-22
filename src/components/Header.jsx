import React from "react";
// import { Link } from "react-router-dom"; // Importamos Link para la navegación
import logo from "../img/logo.png"; // Ruta de tu logo

const Header = () => (
  <header className="bg-black text-white mx-12 p-4 flex items-center justify-between">
    {/* Logo con Link que lleva al Home */}
    <a href="/">
      <img
        src={logo}
        alt="Cumbres Grand Resort Logo"
        className="h-20 cursor-pointer"
      />
    </a>
    {/* Barra de navegación */}
    <nav className="space-x-8">
      <a href="/paquetes">Servicios</a>
      <a href="/servicios">Comodidades</a>
      <a href="/reserva">Reserva</a>
    </nav>
  </header>
);

export default Header;
