import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import PaymentsTableFilterEncargado from "../../components-level-2/mensualidad/PaymentsTableFilterEncargado";

function MensualidadTablaPagosEncargadoPage () {
  return (
    <div className="mensualidad-pago-step2-page-encargado">
      <NavBar />
      <PaymentsTableFilterEncargado />
    </div>
  );
}

export default MensualidadTablaPagosEncargadoPage;
