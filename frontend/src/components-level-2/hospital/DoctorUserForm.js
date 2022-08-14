import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import CommonLoading from '../../components-level-1/CommonLoading';
import UserForm from "./../users/UserForm";
import { handleGetRequest, handleAddRequest } from "../../actions/HandleManager";
import enumRoles from "./../../models/users/enumRoles"
import i18n from "../../i18n/i18n";

const roleName = enumRoles.HOSPITAL_DOCTOR;

function DoctorUserForm() {

  const history = useHistory();
  const [role, setRole] = useState(null);

  useEffect(() => {
    handleGetRequest(`role?roleName=${roleName}`, setRole);
  }, []);

  function afterAddUser(userData) {
    handleAddUserRole(userData);
  }

  const handleAddUserRole = function (userData) {
    const body = {
      idUser: userData.id,
      idRole: role.id
    }
    handleAddRequest('users-roles', body);
    // here add relation doctor details.
  }

  if (role === null) {
    return <CommonLoading></CommonLoading>;
  }

  return (
    <div className="puggysoft-doctor-user-form" >
      <UserForm
        title={i18n.doctorUserForm.title}
        afterAdd={afterAddUser}>
      </UserForm>
    </div>
  )
}

export default DoctorUserForm;
