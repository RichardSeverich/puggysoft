import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import InProgressComponent from "./../../components-level-2/system/InProgressComponent";

function InProgressPage () {
  return (
    <div className="im-progress-page">
      <NavBar></NavBar>
      <InProgressComponent />
    </div>
  );
}

export default InProgressPage;
