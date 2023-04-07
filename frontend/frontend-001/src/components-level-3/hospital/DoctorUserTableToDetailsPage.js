import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import DoctorUserTableSelectionToDetails from "./../../components-level-2/hospital/DoctorUserTableSelectionToDetails";

function DoctorUserTableToDetailsPage () {
  return (
    <div className="doctor-table-page">
      <NavBar></NavBar>
      <DoctorUserTableSelectionToDetails></DoctorUserTableSelectionToDetails>
    </div>
  );
}

export default DoctorUserTableToDetailsPage;
