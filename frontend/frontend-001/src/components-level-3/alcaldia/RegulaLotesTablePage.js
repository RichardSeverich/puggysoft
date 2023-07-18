import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import RegulaLotesTable from "../../components-level-2/alcaldia/RegulaLotesTableEditDelete";

function RegulaLotesTablePage () {
  return (
    <div className="table-page">
      <NavBar></NavBar>
      <RegulaLotesTable></RegulaLotesTable>
    </div>
  );
}

export default RegulaLotesTablePage;
