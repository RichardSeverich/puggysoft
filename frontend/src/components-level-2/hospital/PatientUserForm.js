import { useHistory } from "react-router";
import UserForm from "./../users/UserForm";
import i18n from "../../i18n/i18n";

function PatientUserForm() {

  return (
    <div className="puggysoft-doctor-user-form" >
      <UserForm title={i18n.patientUserForm.title}></UserForm>
    </div>
  )
}

export default PatientUserForm;
