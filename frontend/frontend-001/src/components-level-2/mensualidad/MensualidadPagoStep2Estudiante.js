import React from "react";
import MensualidadPagoStep2 from "./MensualidadPagoStep2";
import enumSaleTableViewType from "../../models/sales/enumSaleTableViewType";

function MensualidadPagoStep2Estudiante () {
  return (
    <MensualidadPagoStep2
      saleTableViewType={enumSaleTableViewType.FOR_CASHIER}
    >
    </MensualidadPagoStep2>
  );
}

export default MensualidadPagoStep2Estudiante;
