import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import CommonTablePagination from "../../components-level-1/CommonTablePagination";
import CommonLoading from "../../components-level-1/CommonLoading";
import { handleGetRequest, handleDeleteRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";
import arrayDataFields from "../../models/users/arrayUserDataFields";
import arrayColumns from "../../models/users/arrayUserColumns";
import fixArrayData from "../../tools/users/fixArrayData";
import enumPaths from "./../../models/enumPaths";

const pageSize = 10;
const numberPagesToShow = 10;

function UserTableBasic () {
  const [arrayData, setArrayData] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const [initialPage, setInitialPage] = useState(1);
  const history = useHistory();

  function updateArrayData (arrayData) {
    const arrayFixed = fixArrayData(arrayData);
    setArrayData(arrayFixed);
  }

  useEffect(() => {
    handleGetRequest(`users/pagination?page=${activePage - 1}&size=${pageSize}`, updateArrayData);
  }, [activePage]);

  useEffect(() => {
    handleGetRequest(`users/pagination/size/${pageSize}`, setTotalPages);
  }, [activePage]);

  if (arrayData == null || totalPages == null) {
    return <CommonLoading></CommonLoading>;
  }

  function handleEdit (data) {
    history.push({
      pathname: enumPaths.USERS_FORM,
      state: {
        data,
        edit: true
      }
    });
  }

  function handleDelete (data) {
    handleDeleteRequest(`users/${data.id}`, undefined, undefined, undefined, true);
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
      ></CommonTablePagination>
    </div>
  );
}

export default UserTableBasic;
