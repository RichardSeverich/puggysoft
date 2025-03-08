import React from "react";
import MensualidadPagoStep2 from "./MensualidadPagoStep2";
import enumSaleTableViewType from "../../models/sales/enumSaleTableViewType";

function MensualidadPagoStep2Encargado () {
  return (
    <MensualidadPagoStep2
      saleTableViewType={enumSaleTableViewType.FOR_SELLER}
    >
    </MensualidadPagoStep2>
  );
}

export default MensualidadPagoStep2Encargado;
