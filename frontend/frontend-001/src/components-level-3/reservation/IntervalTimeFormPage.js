import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import IntervalTimeForm from "./../../components-level-2/reservation/IntervalTimeForm";

function IntervalTimeFormPage () {
  return (
    <div className="form-page">
      <NavBar></NavBar>
      <IntervalTimeForm></IntervalTimeForm>
    </div>
  );
}

export default IntervalTimeFormPage;
