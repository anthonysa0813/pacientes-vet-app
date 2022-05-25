import React from "react";

const ListadoCard = ({ paciente, setPaciente, pacientes, setPacientes }) => {
  const { id, mascota, propietario, email, sintomas, alta } = paciente;

  const handleDelete = (id) => {
    const newArr = pacientes.filter((p) => p.id !== id);
    setPacientes(newArr);
  };

  return (
    <div className="bg-white mx-3 p-5 mt-5  shadow-md rounded-md">
      <p className="font-bold uppercase mb-3 text-gray-700 ">
        Nombre: {""}
        <span className="normal-case font-normal text-normal">{mascota}</span>
      </p>
      <p className="font-bold uppercase mb-3 text-gray-700 ">
        Propietario: {""}
        <span className="normal-case font-normal text-normal">
          {propietario}
        </span>
      </p>
      <p className="font-bold uppercase mb-3 text-gray-700 ">
        Email: {""}
        <span className="normal-case font-normal text-normal">{email}</span>
      </p>
      <p className="font-bold uppercase mb-3 text-gray-700 ">
        Alta: {""}
        <span className="normal-case font-normal text-normal">{alta}</span>
      </p>
      <p className="font-bold uppercase mb-3 text-gray-700 ">
        Síntomas: {""}
        <span className="normal-case font-normal text-normal">{sintomas}</span>
      </p>
      <div className="actionsCard flex justify-between">
        <button
          className="bg-yellow-500 text-white py-3 px-5 
         uppercase rounded-lg"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          className="bg-red-500 text-white py-3 px-5 
         uppercase rounded-lg"
          onClick={() => handleDelete(paciente.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ListadoCard;
