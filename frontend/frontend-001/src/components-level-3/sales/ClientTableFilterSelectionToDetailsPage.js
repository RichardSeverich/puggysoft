import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import ClientUserTableSelectionToDetails from "./../../components-level-2/sales/ClientUserTableSelectionToDetails";

function ClientTableFilterSelectionToDetailsPage () {
  return (
    <div className="client-table-page">
      <NavBar></NavBar>
      <ClientUserTableSelectionToDetails></ClientUserTableSelectionToDetails>
    </div>
  );
}

export default ClientTableFilterSelectionToDetailsPage;
