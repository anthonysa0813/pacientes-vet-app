import React, { useState, useEffect } from "react";
import { generateId } from "../helper/generatorId";
import Error from "./Error";

const Formulario = ({ setPacientes, paciente, pacientes }) => {
  const [form, setForm] = useState({
    id: generateId(),
    mascota: "",
    propietario: "",
    email: "",
    alta: "",
    sintomas: "",
  });
  const [error, setError] = useState(false);
  const [editarMode, setEditarMode] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setForm(paciente);
      setEditarMode(true);
      setId(paciente.id);
    }
  }, [paciente]);

  const { mascota, propietario, email, alta, sintomas } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([mascota, propietario, email, alta, sintomas].includes("")) {
      console.log("Existe un campo vacío");
      setError(true);
      return;
    }
    setPacientes((p) => {
      return [...p, form];
    });
    setError(false);
    setForm({
      id: generateId(),
      mascota: "",
      propietario: "",
      email: "",
      alta: "",
      sintomas: "",
    });

    console.log("no hay campos vacios!");
  };

  const handleEdit = (e) => {
    e.preventDefault();

    if ([mascota, propietario, email, alta, sintomas].includes("")) {
      console.log("Existe un campo vacío");
      setError(true);
      return;
    }

    const pacientesArr = pacientes.map((paciente) =>
      paciente.id === id ? form : paciente
    );
    setPacientes(pacientesArr);
    setError(false);
    setEditarMode(false);
    setForm({
      id: generateId(),
      mascota: "",
      propietario: "",
      email: "",
      alta: "",
      sintomas: "",
    });
  };

  return (
    <div className=" md:w-1/2 lg:w-2/5 mb-10">
      <h2 className="font-black text-center text-3xl">Formulario</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold  ">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-md py-10 px-5"
        onSubmit={editarMode ? handleEdit : handleSubmit}
      >
        {error && <Error>Todos los campos son obligatorios</Error>}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            name="mascota"
            value={mascota}
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del Propietario
          </label>
          <input
            id="propetario"
            type="text"
            name="propietario"
            value={propietario}
            placeholder="Nombre del propetario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="text"
            name="email"
            value={email}
            placeholder="Email contacto del propetario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            name="alta"
            value={alta}
            onChange={handleChange}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Símtomas
          </label>
          <textarea
            id="sintomas"
            type="date"
            name="sintomas"
            value={sintomas}
            placeholder="Describe los síntomas..."
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 cursor-pointer transition-all text-center font-bold text-white uppercase p-3 rounded-md"
        >
          {editarMode ? "Editar Paciente" : "Agregar Paciente"}
        </button>
      </form>
    </div>
  );
};

export default Formulario;
