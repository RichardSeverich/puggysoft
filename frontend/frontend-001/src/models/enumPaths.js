// ALL SYSTEMS
const LOGIN = "/login";
const DASHBOARD = "/dashboard";
const SYSTEM_PROPERTIES_TABLE = "/system-properties-table";
const SYSTEM_PROPERTIES_FORM = "/system-properties-form";
const TENANTS_FORM = "/tenants-form";
const IN_PROGRESS_PAGE = "/in-progress-page";
// USERS SYSTEM
const USERS_FORM = "/users-form";
const USERS_TABLE = "/users-table";
const USERS_TABLE_FILTER = "/users-table-filter";
const USERS_TABLE_FILTER_BY_ROLE = "/users-table-filter-by-role";
const USERS_TABLE_FILTER_SELECTION = "/users-table-filter-selection";
const USERS_TABLE_FILTER_EDIT_DELETE = "/users-table-filter-edit-delete";
const USERS_DETAILS = "/user-details";
const ROLES_TABLE = "/roles-table";
const ROLES_TABLE_FILTER = "/roles-table-filter";
const ROLES_TABLE_FILTER_BY_USER = "/roles-table-filter-by-user";
const ROLES_TABLE_SELECTION = "/roles-table-selection";
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

const enumPaths = {
  DASHBOARD,
  LOGIN,
  SYSTEM_PROPERTIES_TABLE,
  SYSTEM_PROPERTIES_FORM,
  TENANTS_FORM,
  IN_PROGRESS_PAGE,
  // USERS SYSTEM
  USERS_FORM,
  USERS_TABLE,
  USERS_TABLE_FILTER,
  USERS_TABLE_FILTER_BY_ROLE,
  USERS_TABLE_FILTER_SELECTION,
  USERS_TABLE_FILTER_EDIT_DELETE,
  USERS_DETAILS,
  ROLES_TABLE,
  ROLES_TABLE_FILTER,
  ROLES_TABLE_FILTER_BY_USER,
  ROLES_TABLE_SELECTION,
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
  RESERVATION_RESOURCES_SCHEDULES_BY_SCHEDULE
};

export default enumPaths;
