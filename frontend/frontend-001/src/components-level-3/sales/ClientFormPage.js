import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import ClientUserForm from "./../../components-level-2/sales/ClientUserForm";

function ClientFormPage () {
  return (
    <div className="client-form-page">
      <NavBar></NavBar>
      <ClientUserForm></ClientUserForm>
    </div>
  );
}

export default ClientFormPage;
