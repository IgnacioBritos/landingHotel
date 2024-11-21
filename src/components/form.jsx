const Form =()=>{
    return(
        <div>

  {/* Formulario de Reservas */}
  <section className="m-8 mt-8 p-6 bg-white shadow-md rounded-lg">
    <h3 className="text-2xl font-bold text-gray-800 mb-4">Reserva tu estadía</h3>
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Nombre */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          placeholder="Ingresa tu nombre"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-200"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          placeholder="Ingresa tu correo"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-200"
        />
      </div>

      {/* Fecha de Entrada */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="check-in">
          Fecha de Entrada
        </label>
        <input
          type="date"
          id="check-in"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-200"
        />
      </div>

      {/* Fecha de Salida */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="check-out">
          Fecha de Salida
        </label>
        <input
          type="date"
          id="check-out"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-200"
        />
      </div>

      {/* Botón de Enviar */}
      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900 transition"
        >
          Reservar
        </button>
      </div>
    </form>
  </section>
</div>

    )
}

export default Form