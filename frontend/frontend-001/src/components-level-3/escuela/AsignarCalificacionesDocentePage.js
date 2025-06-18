import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import AsignarCalificacionesDocente from "../../components-level-2/escuela/AsignarCalificacionesDocente";

function AsignarCalificacionesDocentePage () {
  return (
    <div className="form-page">
      <NavBar />
      <AsignarCalificacionesDocente />
    </div>
  );
}

export default AsignarCalificacionesDocentePage;
