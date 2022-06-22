import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import App from "./App";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import UsersFormPage from "./pages/users/UserFormPage";
import UsersTablePage from "./pages/users/UserTablePage";
import UsersTableFilterPage from "./pages/users/UsersTableFilterPage";
import ProductFormPage from "./pages/sales/ProductFormPage";
import ProductTablePage from "./pages/sales/ProductTablePage";
import ProductTableFilterPage from "./pages/sales/ProductTableFilterPage";
// Hospital System
import DoctorUserFormPage from "./pages/hospital/DoctorUserFormPage";
import PatientUserFormPage from "./pages/hospital/PatientUserFormPage";

const AppRoutes = () => (
  <App>
    <Switch>
      <Route exact path="/dashboard" component={DashboardPage} />
      <Route exact path="/users-form" component={UsersFormPage} />
      <Route exact path="/users-table" component={UsersTablePage} />
      <Route exact path="/users-table-filter" component={UsersTableFilterPage} />
      <Route exact path="/products-form" component={ProductFormPage} />
      <Route exact path="/products-table" component={ProductTablePage} />
      <Route exact path="/products-table-filter" component={ProductTableFilterPage} />
      <Route exact path="/hospital-doctor-user-form" component={DoctorUserFormPage} />
      <Route exact path="/hospital-patient-user-form" component={PatientUserFormPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/" component={LoginPage} />
      <Route component={LoginPage} />
    </Switch>
  </App>
);

export default AppRoutes;