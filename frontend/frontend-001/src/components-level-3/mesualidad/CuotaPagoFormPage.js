import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import CuotaPagoForm from "./../../components-level-2/mensualidad/CuotaPagoForm";

function CuotaPagoFormPage () {
  return (
    <div className="cuota-pago-form-page">
      <NavBar/>
      <CuotaPagoForm/>
    </div>
  );
}

export default CuotaPagoFormPage;
