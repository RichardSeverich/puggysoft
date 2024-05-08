import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import EstudiantesForm from "../../components-level-2/escuela/EstudiantesForm";

function EstudiantesFormPage () {
  return (
    <div className="form-page">
      <NavBar />
      <EstudiantesForm />
    </div>
  );
}

export default EstudiantesFormPage;
