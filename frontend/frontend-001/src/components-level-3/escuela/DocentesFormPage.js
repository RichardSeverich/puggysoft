import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import DocentesForm from "../../components-level-2/escuela/DocentesForm";

function DocentesFormPage () {
  return (
    <div className="form-page">
      <NavBar />
      <DocentesForm />
    </div>
  );
}

export default DocentesFormPage;
