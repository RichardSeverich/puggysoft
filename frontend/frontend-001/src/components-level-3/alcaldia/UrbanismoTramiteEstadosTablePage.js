import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import UrbanismoTramiteEstadosTable from "../../components-level-2/alcaldia/UrbanismoTramiteEstadosTableEditDelete";

function UrbanismoTramiteEstadosTablePage () {
  return (
    <div className="table-page">
      <NavBar></NavBar>
      <UrbanismoTramiteEstadosTable></UrbanismoTramiteEstadosTable>
    </div>
  );
}

export default UrbanismoTramiteEstadosTablePage;
