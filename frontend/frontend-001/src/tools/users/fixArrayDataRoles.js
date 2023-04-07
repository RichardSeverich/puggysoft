import enumRoles from "./../../models/users/enumRoles";
import i18n from "../../i18n/i18n";

function fixArrayDataRoles (arrayData) {
  return arrayData.map((rowObject) => {
    const valuneRoleName = rowObject.name;
    switch (valuneRoleName) {
    case enumRoles.ADMIN:
      rowObject.name = i18n.userRoles.admin;
      break;
    case enumRoles.ADMIN_USERS:
      rowObject.name = i18n.userRoles.adminUser;
      break;
    case enumRoles.HOSPITAL_ADMIN:
      rowObject.name = i18n.userRoles.hospitalAdmin;
      break;
    case enumRoles.HOSPITAL_DOCTOR:
      rowObject.name = i18n.userRoles.hospitalDoctor;
      break;
    case enumRoles.HOSPITAL_PATIENT:
      rowObject.name = i18n.userRoles.hospitalPatient;
      break;
    case enumRoles.HOSPITAL_TICKETS_ADMIN:
      rowObject.name = i18n.userRoles.hospitalTicketAdmin;
      break;
    case enumRoles.SALES_ADMIN:
      rowObject.name = i18n.userRoles.salesAdmin;
      break;
    case enumRoles.SALES_CLIENT:
      rowObject.name = i18n.userRoles.salesClient;
      break;
    case enumRoles.SALES_SELLER:
      rowObject.name = i18n.userRoles.salerSeller;
      break;
    default:
      rowObject.name = valuneRoleName;
    }
    return rowObject;
  });
}

export default fixArrayDataRoles;
