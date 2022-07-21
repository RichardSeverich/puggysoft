import { useState, useEffect } from "react";
import UserTableFilterGeneric from "./../users/UserTableFilterGeneric";
import CommonLoading from '../../components-common/CommonLoading';
import { handleFilterRequest, handleGetRequest } from "../../actions/HandleManager";
import enumRoles from "./../../models/users/enumRoles"
import i18n from "../../i18n/i18n";

function DoctorUserGenericTable(props) {

  const pageSize = 10;
  const numberPagesToShow = 10;
  const roleName = enumRoles.HOSPITAL_DOCTOR;
  const tableTitle = i18n.doctorTable.title;
  const [role, setRole] = useState(null);

  const { tableArrayCustomRowButtons } = props;

  useEffect(() => {
    handleGetRequest(`role?roleName=${roleName}`, setRole);
  }, []);

  function handleGetData(activePage, filterBody, updateArrayData) {
    handleFilterRequest(`users/filter/with-roles?page=${activePage - 1}&size=${pageSize}&idRole=${role.id}`, filterBody, updateArrayData);
  }

  function handleGetSize(filterBody, setTotalPages) {
    handleFilterRequest(`users/filter/with-roles/size?&pageSize=${pageSize}&idRole=${role.id}`, filterBody, setTotalPages);
  }

  if (role === null) {
    return <CommonLoading></CommonLoading>;
  }

  return (
    <div className="puggysoft-doctor-table" >
      <UserTableFilterGeneric
        handleGetData={handleGetData}
        handleGetSize={handleGetSize}
        tableTitle={tableTitle}
        tableArrayCustomRowButtons={tableArrayCustomRowButtons}
        pageSize={pageSize}
        numberPagesToShow={numberPagesToShow}
      >
      </UserTableFilterGeneric>
    </div>
  )
}

export default DoctorUserGenericTable;
