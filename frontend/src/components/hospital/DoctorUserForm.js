import { useHistory } from "react-router";
import UserForm from "./../users/UserForm";
import i18n from "../../i18n/i18n";

function DoctorUserForm() {

  return (
    <div className="puggysoft-doctor-user-form" >
      <UserForm title={i18n.doctorUserForm.title}></UserForm>
    </div>
  )
}

export default DoctorUserForm;
