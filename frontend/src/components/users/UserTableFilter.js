import { useState, useEffect } from "react";
import CommonTablePagination from '../../components-common/CommonTablePagination';
import CommonLoading from '../../components-common/CommonLoading';
import { handleGetRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";
import arrayDataFields from "../../models/users/arrayUserDataFields"
import arrayColumns from "../../models/users/arrayUserColumns";
import getColumnsFilterModel from "../../models/users/arrayUserColumnsFilter";
import useInput from "./../../hooks/useInput";
import enumCompareOperators from "./../../models/enumCompareOperators";

const pageSize = 10;
const numberPagesToShow = 10;

function UserTable() {

  const [arrayData, setArrayData] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const [initialPage, setInitialPage] = useState(1);

  // CRITERIA
  const { value: textboxId, onChange: textboxOnChangeId, reset: textboxResetId } = useInput('');
  const { value: textboxUsername, onChange: textboxOnChangeUsername, reset: textboxResetUsername } = useInput('');
  const { value: textboxDni, onChange: textboxOnChangeDni, reset: textboxResetDni } = useInput('');
  const { value: textboxName, onChange: textboxOnChangeName, reset: textboxResetName } = useInput('');
  const { value: textboxSecondName, onChange: textboxOnChangeSecondName, reset: textboxResetSecondName } = useInput('');
  const { value: textboxLastName, onChange: textboxOnChangeLastName, reset: textboxResetLastName } = useInput('');
  const { value: textboxSecondLastName, onChange: textboxOnChangeSecondLastName, reset: textboxResetSecondLastName } = useInput('');
  const { value: textboxBirthDate, onChange: textboxOnChangeBirthDate, setValue: textboxResetBirthDate } = useInput('');
  const { value: textboxTelephone, onChange: textboxOnChangeTelephone, reset: textboxResetTelephone } = useInput('');
  const { value: textboxAddress, onChange: textboxOnChangeAddress, reset: textboxResetAddress } = useInput('');
  const { value: textboxEmail, onChange: textboxOnChangeEmail, reset: textboxResetEmail } = useInput('');
  const { value: textboxCreatedBy, onChange: textboxOnChangeCreatedBy, reset: textboxResetCreatedBy } = useInput('');
  const { value: textboxUpdatedBy, onChange: textboxOnChangeUpdatedBy, reset: textboxResetUpdatedBy } = useInput('');
  const { value: textboxCreatedDate, onChange: textboxOnChangeCreatedDate, setValue: setValueCreatedDate } = useInput('');
  const { value: textboxUpdatedDate, onChange: textboxOnChangeUpdatedDate, setValue: setValueUpdatedDate } = useInput('');
  // FILTER OPERATORS
  const { value: operatorId, onChange: operatorOnChangeId, setValue: setId } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorUsername, onChange: operatorOnChangeUsername, setValue: setUsername } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorDni, onChange: operatorOnChangeDni, setValue: setDni } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorName, onChange: operatorOnChangeName, setValue: setName } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorSecondName, onChange: operatorOnChangeSecondName, setValue: setSecondName } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorLastName, onChange: operatorOnChangeLastName, setValue: setLastName } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorSecondLastName, onChange: operatorOnChangeSecondLastName, setValue: setSecondLastName } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorBirthDate, onChange: operatorOnChangeBirthDate, setValue: setBirthDate } = useInput(enumCompareOperators.DATE_EQUALS);
  const { value: operatorTelephone, onChange: operatorOnChangeTelephone, setValue: setTelephone } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorAddress, onChange: operatorOnChangeAddress, setValue: setAddress } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorEmail, onChange: operatorOnChangeEmail, setValue: setEmail } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorCreatedBy, onChange: operatorOnChangeCreatedBy, setValue: setCreatedBy } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorUpdatedBy, onChange: operatorOnChangeUpdatedBy, setValue: setUpdatedBy } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorCreatedDate, onChange: operatorOnChangeCreatedDate, setValue: setCreatedDate } = useInput(enumCompareOperators.DATE_EQUALS);
  const { value: operatorUpdatedDate, onChange: operatorOnChangeUpdatedDate, setValue: setUpdatedDate } = useInput(enumCompareOperators.DATE_EQUALS);

  const { arrayColumnsFilter, clearFilters } = getColumnsFilterModel(
    /*ID*/ textboxId, textboxOnChangeId, textboxResetId, operatorId, operatorOnChangeId, setId,
    /*USERNAME*/ textboxUsername, textboxOnChangeUsername, textboxResetUsername, operatorUsername, operatorOnChangeUsername, setUsername,
    /*DNI*/ textboxDni, textboxOnChangeDni, textboxResetDni, operatorDni, operatorOnChangeDni, setDni,
    /*NAME*/ textboxName, textboxOnChangeName, textboxResetName, operatorName, operatorOnChangeName, setName,
    /*SECOND NAME*/textboxSecondName, textboxOnChangeSecondName, textboxResetSecondName, operatorSecondName, operatorOnChangeSecondName, setSecondName,
    /*LAST NAME*/ textboxLastName, textboxOnChangeLastName, textboxResetLastName, operatorLastName, operatorOnChangeLastName, setLastName,
    /*SECOND LAST NAME*/textboxSecondLastName, textboxOnChangeSecondLastName, textboxResetSecondLastName, operatorSecondLastName, operatorOnChangeSecondLastName, setSecondLastName,
    /*BIRTHDATE*/textboxBirthDate, textboxOnChangeBirthDate, textboxResetBirthDate, operatorBirthDate, operatorOnChangeBirthDate, setBirthDate,
    /*TELEPHONE*/textboxTelephone, textboxOnChangeTelephone, textboxResetTelephone, operatorTelephone, operatorOnChangeTelephone, setTelephone,
    /*ADDRESS*/textboxAddress, textboxOnChangeAddress, textboxResetAddress, operatorAddress, operatorOnChangeAddress, setAddress,
    /*EMAIL*/textboxEmail, textboxOnChangeEmail, textboxResetEmail, operatorEmail, operatorOnChangeEmail, setEmail,
    /*CREATED BY*/textboxCreatedBy, textboxOnChangeCreatedBy, textboxResetCreatedBy, operatorCreatedBy, operatorOnChangeCreatedBy, setCreatedBy,
    /*UPDATED BY*/textboxUpdatedBy, textboxOnChangeUpdatedBy, textboxResetUpdatedBy, operatorUpdatedBy, operatorOnChangeUpdatedBy, setUpdatedBy,
    /*CREATED DATE*/textboxCreatedDate, textboxOnChangeCreatedDate, setValueCreatedDate, operatorCreatedDate, operatorOnChangeCreatedDate, setCreatedDate,
    /*UPDATED DATE*/textboxUpdatedDate, textboxOnChangeUpdatedDate, setValueUpdatedDate, operatorUpdatedDate, operatorOnChangeUpdatedDate, setUpdatedDate
  );

  useEffect(() => {
    handleGetRequest(`users/pagination?page=${activePage - 1}&size=${pageSize}`, setArrayData);
  }, [activePage]);

  useEffect(() => {
    handleGetRequest(`users/pagination/size/${pageSize}`, setTotalPages);
  }, [activePage]);

  if (arrayData == null || totalPages == null) {
    return <CommonLoading></CommonLoading>;
  }

  const handleFilter = () => {
    const filterBody = {
      idCriteria: textboxId,
      idOperator: operatorId,
      usernameCriteria: textboxUsername,
      usernameOperator: operatorUsername,
      passwordCriteria: "",
      passwordOperator: "NONE",
      dniCriteria: textboxDni,
      dniOperator: operatorDni,
      nameCriteria: textboxName,
      nameOperator: operatorName,
      secondNameCriteria: textboxSecondName,
      secondNameOperator: operatorSecondName,
      lastNameCriteria: textboxLastName,
      lastNameOperator: operatorLastName,
      secondLastNameCriteria: textboxSecondLastName,
      secondLastNameOperator: operatorSecondLastName,
      birthDateCriteria: textboxBirthDate,
      birthDateNameOperator: operatorBirthDate,
      telephoneCriteria: textboxTelephone,
      telephoneOperator: operatorTelephone,
      addressCriteria: textboxAddress,
      addressOperator: operatorAddress,
      emailCriteria: textboxEmail,
      emailOperator: operatorEmail,
      createdByCriteria: textboxCreatedBy,
      createdByOperator: operatorCreatedBy,
      updatedByCriteria: textboxUpdatedBy,
      updatedByOperator: operatorUpdatedBy,
      creationDateCriteria: textboxCreatedDate,
      creationDateOperator: operatorCreatedDate,
      updateDateCriteria: textboxUpdatedDate,
      updateDateOperator: operatorUpdatedDate
    }
    console.log(filterBody);
  }

  return (
    <div className="puggysoft-user-table">
      <CommonTablePagination
        tableTitle={i18n.userTable.title}
        tableArrayData={arrayData}
        tableArrayDataFields={arrayDataFields}
        tableArrayColumns={arrayColumns}
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

export default UserTable;
