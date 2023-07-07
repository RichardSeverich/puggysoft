// ALL SYSTEMS
const LOGIN = "/login/:tenant";
const DASHBOARD = "/dashboard";
const SYSTEM_PROPERTIES_TABLE = "/system-properties-table";
const SYSTEM_PROPERTIES_FORM = "/system-properties-form";
const TENANTS_FORM = "/tenants-form";
const TENANTS_TABLE_FILTER_SELECTION = "/tenants-table-filter-selection";
const TENANTS_TABLE_SELECTION_FOR_ROLE = "/tenants-table-selection-for-role";
const TENANTS_TABLE_FILTER_BY_ROLE = "/tenants-table-filter-by-role";
const TENANTS_TABLE_FILTER_EDIT_DELETE = "/tenants-table-filter-edit-delete";
const TENANTS_TABLE_FILTER_BY_USER = "/tenants-table-filter-by-user";
const IN_PROGRESS_PAGE = "/in-progress-page";
// USERS SYSTEM
const USERS_FORM = "/users-form";
const USERS_FORM_TENANT = "/users-form-tenant";
const USERS_TABLE = "/users-table";
const USERS_TABLE_FILTER = "/users-table-filter";
const USERS_TABLE_FILTER_BY_ROLE = "/users-table-filter-by-role";
const USERS_TABLE_FILTER_BY_TENANT = "/users-table-filter-by-tenant";
const USERS_TABLE_FILTER_SELECTION = "/users-table-filter-selection";
const USERS_TABLE_FILTER_EDIT_DELETE = "/users-table-filter-edit-delete";
const USERS_DETAILS = "/user-details";
const ROLES_TABLE = "/roles-table";
const ROLES_TABLE_FILTER = "/roles-table-filter";
const ROLES_TABLE_FILTER_BY_USER = "/roles-table-filter-by-user";
const ROLES_TABLE_FILTER_BY_TENANT = "/roles-table-filter-by-tenant";
const ROLES_TABLE_SELECTION_FOR_TENANTS = "/roles-table-selection-for-tenants";
const ROLES_TABLE_SELECTION = "/roles-table-selection";
const USERS_TABLE_FILTER_ONY_TENANT_EDIT_DELETE = "/users-table-filter-only-tenant-edit-delete";
const USERS_TABLE_FILTER_ONY_TENANT_DETAILS = "/users-table-filter-only-tenant-details";
const USERS_ROLES_STEP_ONE = "/users-roles-step-one";
const USERS_ROLES_STEP_TWO = "/users-roles-step-two";
const ROLES_USERS_STEP_ONE = "/roles-users-step-one";
const ROLES_USERS_STEP_TWO = "/roles-users-step-two";
const TENANTS_USERS_ROLES_STEP_ONE = "/tenants-users-roles-step-one";
const TENANTS_USERS_ROLES_STEP_TWO = "/tenants-users-roles-step-two";
const TENANTS_USERS_ROLES_STEP_THREE = "/tenants-users-roles-step-three";
const TENANTS_ROLES_USERS_STEP_ONE = "/tenants-roles-users-step-one";
const TENANTS_ROLES_USERS_STEP_TWO = "/tenants-roles-users-step-two";
const TENANTS_ROLES_USERS_THREE = "/tenants-roles-users-step-three";
const USERS_TENANTS_ROLES_STEP_ONE = "/users-tenants-roles-step-one";
const USERS_TENANTS_ROLES_STEP_TWO = "/users-tenants-roles-step-two";
const USERS_TENANTS_ROLES_THREE = "/users-tenants-roles-step-three";
const USERS_ROLES_TENANTS_STEP_ONE = "/users-roles-tenants-step-one";
const USERS_ROLES_TENANTS_STEP_TWO = "/users-roles-tenants-step-two";
const USERS_ROLES_TENANTS_THREE = "/users-roles-tenants-step-three";
const ROLES_TENANTS_USERS_STEP_ONE = "/roles-tenants-users-step-one";
const ROLES_TENANTS_USERS_STEP_TWO = "/roles-tenants-users-step-two";
const ROLES_TENANTS_USERS_STEP_THREE = "/roles-tenants-users-step-three";
const ROLES_USERS_TENANTS_STEP_ONE = "/roles-users-tenants-step-one";
const ROLES_USERS_TENANTS_STEP_TWO = "/roles-users-tenants-step-two";
const ROLES_USERS_TENANTS_STEP_THREE = "/roles-users-tenants-step-three";

// SALES SYSTEM
const SALES_PRODUCTS_FORM = "/sales-products-form";
const SALES_PRODUCTS_TABLE_FILTER = "/sales-products-table-filter-edit-delete";
const SALES_CLIENT_FORM = "/sales-client-user-form";
const SALES_CLIENT_TABLE_FILTER_TO_DETAILS = "/sales-client-user-table-filter-to-details";
const SALES_SELLER_FORM = "/sales-seller-user-form";
const SALES_SELLER_TABLE_FILTER_TO_DETAILS = "/sales-seller-user-table-filter-to-details";
const SALES_SALES_TABLE_FILTER_TO_EDIT_DELETE_DETAILS = "/sales-table-filter-edit-delete-details";
const SALES_SALES_TABLE_FILTER_TO_EDIT_DELETE_DETAILS_TODO = "/sales-table-filter-edit-delete-details-todo";
const SALES_SALES_TABLE_FILTER_TO_EDIT_DELETE_DETAILS_IN_PROGRESS = "/sales-table-filter-edit-delete-details-in-progress";
const SALES_REGISTRATION_STEP_ONE_SELLER = "/sales-registration-step-one-seller";
const SALES_REGISTRATION_STEP_ONE_CASHIER = "/sales-registration-step-one-cashier";
const SALES_REGISTRATION_STEP_TWO = "/sales-registration-step-two";
const SALES_REPORT_QUANTITY = "/sales-report-quantity";
const SALES_REPORT_QUANTITY_COMP = "/sales-report-quantity-comparative";
const SALES_REPORT_QUANTITY_MONTH = "/sales-report-quantity-month";
const SALES_REPORT_QUANTITY_MONTH_COMP = "/sales-report-quantity-month-comparative";
const SALES_REPORT_REVENUE = "/sales-report-revenue";
const SALES_REPORT_REVENUE_COMP = "/sales-report-revenue-comparative";
const SALES_REPORT_REVENUE_MONTH = "/sales-report-revenue-month";
const SALES_REPORT_REVENUE_MONTH_COMP = "/sales-report-revenue-month-comparative";
const SALES_REPORT_PROFIT = "/sales-report-profit";
const SALES_REPORT_PROFIT_COMP = "/sales-report-profit-comparative";
const SALES_REPORT_PROFIT_MONTH = "/sales-report-profit-month";
const SALES_REPORT_PROFIT_MONTH_COMP = "/sales-report-profit-month-comparative";
const SALES_REPORT_QUANTITY_BY_PRODUCT = "/sales-report-quantity-by-product";
const SALES_REPORT_QUANTITY_COMP_BY_PRODUCT = "/sales-report-quantity-comparative-by-product";
const SALES_REPORT_QUANTITY_MONTH_BY_PRODUCT = "/sales-report-quantity-month-by-product";
const SALES_REPORT_QUANTITY_MONTH_COMP_BY_PRODUCT = "/sales-report-quantity-month-comparative-by-product";
const SALES_REPORT_REVENUE_BY_PRODUCT = "/sales-report-revenue-by-product";
const SALES_REPORT_REVENUE_COMP_BY_PRODUCT = "/sales-report-revenue-comparative-by-product";
const SALES_REPORT_REVENUE_MONTH_BY_PRODUCT = "/sales-report-revenue-month-by-product";
const SALES_REPORT_REVENUE_MONTH_COMP_BY_PRODUCT = "/sales-report-revenue-month-comparative-by-product";
const SALES_REPORT_PROFIT_BY_PRODUCT = "/sales-report-profit-by-product";
const SALES_REPORT_PROFIT_COMP_BY_PRODUCT = "/sales-report-profit-comparative-by-product";
const SALES_REPORT_PROFIT_MONTH_BY_PRODUCT = "/sales-report-profit-month-by-product";
const SALES_REPORT_PROFIT_MONTH_COMP_BY_PRODUCT = "/sales-report-profit-month-comparative-by-product";
const SALES_PRODUCTS_TABLE_TO_QUANTITY_BY_PRODUCT = "/sales-products-table-to-quantity-report";
const SALES_PRODUCTS_TABLE_TO_QUANTITY_BY_PRODUCT_COMP = "/sales-products-table-to-quantity-comp-report";
const SALES_PRODUCTS_TABLE_TO_QUANTITY_MONTH_BY_PRODUCT = "/sales-products-table-to-quantity-month-report";
const SALES_PRODUCTS_TABLE_TO_QUANTITY_MONTH_BY_PRODUCT_COMP = "/sales-products-table-to-quantity-month-comp-report";
const SALES_PRODUCTS_TABLE_TO_REVENUE_BY_PRODUCT = "/sales-products-table-to-revenue-report";
const SALES_PRODUCTS_TABLE_TO_REVENUE_BY_PRODUCT_COMP = "/sales-products-table-to-revenue-comp-report";
const SALES_PRODUCTS_TABLE_TO_REVENUE_MONTH_BY_PRODUCT = "/sales-products-table-to-revenue-month-report";
const SALES_PRODUCTS_TABLE_TO_REVENUE_MONTH_BY_PRODUCT_COMP = "/sales-products-table-to-revenue-month-comp-report";
const SALES_PRODUCTS_TABLE_TO_PROFIT_BY_PRODUCT = "/sales-products-table-to-profit-report";
const SALES_PRODUCTS_TABLE_TO_PROFIT_BY_PRODUCT_COMP = "/sales-products-table-to-profit-comp-report";
const SALES_PRODUCTS_TABLE_TO_PROFIT_MONTH_BY_PRODUCT = "/sales-products-table-to-profit-month-report";
const SALES_PRODUCTS_TABLE_TO_PROFIT_MONTH_BY_PRODUCT_COMP = "/sales-products-table-to-profit-month-comp-report";

// HOSPITAL SYSTEM
const HOSPITAL_DOCTOR_USER_FORM = "/hospital-doctor-user-form";
const HOSPITAL_DOCTOR_USER_TABLE = "/hospital-doctor-user-table";
const HOSPITAL_PATIENT_USER_FORM = "/hospital-patient-user-form";
const HOSPITAL_DOCTOR_USER_TABLE_TO_DETAILS = "/hospital-doctor-user-table-to-details";
const HOSPITAL_PATIENT_USER_TABLE_TO_DETAILS = "/hospital-patient-user-table-to-details";

// RESERVATION SYSTEM
const RESERVATION_RESOURCES_FORM = "/reservation-resource-form";
const RESERVATION_RESOURCES_TABLE = "/reservation-resource-table";
const RESERVATION_SCHEDULE_FORM = "/reservation-schedule-form";
const RESERVATION_SCHEDULE_TABLE = "/reservation-schedule-table";
const RESERVATION_INTERVAL_TIME_FORM = "/reservation-interval-time-form";
const RESERVATION_INTERVAL_TIME_TABLE = "/reservation-interval-time-table";
const RESERVATION_RESOURCES_TABLE_TO_ADD_SCHEDULES = "/reservation-resource-table-to-add-schedules";
const RESERVATION_SCHEDULES_TABLE_TO_ADD_RESOURCES = "/reservation-schedule-table-to-add-resources";
const RESERVATION_RESOURCES_SCHEDULES_BY_RESOURCE = "/reservation-resource-schedules-table-by-resource";
const RESERVATION_RESOURCES_SCHEDULES_BY_SCHEDULE = "/reservation-resource-schedules-table-by-schedule";

// ALCALDIA SYSTEM
const ALCALDIA_RECURSOS_MUNICIPALES_FORM = "/alcaldia-recursos-municipales-form";
const ALCALDIA_RECURSOS_MUNICIPALES_TABLE = "/alcaldia-recursos-municipales-table";
const ALCALDIA_RECURSOS_MUNICIPALES_VENTAS_FORM = "/alcaldia-recursos-municipales-ventas-form";
const ALCALDIA_RECURSOS_MUNICIPALES_VENTAS_TABLE = "/alcaldia-recursos-municipales--ventas-table";
const ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_DIARIO = "/alcaldia-recursos-municipales-reporte-diario";
const ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_ANUAL = "/alcaldia-recursos-municipales-reporte-anual";
const ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_MENSUAL = "/alcaldia-recursos-municipales-reporte-mensual";
const URBANISMO_TRAMITE_FORM = "/urbanismo-tramite-form";
const URBANISMO_TRAMITE_TABLE = "/urbanismo-tramite-table";
const URBANISMO_REQUISITOS_FORM = "/urbanismo-requisitos-form";
const URBANISMO_REQUISITOS_TABLE = "/urbanismo-requisitos-table";
const URBANISMO_ESTADOS_FORM = "/urbanismo-estados-form";
const URBANISMO_ESTADOS_TABLE = "/urbanismo-estados-table";
const URBANISMO_TRAMITE_REQUISITOS_STEP_ONE = "/urbanismo-tramites-requisitos-step-one";
const URBANISMO_TRAMITE_REQUISITOS_STEP_TWO = "/urbanismo-tramites-requisitos-step-two";

const enumPaths = {
  DASHBOARD,
  LOGIN,
  SYSTEM_PROPERTIES_TABLE,
  SYSTEM_PROPERTIES_FORM,
  TENANTS_FORM,
  TENANTS_TABLE_FILTER_SELECTION,
  TENANTS_TABLE_SELECTION_FOR_ROLE,
  TENANTS_TABLE_FILTER_BY_ROLE,
  TENANTS_TABLE_FILTER_EDIT_DELETE,
  TENANTS_TABLE_FILTER_BY_USER,
  IN_PROGRESS_PAGE,
  // USERS SYSTEM
  USERS_FORM,
  USERS_FORM_TENANT,
  USERS_TABLE,
  USERS_TABLE_FILTER,
  USERS_TABLE_FILTER_BY_ROLE,
  USERS_TABLE_FILTER_BY_TENANT,
  USERS_TABLE_FILTER_SELECTION,
  USERS_TABLE_FILTER_EDIT_DELETE,
  USERS_DETAILS,
  ROLES_TABLE,
  ROLES_TABLE_FILTER,
  ROLES_TABLE_FILTER_BY_USER,
  ROLES_TABLE_FILTER_BY_TENANT,
  ROLES_TABLE_SELECTION_FOR_TENANTS,
  ROLES_TABLE_SELECTION,
  USERS_TABLE_FILTER_ONY_TENANT_EDIT_DELETE,
  USERS_TABLE_FILTER_ONY_TENANT_DETAILS,
  USERS_ROLES_STEP_ONE,
  USERS_ROLES_STEP_TWO,
  ROLES_USERS_STEP_ONE,
  ROLES_USERS_STEP_TWO,
  TENANTS_USERS_ROLES_STEP_ONE,
  TENANTS_USERS_ROLES_STEP_TWO,
  TENANTS_USERS_ROLES_STEP_THREE,
  TENANTS_ROLES_USERS_STEP_ONE,
  TENANTS_ROLES_USERS_STEP_TWO,
  TENANTS_ROLES_USERS_THREE,
  USERS_TENANTS_ROLES_STEP_ONE,
  USERS_TENANTS_ROLES_STEP_TWO,
  USERS_TENANTS_ROLES_THREE,
  USERS_ROLES_TENANTS_STEP_ONE,
  USERS_ROLES_TENANTS_STEP_TWO,
  USERS_ROLES_TENANTS_THREE,
  ROLES_TENANTS_USERS_STEP_ONE,
  ROLES_TENANTS_USERS_STEP_TWO,
  ROLES_TENANTS_USERS_STEP_THREE,
  ROLES_USERS_TENANTS_STEP_ONE,
  ROLES_USERS_TENANTS_STEP_TWO,
  ROLES_USERS_TENANTS_STEP_THREE,
  // SALES SYSTEM
  SALES_PRODUCTS_FORM,
  SALES_PRODUCTS_TABLE_FILTER,
  SALES_CLIENT_FORM,
  SALES_CLIENT_TABLE_FILTER_TO_DETAILS,
  SALES_SELLER_FORM,
  SALES_SELLER_TABLE_FILTER_TO_DETAILS,
  SALES_SALES_TABLE_FILTER_TO_EDIT_DELETE_DETAILS,
  SALES_SALES_TABLE_FILTER_TO_EDIT_DELETE_DETAILS_TODO,
  SALES_SALES_TABLE_FILTER_TO_EDIT_DELETE_DETAILS_IN_PROGRESS,
  SALES_REGISTRATION_STEP_ONE_SELLER,
  SALES_REGISTRATION_STEP_ONE_CASHIER,
  SALES_REGISTRATION_STEP_TWO,
  SALES_REPORT_QUANTITY,
  SALES_REPORT_QUANTITY_COMP,
  SALES_REPORT_QUANTITY_MONTH,
  SALES_REPORT_QUANTITY_MONTH_COMP,
  SALES_REPORT_REVENUE,
  SALES_REPORT_REVENUE_COMP,
  SALES_REPORT_REVENUE_MONTH,
  SALES_REPORT_REVENUE_MONTH_COMP,
  SALES_REPORT_PROFIT,
  SALES_REPORT_PROFIT_COMP,
  SALES_REPORT_PROFIT_MONTH,
  SALES_REPORT_PROFIT_MONTH_COMP,
  SALES_REPORT_QUANTITY_BY_PRODUCT,
  SALES_REPORT_QUANTITY_COMP_BY_PRODUCT,
  SALES_REPORT_QUANTITY_MONTH_BY_PRODUCT,
  SALES_REPORT_QUANTITY_MONTH_COMP_BY_PRODUCT,
  SALES_REPORT_REVENUE_BY_PRODUCT,
  SALES_REPORT_REVENUE_COMP_BY_PRODUCT,
  SALES_REPORT_REVENUE_MONTH_BY_PRODUCT,
  SALES_REPORT_REVENUE_MONTH_COMP_BY_PRODUCT,
  SALES_REPORT_PROFIT_BY_PRODUCT,
  SALES_REPORT_PROFIT_COMP_BY_PRODUCT,
  SALES_REPORT_PROFIT_MONTH_BY_PRODUCT,
  SALES_REPORT_PROFIT_MONTH_COMP_BY_PRODUCT,
  SALES_PRODUCTS_TABLE_TO_QUANTITY_BY_PRODUCT,
  SALES_PRODUCTS_TABLE_TO_QUANTITY_BY_PRODUCT_COMP,
  SALES_PRODUCTS_TABLE_TO_QUANTITY_MONTH_BY_PRODUCT,
  SALES_PRODUCTS_TABLE_TO_QUANTITY_MONTH_BY_PRODUCT_COMP,
  SALES_PRODUCTS_TABLE_TO_REVENUE_BY_PRODUCT,
  SALES_PRODUCTS_TABLE_TO_REVENUE_BY_PRODUCT_COMP,
  SALES_PRODUCTS_TABLE_TO_REVENUE_MONTH_BY_PRODUCT,
  SALES_PRODUCTS_TABLE_TO_REVENUE_MONTH_BY_PRODUCT_COMP,
  SALES_PRODUCTS_TABLE_TO_PROFIT_BY_PRODUCT,
  SALES_PRODUCTS_TABLE_TO_PROFIT_BY_PRODUCT_COMP,
  SALES_PRODUCTS_TABLE_TO_PROFIT_MONTH_BY_PRODUCT,
  SALES_PRODUCTS_TABLE_TO_PROFIT_MONTH_BY_PRODUCT_COMP,
  // HOSPITAL SYSTEM
  HOSPITAL_DOCTOR_USER_FORM,
  HOSPITAL_DOCTOR_USER_TABLE,
  HOSPITAL_PATIENT_USER_FORM,
  HOSPITAL_DOCTOR_USER_TABLE_TO_DETAILS,
  HOSPITAL_PATIENT_USER_TABLE_TO_DETAILS,
  // RESERVATION SYSTEM
  RESERVATION_RESOURCES_FORM,
  RESERVATION_RESOURCES_TABLE,
  RESERVATION_SCHEDULE_FORM,
  RESERVATION_SCHEDULE_TABLE,
  RESERVATION_INTERVAL_TIME_FORM,
  RESERVATION_INTERVAL_TIME_TABLE,
  RESERVATION_RESOURCES_TABLE_TO_ADD_SCHEDULES,
  RESERVATION_SCHEDULES_TABLE_TO_ADD_RESOURCES,
  RESERVATION_RESOURCES_SCHEDULES_BY_RESOURCE,
  RESERVATION_RESOURCES_SCHEDULES_BY_SCHEDULE,
  // ALCALDIA SYSTEM
  ALCALDIA_RECURSOS_MUNICIPALES_FORM,
  ALCALDIA_RECURSOS_MUNICIPALES_VENTAS_FORM,
  ALCALDIA_RECURSOS_MUNICIPALES_VENTAS_TABLE,
  ALCALDIA_RECURSOS_MUNICIPALES_TABLE,
  ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_DIARIO,
  ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_ANUAL,
  ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_MENSUAL,
  URBANISMO_TRAMITE_FORM,
  URBANISMO_TRAMITE_TABLE,
  URBANISMO_REQUISITOS_FORM,
  URBANISMO_REQUISITOS_TABLE,
  URBANISMO_ESTADOS_FORM,
  URBANISMO_ESTADOS_TABLE,
  URBANISMO_TRAMITE_REQUISITOS_STEP_ONE,
  URBANISMO_TRAMITE_REQUISITOS_STEP_TWO
};

export default enumPaths;
