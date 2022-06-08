import { useState, useEffect } from "react";
import CommonTablePagination from '../common/CommonTablePagination';
import { handleGet } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";

const arrayDataFields = [
  'image',
  'id',
  'username',
  'password',
  'name',
  'secondName',
  'lastName',
  'secondLastName',
  'birthDate',
  'telephone',
  'address',
  'email',
  'createdBy',
  'updatedBy',
  'creationDate',
  'updateDate'
];

const arrayColumns = [
  i18n.userTable.columnImage,
  i18n.userTable.columnId,
  i18n.userTable.columnUsername,
  i18n.userTable.columnPassword,
  i18n.userTable.columnName,
  i18n.userTable.columnSecondName,
  i18n.userTable.columnLastName,
  i18n.userTable.columnSecondLastName,
  i18n.userTable.columnBirthDate,
  i18n.userTable.columnTelephone,
  i18n.userTable.columnAddress,
  i18n.userTable.columnEmail,
  i18n.userTable.columnCreatedBy,
  i18n.userTable.columnUpdatedBy,
  i18n.userTable.columnCreationDate,
  i18n.userTable.columnUpdateDate,
];

const pageSize = 10;

function UserTable() {
  const [arrayData, setArrayData] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const [initialPage, setInitialPage] = useState(1);

  useEffect(() => {
    handleGet(`users/pagination?page=${activePage - 1}&size=${pageSize}`, setArrayData);
  }, [activePage]);

  useEffect(() => {
    handleGet(`users/pagination/size/${pageSize}`, setTotalPages);
  }, [activePage]);

  if (arrayData == null || totalPages == null) {
    return "Loading";
  }

  return (
    <div className="users-table">
      <CommonTablePagination
        tableArrayData={arrayData}
        tableArrayDataFields={arrayDataFields}
        tableArrayColumns={arrayColumns}
        activePage={activePage}
        totalPages={totalPages}
        initialPage={initialPage}
        setArrayData={setArrayData}
        setTotalPages={setTotalPages}
        setActivePage={setActivePage}
        setInitialPage={setInitialPage}
        numberPagesToShow={10}
      ></CommonTablePagination>
    </div>
  );
}

export default UserTable;
