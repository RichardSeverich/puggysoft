import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import App from "./App";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
// Users System
import UsersFormPage from "./pages/users/UserFormPage";
import UserTableBasicPage from "./pages/users/UserTableBasicPage";
import UserTableFilterPage from "./pages/users/UserTableFilterPage";
import UserTableFilterByRolePage from "./pages/users/UserTableFilterByRolePage";
import UserTableFilterSelectionPage from "./pages/users/UserTableFilterSelectionPage";
import RoleTablePage from "./pages/users/RoleTablePage";
import RoleTableFilterPage from "./pages/users/RoleTableFilterPage";
import RoleTablePageByUserPage from "./pages/users/RoleTablePageByUserPage";
// Sales System
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
      {/** Users System*/}
      <Route exact path="/users-form" component={UsersFormPage} />
      <Route exact path="/users-table" component={UserTableBasicPage} />
      <Route exact path="/users-table-filter" component={UserTableFilterPage} />
      <Route exact path="/users-table-filter-by-role" component={UserTableFilterByRolePage} />
      <Route exact path="/users-table-selection" component={UserTableFilterSelectionPage} />
      <Route exact path="/roles-table" component={RoleTablePage} />
      <Route exact path="/roles-table-filter" component={RoleTableFilterPage} />
      <Route exact path="/roles-table-filter-by-user" component={RoleTablePageByUserPage} />
      <Route exact path="/roles-table-selection" component={RoleTablePage} />
      {/** Sales System*/}
      <Route exact path="/products-form" component={ProductFormPage} />
      <Route exact path="/products-table" component={ProductTablePage} />
      <Route exact path="/products-table-filter" component={ProductTableFilterPage} />
      {/** Hospital System*/}
      <Route exact path="/hospital-doctor-user-form" component={DoctorUserFormPage} />
      <Route exact path="/hospital-patient-user-form" component={PatientUserFormPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/" component={LoginPage} />
      <Route component={LoginPage} />
    </Switch>
  </App>
);

export default AppRoutes;