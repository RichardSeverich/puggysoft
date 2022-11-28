import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import CommonTablePagination from "../../components-level-1/CommonTablePagination";
import CommonLoading from "../../components-level-1/CommonLoading";
import { handleGetRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";
import arrayDataFields from "../../models/users/arrayRoleDataFields";
import arrayColumns from "../../models/users/arrayRoleColumns";
import enumTableType from "../../models/enumTableType";
import fixArrayData from "../../tools/users/fixArrayDataRoles";
import enumPaths from "./../../models/enumPaths";
import "./role-table-styles.css";

const pageSize = 10;
const numberPagesToShow = 10;

function RoleTable () {
  const [arrayData, setArrayData] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const [initialPage, setInitialPage] = useState(1);
  const history = useHistory();
  const routerProps = history && history.location && history.location.state;

  function updateArrayData (arrayData) {
    const arrayFixed = fixArrayData(arrayData);
    setArrayData(arrayFixed);
  }

  useEffect(() => {
    handleGetRequest(`roles/pagination?page=${activePage - 1}&size=${pageSize}`, updateArrayData);
  }, [activePage]);

  useEffect(() => {
    handleGetRequest(`roles/pagination/size/${pageSize}`, setTotalPages);
  }, [activePage]);

  let tableArrayCustomRowButtons;
  if (routerProps && routerProps.tableType === enumTableType.TABLE_SELECTION) {
    tableArrayCustomRowButtons = [
      {
        variant: "info",
        handleCustom: handleNavigate,
        text: i18n.roleTable.selectButton
      }
    ];
  }

  function handleNavigate (data) {
    history.push({
      pathname: enumPaths.USERS_TABLE_FILTER_BY_ROLE,
      state: {
        data
      }
    });
  }

  if (arrayData == null || totalPages == null) {
    return <CommonLoading></CommonLoading>;
  }

  return (
    <div className="puggysoft-role-table">
      <CommonTablePagination
        tableTitle={i18n.roleTable.title}
        tableArrayData={arrayData}
        tableArrayDataFields={arrayDataFields}
        tableArrayColumns={arrayColumns}
        tableArrayCustomRowButtons={tableArrayCustomRowButtons}
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

export default RoleTable;
