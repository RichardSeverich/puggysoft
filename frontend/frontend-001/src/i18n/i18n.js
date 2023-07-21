// Common
import login from "./spanish/login";
import navBar from "./spanish/navBar";
import commonTable from "./spanish/commonTable";
import errorMessages from "./spanish/errorMessages";
import trueFalse from "./spanish/trueFalse";
import commonReport from "./spanish/commonReport";
import commonMonths from "./spanish/commonMonths";
import systemPropertiesTable from "./spanish/system/systemPropertiesTable";
import systemPropertiesForm from "./spanish/system/systemPropertiesForm";
import tenantForm from "./spanish/system/tenantForm";
import tenantTable from "./spanish/system/tenantTable";
import tenantUserTableByTenant from "./spanish/system/tenantUserTableByTenant";
import tenantRoleTableByTenant from "./spanish/system/tenantRoleTableByTenant";
import tenantRoleTableByRole from "./spanish/system/tenantRoleTableByRole";
import tenantUserTableByUser from "./spanish/system/tenantUserTableByUser";
import tenantStatusText from "./spanish/system/TenantStatusText";
import commonInProgress from "./spanish/commonInProgress";
import commonDaysOfWeek from "./spanish/commonDaysOfWeek";
import commonForm from "./spanish/commonForm";
// Users System
import userTable from "./spanish/users/userTable";
import userForm from "./spanish/users/userForm";
import userDetails from "./spanish/users/userDetails";
import userSexText from "./spanish/users/userSexText";
import userStatus from "./spanish/users/userStatus";
import userEmailVerified from "./spanish/users/userEmailVerified";
import userRoles from "./spanish/users/userRoles";
import userRoleTableByRole from "./spanish/users/userRoleTableByRole";
import userRoleTableByUser from "./spanish/users/userRoleTableByUser";
import roleTable from "./spanish/users/roleTable";
// Sales System
import productTable from "./spanish/sales/productTable";
import productForm from "./spanish/sales/productForm";
import clientForm from "./spanish/sales/clientForm";
import clientTable from "./spanish/sales/clientTable";
import sellerForm from "./spanish/sales/sellerForm";
import sellerTable from "./spanish/sales/sellerTable";
import saleStatus from "./spanish/sales/saleStatus";
import saleTable from "./spanish/sales/saleTable";
import saleProductTable from "./spanish/sales/saleProductTable";
import saleErrorMessages from "./spanish/sales/saleErrorMessages";
import saleReport from "./spanish/sales/saleReport";
import saleTicket from "./spanish/sales/saleTicket";
// Hospital System
import doctorUserForm from "./spanish/hospital/doctorUserForm";
import doctorTable from "./spanish/hospital/doctorTable";
import patientUserForm from "./spanish/hospital/patientUserForm";
import patientTable from "./spanish/hospital/patientTable";
// Reservation System
import reservationCalendar from "./spanish/reservation/reservationCalendar";
import resourceForm from "./spanish/reservation/resourceForm";
import scheduleForm from "./spanish/reservation/scheduleForm";
import scheduleTable from "./spanish/reservation/scheduleTable";
import intervalTimeForm from "./spanish/reservation/intervalTimeForm";
import resourceTable from "./spanish/reservation/resourceTable";
import intervalTimeTable from "./spanish/reservation/intervalTimeTable";
// Alcaldia System
import alcaldiaVentaStatusText from "./spanish/alcaldia/alcaldiaVentaStatusText";
import alcaldiaRecursosMunicipalesForm from "./spanish/alcaldia/alcaldiaRecursosMunicipalesForm";
import alcaldiaRecursosMunicipalesReporteDiario from "./spanish/alcaldia/alcaldiaRecursosMunicipalesReporteDiario";
import alcaldiaRecursosMunicipalesReporteMensual from "./spanish/alcaldia/alcaldiaRecursosMunicipalesReporteMensual";
import alcaldiaRecursosMunicipalesReporteAnual from "./spanish/alcaldia/alcaldiaRecursosMunicipalesReporteAnual";
import alcaldiaRecursosMunicipalesReportePdf from "./spanish/alcaldia/alcaldiaRecursosMunicipalesReportesPdf";
import alcaldiaRecursosMunicipalesTable from "./spanish/alcaldia/alcaldiaRecursosMunicipalesTable";
import alcaldiaRecursosMunicipalesVentasForm from "./spanish/alcaldia/alcaldiaRecursosMunicipalesVentasForm";
import alcaldiaRecursosMunicipalesVentasTable from "./spanish/alcaldia/alcaldiaRecursosMunicipalesVentasTable";
import alcaldiaRecursosMunicipalesTableAdd from "./spanish/alcaldia/alcaldiaRecursosMunicipalesTableAdd";
import alcaldiaRecursosMunicipalesTableDelete from "./spanish/alcaldia/alcaldiaRecursosMunicipalesTableDelete";
import alcaldiaRecursosMunicipalesNumToText from "./spanish/alcaldia/alcaldiaRecursosMunicipalesNumToText";
import urbanismoTramiteForm from "./spanish/alcaldia/urbanismoTramiteForm";
import urbanismoTramiteTable from "./spanish/alcaldia/urbanismoTramiteTable";
import regulaLotesForm from "./spanish/alcaldia/regulaLotesForm";
import regulaLotesTable from "./spanish/alcaldia/regulaLotesTable";
import urbanismoRequisitosForm from "./spanish/alcaldia/urbanismoRequisitosForm";
import urbanismoRequisitosTable from "./spanish/alcaldia/urbanismoRequisitosTable";
import urbanismoEstadosForm from "./spanish/alcaldia/urbanismoEstadosForm";
import urbanismoEstadosTable from "./spanish/alcaldia/urbanismoEstadosTable";
import urbanismoTramiteEstadosForm from "./spanish/alcaldia/urbanismoTramiteEstadosForm";
import urbanismoFlujoRequisitosTable from "./spanish/alcaldia/urbanismoFlujoRequisitosTable";
import urbanismoTramiteRequisitosTable from "./spanish/alcaldia/urbanismoTramiteRequisitosTable";
import urbanismoTramiteEstadosTable from "./spanish/alcaldia/urbanismoTramiteEstadosTable";
import urbanismoHistorialTable from "./spanish/alcaldia/urbanismoHistorialTable";
import urbanismoHistorialEstadoForm from "./spanish/alcaldia/urbanismoHistorialEstadoForm";

const i18n = {
  // Common
  login,
  navBar,
  commonTable,
  errorMessages,
  trueFalse,
  commonReport,
  commonMonths,
  systemPropertiesTable,
  systemPropertiesForm,
  tenantForm,
  tenantTable,
  tenantUserTableByTenant,
  tenantRoleTableByTenant,
  tenantRoleTableByRole,
  tenantUserTableByUser,
  tenantStatusText,
  commonInProgress,
  commonDaysOfWeek,
  commonForm,
  // Users System
  userForm,
  userTable,
  userDetails,
  userSexText,
  userRoles,
  userRoleTableByRole,
  userRoleTableByUser,
  roleTable,
  userStatus,
  userEmailVerified,
  // Sales System
  productTable,
  productForm,
  clientForm,
  clientTable,
  sellerForm,
  sellerTable,
  saleStatus,
  saleTable,
  saleProductTable,
  saleErrorMessages,
  saleReport,
  saleTicket,
  // Hospital System
  doctorUserForm,
  doctorTable,
  patientUserForm,
  patientTable,
  // Reservation System
  reservationCalendar,
  resourceForm,
  scheduleForm,
  scheduleTable,
  intervalTimeForm,
  resourceTable,
  intervalTimeTable,
  // Alcaldia System
  alcaldiaRecursosMunicipalesForm,
  alcaldiaVentaStatusText,
  alcaldiaRecursosMunicipalesTable,
  alcaldiaRecursosMunicipalesTableAdd,
  alcaldiaRecursosMunicipalesTableDelete,
  alcaldiaRecursosMunicipalesVentasForm,
  alcaldiaRecursosMunicipalesVentasTable,
  alcaldiaRecursosMunicipalesReporteDiario,
  alcaldiaRecursosMunicipalesReporteMensual,
  alcaldiaRecursosMunicipalesReporteAnual,
  alcaldiaRecursosMunicipalesReportePdf,
  alcaldiaRecursosMunicipalesNumToText,
  urbanismoTramiteForm,
  urbanismoTramiteTable,
  regulaLotesForm,
  regulaLotesTable,
  urbanismoRequisitosForm,
  urbanismoRequisitosTable,
  urbanismoEstadosForm,
  urbanismoTramiteEstadosForm,
  urbanismoFlujoRequisitosTable,
  urbanismoTramiteRequisitosTable,
  urbanismoTramiteEstadosTable,
  urbanismoEstadosTable,
  urbanismoHistorialEstadoForm,
  urbanismoHistorialTable
};

export default i18n;
