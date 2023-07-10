import React from "react";
import { Route, Switch } from "react-router-dom";
import enumPaths from "./models/enumPaths";

// Components
import App from "./App";
import LoginPage from "./components-level-3/LoginPage";
import DashboardPage from "./components-level-3/DashboardPage";
import SystemPropertiesFormPage from "./components-level-3/system/SystemPropertiesFormPage";
import SystemPropertiesTablePage from "./components-level-3/system/SystemPropertiesTablePage";
import TenantFormPage from "./components-level-3/system/TenantFormPage";
import TenantTableFilterByUserPage from "./components-level-3/system/TenantTableFilterByUserPage";
import InProgressPage from "./components-level-3/system/InProgressPage";
import TenantTableSelectForRolePage from "./components-level-3/system/TenantTableSelectForRolePage";
import TenantTableFilterByRolePage from "./components-level-3/system/TenantTableFilterByRolePage";

// Users System
import UsersFormPage from "./components-level-3/users/UserFormPage";
import UserFormTenantPage from "./components-level-3/users/UserFormTenantPage";
import DeprecateUserTableBasicPage from "./components-level-3/users/DeprecateUserTableBasicPage";
import DeprecateUserTableFilterFullDataPage from "./components-level-3/users/DeprecateUserTableFilterFullDataPage";
import UserTableFilterByRolePage from "./components-level-3/users/UserTableFilterByRolePage";
import UserTableFilterByTenantPage from "./components-level-3/users/UserTableFilterByTenantPage";
import UserTableFilterSelectionToDetailsPage from "./components-level-3/users/UserTableFilterSelectionToDetailsPage";
import UserTableFilterEditDeletePage from "./components-level-3/users/UserTableFilterEditDeletePage";
import UserDetailsPage from "./components-level-3/users/UserDetailsPage";
import RoleTablePage from "./components-level-3/users/RoleTablePage";
import RoleTableFilterPage from "./components-level-3/users/RoleTableFilterPage";
import RoleTablePageByUserPage from "./components-level-3/users/RoleTablePageByUserPage";
import RoleTableSelectForTenantPage from "./components-level-3/users/RoleTableSelectForTenantPage";
import RoleTableFilterByTenantPage from "./components-level-3/users/RoleTableFilterByTenantPage";
import UserTableFilterEditDeleteOnlyTenantPage from "./components-level-3/users/UserTableFilterEditDeleteOnlyTenantPage";
import UserTableFilterToDetailsOnlyTenantPage from "./components-level-3/users/UserTableFilterToDetailsOnlyTenantPage";
import RolesUsersStepOnePage from "./components-level-3/users/RolesUsersStepOnePage";
import RolesUsersStepTwoPage from "./components-level-3/users/RolesUsersStepTwoPage";
import UsersRolesStepOnePage from "./components-level-3/users/UsersRolesStepOnePage";
import UsersRolesStepTwoPage from "./components-level-3/users/UsersRolesStepTwoPage";
import TenantsUsersRolesStepAPage from "./components-level-3/users/TenantsUsersRolesStepAPage";
import TenantsUsersRolesStepBPage from "./components-level-3/users/TenantsUsersRolesStepBPage";
import TenantsUsersRolesStepCPage from "./components-level-3/users/TenantsUsersRolesStepCPage";

// Sales System
import ProductFormPage from "./components-level-3/sales/ProductFormPage";
import ProductTableFilterEditDeletePage from "./components-level-3/sales/ProductTableFilterEditDeletePage";
import ClientFormPage from "./components-level-3/sales/ClientFormPage";
import ClientTableFilterSelectionToDetailsPage from "./components-level-3/sales/ClientTableFilterSelectionToDetailsPage";
import SellerFormPage from "./components-level-3/sales/SellerFormPage";
import SellerTableFilterSelectionToDetailsPage from "./components-level-3/sales/SellerTableFilterSelectionToDetailsPage";
import SalesTableFilterAllPage from "./components-level-3/sales/SalesTableFilterAllPage";
import SalesTableFilterTodoPage from "./components-level-3/sales/SalesTableFilterTodoPage";
import SalesTableFilterInProgressPage from "./components-level-3/sales/SalesTableFilterInProgressPage";
import SaleAddStepOnePageForSeller from "./components-level-3/sales/SaleAddStepOnePageForSeller";
import SaleAddStepOnePageForCashier from "./components-level-3/sales/SaleAddStepOnePageForCashier";
import SaleAddStepTwoPage from "./components-level-3/sales/SaleAddStepTwoPage";
import SaleReportQuantityPage from "./components-level-3/sales/SaleReportQuantityPage";
import SaleReportQuantityCompPage from "./components-level-3/sales/SaleReportQuantityCompPage";
import SaleReportQuantityMonthByProductPage from "./components-level-3/sales/SaleReportQuantityMonthByProductPage";
import SaleReportQuantityMonthCompByProductPage from "./components-level-3/sales/SaleReportQuantityMonthCompByProductPage";
import SaleReportQuantityMonthPage from "./components-level-3/sales/SaleReportQuantityMonthPage";
import SaleReportQuantityMonthCompPage from "./components-level-3/sales/SaleReportQuantityMonthCompPage";
import SaleReportRevenuePage from "./components-level-3/sales/SaleReportRevenuePage";
import SaleReportRevenueCompPage from "./components-level-3/sales/SaleReportRevenueCompPage";
import SaleReportRevenueMonthByProductPage from "./components-level-3/sales/SaleReportRevenueMonthByProductPage";
import SaleReportRevenueMonthCompByProductPage from "./components-level-3/sales/SaleReportRevenueMonthCompByProductPage";
import SaleReportRevenueMonthPage from "./components-level-3/sales/SaleReportRevenueMonthPage";
import SaleReportRevenueMonthCompPage from "./components-level-3/sales/SaleReportRevenueMonthCompPage";
import SaleReportProfitPage from "./components-level-3/sales/SaleReportProfitPage";
import SaleReportProfitCompPage from "./components-level-3/sales/SaleReportProfitCompPage";
import SaleReportProfitMonthByProductPage from "./components-level-3/sales/SaleReportProfitMonthByProductPage";
import SaleReportProfitMonthCompByProductPage from "./components-level-3/sales/SaleReportProfitMonthCompByProductPage";
import SaleReportProfitMonthPage from "./components-level-3/sales/SaleReportProfitMonthPage";
import SaleReportProfitMonthCompPage from "./components-level-3/sales/SaleReportProfitMonthCompPage";
import ProductTableToQuantityReportPage from "./components-level-3/sales/ProductTableToQuantityReportPage";
import ProductTableToQuantityComparativeReportPage from "./components-level-3/sales/ProductTableToQuantityComparativeReportPage";
import ProductTableToRevenueReportPage from "./components-level-3/sales/ProductTableToRevenueReportPage";
import ProductTableToRevenueComparativeReportPage from "./components-level-3/sales/ProductTableToRevenueComparativeReportPage";
import ProductTableToProfitReportPage from "./components-level-3/sales/ProductTableToProfitReportPage";
import ProductTableToProfitComparativeReportPage from "./components-level-3/sales/ProductTableToProfitComparativeReportPage";
import ProductTableToProfitMonthCompReportPage from "./components-level-3/sales/ProductTableToProfitMonthCompReportPage";
import ProductTableToProfitMonthReportPage from "./components-level-3/sales/ProductTableToProfitMonthReportPage";
import ProductTableToQuantityMonthCompReportPage from "./components-level-3/sales/ProductTableToQuantityMonthCompReportPage";
import ProductTableToQuantityMonthReportPage from "./components-level-3/sales/ProductTableToQuantityMonthReportPage";
import ProductTableToRevenueMonthCompReportPage from "./components-level-3/sales/ProductTableToRevenueMonthCompReportPage";
import ProductTableToRevenueMonthReportPage from "./components-level-3/sales/ProductTableToRevenueMonthReportPage";
import SaleReportQuantityByProductPage from "./components-level-3/sales/SaleReportQuantityByProductPage";
import SaleReportQuantityComparativeByProductPage from "./components-level-3/sales/SaleReportQuantityComparativeByProductPage";
import SaleReportRevenueByProductPage from "./components-level-3/sales/SaleReportRevenueByProductPage";
import SaleReportRevenueComparativeByProductPage from "./components-level-3/sales/SaleReportRevenueComparativeByProductPage";
import SaleReportProfitByProductPage from "./components-level-3/sales/SaleReportProfitByProductPage";
import SaleReportProfitComparativeByProductPage from "./components-level-3/sales/SaleReportProfitComparativeByProductPage";

// Hospital System
import DoctorUserFormPage from "./components-level-3/hospital/DoctorUserFormPage";
import DoctorUserTableToDetailsPage from "./components-level-3/hospital/DoctorUserTableToDetailsPage";
import PatientUserFormPage from "./components-level-3/hospital/PatientUserFormPage";
import PatientUserTableToDetailsPage from "./components-level-3/hospital/PatientUserTableToDetailsPage";

// Reservation System
import ResourceFormPage from "./components-level-3/reservation/ResourceFormPage";
import ResourceTablePage from "./components-level-3/reservation/ResourceTablePage";
import ScheduleFormPage from "./components-level-3/reservation/ScheduleFormPage";
import IntervalTimeTablePage from "./components-level-3/reservation/IntervalTimeTablePage";
import IntervalTimeFormPage from "./components-level-3/reservation/IntervalTimeFormPage";
import ScheduleTablePage from "./components-level-3/reservation/ScheduleTablePage";
import TenantTableFilterEditDeletePage from "./components-level-3/system/TenantTableFilterEditDeletePage";
import TenantTableFilterPage from "./components-level-3/system/TenantTableFilterPage";

// Alcaldia System
import AlcaldiaRecursosMunicipalesFormPage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesFormPage";
import AlcaldiaRecursosMunicipalesTablePage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesTablePage";
import AlcaldiaRecursosMunicipalesVentasFormPage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesVentasFormPage";
import AlcaldiaRecursosMunicipalesVentasTablePage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesVentasTablePage";
import AlcaldiaRecursosMunicipalesReporteDiarioPage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesReporteDiarioPage";
import AlcaldiaRecursosMunicipalesReporteMensualPage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesReporteMensualPage";
import AlcaldiaRecursosMunicipalesReporteAnualPage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesReporteAnualPage";
import UrbanismoTramiteFormPage from "./components-level-3/alcaldia/UrbanismoTramiteFormPage";
import UrbanismoTramiteTablePage from "./components-level-3/alcaldia/UrbanismoTramiteTablePage";
import UrbanismoRequisitosFormPage from "./components-level-3/alcaldia/UrbanismoRequisitosFormPage";
import UrbanismoRequisitosTablePage from "./components-level-3/alcaldia/UrbanismoRequisitosTablePage";
import UrbanismoEstadosFormPage from "./components-level-3/alcaldia/UrbanismoEstadosFormPage";
import UrbanismoEstadosTablePage from "./components-level-3/alcaldia/UrbanismoEstadosTablePage";
import UrbanismoTramiteRequisitosStepOnePage from "./components-level-3/alcaldia/UrbanismoTramiteRequisitosStepOnePage";
import UrbanismoTramiteRequisitosStepTwoPage from "./components-level-3/alcaldia/UrbanismoTramiteRequisitosStepTwoPage";
import UrbanismoTramiteEstadosTablePage from "./components-level-3/alcaldia/UrbanismoTramiteEstadosTablePage";
import UrbanismoFlujoRequisitosStepOnePage from "./components-level-3/alcaldia/UrbanismoFlujoRequisitosStepOnePage";
import UrbanismoFlujoRequisitosStepTwoPage from "./components-level-3/alcaldia/UrbanismoFlujoRequisitosStepTwoPage";
import UrbanismoTramiteEstadosStepOnePage from "./components-level-3/alcaldia/UrbanismoTramiteEstadosStepOnePage";
import UrbanismoTramiteEstadosStepTwoPage from "./components-level-3/alcaldia/UrbanismoTramiteEstadosStepTwoPage";
import UrbanismoTramiteEstadosStepThreePage from "./components-level-3/alcaldia/UrbanismoTramiteEstadosStepThreePage";

const AppRoutes = () => (
  <App>
    <Switch>
      <Route exact path={enumPaths.DASHBOARD} component={DashboardPage} />
      <Route exact path={enumPaths.IN_PROGRESS_PAGE} component={InProgressPage} />
      {/** System Properties */}
      <Route exact path={enumPaths.SYSTEM_PROPERTIES_FORM} component={SystemPropertiesFormPage} />
      <Route exact path={enumPaths.SYSTEM_PROPERTIES_TABLE} component={SystemPropertiesTablePage} />
      <Route exact path={enumPaths.TENANTS_FORM} component={TenantFormPage} />
      <Route exact path={enumPaths.TENANTS_TABLE_FILTER_SELECTION} component={TenantTableFilterPage} />
      <Route exact path={enumPaths.TENANTS_TABLE_SELECTION_FOR_ROLE} component={TenantTableSelectForRolePage} />
      <Route exact path={enumPaths.TENANTS_TABLE_FILTER_BY_ROLE} component={TenantTableFilterByRolePage} />
      <Route exact path={enumPaths.TENANTS_TABLE_FILTER_BY_USER} component={TenantTableFilterByUserPage} />
      <Route exact path={enumPaths.TENANTS_TABLE_FILTER_EDIT_DELETE} component={TenantTableFilterEditDeletePage} />
      {/** Users System */}
      <Route exact path={enumPaths.USERS_FORM} component={UsersFormPage} />
      <Route exact path={enumPaths.USERS_FORM_TENANT} component={UserFormTenantPage} />
      <Route exact path={enumPaths.USERS_TABLE} component={DeprecateUserTableBasicPage} />
      <Route exact path={enumPaths.USERS_TABLE_FILTER} component={DeprecateUserTableFilterFullDataPage} />
      <Route exact path={enumPaths.USERS_TABLE_FILTER_BY_ROLE} component={UserTableFilterByRolePage} />
      <Route exact path={enumPaths.USERS_TABLE_FILTER_BY_TENANT} component={UserTableFilterByTenantPage} />
      <Route exact path={enumPaths.USERS_TABLE_FILTER_SELECTION} component={UserTableFilterSelectionToDetailsPage} />
      <Route exact path={enumPaths.USERS_TABLE_FILTER_EDIT_DELETE} component={UserTableFilterEditDeletePage} />
      <Route exact path={enumPaths.USERS_DETAILS} component={UserDetailsPage} />
      <Route exact path={enumPaths.ROLES_TABLE} component={RoleTablePage} />
      <Route exact path={enumPaths.ROLES_TABLE_FILTER} component={RoleTableFilterPage} />
      <Route exact path={enumPaths.ROLES_TABLE_FILTER_BY_USER} component={RoleTablePageByUserPage} />
      <Route exact path={enumPaths.ROLES_TABLE_SELECTION_FOR_TENANTS} component={RoleTableSelectForTenantPage} />
      <Route exact path={enumPaths.ROLES_TABLE_FILTER_BY_TENANT} component={RoleTableFilterByTenantPage} />
      <Route exact path={enumPaths.ROLES_TABLE_SELECTION} component={RoleTablePage} />
      <Route exact path={enumPaths.USERS_TABLE_FILTER_ONY_TENANT_EDIT_DELETE} component={UserTableFilterEditDeleteOnlyTenantPage} />
      <Route exact path={enumPaths.USERS_TABLE_FILTER_ONY_TENANT_DETAILS} component={UserTableFilterToDetailsOnlyTenantPage} />
      <Route exact path={enumPaths.USERS_ROLES_STEP_ONE} component={UsersRolesStepOnePage} />
      <Route exact path={enumPaths.USERS_ROLES_STEP_TWO} component={UsersRolesStepTwoPage} />
      <Route exact path={enumPaths.ROLES_USERS_STEP_ONE} component={RolesUsersStepOnePage} />
      <Route exact path={enumPaths.ROLES_USERS_STEP_TWO} component={RolesUsersStepTwoPage} />
      <Route exact path={enumPaths.TENANTS_USERS_ROLES_STEP_ONE} component={TenantsUsersRolesStepAPage} />
      <Route exact path={enumPaths.TENANTS_USERS_ROLES_STEP_TWO} component={TenantsUsersRolesStepBPage} />
      <Route exact path={enumPaths.TENANTS_USERS_ROLES_STEP_THREE} component={TenantsUsersRolesStepCPage} />
      {/** Sales System */}
      <Route exact path={enumPaths.SALES_PRODUCTS_FORM} component={ProductFormPage} />
      <Route exact path={enumPaths.SALES_PRODUCTS_TABLE_FILTER} component={ProductTableFilterEditDeletePage} />
      <Route exact path={enumPaths.SALES_CLIENT_FORM} component={ClientFormPage} />
      <Route exact path={enumPaths.SALES_CLIENT_TABLE_FILTER_TO_DETAILS} component={ClientTableFilterSelectionToDetailsPage} />
      <Route exact path={enumPaths.SALES_SELLER_FORM} component={SellerFormPage} />
      <Route exact path={enumPaths.SALES_SELLER_TABLE_FILTER_TO_DETAILS} component={SellerTableFilterSelectionToDetailsPage} />
      <Route exact path={enumPaths.SALES_SALES_TABLE_FILTER_TO_EDIT_DELETE_DETAILS} component={SalesTableFilterAllPage} />
      <Route exact path={enumPaths.SALES_SALES_TABLE_FILTER_TO_EDIT_DELETE_DETAILS_TODO} component={SalesTableFilterTodoPage} />
      <Route exact path={enumPaths.SALES_SALES_TABLE_FILTER_TO_EDIT_DELETE_DETAILS_IN_PROGRESS} component={SalesTableFilterInProgressPage} />
      <Route exact path={enumPaths.SALES_REGISTRATION_STEP_ONE_SELLER} component={SaleAddStepOnePageForSeller} />
      <Route exact path={enumPaths.SALES_REGISTRATION_STEP_ONE_CASHIER} component={SaleAddStepOnePageForCashier} />
      <Route exact path={enumPaths.SALES_REGISTRATION_STEP_TWO} component={SaleAddStepTwoPage} />
      <Route exact path={enumPaths.SALES_REPORT_QUANTITY} component={SaleReportQuantityPage} />
      <Route exact path={enumPaths.SALES_REPORT_QUANTITY_COMP} component={SaleReportQuantityCompPage} />
      <Route exact path={enumPaths.SALES_REPORT_QUANTITY_MONTH} component={SaleReportQuantityMonthPage} />
      <Route exact path={enumPaths.SALES_REPORT_QUANTITY_MONTH_COMP} component={SaleReportQuantityMonthCompPage} />
      <Route exact path={enumPaths.SALES_REPORT_REVENUE} component={SaleReportRevenuePage} />
      <Route exact path={enumPaths.SALES_REPORT_REVENUE_COMP} component={SaleReportRevenueCompPage} />
      <Route exact path={enumPaths.SALES_REPORT_REVENUE_MONTH} component={SaleReportRevenueMonthPage} />
      <Route exact path={enumPaths.SALES_REPORT_REVENUE_MONTH_COMP} component={SaleReportRevenueMonthCompPage} />
      <Route exact path={enumPaths.SALES_REPORT_PROFIT} component={SaleReportProfitPage} />
      <Route exact path={enumPaths.SALES_REPORT_PROFIT_COMP} component={SaleReportProfitCompPage} />
      <Route exact path={enumPaths.SALES_REPORT_PROFIT_MONTH} component={SaleReportProfitMonthPage} />
      <Route exact path={enumPaths.SALES_REPORT_PROFIT_MONTH_COMP} component={SaleReportProfitMonthCompPage} />
      <Route exact path={enumPaths.SALES_PRODUCTS_TABLE_TO_QUANTITY_BY_PRODUCT} component={ProductTableToQuantityReportPage} />
      <Route exact path={enumPaths.SALES_PRODUCTS_TABLE_TO_QUANTITY_BY_PRODUCT_COMP} component={ProductTableToQuantityComparativeReportPage} />
      <Route exact path={enumPaths.SALES_PRODUCTS_TABLE_TO_REVENUE_BY_PRODUCT} component={ProductTableToRevenueReportPage} />
      <Route exact path={enumPaths.SALES_PRODUCTS_TABLE_TO_REVENUE_BY_PRODUCT_COMP} component={ProductTableToRevenueComparativeReportPage} />
      <Route exact path={enumPaths.SALES_PRODUCTS_TABLE_TO_PROFIT_BY_PRODUCT} component={ProductTableToProfitReportPage} />
      <Route exact path={enumPaths.SALES_PRODUCTS_TABLE_TO_PROFIT_BY_PRODUCT_COMP} component={ProductTableToProfitComparativeReportPage} />
      <Route exact path={enumPaths.SALES_PRODUCTS_TABLE_TO_QUANTITY_MONTH_BY_PRODUCT} component={ProductTableToQuantityMonthReportPage} />
      <Route exact path={enumPaths.SALES_PRODUCTS_TABLE_TO_QUANTITY_MONTH_BY_PRODUCT_COMP} component={ProductTableToQuantityMonthCompReportPage} />
      <Route exact path={enumPaths.SALES_PRODUCTS_TABLE_TO_REVENUE_MONTH_BY_PRODUCT} component={ProductTableToRevenueMonthReportPage} />
      <Route exact path={enumPaths.SALES_PRODUCTS_TABLE_TO_REVENUE_MONTH_BY_PRODUCT_COMP} component={ProductTableToRevenueMonthCompReportPage} />
      <Route exact path={enumPaths.SALES_PRODUCTS_TABLE_TO_PROFIT_MONTH_BY_PRODUCT} component={ProductTableToProfitMonthReportPage} />
      <Route exact path={enumPaths.SALES_PRODUCTS_TABLE_TO_PROFIT_MONTH_BY_PRODUCT_COMP} component={ProductTableToProfitMonthCompReportPage} />
      <Route exact path={enumPaths.SALES_REPORT_QUANTITY_BY_PRODUCT} component={SaleReportQuantityByProductPage} />
      <Route exact path={enumPaths.SALES_REPORT_QUANTITY_COMP_BY_PRODUCT} component={SaleReportQuantityComparativeByProductPage} />
      <Route exact path={enumPaths.SALES_REPORT_QUANTITY_MONTH_BY_PRODUCT} component={SaleReportQuantityMonthByProductPage} />
      <Route exact path={enumPaths.SALES_REPORT_QUANTITY_MONTH_COMP_BY_PRODUCT} component={SaleReportQuantityMonthCompByProductPage} />
      <Route exact path={enumPaths.SALES_REPORT_REVENUE_BY_PRODUCT} component={SaleReportRevenueByProductPage} />
      <Route exact path={enumPaths.SALES_REPORT_REVENUE_COMP_BY_PRODUCT} component={SaleReportRevenueComparativeByProductPage} />
      <Route exact path={enumPaths.SALES_REPORT_REVENUE_MONTH_BY_PRODUCT} component={SaleReportRevenueMonthByProductPage} />
      <Route exact path={enumPaths.SALES_REPORT_REVENUE_MONTH_COMP_BY_PRODUCT} component={SaleReportRevenueMonthCompByProductPage} />
      <Route exact path={enumPaths.SALES_REPORT_PROFIT_BY_PRODUCT} component={SaleReportProfitByProductPage} />
      <Route exact path={enumPaths.SALES_REPORT_PROFIT_COMP_BY_PRODUCT} component={SaleReportProfitComparativeByProductPage} />
      <Route exact path={enumPaths.SALES_REPORT_PROFIT_MONTH_BY_PRODUCT} component={SaleReportProfitMonthByProductPage} />
      <Route exact path={enumPaths.SALES_REPORT_PROFIT_MONTH_COMP_BY_PRODUCT} component={SaleReportProfitMonthCompByProductPage} />
      {/** Hospital System */}
      <Route exact path={enumPaths.HOSPITAL_DOCTOR_USER_FORM} component={DoctorUserFormPage} />
      <Route exact path={enumPaths.HOSPITAL_DOCTOR_USER_TABLE_TO_DETAILS} component={DoctorUserTableToDetailsPage} />
      <Route exact path={enumPaths.HOSPITAL_PATIENT_USER_FORM} component={PatientUserFormPage} />
      <Route exact path={enumPaths.HOSPITAL_PATIENT_USER_TABLE_TO_DETAILS} component={PatientUserTableToDetailsPage} />
      {/** Reservation System */}
      <Route exact path={enumPaths.RESERVATION_RESOURCES_FORM} component={ResourceFormPage} />
      <Route exact path={enumPaths.RESERVATION_RESOURCES_TABLE} component={ResourceTablePage} />
      <Route exact path={enumPaths.RESERVATION_SCHEDULE_FORM} component={ScheduleFormPage} />
      <Route exact path={enumPaths.RESERVATION_SCHEDULE_TABLE} component={ScheduleTablePage} />
      <Route exact path={enumPaths.RESERVATION_INTERVAL_TIME_FORM} component={IntervalTimeFormPage} />
      <Route exact path={enumPaths.RESERVATION_INTERVAL_TIME_TABLE} component={IntervalTimeTablePage} />
      <Route exact path={enumPaths.LOGIN} component={LoginPage} />
      {/** Alcaldia System */}
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_FORM} component={AlcaldiaRecursosMunicipalesFormPage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_TABLE} component={AlcaldiaRecursosMunicipalesTablePage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_VENTAS_FORM} component={AlcaldiaRecursosMunicipalesVentasFormPage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_VENTAS_TABLE} component={AlcaldiaRecursosMunicipalesVentasTablePage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_DIARIO} component={AlcaldiaRecursosMunicipalesReporteDiarioPage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_MENSUAL} component={AlcaldiaRecursosMunicipalesReporteMensualPage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_ANUAL} component={AlcaldiaRecursosMunicipalesReporteAnualPage} />
      <Route exact path={enumPaths.URBANISMO_TRAMITE_FORM} component={UrbanismoTramiteFormPage} />
      <Route exact path={enumPaths.URBANISMO_TRAMITE_TABLE} component={UrbanismoTramiteTablePage} />
      <Route exact path={enumPaths.URBANISMO_REQUISITOS_FORM} component={UrbanismoRequisitosFormPage} />
      <Route exact path={enumPaths.URBANISMO_REQUISITOS_TABLE} component={UrbanismoRequisitosTablePage} />
      <Route exact path={enumPaths.URBANISMO_ESTADOS_FORM} component={UrbanismoEstadosFormPage} />
      <Route exact path={enumPaths.URBANISMO_ESTADOS_TABLE} component={UrbanismoEstadosTablePage} />
      <Route exact path={enumPaths.URBANISMO_TRAMITE_REQUISITOS_STEP_ONE} component={UrbanismoTramiteRequisitosStepOnePage} />
      <Route exact path={enumPaths.URBANISMO_TRAMITE_REQUISITOS_STEP_TWO} component={UrbanismoTramiteRequisitosStepTwoPage} />
      <Route exact path={enumPaths.URBANISMO_TRAMITE_ESTADOS_TABLE} component={UrbanismoTramiteEstadosTablePage} />
      <Route exact path={enumPaths.URBANISMO_FLUJO_REQUISITOS_STEP_ONE} component={UrbanismoFlujoRequisitosStepOnePage} />
      <Route exact path={enumPaths.URBANISMO_FLUJO_REQUISITOS_STEP_TWO} component={UrbanismoFlujoRequisitosStepTwoPage} />
      <Route exact path={enumPaths.URBANISMO_TRAMITE_ESTADOS_STEP_ONE} component={UrbanismoTramiteEstadosStepOnePage} />
      <Route exact path={enumPaths.URBANISMO_TRAMITE_ESTADOS_STEP_TWO} component={UrbanismoTramiteEstadosStepTwoPage} />
      <Route exact path={enumPaths.URBANISMO_TRAMITE_ESTADOS_STEP_THREE} component={UrbanismoTramiteEstadosStepThreePage} />
      <Route exact path="/" component={LoginPage} />
      <Route component={LoginPage} />
    </Switch>
  </App>
);

export default AppRoutes;
