import { useHistory } from "react-router";
import UserTableFilterGenericByRole from "./../users/UserTableFilterGenericByRole";
import enumRoles from "./../../models/users/enumRoles"
import enumPaths from "./../../models/enumPaths"
import i18n from "../../i18n/i18n";

function DoctorUserTableSelectionToDetails() {

  const history = useHistory();
  const tableTitle = i18n.doctorTable.titleToDetails;
  const roleName = enumRoles.HOSPITAL_DOCTOR;

  function handleSelection(userData) {
    history.push({
      pathname: enumPaths.USERS_DETAILS,
      state: {
        data: userData
      }
    })
  }

  const tableArrayCustomRowButtons = [
    {
      variant: "info",
      handleCustom: handleSelection,
      text: i18n.roleTable.selectButton
    }
  ]

  return (
    <UserTableFilterGenericByRole
      roleName={roleName}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
      tableTitle={tableTitle}
    >
    </UserTableFilterGenericByRole>
  )
}

export default DoctorUserTableSelectionToDetails;