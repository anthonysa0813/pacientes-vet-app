import React, { useEffect } from "react";
import ListadoCard from "./ListadoCard";

const ListadoPacientes = ({ pacientes, setPaciente, setPacientes }) => {
  useEffect(() => {
    console.log("se agrego un  nuevo paciente ;D");
  }, [pacientes]);
  return (
    <div className=" md:w-1/2 lg:w-3/5 h-screen overflow-scroll">
      <h2 className="text-center font-black font-bold text-3xl">
        Listado Pacientes
      </h2>
      <p className="text-center text-xl mb-10 mt-5">
        Administra tus {""}
        <span className="text-indigo-600">Pacientes y Citas</span>{" "}
      </p>
      {pacientes.map((paciente) => {
        return (
          <ListadoCard
            key={paciente.id}
            paciente={paciente}
            setPaciente={setPaciente}
            pacientes={pacientes}
            setPacientes={setPacientes}
          />
        );
      })}
    </div>
  );
};

export default ListadoPacientes;
