import React from "react";
import { Route, Switch } from "react-router-dom";
import enumPaths from "./models/enumPaths"

// Components
import App from "./App";
import LoginPage from "./components-level-3/LoginPage";
import DashboardPage from "./components-level-3/DashboardPage";
// Users System
import UsersFormPage from "./components-level-3/users/UserFormPage";
import UserTableBasicPage from "./components-level-3/users/UserTableBasicPage";
import UserTableFilterFullDataPage from "./components-level-3/users/UserTableFilterFullDataPage";
import UserTableFilterByRolePage from "./components-level-3/users/UserTableFilterByRolePage";
import UserTableFilterSelectionToDetailsPage from "./components-level-3/users/UserTableFilterSelectionToDetailsPage";
import UserTableFilterEditDeletePage from "./components-level-3/users/UserTableFilterEditDeletePage"
import UserDetailsPage from "./components-level-3/users/UserDetailsPage";
import RoleTablePage from "./components-level-3/users/RoleTablePage";
import RoleTableFilterPage from "./components-level-3/users/RoleTableFilterPage";
import RoleTablePageByUserPage from "./components-level-3/users/RoleTablePageByUserPage";
// Sales System
import ProductFormPage from "./components-level-3/sales/ProductFormPage";
import ProductTableFilterEditDeletePage from "./components-level-3/sales/ProductTableFilterEditDeletePage";
import ClientFormPage from "./components-level-3/sales/ClientFormPage";
import ClientTableFilterSelectionToDetailsPage from "./components-level-3/sales/ClientTableFilterSelectionToDetailsPage";
import SellerFormPage from "./components-level-3/sales/SellerFormPage";
import SellerTableFilterSelectionToDetailsPage from "./components-level-3/sales/SellerTableFilterSelectionToDetailsPage";
import SaleTableFilterEditDeleteDetails from "./components-level-3/sales/SaleTableFilterEditDeleteDetails"
import SaleAddStepOnePage from "./components-level-3/sales/SaleAddStepOnePage"
import SaleAddStepTwoPage from "./components-level-3/sales/SaleAddStepTwoPage"
import SaleReportQuantityPage from "./components-level-3/sales/SaleReportQuantityPage"

// Hospital System
import DoctorUserFormPage from "./components-level-3/hospital/DoctorUserFormPage";
import DoctorUserTableToDetailsPage from "./components-level-3/hospital/DoctorUserTableToDetailsPage";
import PatientUserFormPage from "./components-level-3/hospital/PatientUserFormPage";
import PatientUserTableToDetailsPage from "./components-level-3/hospital/PatientUserTableToDetailsPage";


const AppRoutes = () => (
  <App>
    <Switch>
      <Route exact path={enumPaths.DASHBOARD} component={DashboardPage} />
      {/** Users System*/}
      <Route exact path={enumPaths.USERS_FORM} component={UsersFormPage} />
      <Route exact path={enumPaths.USERS_TABLE} component={UserTableBasicPage} />
      <Route exact path={enumPaths.USERS_TABLE_FILTER} component={UserTableFilterFullDataPage} />
      <Route exact path={enumPaths.USERS_TABLE_FILTER_BY_ROLE} component={UserTableFilterByRolePage} />
      <Route exact path={enumPaths.USERS_TABLE_FILTER_SELECTION} component={UserTableFilterSelectionToDetailsPage} />
      <Route exact path={enumPaths.USERS_TABLE_FILTER_EDIT_DELETE} component={UserTableFilterEditDeletePage} />
      <Route exact path={enumPaths.USERS_DETAILS} component={UserDetailsPage} />
      <Route exact path={enumPaths.ROLES_TABLE} component={RoleTablePage} />
      <Route exact path={enumPaths.ROLES_TABLE_FILTER} component={RoleTableFilterPage} />
      <Route exact path={enumPaths.ROLES_TABLE_FILTER_BY_USER} component={RoleTablePageByUserPage} />
      <Route exact path={enumPaths.ROLES_TABLE_SELECTION} component={RoleTablePage} />
      {/** Sales System*/}
      <Route exact path={enumPaths.SALES_PRODUCTS_FORM} component={ProductFormPage} />
      <Route exact path={enumPaths.SALES_PRODUCTS_TABLE_FILTER} component={ProductTableFilterEditDeletePage} />
      <Route exact path={enumPaths.SALES_CLIENT_FORM} component={ClientFormPage} />
      <Route exact path={enumPaths.SALES_CLIENT_TABLE_FILTER_TO_DETAILS} component={ClientTableFilterSelectionToDetailsPage} />
      <Route exact path={enumPaths.SALES_SELLER_FORM} component={SellerFormPage} />
      <Route exact path={enumPaths.SALES_SELLER_TABLE_FILTER_TO_DETAILS} component={SellerTableFilterSelectionToDetailsPage} />
      <Route exact path={enumPaths.SALES_SALES_TABLE_FILTER_TO_EDIT_DELETE_DETAILS} component={SaleTableFilterEditDeleteDetails} />
      <Route exact path={enumPaths.SALES_REGISTRATION_STEP_ONE} component={SaleAddStepOnePage} />
      <Route exact path={enumPaths.SALES_REGISTRATION_STEP_TWO} component={SaleAddStepTwoPage} />
      <Route exact path={enumPaths.SALES_REPORT_QUANTITY} component={SaleReportQuantityPage} />
      {/** Hospital System*/}
      <Route exact path={enumPaths.HOSPITAL_DOCTOR_USER_FORM} component={DoctorUserFormPage} />
      <Route exact path={enumPaths.HOSPITAL_DOCTOR_USER_TABLE_TO_DETAILS} component={DoctorUserTableToDetailsPage} />
      <Route exact path={enumPaths.HOSPITAL_PATIENT_USER_FORM} component={PatientUserFormPage} />
      <Route exact path={enumPaths.HOSPITAL_PATIENT_USER_TABLE_TO_DETAILS} component={PatientUserTableToDetailsPage} />
      <Route exact path={enumPaths.LOGIN} component={LoginPage} />
      <Route exact path="/" component={LoginPage} />
      <Route component={LoginPage} />
    </Switch>
  </App>
);

export default AppRoutes;