import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import PaymentsTableFilterStudent from "../../components-level-2/mensualidad/PaymentsTableFilterStudent";

function MensualidadTablaPagosEstudiantePage () {
  return (
    <div className="mensualidad-pago-step2-page-encargado">
      <NavBar />
      <PaymentsTableFilterStudent />
    </div>
  );
}

export default MensualidadTablaPagosEstudiantePage;
