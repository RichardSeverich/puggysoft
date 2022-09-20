// Common
import login from "./spanish/login"
import navBar from "./spanish/navBar"
import commonTable from "./spanish/commonTable"
import errorMessages from "./spanish/errorMessages"
import trueFalse from "./spanish/trueFalse"
// Users System
import userTable from "./spanish/users/userTable"
import userForm from "./spanish/users/userForm"
import userDetails from "./spanish/users/userDetails"
import userSexText from "./spanish/users/userSexText"
import userStatus from "./spanish/users/userStatus"
import userRoles from "./spanish/users/userRoles"
import userRoleTableByRole from "./spanish/users/userRoleTableByRole"
import userRoleTableByUser from "./spanish/users/userRoleTableByUser"
import roleTable from "./spanish/users/roleTable"
// Sales System
import productTable from "./spanish/sales/productTable"
import productForm from "./spanish/sales/productForm"
// Hospital System
import doctorUserForm from "./spanish/hospital/doctorUserForm"
import doctorTable from "./spanish/hospital/doctorTable"
import patientUserForm from "./spanish/hospital/patientUserForm"
import patientTable from "./spanish/hospital/patientTable"


const i18n = {
  // Common
  login,
  navBar,
  commonTable,
  errorMessages,
  // Users System
  userForm,
  userTable,
  userDetails,
  userSexText,
  userRoles,
  userRoleTableByRole,
  userRoleTableByUser,
  roleTable,
  // Sales System
  productTable,
  productForm,
  trueFalse,
  userStatus,
  // Hospital System
  doctorUserForm,
  doctorTable,
  patientUserForm,
  patientTable
}

export default i18n;
