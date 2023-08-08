import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import RegulaLotesFormCliente from "../../components-level-2/alcaldia/RegulaLotesFormCliente";

function RegulaLotesFormClientePage () {
  return (
    <div className="form-page">
      <NavBar></NavBar>
      <RegulaLotesFormCliente></RegulaLotesFormCliente>
    </div>
  );
}

export default RegulaLotesFormClientePage;
