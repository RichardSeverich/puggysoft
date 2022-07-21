import React from "react";
import { Route, Switch } from "react-router-dom";
import enumPaths from "./models/enumPaths"

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
import UserDetailsPage from "./pages/users/UserDetailsPage";
import RoleTablePage from "./pages/users/RoleTablePage";
import RoleTableFilterPage from "./pages/users/RoleTableFilterPage";
import RoleTablePageByUserPage from "./pages/users/RoleTablePageByUserPage";
// Sales System
import ProductFormPage from "./pages/sales/ProductFormPage";
import ProductTablePage from "./pages/sales/ProductTablePage";
import ProductTableFilterPage from "./pages/sales/ProductTableFilterPage";
// Hospital System
import DoctorUserFormPage from "./pages/hospital/DoctorUserFormPage";
import DoctorUserTableToDetailsPage from "./pages/hospital/DoctorUserTableToDetailsPage";
import PatientUserFormPage from "./pages/hospital/PatientUserFormPage";


const AppRoutes = () => (
  <App>
    <Switch>
      <Route exact path={enumPaths.DASHBOARD} component={DashboardPage} />
      {/** Users System*/}
      <Route exact path={enumPaths.USERS_FORM} component={UsersFormPage} />
      <Route exact path={enumPaths.USERS_TABLE} component={UserTableBasicPage} />
      <Route exact path={enumPaths.USERS_TABLE_FILTER} component={UserTableFilterPage} />
      <Route exact path={enumPaths.USERS_TABLE_FILTER_BY_ROLE} component={UserTableFilterByRolePage} />
      <Route exact path={enumPaths.USERS_TABLE_FILTER_SELECTION} component={UserTableFilterSelectionPage} />
      <Route exact path={enumPaths.USERS_DETAILS} component={UserDetailsPage} />
      <Route exact path={enumPaths.ROLES_TABLE} component={RoleTablePage} />
      <Route exact path={enumPaths.ROLES_TABLE_FILTER} component={RoleTableFilterPage} />
      <Route exact path={enumPaths.ROLES_TABLE_FILTER_BY_USER} component={RoleTablePageByUserPage} />
      <Route exact path={enumPaths.ROLES_TABLE_SELECTION} component={RoleTablePage} />
      {/** Sales System*/}
      <Route exact path={enumPaths.SALES_PRODUCTS_FORM} component={ProductFormPage} />
      <Route exact path={enumPaths.SALES_PRODUCTS_TABLE} component={ProductTablePage} />
      <Route exact path={enumPaths.SALES_PRODUCTS_TABLE_FILTER} component={ProductTableFilterPage} />
      {/** Hospital System*/}
      <Route exact path={enumPaths.HOSPITAL_DOCTOR_USER_FORM} component={DoctorUserFormPage} />
      <Route exact path={enumPaths.HOSPITAL_DOCTOR_USER_TABLE_TO_DETAILS} component={DoctorUserTableToDetailsPage} />
      <Route exact path={enumPaths.HOSPITAL_PATIENT_USER_FORM} component={PatientUserFormPage} />
      <Route exact path={enumPaths.LOGIN} component={LoginPage} />
      <Route exact path="/" component={LoginPage} />
      <Route component={LoginPage} />
    </Switch>
  </App>
);

export default AppRoutes;