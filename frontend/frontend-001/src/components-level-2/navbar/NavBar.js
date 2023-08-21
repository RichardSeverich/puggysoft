import React, { useHistory } from "react-router";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import CommonLabel from "./../../components-level-1/CommonLabel";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  FaUsers,
  FaChartLine,
  FaTicketAlt,
  FaUserInjured,
  FaUserMd,
  FaUser,
  FaCashRegister,
  FaUserShield,
  FaHouseUser
} from "react-icons/fa";
import {
  AiOutlineUserAdd,
  AiOutlineTable,
  AiOutlineSchedule,
  AiOutlineCalendar
  /* AiOutlineIdcard */
} from "react-icons/ai";
import {
  GrAddCircle,
  GrProductHunt,
  GrStackOverflow
} from "react-icons/gr";
import { CgOptions } from "react-icons/cg";
import {
  BsBuildingFillGear,
  BsBuildingFillAdd,
  BsCartCheckFill,
  BsFillBagCheckFill,
  BsFillBarChartFill,
  BsClipboardCheckFill,
  BsUiChecksGrid,
  BsCashCoin,
  BsCoin,
  BsBuildingLock
} from "react-icons/bs";
import { TbHierarchy3 } from "react-icons/tb";
import { RiLoginCircleLine, RiUser2Fill, RiShieldKeyholeFill } from "react-icons/ri";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { GoCalendar } from "react-icons/go";
import { GiGoldBar } from "react-icons/gi";
import { IoMdTimer, IoIosNotifications } from "react-icons/io";
import { IoNewspaperSharp } from "react-icons/io5";
import enumRoles from "./../../models/users/enumRoles";
import enumTableType from "./../../models/enumTableType";
import enumPaths from "./../../models/enumPaths";
import i18n from "../../i18n/i18n";

import "./styles.css";

function NavBar () {
  const history = useHistory();
  const userRolesString = window.sessionStorage.getItem("role");
  const currentTenant = window.sessionStorage.getItem("tenant");
  const tenantImage = window.sessionStorage.getItem("tenantImage");
  // const userRolesObjects = JSON.parse(userRolesString);
  const userRoles = [];

  if (userRolesString) {
    userRoles.push(userRolesString);
  }

  // ******* ******* ******* SYSTEM PROPERTIES ******* ******* *******
  const navigateSystemPropertiesTable = () => {
    history.push(enumPaths.SYSTEM_PROPERTIES_TABLE);
  };
  const navigateTenantsForm = () => {
    history.push(enumPaths.TENANTS_FORM);
  };
  const navigateTenantsTableFilterEditDelete = () => {
    history.push(enumPaths.TENANTS_TABLE_FILTER_EDIT_DELETE);
  };
  const navigateTenantTableSelection = () => {
    history.push({
      pathname: enumPaths.TENANTS_TABLE_FILTER_SELECTION,
      state: { tableType: enumTableType.TABLE_SELECTION }
    });
  };
  const navigateUserTableSelectionForTenants = () => {
    history.push({
      pathname: enumPaths.USERS_TABLE_FILTER_SELECTION,
      state: {
        afterSelectRoute: enumPaths.TENANTS_TABLE_FILTER_BY_USER,
        tableTitle: i18n.userTable.title
      }
    });
  };
  const navigateTenantTableSelectionForRoles = () => {
    history.push({
      pathname: enumPaths.TENANTS_TABLE_SELECTION_FOR_ROLE
    });
  };
  const navigateRoleTableSelectionForTenants = () => {
    history.push({
      pathname: enumPaths.ROLES_TABLE_SELECTION_FOR_TENANTS
    });
  };

  // ******* ******* ******* USERS SYSTEM ******* ******* *******

  const navigateToLogout = () => {
    history.push({ pathname: `${enumPaths.LOGIN}/${currentTenant}`, state: { logout: "" } });
  };
  const navigateUsersForm = () => {
    history.push(enumPaths.USERS_FORM);
  };
  const navigateUsersForTenant = () => {
    history.push(enumPaths.USERS_FORM_TENANT);
  };
  // const navigateUsersTable = () => { history.push(enumPaths.USERS_TABLE); }
  const navigateUsersTableFilter = () => {
    history.push(enumPaths.USERS_TABLE_FILTER);
  };
  const navigateUsersTableFilterEditDelete = () => {
    history.push(enumPaths.USERS_TABLE_FILTER_EDIT_DELETE);
  };
  const navigateRolesTable = () => {
    history.push(enumPaths.ROLES_TABLE);
  };
  const navigateRolesTableFilter = () => {
    history.push(enumPaths.ROLES_TABLE_FILTER);
  };
  const navigateRolesTableSelection = () => {
    history.push({
      pathname: enumPaths.ROLES_TABLE_SELECTION,
      state: { tableType: enumTableType.TABLE_SELECTION }
    });
  };
  const navigateUserTableSelectionForRoles = () => {
    history.push({
      pathname: enumPaths.USERS_TABLE_FILTER_SELECTION,
      state: {
        afterSelectRoute: enumPaths.ROLES_TABLE_FILTER_BY_USER,
        tableTitle: i18n.userTable.title
      }
    });
  };
  const navigateUserTableSelectionForDetails = () => {
    history.push({
      pathname: enumPaths.USERS_TABLE_FILTER_SELECTION,
      state: {
        afterSelectRoute: enumPaths.USERS_DETAILS,
        tableTitle: i18n.userTable.titleSelectionToDetails
      }
    });
  };
  const navigatUsersOnlyTenantTableEditDelete = () => {
    history.push(enumPaths.USERS_TABLE_FILTER_ONY_TENANT_EDIT_DELETE);
  };
  const navigatUsersOnlyTenantTableDetails = () => {
    history.push(enumPaths.USERS_TABLE_FILTER_ONY_TENANT_DETAILS);
  };
  const navigateToUsersRolesStepOne = () => {
    history.push(enumPaths.USERS_ROLES_STEP_ONE);
  };
  const navigateToRolesUsersStepOne = () => {
    history.push(enumPaths.ROLES_USERS_STEP_ONE);
  };
  const navigateToTenantUserRoleStepOne = () => {
    history.push(enumPaths.TENANTS_USERS_ROLES_STEP_ONE);
  };
  // ******* ******* ******* SALES SYSTEM ******* ******* *******
  const navigateProductsForm = () => {
    history.push(enumPaths.SALES_PRODUCTS_FORM);
  };
  const navigateProductsTableFilter = () => {
    history.push(enumPaths.SALES_PRODUCTS_TABLE_FILTER);
  };
  const navigateClientForm = () => {
    history.push(enumPaths.SALES_CLIENT_FORM);
  };
  const navigateClientTableFilter = () => {
    history.push(enumPaths.SALES_CLIENT_TABLE_FILTER_TO_DETAILS);
  };
  const navigateSellerForm = () => {
    history.push(enumPaths.SALES_SELLER_FORM);
  };
  const navigateSellerTableFilter = () => {
    history.push(enumPaths.SALES_SELLER_TABLE_FILTER_TO_DETAILS);
  };
  const navigateSalesTableFilter = () => {
    history.push(enumPaths.SALES_SALES_TABLE_FILTER_TO_EDIT_DELETE_DETAILS);
  };
  const navigateSalesTableFilterTodo = () => {
    history.push(enumPaths.SALES_SALES_TABLE_FILTER_TO_EDIT_DELETE_DETAILS_TODO);
  };
  const navigateSalesTableFilterInProgress = () => {
    history.push(enumPaths.SALES_SALES_TABLE_FILTER_TO_EDIT_DELETE_DETAILS_IN_PROGRESS);
  };
  const navigateSalesRegistrationStepOneSeller = () => {
    history.push(enumPaths.SALES_REGISTRATION_STEP_ONE_SELLER);
  };
  const navigateSalesRegistrationStepOneCashier = () => {
    history.push(enumPaths.SALES_REGISTRATION_STEP_ONE_CASHIER);
  };
  const navigateSalesReportQuantityAnnual = () => {
    history.push(enumPaths.SALES_REPORT_QUANTITY);
  };
  const navigateSalesReportQuantityMonth = () => {
    history.push(enumPaths.SALES_REPORT_QUANTITY_MONTH);
  };
  const navigateSalesReportRevenueAnnual = () => {
    history.push(enumPaths.SALES_REPORT_REVENUE);
  };
  const navigateSalesReportRevenueMonth = () => {
    history.push(enumPaths.SALES_REPORT_REVENUE_MONTH);
  };
  const navigateSalesReportProfitAnnual = () => {
    history.push(enumPaths.SALES_REPORT_PROFIT);
  };
  const navigateSalesReportProfitMonth = () => {
    history.push(enumPaths.SALES_REPORT_PROFIT_MONTH);
  };
  const navigateSalesReportQuantityAnnualByProduct = () => {
    history.push(enumPaths.SALES_PRODUCTS_TABLE_TO_QUANTITY_BY_PRODUCT);
  };
  const navigateSalesReportQuantityMonthByProduct = () => {
    history.push(enumPaths.SALES_PRODUCTS_TABLE_TO_QUANTITY_MONTH_BY_PRODUCT);
  };
  const navigateSalesReportRevenueAnnualByProduct = () => {
    history.push(enumPaths.SALES_PRODUCTS_TABLE_TO_REVENUE_BY_PRODUCT);
  };
  const navigateSalesReportRevenueMonthByProduct = () => {
    history.push(enumPaths.SALES_PRODUCTS_TABLE_TO_REVENUE_MONTH_BY_PRODUCT);
  };
  const navigateSalesReportProfitAnnualByProduct = () => {
    history.push(enumPaths.SALES_PRODUCTS_TABLE_TO_PROFIT_BY_PRODUCT);
  };
  const navigateSalesReportProfitMonthByProduct = () => {
    history.push(enumPaths.SALES_PRODUCTS_TABLE_TO_PROFIT_MONTH_BY_PRODUCT);
  };

  // ******* ******* ******* HOSPITAL SYSTEM ******* ******* *******
  const navigateDoctorUserForm = () => {
    history.push(enumPaths.HOSPITAL_DOCTOR_USER_FORM);
  };
  const navigatePatientUserForm = () => {
    history.push(enumPaths.HOSPITAL_PATIENT_USER_FORM);
  };
  const navigateDoctorUserTableToDetails = () => {
    history.push(enumPaths.HOSPITAL_DOCTOR_USER_TABLE_TO_DETAILS);
  };
  const navigatePatientUserTableToDetails = () => {
    history.push(enumPaths.HOSPITAL_PATIENT_USER_TABLE_TO_DETAILS);
  };

  function navigateGeneric (event) {
    console.log({ event });
    history.push(enumPaths.IN_PROGRESS_PAGE);
  }

  // ******* ******* ******* RESERVATION SYSTEM ******* ******* *******
  const navigateResourcesForm = () => {
    history.push(enumPaths.RESERVATION_RESOURCES_FORM);
  };
  const navigateResourcesTable = () => {
    history.push(enumPaths.RESERVATION_RESOURCES_TABLE);
  };
  const navigateScheduleForm = () => {
    history.push(enumPaths.RESERVATION_SCHEDULE_FORM);
  };
  const navigateScheduleTable = () => {
    history.push(enumPaths.RESERVATION_SCHEDULE_TABLE);
  };
  const navigateIntervalTimeForm = () => {
    history.push(enumPaths.RESERVATION_INTERVAL_TIME_FORM);
  };
  const navigateIntervalTimeTable = () => {
    history.push(enumPaths.RESERVATION_INTERVAL_TIME_TABLE);
  };

  // ******* ******* ******* ALCALDIA SYSTEM ******* ******* *******
  const navigateAlcaldiaRecursosMunicipalesForm = () => {
    history.push(enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_FORM);
  };
  const navigateAlcaldiaRecursosMunicipalesTable = () => {
    history.push(enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_TABLE);
  };
  const navigateAlcaldiaRecursosMunicipalesGrupoStepOne = () => {
    history.push(enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_GRUPO_STEP_ONE);
  };
  const navigateAlcaldiaRecursosMunicipalesTimbresForm = () => {
    history.push(enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_FORM);
  };
  const navigateAlcaldiaRecursosMunicipalesTimbresTable = () => {
    history.push(enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_TABLE);
  };
  const navigateAlcaldiaRecursosMunicipalesTimbresDescontinuadosForm = () => {
    history.push(enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_DESCONTINUADOS_FORM);
  };
  const navigateAlcaldiaRecursosMunicipalesTimbresDescontinuadosTable = () => {
    history.push(enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_DESCONTINUADOS_TABLE);
  };
  const navigateAlcaldiaRecursosMunicipaleTimbressVentasForm = () => {
    history.push(enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_VENTAS_FORM);
  };
  const navigateAlcaldiaRecursosMunicipalesTimbresVentasTable = () => {
    history.push(enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_VENTAS_TABLE);
  };
  const navigateAlcaldiaRecursosMunicipalesVentasForm = () => {
    history.push(enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_VENTAS_FORM);
  };
  const navigateAlcaldiaRecursosMunicipalesVentasTable = () => {
    history.push(enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_VENTAS_TABLE);
  };
  const navigateAlcaldiaRecursosMunicipalesReporteDiario = () => {
    history.push(enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_DIARIO);
  };
  const navigateAlcaldiaRecursosMunicipalesReporteMensual = () => {
    history.push(enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_MENSUAL);
  };
  const navigateAlcaldiaRecursosMunicipalesReporteAnual = () => {
    history.push(enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_ANUAL);
  };
  const navigateUrbanismoTramiteForm = () => {
    history.push(enumPaths.URBANISMO_TRAMITE_FORM);
  };
  const navigateUrbanismoTramiteTable = () => {
    history.push(enumPaths.URBANISMO_TRAMITE_TABLE);
  };
  const navigateRegulaLotesForm = () => {
    history.push(enumPaths.REGULA_LOTES_FORM);
  };
  const navigateRegulaLotesFormCliente = () => {
    history.push(enumPaths.REGULA_LOTES_FORM_CLIENTE);
  };
  const navigateRegulaLotesTable = () => {
    history.push(enumPaths.REGULA_LOTES_TABLE);
  };
  const navigateUrbanismoRequisitosForm = () => {
    history.push(enumPaths.URBANISMO_REQUISITOS_FORM);
  };
  const navigateUrbanismoRequisitosTable = () => {
    history.push(enumPaths.URBANISMO_REQUISITOS_TABLE);
  };
  const navigateUrbanismoEstadosForm = () => {
    history.push(enumPaths.URBANISMO_ESTADOS_FORM);
  };
  const navigateUrbanismoEstadosTable = () => {
    history.push(enumPaths.URBANISMO_ESTADOS_TABLE);
  };
  const navigateUrbanismoTramiteRequisitosStepOne = () => {
    history.push(enumPaths.URBANISMO_TRAMITE_REQUISITOS_STEP_ONE);
  };
  const navigateUrbanismoTramiteEstadosStepOne = () => {
    history.push(enumPaths.URBANISMO_TRAMITE_ESTADOS_STEP_ONE);
  };
  const navigateUrbanismoTramiteEstadosTable = () => {
    history.push(enumPaths.URBANISMO_TRAMITE_ESTADOS_TABLE);
  };
  const navigateUrbanismoFlujoRequisitosStepOne = () => {
    history.push(enumPaths.URBANISMO_FLUJO_REQUISITOS_STEP_ONE);
  };
  // eslint-disable-next-line no-unused-vars
  const navigateUrbanismoFlujoHistorialStepOne = () => {
    history.push(enumPaths.URBANISMO_FLUJO_HISTORIAL_STEP_ONE);
  };
  // eslint-disable-next-line no-unused-vars
  const navigateUrbanismoHistorialEstadoStepOne = () => {
    history.push(enumPaths.URBANISMO_HISTORIAL_ESTADO_STEP_ONE);
  };
  const NavbarBackground = "dark"; // dark, light, primary
  const NavbarVariant = "dark puggysoft-navbar"; // dark, light

  // ******* ******* ******* SYSTEM PROPERTIES ******* ******* *******
  const systemPropertiesAdminLabel = (<><MdOutlineSettingsSuggest /> {i18n.navBar.systemPropertiesAdmin}</>);
  const systemPropertiesTableLabel = (<><AiOutlineTable /> {i18n.navBar.systemPropertiesTable}</>);
  const tenantAdminLabel = (<><BsBuildingFillGear /> {i18n.navBar.tenantAdmin}</>);
  const tenantRegistrationLabel = (<><BsBuildingFillAdd /> {i18n.navBar.tenantRegistration}</>);
  const tenantShowTableFilterEditDeleteLabel = (<><AiOutlineTable /> {i18n.navBar.tenantShowTableFilterEditDelete}</>);
  const tenantUserAdminLabel = (<><FaHouseUser /> {i18n.navBar.tenantUserAdmin}</>);
  const tenantUserCrudByTenantLabel = (<><AiOutlineTable /> {i18n.navBar.tenantUserCrudByTenant}</>);
  const tenantUserCrudByUserLabel = (<><AiOutlineTable /> {i18n.navBar.tenantUserCrudByUser}</>);
  const tenantRoleAdminLabel = (<><BsBuildingLock /> {i18n.navBar.tenantRoleAdmin}</>);
  const tenantRoleCrudByTenantLabel = (<><AiOutlineTable /> {i18n.navBar.tenantRoleCrudByTenant}</>);
  const tenantRoleCrudByRoleLabel = (<><AiOutlineTable /> {i18n.navBar.tenantRoleCrudByRole}</>);

  // ******* ******* ******* USERS SYSTEM ******* ******* *******
  // USERS
  const userAdminLabel = (<><FaUsers /> {i18n.navBar.userAdmin}</>);
  const userRegistrationLabel = (<><AiOutlineUserAdd /> {i18n.navBar.userRegistration}</>);
  const userShowTableFilterEditDeleteLabel = (<><AiOutlineTable /> {i18n.navBar.userShowTableFilterEditDelete}</>);
  const userShowTableFilterDetailsLabel = (<><AiOutlineTable /> {i18n.navBar.userShowTableFilterDetails}</>);
  // const userShowTableFullDataLabel = (<><AiOutlineTable /> {i18n.navBar.userShowTableFullData}</>)
  const userShowTableFilterFullDataLabel = (<><AiOutlineTable /> {i18n.navBar.userShowTableFilterFullData}</>);
  // const userShowCardLabel = (<><AiOutlineIdcard /> {i18n.navBar.userShowCard}</>)
  // ROLES
  const rolesAdminLabel = (<><RiShieldKeyholeFill /> {i18n.navBar.roleAdmin}</>);
  // const roleRegistrationLabel = (<><GrAddCircle /> {i18n.navBar.roleRegistration}</>)
  const roleShowTableLabel = (<><AiOutlineTable /> {i18n.navBar.roleShowTable}</>);
  const roleShowTableFilterLabel = (<><AiOutlineTable /> {i18n.navBar.roleShowTableFilter}</>);
  // const roleShowCardLabel = (<><AiOutlineIdcard /> {i18n.navBar.roleShowCard}</>)

  // TENANTS - USERS - ROLES
  const tenantsUsersRolesAdminLabel = (<><FaUserShield /> {i18n.navBar.tenantsUsersRoles}</>);
  const tenantsUsersRolesByTenantAndUser = (<><GrAddCircle /> {i18n.navBar.tenantsUsersRolesByTenantAndUser}</>);

  // ROLES - USER
  const roleUserAdminLabel = (<><FaUserShield /> {i18n.navBar.roleUserAdmin}</>);
  const roleUserCrudByRoleLabel = (<><AiOutlineTable /> {i18n.navBar.roleUserCrudByRole}</>);
  const roleUserCrudByUserLabel = (<><AiOutlineTable /> {i18n.navBar.roleUserCrudByUser}</>);
  const userRoleByUserLabel = (<><GrAddCircle /> {i18n.navBar.userRoleByUser}</>);
  const userRoleByRolLabel = (<><GrAddCircle /> {i18n.navBar.userRoleByRol}</>);

  // ******* ******* ******* SALES SYSTEM ******* ******* *******
  // SELLER
  const sellerAdminLabel = (<><RiUser2Fill /> {i18n.navBar.sellertAdmin}</>);
  const sellerRegistrationLabel = (<><GrAddCircle /> {i18n.navBar.sellerRegistration}</>);
  // const sellerShowTableLabel = (<><AiOutlineTable /> {i18n.navBar.sellerShowTable}</>)
  const sellerShowTableFilterLabel = (<><AiOutlineTable /> {i18n.navBar.sellerShowTableFilter}</>);
  // const sellerShowCardLabel = (<><AiOutlineIdcard /> {i18n.navBar.sellerShowCard}</>)
  // CLIENT
  const clientAdminLabel = (<><FaUser /> {i18n.navBar.clientAdmin}</>);
  const clientRegistrationLabel = (<><GrAddCircle /> {i18n.navBar.clientRegistration}</>);
  // const clientShowTableLabel = (<><AiOutlineTable /> {i18n.navBar.clientShowTable}</>)
  const clientShowTableFilterLabel = (<><AiOutlineTable /> {i18n.navBar.clientShowTableFilter}</>);
  // const clientShowCardLabel = (<><AiOutlineIdcard /> {i18n.navBar.clientShowCard}</>)
  // PRODUCTS
  const productAdminLabel = (<><GrProductHunt /> {i18n.navBar.productAdmin}</>);
  const productRegistrationLabel = (<><GrAddCircle /> {i18n.navBar.productRegistration}</>);
  // const productShowTableLabel = (<><AiOutlineTable /> {i18n.navBar.productShowTable}</>)
  const productShowTableFilterLabel = (<><AiOutlineTable /> {i18n.navBar.productShowTableFilter}</>);
  // const productShowCardLabel = (<><AiOutlineIdcard /> {i18n.navBar.productShowCard}</>)
  // ORDERS
  const orderAdminLabel = (<><FaTicketAlt /> {i18n.navBar.orderAdmin}</>);
  const orderRegistrationLabel = (<><GrAddCircle /> {i18n.navBar.orderRegistration}</>);
  const orderShowTableLabel = (<><AiOutlineTable /> {i18n.navBar.orderShowTable}</>);
  // const orderShowCardLabel = (<><AiOutlineIdcard /> {i18n.navBar.orderShowCard}</>)
  // DISPATCH
  const dispatchAdminLabel = (<><BsFillBagCheckFill /> {i18n.navBar.dispatchAdmin}</>);
  // const dispatchRegistrationLabel = (<><GrAddCircle /> {i18n.navBar.dispatchRegistration}</>);
  const dispatchShowTableLabel = (<><AiOutlineTable /> {i18n.navBar.dispatchShowTable}</>);
  // const dispatchShowCardLabel = (<><AiOutlineIdcard /> {i18n.navBar.dispatchShowCard}</>)
  // SALES
  const salesAdminLabel = (<><BsCartCheckFill /> {i18n.navBar.salesAdmin}</>);
  const salesRegistrationLabel = (<><GrAddCircle /> {i18n.navBar.salesRegistration}</>);
  const salesShowTableLabel = (<><AiOutlineTable /> {i18n.navBar.salesShowTable}</>);
  // const salesShowCardLabel = (<><AiOutlineIdcard /> {i18n.navBar.salesShowCard}</>)
  // REPORTS
  const reportAdminLabel = (<><BsFillBarChartFill /> {i18n.navBar.reportAdmin}</>);
  const reportQuantityAnnual = (<CommonLabel
    leftIcon={<FaChartLine />}
    label={i18n.navBar.reportQuantityAnnual}
    questionMarkEnable
    questionMarkTooltipLabel={i18n.saleReport.infoReportQuantityAnnual}
  />);
  const reportQuantityMonth = (<CommonLabel
    leftIcon={<FaChartLine />}
    label={i18n.navBar.reportQuantityMonth}
    questionMarkEnable
    questionMarkTooltipLabel={i18n.saleReport.infoReportQuantityMonth}
  />);
  const reportRevenueAnnual = (<CommonLabel
    leftIcon={<BsCoin />}
    label={i18n.navBar.reportRevenueAnnual}
    questionMarkEnable
    questionMarkTooltipLabel={i18n.saleReport.infoReportRevenueAnnual}
  />);
  const reportRevenueMonth = (<CommonLabel
    leftIcon={<BsCoin />}
    label={i18n.navBar.reportRevenueMonth}
    questionMarkEnable
    questionMarkTooltipLabel={i18n.saleReport.infoReportRevenueMonth}
  />);
  const reportProfitAnnual = (<CommonLabel
    leftIcon={<BsCashCoin />}
    label={i18n.navBar.reportProfitAnnual}
    questionMarkEnable
    questionMarkTooltipLabel={i18n.saleReport.infoReportProfitAnnual}
  />);
  const reportProfitMonth = (<CommonLabel
    leftIcon={<BsCashCoin />}
    label={i18n.navBar.reportProfitMonth}
    questionMarkEnable
    questionMarkTooltipLabel={i18n.saleReport.infoReportProfitMonth}
  />);
  const reportQuantityPerProduct = (<CommonLabel
    leftIcon={<FaChartLine />}
    label={i18n.navBar.reportQuantityPerProduct}
    questionMarkEnable
    questionMarkTooltipLabel={i18n.saleReport.infoReportQuantityPerProduct}
  />);
  const reportQuantityMonthPerProduct = (<CommonLabel
    leftIcon={<FaChartLine />}
    label={i18n.navBar.reportQuantityMonthPerProduct}
    questionMarkEnable
    questionMarkTooltipLabel={i18n.saleReport.infoReportQuantityMonthPerProduct}
  />);
  const reportRevenuePerProduct = (<CommonLabel
    leftIcon={<BsCoin />}
    label={i18n.navBar.reportRevenuePerProduct}
    questionMarkEnable
    questionMarkTooltipLabel={i18n.saleReport.infoReportRevenuePerProduct}
  />);
  const reportRevenueMonthPerProduct = (<CommonLabel
    leftIcon={<BsCoin />}
    label={i18n.navBar.reportRevenueMonthPerProduct}
    questionMarkEnable
    questionMarkTooltipLabel={i18n.saleReport.infoReportRevenueMonthPerProduct}
  />);
  const reportProfitPerProductAnnual = (<CommonLabel
    leftIcon={<BsCashCoin />}
    label={i18n.navBar.reportProfitPerProductAnnual}
    questionMarkEnable
    questionMarkTooltipLabel={i18n.saleReport.infoReportProfitPerProduct}
  />);
  const reportProfitMonthPerProduct = (<CommonLabel
    leftIcon={<BsCashCoin />}
    label={i18n.navBar.reportProfitMonthPerProduct}
    questionMarkEnable
    questionMarkTooltipLabel={i18n.saleReport.infoReportProfitMonthPerProduct}
  />);
  // ******* ******* ******* HOSPITAL SYSTEM ******* ******* *******
  // DOCTORS
  const doctorAdminLabel = (<><FaUserMd /> {i18n.navBar.doctorAdmin}</>);
  const doctorRegistrationLabel = (<><GrAddCircle /> {i18n.navBar.doctorRegistration}</>);
  // const doctorShowTableLabel = (<><AiOutlineTable /> {i18n.navBar.doctorShowTable}</>) No use more
  const doctorShowTableFilterLabel = (<><AiOutlineTable /> {i18n.navBar.doctorShowTableFilter}</>);
  // const doctorShowCardLabel = (<><AiOutlineIdcard /> {i18n.navBar.doctorShowCard}</>)
  // PATIENTS
  const patientAdminLabel = (<><FaUserInjured /> {i18n.navBar.patientAdmin}</>);
  const patientRegistrationLabel = (<><GrAddCircle /> {i18n.navBar.patientRegistration}</>);
  // const patientShowTableLabel = (<><AiOutlineTable /> {i18n.navBar.patientShowTable}</>) No use more
  const patientShowTableFilterLabel = (<><AiOutlineTable /> {i18n.navBar.patientShowTableFilter}</>);
  // const patientShowCardLabel = (<><AiOutlineIdcard /> {i18n.navBar.patientShowCard}</>)
  // SCHEDULE
  const scheduleAdminLabel = (<><GoCalendar /> {i18n.navBar.scheduleAdmin}</>);
  const scheduleRegistrationLabel = (<><GrAddCircle /> {i18n.navBar.scheduleRegistration}</>);
  const scheduleShowTableLabel = (<><AiOutlineTable /> {i18n.navBar.scheduleShowTable}</>);
  const scheduleShowTableFilterLabel = (<><AiOutlineTable /> {i18n.navBar.scheduleShowTableFilter}</>);
  // const scheduleShowCardLabel = (<><AiOutlineIdcard /> {i18n.navBar.scheduleShowCard}</>)
  // BOOKINGS
  const bookingAdminLabel = (<><FaTicketAlt /> {i18n.navBar.bookingAdmin}</>);
  const bookingRegistrationLabel = (<><GrAddCircle /> {i18n.navBar.bookingRegistration}</>);
  const bookingShowTableLabel = (<><AiOutlineTable /> {i18n.navBar.bookingShowTable}</>);
  const bookingShowTableFilterLabel = (<><AiOutlineTable /> {i18n.navBar.bookingShowTableFilter}</>);
  // const bookingShowCardLabel = (<><AiOutlineIdcard /> {i18n.navBar.bookingShowCard}</>)

  // ******* ******* ******* RESERVATION SYSTEM ******* ******* *******
  // RESOURCES
  const resourcesAdminLabel = (<><GiGoldBar /> {i18n.navBar.resResourceAdmin}</>);
  const resResourceFormLabel = (<><GrAddCircle /> {i18n.navBar.resResourceForm}</>);
  const resResourceTableLabel = (<><AiOutlineTable /> {i18n.navBar.resResourceTable}</>);
  const resResourceScheduleByResocurceLabel = (<><GrAddCircle /> {i18n.navBar.resResourceScheduleByResocurce}</>);
  // SCHEDULES
  const resScheduleAdminLabel = (<><AiOutlineCalendar /> {i18n.navBar.resScheduleAdmin}</>);
  const resScheduleFormLabel = (<><GrAddCircle /> {i18n.navBar.resScheduleForm}</>);
  const resScheduleTableLabel = (<><AiOutlineTable /> {i18n.navBar.resScheduleTable}</>);
  const resResourceScheduleByScheduleLabel = (<><GrAddCircle /> {i18n.navBar.resResourceScheduleBySchedule}</>);
  // INTERVAL TIME
  const resIntervalTimeAdminLabel = (<><IoMdTimer /> {i18n.navBar.resIntervalTimeAdmin}</>);
  const resIntervalTimeFormLabel = (<><GrAddCircle /> {i18n.navBar.resIntervalTimeForm}</>);
  const resIntervalTimeTableLabel = (<><AiOutlineTable /> {i18n.navBar.resIntervalTimeTable}</>);
  // BOOKINGS
  const resBookingsAdminLabel = (<><AiOutlineSchedule /> {i18n.navBar.resBookingsAdmin}</>);
  const resBookingsFormLabel = (<><GrAddCircle /> {i18n.navBar.resBookingsForm}</>);
  const resBookingsTableLabel = (<><AiOutlineTable /> {i18n.navBar.resBookingsTable}</>);

  // ******* ******* ******* ALCALDIA SYSTEM ******* ******* *******
  // RECURSO MUNICIPAL
  const recursoMunicipalAdminLabel = (<><GiGoldBar /> {i18n.navBar.recursoMunicipalAdmin}</>);
  const recursoMunicipaFormLabel = (<><GrAddCircle /> {i18n.navBar.recursoMunicipalForm}</>);
  const recursoMunicipaTableLabel = (<><AiOutlineTable /> {i18n.navBar.recursoMunicipalTable}</>);
  const recursoMunicipalGrupoStepOneLabel = (<><TbHierarchy3 /> {i18n.navBar.recursoMunicipalGrupoStepOne}</>);
  // VENTA RECURSOS MUNICIPALES
  const recursoMunicipalVentaAdminLabel = (<><FaCashRegister /> {i18n.navBar.recursoMunicipaVentalAdmin}</>);
  const recursoMunicipaVentaFormLabel = (<><GrAddCircle /> {i18n.navBar.recursoMunicipalVentaForm}</>);
  const recursoMunicipaVentaTableLabel = (<><AiOutlineTable /> {i18n.navBar.recursoMunicipalVentaTable}</>);
  // RECURSO MUNICIPAL TIMBRES
  const recursoMunicipalTimbresAdminLabel = (<><IoIosNotifications /> {i18n.navBar.recursoMunicipalTimbresAdmin}</>);
  const recursoMunicipalTimbresFormLabel = (<><GrAddCircle /> {i18n.navBar.recursoMunicipalTimbresForm}</>);
  const recursoMunicipalTimbresTableLabel = (<><AiOutlineTable /> {i18n.navBar.recursoMunicipalTimbresTable}</>);
  const recursoMunicipalTimbresDescontinuadosFormLabel = (<><GrAddCircle /> {i18n.navBar.recursoMunicipalTimbresDescontinuadosForm}</>);
  const recursoMunicipalTimbresDescontinuadosTableLabel = (<><AiOutlineTable /> {i18n.navBar.recursoMunicipalTimbresDescontinuadosTable}</>);
  // VENTA RECURSOS MUNICIPALES TIMBRES
  const recursoMunicipalTimbresVentaAdminLabel = (<><FaCashRegister /> {i18n.navBar.recursoMunicipalTimbresVentalAdmin}</>);
  const recursoMunicipalTimbresVentaFormLabel = (<><GrAddCircle /> {i18n.navBar.recursoMunicipalTimbresVentaForm}</>);
  const recursoMunicipalTimbresVentaTableLabel = (<><AiOutlineTable /> {i18n.navBar.recursoMunicipalTimbresVentaTable}</>);
  // REPORTES RECURSOS MUNICIPALES
  const recursoMunicipalReporteAdminLabel = (<><BsFillBarChartFill /> {i18n.navBar.recursoMunicipalReporteAdmin}</>);
  const recursoMunicipalReporteDiarioLabel = (<><FaChartLine /> {i18n.navBar.recursoMunicipalReporteDiario}</>);
  const recursoMunicipalReporteMensualLabel = (<><FaChartLine /> {i18n.navBar.recursoMunicipalReporteMensual}</>);
  const recursoMunicipalReporteAnualLabel = (<><FaChartLine /> {i18n.navBar.recursoMunicipalReporteAnual}</>);
  // URBANISMO TRAMITE
  const urbanismoTramiteAdminLabel = (<><IoNewspaperSharp /> {i18n.navBar.urbanismoTramiteAdmin}</>);
  const urbanismoTramiteFormLabel = (<><GrAddCircle /> {i18n.navBar.urbanismoTramiteForm}</>);
  const urbanismoTramiteTableLabel = (<><AiOutlineTable /> {i18n.navBar.urbanismoTramiteTable}</>);
  // REGULARIZACION LOTES
  const regulaLotesAdminLabel = (<><IoNewspaperSharp /> {i18n.navBar.regulaLotesAdmin}</>);
  const regulaLotesFormLabel = (<><GrAddCircle /> {i18n.navBar.regulaLotesForm}</>);
  const regulaLotesFormClienteLabel = (<><GrAddCircle /> {i18n.navBar.regulaLotesFormCliente}</>);
  const regulaLotesClienteAdminLabel = (<><FaCashRegister /> {i18n.navBar.regulaLotesAdmin}</>);
  const regulaLotesTableLabel = (<><AiOutlineTable /> {i18n.navBar.regulaLotesTable}</>);
  // URBANISMO REQUISITOS
  const urbanismoRequisitosAdminLabel = (<><BsClipboardCheckFill /> {i18n.navBar.urbanismoRequisitosAdmin}</>);
  const urbanismoRequisitosFormLabel = (<><GrAddCircle /> {i18n.navBar.urbanismoRequisitosForm}</>);
  const urbanismoRequisitosTableLabel = (<><AiOutlineTable /> {i18n.navBar.urbanismoRequisitosTable}</>);
  // URBANISMO ESTADOS
  const urbanismoEstadosAdminLabel = (<><BsUiChecksGrid /> {i18n.navBar.urbanismoEstadosAdmin}</>);
  const urbanismoEstadosFormLabel = (<><GrAddCircle /> {i18n.navBar.urbanismoEstadosForm}</>);
  const urbanismoEstadosTableLabel = (<><AiOutlineTable /> {i18n.navBar.urbanismoEstadosTable}</>);
  // URBANISMO TRAMITE REQUISITOS
  const urbanismoTramiteRequisitosStepOneLabel = (<><GrAddCircle /> {i18n.navBar.urbanismoTramiteRequisitosStepOne}</>);
  // URBANISMO TRAMITE FLUJO
  const urbanismoTramiteEstadosAdminLabel = (<><GrStackOverflow /> {i18n.navBar.urbanismoTramiteEstadosAdmin}</>);
  const urbanismoTramiteEstadosStepOneLabel = (<><GrAddCircle /> {i18n.navBar.urbanismoTramiteEstadosStepOne}</>);
  const urbanismoTramiteEstadosTableLabel = (<><AiOutlineTable /> {i18n.navBar.urbanismoTramiteEstadosTable}</>);
  const urbanismoFlujoRequisitosStepOneLabel = (<><AiOutlineTable /> {i18n.navBar.urbanismoFlujoRequisitosStepOne}</>);
  // eslint-disable-next-line no-unused-vars
  const urbanismoFlujoHistorialStepOneLabel = (<><GrAddCircle /> {i18n.navBar.urbanismoFlujoHistorialStepOne}</>);
  // eslint-disable-next-line no-unused-vars
  const urbanismoHistorialEstadoStepOneLabel = (<><GrAddCircle /> {i18n.navBar.urbanismoHistorialEstadoStepOne}</>);

  // ******* ******* ******* ALL SYSTEMS ******* ******* *******
  // CONFIG
  const configAdminLabel = (<><CgOptions /> {i18n.navBar.configAdmin}</>);
  const configLogout = (<><RiLoginCircleLine /> {i18n.navBar.configLogout}</>);

  let logoPath = "/logo192.png";
  if (tenantImage !== "null") {
    logoPath = `data:image/jpeg;base64, ${tenantImage}`;
  }

  return (
    <Navbar collapseOnSelect expand="xl" bg={NavbarBackground} variant={NavbarVariant}>
      <Navbar.Brand>
        <img
          src={logoPath}
          className={tenantImage !== "null" ? "app-logo-tenant" : "app-logo"}
          alt="logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="container-fluid">
          {/* ******* ******* ******* USERS SYSTEM ******* ******* ********/}
          {userRoles.includes(enumRoles.ADMIN) &&
            <NavDropdown title={tenantAdminLabel}>
              <NavDropdown.Item onClick={navigateTenantsForm} >{tenantRegistrationLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateTenantsTableFilterEditDelete} >{tenantShowTableFilterEditDeleteLabel}</NavDropdown.Item>
            </NavDropdown>}
          {userRoles.includes(enumRoles.ADMIN) &&
            <NavDropdown title={userAdminLabel}>
              <NavDropdown.Item onClick={navigateUsersForm} >{userRegistrationLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateUsersTableFilterEditDelete}>{userShowTableFilterEditDeleteLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateUserTableSelectionForDetails}>{userShowTableFilterDetailsLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateUsersTableFilter}>{userShowTableFilterFullDataLabel}</NavDropdown.Item>
            </NavDropdown>}
          {userRoles.includes(enumRoles.ADMIN) &&
            <NavDropdown title={rolesAdminLabel}>
              <NavDropdown.Item onClick={navigateRolesTable}>{roleShowTableLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateRolesTableFilter}>{roleShowTableFilterLabel}</NavDropdown.Item>
            </NavDropdown>}
          {userRoles.includes(enumRoles.ADMIN) &&
            <NavDropdown title={tenantUserAdminLabel}>
              <NavDropdown.Item onClick={navigateTenantTableSelection}>{tenantUserCrudByTenantLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateUserTableSelectionForTenants}>{tenantUserCrudByUserLabel}</NavDropdown.Item>
            </NavDropdown>}
          {userRoles.includes(enumRoles.ADMIN) &&
            <NavDropdown title={tenantRoleAdminLabel}>
              <NavDropdown.Item onClick={navigateTenantTableSelectionForRoles}>{tenantRoleCrudByTenantLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateRoleTableSelectionForTenants}>{tenantRoleCrudByRoleLabel}</NavDropdown.Item>
            </NavDropdown>}
          {userRoles.includes(enumRoles.ADMIN) &&
            <NavDropdown title={tenantsUsersRolesAdminLabel}>
              <NavDropdown.Item onClick={navigateToTenantUserRoleStepOne}>{tenantsUsersRolesByTenantAndUser}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateRolesTableSelection}>{roleUserCrudByRoleLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateUserTableSelectionForRoles}>{roleUserCrudByUserLabel}</NavDropdown.Item>
            </NavDropdown>}
          {userRoles.includes(enumRoles.ADMIN_USERS) &&
            <NavDropdown title={userAdminLabel}>
              <NavDropdown.Item onClick={navigateUsersForTenant} >{userRegistrationLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigatUsersOnlyTenantTableEditDelete}>{userShowTableFilterEditDeleteLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigatUsersOnlyTenantTableDetails}>{userShowTableFilterDetailsLabel}</NavDropdown.Item>
              {/* <NavDropdown.Item onClick={navigateUsersTable}>{userShowTableFullDataLabel}</NavDropdown.Item> */}
              {/* <NavDropdown.Item onClick={navigateGeneric}>{userShowCardLabel}</NavDropdown.Item> */}
            </NavDropdown>}
          {userRoles.includes(enumRoles.ADMIN_USERS) &&
            <NavDropdown title={roleUserAdminLabel}>
              <NavDropdown.Item onClick={navigateToUsersRolesStepOne}>{userRoleByUserLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateToRolesUsersStepOne}>{userRoleByRolLabel}</NavDropdown.Item>
            </NavDropdown>}

          {/* ******* ******* ******* SYSTEM PROPERTIES ******* ******* ********/}
          {userRoles.includes(enumRoles.ADMIN) &&
            <NavDropdown title={systemPropertiesAdminLabel}>
              <NavDropdown.Item onClick={navigateSystemPropertiesTable}>{systemPropertiesTableLabel}</NavDropdown.Item>
            </NavDropdown>}

          {/* ******* ******* ******* SALES SYSTEM ******* ******* ********/}
          {(userRoles.includes(enumRoles.SALES_ADMIN) ||
            userRoles.includes(enumRoles.SALES_ADMIN_RESTAURANT)) &&
            <NavDropdown title={sellerAdminLabel}>
              <NavDropdown.Item onClick={navigateSellerForm}>{sellerRegistrationLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateSellerTableFilter}>{sellerShowTableFilterLabel}</NavDropdown.Item>
              {/* <NavDropdown.Item onClick={navigateGeneric}>{sellerShowCardLabel}</NavDropdown.Item> */}
            </NavDropdown>}
          {(userRoles.includes(enumRoles.SALES_ADMIN) ||
            userRoles.includes(enumRoles.SALES_ADMIN_RESTAURANT) ||
            userRoles.includes(enumRoles.SALES_SELLER) ||
            userRoles.includes(enumRoles.SALES_SELLER_RESTAURANT)
          ) &&
            <NavDropdown title={clientAdminLabel}>
              <NavDropdown.Item onClick={navigateClientForm}>{clientRegistrationLabel}</NavDropdown.Item>
              {(userRoles.includes(enumRoles.SALES_ADMIN) ||
                userRoles.includes(enumRoles.SALES_ADMIN_RESTAURANT)) &&
                <NavDropdown.Item onClick={navigateClientTableFilter}>{clientShowTableFilterLabel}</NavDropdown.Item>}
              {/* <NavDropdown.Item onClick={navigateGeneric}>{clientShowCardLabel}</NavDropdown.Item> */}
            </NavDropdown>}
          {(userRoles.includes(enumRoles.SALES_ADMIN) ||
            userRoles.includes(enumRoles.SALES_ADMIN_RESTAURANT)) &&
            <NavDropdown title={productAdminLabel}>
              <NavDropdown.Item onClick={navigateProductsForm}>{productRegistrationLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateProductsTableFilter}>{productShowTableFilterLabel}</NavDropdown.Item>
              {/* <NavDropdown.Item onClick={navigateGeneric}>{productShowCardLabel}</NavDropdown.Item> */}
            </NavDropdown>}
          {(userRoles.includes(enumRoles.SALES_ADMIN_RESTAURANT) ||
            userRoles.includes(enumRoles.SALES_SELLER_RESTAURANT)) &&
            <NavDropdown title={orderAdminLabel}>
              <NavDropdown.Item onClick={navigateSalesRegistrationStepOneCashier}>{orderRegistrationLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateSalesTableFilterTodo}>{orderShowTableLabel}</NavDropdown.Item>
              {/* <NavDropdown.Item onClick={navigateGeneric}>{orderShowCardLabel}</NavDropdown.Item> */}
            </NavDropdown>}
          {(userRoles.includes(enumRoles.SALES_ADMIN_RESTAURANT) ||
            userRoles.includes(enumRoles.SALES_SELLER_RESTAURANT)) &&
            <NavDropdown title={dispatchAdminLabel}>
              <NavDropdown.Item onClick={navigateSalesTableFilterInProgress}>{dispatchShowTableLabel}</NavDropdown.Item>
              {/* <NavDropdown.Item onClick={navigateGeneric}>{dispatchShowCardLabel}</NavDropdown.Item> */}
            </NavDropdown>}
          {(userRoles.includes(enumRoles.SALES_ADMIN) ||
            userRoles.includes(enumRoles.SALES_ADMIN_RESTAURANT) ||
            userRoles.includes(enumRoles.SALES_SELLER)) &&
            <NavDropdown title={salesAdminLabel}>
              <NavDropdown.Item onClick={navigateSalesRegistrationStepOneSeller}>{salesRegistrationLabel}</NavDropdown.Item>
              {userRoles.includes(enumRoles.SALES_ADMIN) &&
                <NavDropdown.Item onClick={navigateSalesTableFilter}>{salesShowTableLabel}</NavDropdown.Item>}
              {/* <NavDropdown.Item onClick={navigateGeneric}>{salesShowCardLabel}</NavDropdown.Item> */}
            </NavDropdown>}
          {(userRoles.includes(enumRoles.SALES_ADMIN) ||
            userRoles.includes(enumRoles.SALES_ADMIN_RESTAURANT)) &&
            <NavDropdown title={reportAdminLabel}>
              <NavDropdown.Item onClick={navigateSalesReportQuantityMonth}>{reportQuantityMonth}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateSalesReportRevenueMonth}>{reportRevenueMonth}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateSalesReportProfitMonth}>{reportProfitMonth}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateSalesReportQuantityMonthByProduct}>{reportQuantityMonthPerProduct}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateSalesReportRevenueMonthByProduct}>{reportRevenueMonthPerProduct}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateSalesReportProfitMonthByProduct}>{reportProfitMonthPerProduct}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={navigateSalesReportQuantityAnnual}>{reportQuantityAnnual}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateSalesReportRevenueAnnual}>{reportRevenueAnnual}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateSalesReportProfitAnnual}>{reportProfitAnnual}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateSalesReportQuantityAnnualByProduct}>{reportQuantityPerProduct}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateSalesReportRevenueAnnualByProduct}>{reportRevenuePerProduct}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateSalesReportProfitAnnualByProduct}>{reportProfitPerProductAnnual}</NavDropdown.Item>
            </NavDropdown>}

          {/* ******* ******* ******* HOSPITAL SYSTEM ******* ******* ********/}
          {userRoles.includes(enumRoles.HOSPITAL_ADMIN) &&
            <NavDropdown title={doctorAdminLabel}>
              <NavDropdown.Item onClick={navigateDoctorUserForm}>{doctorRegistrationLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateDoctorUserTableToDetails}>{doctorShowTableFilterLabel}</NavDropdown.Item>
              {/* <NavDropdown.Item onClick={navigateGeneric}>{doctorShowCardLabel}</NavDropdown.Item> */}
            </NavDropdown>}
          {userRoles.includes(enumRoles.HOSPITAL_ADMIN) &&
            <NavDropdown title={patientAdminLabel}>
              <NavDropdown.Item onClick={navigatePatientUserForm}>{patientRegistrationLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigatePatientUserTableToDetails}>{patientShowTableFilterLabel}</NavDropdown.Item>
              {/* <NavDropdown.Item onClick={navigateGeneric}>{patientShowCardLabel}</NavDropdown.Item> */}
            </NavDropdown>}
          {userRoles.includes(enumRoles.HOSPITAL_ADMIN) &&
            <NavDropdown title={scheduleAdminLabel}>
              <NavDropdown.Item onClick={navigateGeneric}>{scheduleRegistrationLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateGeneric}>{scheduleShowTableLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateGeneric}>{scheduleShowTableFilterLabel}</NavDropdown.Item>
              {/* <NavDropdown.Item onClick={navigateGeneric}>{scheduleShowCardLabel}</NavDropdown.Item> */}
            </NavDropdown>}
          {userRoles.includes(enumRoles.HOSPITAL_ADMIN) &&
            <NavDropdown title={bookingAdminLabel}>
              <NavDropdown.Item onClick={navigateGeneric}>{bookingRegistrationLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateGeneric}>{bookingShowTableLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateGeneric}>{bookingShowTableFilterLabel}</NavDropdown.Item>
              {/* <NavDropdown.Item onClick={navigateGeneric}>{bookingShowCardLabel}</NavDropdown.Item> */}
            </NavDropdown>}

          {/* ******* ******* ******* RESERVATION SYSTEM ******* ******* ********/}
          {userRoles.includes(enumRoles.RESERVATION_ADMIN) &&
            <NavDropdown title={resourcesAdminLabel}>
              <NavDropdown.Item onClick={navigateResourcesForm}>{resResourceFormLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateResourcesTable}>{resResourceTableLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateGeneric}>{resResourceScheduleByResocurceLabel}</NavDropdown.Item>
            </NavDropdown>}
          {userRoles.includes(enumRoles.RESERVATION_ADMIN) &&
            <NavDropdown title={resScheduleAdminLabel}>
              <NavDropdown.Item onClick={navigateScheduleForm}>{resScheduleFormLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateScheduleTable}>{resScheduleTableLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateGeneric}>{resResourceScheduleByScheduleLabel}</NavDropdown.Item>
            </NavDropdown>}
          {userRoles.includes(enumRoles.RESERVATION_ADMIN) &&
            <NavDropdown title={resIntervalTimeAdminLabel}>
              <NavDropdown.Item onClick={navigateIntervalTimeForm}>{resIntervalTimeFormLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateIntervalTimeTable}>{resIntervalTimeTableLabel}</NavDropdown.Item>
            </NavDropdown>}
          {userRoles.includes(enumRoles.RESERVATION_ADMIN) &&
            <NavDropdown title={resBookingsAdminLabel}>
              <NavDropdown.Item onClick={navigateGeneric}>{resBookingsFormLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateGeneric}>{resBookingsTableLabel}</NavDropdown.Item>
            </NavDropdown>}

          {/* ******* ******* ******* ALCALDIA SYSTEM ******* ******* ********/}
          {userRoles.includes(enumRoles.ALCALDIA_RECURSOS_MUNICIPALES_ENCARGADO) &&
            <NavDropdown title={recursoMunicipalAdminLabel}>
              <NavDropdown.Item onClick={navigateAlcaldiaRecursosMunicipalesForm}>{recursoMunicipaFormLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateAlcaldiaRecursosMunicipalesTable}>{recursoMunicipaTableLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateAlcaldiaRecursosMunicipalesGrupoStepOne}>{recursoMunicipalGrupoStepOneLabel}</NavDropdown.Item>
            </NavDropdown>}
          {(userRoles.includes(enumRoles.ALCALDIA_RECURSOS_MUNICIPALES_ENCARGADO) ||
            userRoles.includes(enumRoles.ALCALDIA_RECURSOS_MUNICIPALES_CAJERO)
          ) &&
            <NavDropdown title={recursoMunicipalVentaAdminLabel}>
              <NavDropdown.Item onClick={navigateAlcaldiaRecursosMunicipalesVentasForm}>{recursoMunicipaVentaFormLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateAlcaldiaRecursosMunicipalesVentasTable}>{recursoMunicipaVentaTableLabel}</NavDropdown.Item>
            </NavDropdown>}
          {(userRoles.includes(enumRoles.ALCALDIA_RECURSOS_MUNICIPALES_ENCARGADO)) &&
            <NavDropdown title={recursoMunicipalTimbresAdminLabel}>
              <NavDropdown.Item onClick={navigateAlcaldiaRecursosMunicipalesTimbresForm}>{recursoMunicipalTimbresFormLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateAlcaldiaRecursosMunicipalesTimbresTable}>{recursoMunicipalTimbresTableLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateAlcaldiaRecursosMunicipalesTimbresDescontinuadosForm}>{recursoMunicipalTimbresDescontinuadosFormLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateAlcaldiaRecursosMunicipalesTimbresDescontinuadosTable}>{recursoMunicipalTimbresDescontinuadosTableLabel}</NavDropdown.Item>
            </NavDropdown>}
          {(userRoles.includes(enumRoles.ALCALDIA_RECURSOS_MUNICIPALES_ENCARGADO) ||
            userRoles.includes(enumRoles.ALCALDIA_RECURSOS_MUNICIPALES_CAJERO)
          ) &&
            <NavDropdown title={recursoMunicipalTimbresVentaAdminLabel}>
              <NavDropdown.Item onClick={navigateAlcaldiaRecursosMunicipaleTimbressVentasForm}>{recursoMunicipalTimbresVentaFormLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateAlcaldiaRecursosMunicipalesTimbresVentasTable}>{recursoMunicipalTimbresVentaTableLabel}</NavDropdown.Item>
            </NavDropdown>}
          {userRoles.includes(enumRoles.ALCALDIA_RECURSOS_MUNICIPALES_ENCARGADO) &&
            <NavDropdown title={recursoMunicipalReporteAdminLabel}>
              <NavDropdown.Item onClick={navigateAlcaldiaRecursosMunicipalesReporteDiario}>{recursoMunicipalReporteDiarioLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateAlcaldiaRecursosMunicipalesReporteMensual}>{recursoMunicipalReporteMensualLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateAlcaldiaRecursosMunicipalesReporteAnual}>{recursoMunicipalReporteAnualLabel}</NavDropdown.Item>
            </NavDropdown>}
          {userRoles.includes(enumRoles.URBANISMO_ENCARGADO) &&
            <NavDropdown title={urbanismoTramiteAdminLabel}>
              <NavDropdown.Item onClick={navigateUrbanismoTramiteForm}>{urbanismoTramiteFormLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateUrbanismoTramiteTable}>{urbanismoTramiteTableLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateUrbanismoTramiteRequisitosStepOne}>{urbanismoTramiteRequisitosStepOneLabel}</NavDropdown.Item>
            </NavDropdown>}
          {userRoles.includes(enumRoles.URBANISMO_ENCARGADO) &&
            <NavDropdown title={urbanismoRequisitosAdminLabel}>
              <NavDropdown.Item onClick={navigateUrbanismoRequisitosForm}>{urbanismoRequisitosFormLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateUrbanismoRequisitosTable}>{urbanismoRequisitosTableLabel}</NavDropdown.Item>
            </NavDropdown>}
          {userRoles.includes(enumRoles.URBANISMO_ENCARGADO) &&
            <NavDropdown title={urbanismoEstadosAdminLabel}>
              <NavDropdown.Item onClick={navigateUrbanismoEstadosForm}>{urbanismoEstadosFormLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateUrbanismoEstadosTable}>{urbanismoEstadosTableLabel}</NavDropdown.Item>
            </NavDropdown>}
          {userRoles.includes(enumRoles.URBANISMO_ENCARGADO) &&
            <NavDropdown title={urbanismoTramiteEstadosAdminLabel}>
              <NavDropdown.Item onClick={navigateUrbanismoTramiteEstadosStepOne}>{urbanismoTramiteEstadosStepOneLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateUrbanismoTramiteEstadosTable}>{urbanismoTramiteEstadosTableLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateUrbanismoFlujoRequisitosStepOne}>{urbanismoFlujoRequisitosStepOneLabel}</NavDropdown.Item>
              {/* @deprecate <NavDropdown.Item onClick={navigateUrbanismoHistorialEstadoStepOne}>{urbanismoHistorialEstadoStepOneLabel}</NavDropdown.Item> */}
              {/* @deprecate <NavDropdown.Item onClick={navigateUrbanismoFlujoHistorialStepOne}>{urbanismoFlujoHistorialStepOneLabel}</NavDropdown.Item> */}
            </NavDropdown>}
          {userRoles.includes(enumRoles.REGULARIZACION_LOTES_ENCARGADO) &&
            <NavDropdown title={regulaLotesAdminLabel}>
              <NavDropdown.Item onClick={navigateRegulaLotesForm}>{regulaLotesFormLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateRegulaLotesTable}>{regulaLotesTableLabel}</NavDropdown.Item>
            </NavDropdown>}
          {userRoles.includes(enumRoles.REGULARIZACION_LOTES_ENCARGADO) &&
            <NavDropdown title={regulaLotesClienteAdminLabel}>
              <NavDropdown.Item onClick={navigateRegulaLotesFormCliente}>{regulaLotesFormClienteLabel}</NavDropdown.Item>
            </NavDropdown>}
        </Nav>
        {/* ******* ******* ******* ALL SYSTEM ******* ******* ********/}
        <Nav variant={"puggysoft-nav-config"}>
          <NavDropdown align="end" title={configAdminLabel}>
            <NavDropdown.Item onClick={navigateToLogout}>{configLogout}</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
