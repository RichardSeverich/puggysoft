import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import i18n from "../../i18n/i18n";
import "./in-progress-comp.css";

function InProgressComponent () {
  const progressPercentage = 60;
  return (
    <div className="in-progress-component">
      <h3>{i18n.commonInProgress.label}</h3>
      <ProgressBar now={progressPercentage} label={`${progressPercentage}%`}/>;
    </div>
  );
}

export default InProgressComponent;
