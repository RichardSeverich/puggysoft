import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import PatientUserTableSelectionToDetails from "./../../components-level-2/hospital/PatientUserTableSelectionToDetails";

function PatientUserTableToDetailsPage () {
  return (
    <div className="patient-table-page">
      <NavBar></NavBar>
      <PatientUserTableSelectionToDetails></PatientUserTableSelectionToDetails>
    </div>
  );
}

export default PatientUserTableToDetailsPage;
