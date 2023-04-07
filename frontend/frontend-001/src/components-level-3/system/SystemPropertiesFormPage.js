import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import SystemPropertiesForm from "./../../components-level-2/system/SystemPropertiesForm";

function SystemPropertiesFormPage () {
  return (
    <div className="system-properties-form-page">
      <NavBar></NavBar>
      <SystemPropertiesForm />
    </div>
  );
}

export default SystemPropertiesFormPage;
