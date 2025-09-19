import React from "react";

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-300 via-blue-300 to-blue-400">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Formulario</h2>

        <form className="space-y-4">
          {/* Nombre */}
          <div>
            <label className="block font-semibold mb-1"> Nombre: </label>
            <input
              type="text"
              placeholder="Ej. Juan Pérez"
              className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Correo */}
          <div>
            <label className="block font-semibold mb-1"> Correo: </label>
            <input
              type="email"
              placeholder="Ej. correo@dominio.com"
              className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Contraseña */}
          <div>
            <label className="block font-semibold mb-1"> Contraseña: </label>
            <input
              type="password"
              placeholder="Mínimo 8 caracteres"
              className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition"
          >
             Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}
