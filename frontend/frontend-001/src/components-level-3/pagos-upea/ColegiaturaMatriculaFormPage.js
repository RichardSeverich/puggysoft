import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import ColegiaturaMatriculaForm from "./../../components-level-2/pagos-upea/ColegiaturaMatriculaForm";

function ColegiaturaMatriculaFormPage () {
  return (
    <div className="colegiatura-matricula-form-page">
      <NavBar/>
      <ColegiaturaMatriculaForm/>
    </div>
  );
}

export default ColegiaturaMatriculaFormPage;
