import { useHistory } from "react-router";
import DoctorUserGenericTable from "./DoctorUserGenericTable"
import i18n from "../../i18n/i18n";

function DoctorUserDetailsTable() {

  const history = useHistory();

  // TODO:
  // Este tiene que mandar a DoctorDetails:
  // Y doctorDetails tiene que mandar un Children a user Details Generico.
  function handleSelection(userData) {
    history.push({
      pathname: "/hospital-doctor-details",
      state: {
        data: userData,
      }
    })
  }

  let tableArrayCustomRowButtons = [
    {
      variant: "info",
      handleCustom: handleSelection,
      text: i18n.doctorTable.selectButton
    }
  ]

  return (
    <DoctorUserGenericTable
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
    >
    </DoctorUserGenericTable>
  )
}

export default DoctorUserDetailsTable;