// ALL SYSTEMS
const LOGIN = "/login"
const DASHBOARD = "/dashboard"

// USERS SYSTEM
const USERS_FORM = "/users-form"
const USERS_TABLE = "/users-table"
const USERS_TABLE_FILTER = "/users-table-filter"
const USERS_TABLE_FILTER_BY_ROLE = "/users-table-filter-by-role"
const USERS_TABLE_FILTER_SELECTION = "/users-table-filter-selection"
const USERS_TABLE_FILTER_EDIT_DELETE = "/users-table-filter-edit-delete"
const USERS_DETAILS = "/user-details"
const ROLES_TABLE = "/roles-table"
const ROLES_TABLE_FILTER = "/roles-table-filter"
const ROLES_TABLE_FILTER_BY_USER = "/roles-table-filter-by-user"
const ROLES_TABLE_SELECTION = "/roles-table-selection"
// SALES SYSTEM
const SALES_PRODUCTS_FORM = "/sales-products-form"
const SALES_PRODUCTS_TABLE_FILTER = "/sales-products-table-filter-edit-delete"
const SALES_CLIENT_FORM = "/sales-client-user-form"
const SALES_CLIENT_TABLE_FILTER_TO_DETAILS = "/sales-client-user-table-filter-to-details"
const SALES_SELLER_FORM = "/sales-seller-user-form"
const SALES_SELLER_TABLE_FILTER_TO_DETAILS = "/sales-seller-user-table-filter-to-details"
const SALES_SALES_TABLE_FILTER_TO_EDIT_DELETE_DETAILS = "/sales-table-filter-edit-delete-details"
const SALES_REGISTRATION_STEP_ONE = "/sales-registration-step-one"
const SALES_REGISTRATION_STEP_TWO = "/sales-registration-step-two"
const SALES_REPORT_QUANTITY = "/sales-report-quantity"
const SALES_REPORT_QUANTITY_COMP = "/sales-report-quantity-comparative"
const SALES_REPORT_REVENUE = "/sales-report-revenue"
const SALES_REPORT_REVENUE_COMP = "/sales-report-revenue-comparative"
const SALES_REPORT_PROFIT = "/sales-report-profit"
const SALES_REPORT_PROFIT_COMP = "/sales-report-profit-comparative"

// HOSPITAL SYSTEM
const HOSPITAL_DOCTOR_USER_FORM = "/hospital-doctor-user-form"
const HOSPITAL_DOCTOR_USER_TABLE = "/hospital-doctor-user-table"
const HOSPITAL_PATIENT_USER_FORM = "/hospital-patient-user-form"
const HOSPITAL_DOCTOR_USER_TABLE_TO_DETAILS = "/hospital-doctor-user-table-to-details"
const HOSPITAL_PATIENT_USER_TABLE_TO_DETAILS = "/hospital-patient-user-table-to-details"


const enumPaths = {
  DASHBOARD,
  LOGIN,
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
  SALES_REGISTRATION_STEP_ONE,
  SALES_REGISTRATION_STEP_TWO,
  SALES_REPORT_QUANTITY,
  SALES_REPORT_QUANTITY_COMP,
  SALES_REPORT_REVENUE,
  SALES_REPORT_REVENUE_COMP,
  SALES_REPORT_PROFIT,
  SALES_REPORT_PROFIT_COMP,
  // HOSPITAL SYSTEM
  HOSPITAL_DOCTOR_USER_FORM,
  HOSPITAL_DOCTOR_USER_TABLE,
  HOSPITAL_PATIENT_USER_FORM,
  HOSPITAL_DOCTOR_USER_TABLE_TO_DETAILS,
  HOSPITAL_PATIENT_USER_TABLE_TO_DETAILS
}

export default enumPaths;