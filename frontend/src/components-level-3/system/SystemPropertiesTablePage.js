import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import SystemPropertiesTableFilterEdit from "./../../components-level-2/system/SystemPropertiesTableFilterEdit";

function SystemPropertiesTablePage () {
  return (
    <div className="system-properties-table-page">
      <NavBar></NavBar>
      <SystemPropertiesTableFilterEdit />
    </div>
  );
}

export default SystemPropertiesTablePage;
