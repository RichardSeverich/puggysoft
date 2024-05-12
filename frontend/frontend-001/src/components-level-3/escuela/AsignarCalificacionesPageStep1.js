import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import AsignarCalificacionesStep1 from "../../components-level-2/escuela/AsignarCalificacionesStep1";

function AsignarCalificacionesPage () {
  return (
    <div className="form-page">
      <NavBar />
      <AsignarCalificacionesStep1 />
    </div>
  );
}

export default AsignarCalificacionesPage;
