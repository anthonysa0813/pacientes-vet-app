import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

const App = () => {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const getLocalStorage = JSON.parse(localStorage.getItem("pacientes")) ?? [];
    setPacientes(getLocalStorage);
  }, []);

  useEffect(() => {
    if (pacientes.length > 0) {
      localStorage.setItem("pacientes", JSON.stringify(pacientes));
    }
  }, [pacientes]);

  return (
    <div className="container mx-auto mt-10 w-screen">
      <Header />
      <div className="md:flex px-3 mt-12">
        <Formulario
          setPacientes={setPacientes}
          paciente={paciente}
          pacientes={pacientes}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          setPacientes={setPacientes}
        />
      </div>
    </div>
  );
};

export default App;
