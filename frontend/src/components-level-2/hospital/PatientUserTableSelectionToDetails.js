import UserTableFilterGenericByRoleToDetails from "./../users/UserTableFilterGenericByRoleToDetails";
import enumRoles from "./../../models/users/enumRoles"
import i18n from "../../i18n/i18n";

function PatientUserTableSelectionToDetails() {

  const tableTitle = i18n.patientTable.titleSelectionToDetails;
  const roleName = enumRoles.HOSPITAL_PATIENT;

  return (
    <UserTableFilterGenericByRoleToDetails
      roleName={roleName}
      tableTitle={tableTitle}
    >
    </UserTableFilterGenericByRoleToDetails>
  )
}

export default PatientUserTableSelectionToDetails;