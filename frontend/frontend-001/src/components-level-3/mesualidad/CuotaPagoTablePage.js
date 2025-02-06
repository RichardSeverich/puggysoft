import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import CuotaPagoTable from "../../components-level-2/mensualidad/CuotaPagoTable";

function CuotaPagoTablePage () {
  return (
    <div className="cuota-pago-table-page">
      <NavBar />
      <CuotaPagoTable />
    </div>
  );
}

export default CuotaPagoTablePage;
