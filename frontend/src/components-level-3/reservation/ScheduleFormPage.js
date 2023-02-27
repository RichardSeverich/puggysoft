import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import ScheduleForm from "./../../components-level-2/reservation/ScheduleForm";

function ScheduleFormPage () {
  return (
    <div className="form-page">
      <NavBar></NavBar>
      <ScheduleForm></ScheduleForm>
    </div>
  );
}

export default ScheduleFormPage;
