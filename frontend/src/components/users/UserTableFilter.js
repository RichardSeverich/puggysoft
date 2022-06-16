import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import CommonTablePagination from '../../components-common/CommonTablePagination';
import CommonLoading from '../../components-common/CommonLoading';
import { handleFilterRequest, handleDeleteRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";
import arrayDataFields from "../../models/users/arrayUserDataFields"
import arrayColumns from "../../models/users/arrayUserColumns";
import getColumnsFilterModel from "../../models/users/arrayUserColumnsFilter";
import useInput from "./../../hooks/useInput";
import enumCompareOperators from "./../../models/enumCompareOperators";

const pageSize = 10;
const numberPagesToShow = 10;

function UserTableFilter() {

  const [arrayData, setArrayData] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const [initialPage, setInitialPage] = useState(1);
  const history = useHistory();

  // CRITERIA OF SEARCH OR FILTER
  const { value: criteriaId, onChange: criteriaOnChangeId, setValue: criteriaSetId } = useInput('');
  const { value: criteriaUsername, onChange: criteriaOnChangeUsername, setValue: criteriaSetUsername } = useInput('');
  const { value: criteriaDni, onChange: criteriaOnChangeDni, setValue: criteriaSetDni } = useInput('');
  const { value: criteriaName, onChange: criteriaOnChangeName, setValue: criteriaSetName } = useInput('');
  const { value: criteriaSecondName, onChange: criteriaOnChangeSecondName, setValue: criteriaSetSecondName } = useInput('');
  const { value: criteriaLastName, onChange: criteriaOnChangeLastName, setValue: criteriaSetLastName } = useInput('');
  const { value: criteriaSecondLastName, onChange: criteriaOnChangeSecondLastName, setValue: criteriaSetSecondLastName } = useInput('');
  const { value: criteriaBirthDate, onChange: criteriaOnChangeBirthDate, setValue: criteriaSetBirthDate } = useInput('');
  const { value: criteriaAge, onChange: criteriaOnChangeAge, setValue: criteriaSetAge } = useInput('');
  const { value: criteriaSex, onChange: criteriaOnChangeSex, setValue: criteriaSetSex } = useInput('');
  const { value: criteriaOccupation, onChange: criteriaOnChangeOccupation, setValue: criteriaSetOccupation } = useInput('');
  const { value: criteriaTelephone, onChange: criteriaOnChangeTelephone, setValue: criteriaSetTelephone } = useInput('');
  const { value: criteriaAddress, onChange: criteriaOnChangeAddress, setValue: criteriaSetAddress } = useInput('');
  const { value: criteriaEmail, onChange: criteriaOnChangeEmail, setValue: criteriaSetEmail } = useInput('');
  const { value: criteriaCreatedBy, onChange: criteriaOnChangeCreatedBy, setValue: criteriaSetCreatedBy } = useInput('');
  const { value: criteriaUpdatedBy, onChange: criteriaOnChangeUpdatedBy, setValue: criteriaSetUpdatedBy } = useInput('');
  const { value: criteriaCreatedDate, onChange: criteriaOnChangeCreatedDate, setValue: criteriaSetCreatedDate } = useInput('');
  const { value: criteriaUpdatedDate, onChange: criteriaOnChangeUpdatedDate, setValue: criteriaSetUpdatedDate } = useInput('');
  // FILTER OPERATORS
  const { value: operatorId, onChange: operatorOnChangeId, setValue: operatorSetId } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorUsername, onChange: operatorOnChangeUsername, setValue: operatorSetUsername } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorDni, onChange: operatorOnChangeDni, setValue: operatorSetDni } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorName, onChange: operatorOnChangeName, setValue: operatorSetName } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorSecondName, onChange: operatorOnChangeSecondName, setValue: operatorSetSecondName } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorLastName, onChange: operatorOnChangeLastName, setValue: operatorSetLastName } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorSecondLastName, onChange: operatorOnChangeSecondLastName, setValue: operatorSetSecondLastName } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorBirthDate, onChange: operatorOnChangeBirthDate, setValue: operatorSetBirthDate } = useInput(enumCompareOperators.DATE_EQUALS);
  const { value: operatorAge, onChange: operatorOnChangeAge, setValue: operatorSetAge } = useInput(enumCompareOperators.NUMBER_EQUALS);
  const { value: operatorSex, onChange: operatorOnChangeSex, setValue: operatorSetSex } = useInput(enumCompareOperators.TEXT_EQUALS);
  const { value: operatorOccupation, onChange: operatorOnChangeOccupation, setValue: operatorSetOccupation } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorTelephone, onChange: operatorOnChangeTelephone, setValue: operatorSetTelephone } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorAddress, onChange: operatorOnChangeAddress, setValue: operatorSetAddress } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorEmail, onChange: operatorOnChangeEmail, setValue: operatorSetEmail } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorCreatedBy, onChange: operatorOnChangeCreatedBy, setValue: operatorSetCreatedBy } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorUpdatedBy, onChange: operatorOnChangeUpdatedBy, setValue: operatorSetUpdatedBy } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorCreatedDate, onChange: operatorOnChangeCreatedDate, setValue: operatorSetCreatedDate } = useInput(enumCompareOperators.DATE_EQUALS);
  const { value: operatorUpdatedDate, onChange: operatorOnChangeUpdatedDate, setValue: operatorSetUpdatedDate } = useInput(enumCompareOperators.DATE_EQUALS);

  const { arrayColumnsFilter, clearFilters, getFilterBody } = getColumnsFilterModel(
    /*ID*/ criteriaId, criteriaOnChangeId, criteriaSetId, operatorId, operatorOnChangeId, operatorSetId,
    /*USERNAME*/ criteriaUsername, criteriaOnChangeUsername, criteriaSetUsername, operatorUsername, operatorOnChangeUsername, operatorSetUsername,
    /*DNI*/ criteriaDni, criteriaOnChangeDni, criteriaSetDni, operatorDni, operatorOnChangeDni, operatorSetDni,
    /*NAME*/ criteriaName, criteriaOnChangeName, criteriaSetName, operatorName, operatorOnChangeName, operatorSetName,
    /*SECOND NAME*/criteriaSecondName, criteriaOnChangeSecondName, criteriaSetSecondName, operatorSecondName, operatorOnChangeSecondName, operatorSetSecondName,
    /*LAST NAME*/ criteriaLastName, criteriaOnChangeLastName, criteriaSetLastName, operatorLastName, operatorOnChangeLastName, operatorSetLastName,
    /*SECOND LAST NAME*/criteriaSecondLastName, criteriaOnChangeSecondLastName, criteriaSetSecondLastName, operatorSecondLastName, operatorOnChangeSecondLastName, operatorSetSecondLastName,
    /*BIRTHDATE*/criteriaBirthDate, criteriaOnChangeBirthDate, criteriaSetBirthDate, operatorBirthDate, operatorOnChangeBirthDate, operatorSetBirthDate,
    /*AGE*/criteriaAge, criteriaOnChangeAge, criteriaSetAge, operatorAge, operatorOnChangeAge, operatorSetAge,
    /*SEX*/criteriaSex, criteriaOnChangeSex, criteriaSetSex, operatorSex, operatorOnChangeSex, operatorSetSex,
    /*OCCUPATION*/criteriaOccupation, criteriaOnChangeOccupation, criteriaSetOccupation, operatorOccupation, operatorOnChangeOccupation, operatorSetOccupation,
    /*TELEPHONE*/criteriaTelephone, criteriaOnChangeTelephone, criteriaSetTelephone, operatorTelephone, operatorOnChangeTelephone, operatorSetTelephone,
    /*ADDRESS*/criteriaAddress, criteriaOnChangeAddress, criteriaSetAddress, operatorAddress, operatorOnChangeAddress, operatorSetAddress,
    /*EMAIL*/criteriaEmail, criteriaOnChangeEmail, criteriaSetEmail, operatorEmail, operatorOnChangeEmail, operatorSetEmail,
    /*CREATED BY*/criteriaCreatedBy, criteriaOnChangeCreatedBy, criteriaSetCreatedBy, operatorCreatedBy, operatorOnChangeCreatedBy, operatorSetCreatedBy,
    /*UPDATED BY*/criteriaUpdatedBy, criteriaOnChangeUpdatedBy, criteriaSetUpdatedBy, operatorUpdatedBy, operatorOnChangeUpdatedBy, operatorSetUpdatedBy,
    /*CREATED DATE*/criteriaCreatedDate, criteriaOnChangeCreatedDate, criteriaSetCreatedDate, operatorCreatedDate, operatorOnChangeCreatedDate, operatorSetCreatedDate,
    /*UPDATED DATE*/criteriaUpdatedDate, criteriaOnChangeUpdatedDate, criteriaSetUpdatedDate, operatorUpdatedDate, operatorOnChangeUpdatedDate, operatorSetUpdatedDate
  );

  useEffect(() => {
    const filterBody = getFilterBody();
    handleFilterRequest(`users/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, setArrayData);
  }, [activePage]);

  useEffect(() => {
    const filterBody = getFilterBody();
    handleFilterRequest(`users/filter/size/${pageSize}`, filterBody, setTotalPages);
  }, [activePage]);

  if (arrayData == null || totalPages == null) {
    return <CommonLoading></CommonLoading>;
  }

  const handleFilter = () => {
    const filterBody = getFilterBody();
    setArrayData(null);
    setTotalPages(null);
    handleFilterRequest(`users/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, setArrayData);
    handleFilterRequest(`users/filter/size/${pageSize}`, filterBody, setTotalPages);
    setActivePage(1)
  }

  function handleEdit(row) {
    history.push({
      pathname: "/users-form",
      state: {
        data: row,
        edit: true
      }
    })
  }

  function handleDelete(row) {
    handleDeleteRequest("users/", row.id)
  }

  return (
    <div className="puggysoft-user-table">
      <CommonTablePagination
        tableTitle={i18n.userTable.title}
        tableArrayData={arrayData}
        tableArrayDataFields={arrayDataFields}
        tableArrayColumns={arrayColumns}
        tableHandleEdit={handleEdit}
        tableHandleDelete={handleDelete}
        paginationTotalPages={totalPages}
        paginationNumberPagesToShow={numberPagesToShow}
        paginationInitialPage={initialPage}
        paginationActivePage={activePage}
        paginationSetArrayData={setArrayData}
        paginationSetTotalPages={setTotalPages}
        paginationSetActivePage={setActivePage}
        paginationSetInitialPage={setInitialPage}
        filterArrayColumns={arrayColumnsFilter}
        filterClear={clearFilters}
        filterHandler={handleFilter}
      ></CommonTablePagination>
    </div>
  );
}

export default UserTableFilter;
