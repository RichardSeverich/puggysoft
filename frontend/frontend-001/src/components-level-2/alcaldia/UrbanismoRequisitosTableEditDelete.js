import React from "react";
import { useHistory } from "react-router";
import i18n from "../../i18n/i18n";
import enumPaths from "../../models/enumPaths";
import { handleFilterRequest, handleDeleteRequest } from "../../actions/HandleManager";
import UrbanismoRequisitosGenericTable from "./generic/UrbanismoRequisitosGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";

function UrbanismoRequisitosTableEditDelete () {
  const tableTitle = i18n.urbanismoRequisitosTable.title;
  const pageSize = 10;
  const numberPagesToShow = 10;

  const history = useHistory();

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`urbanismo-requisitos/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(`urbanismo-requisitos/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  function handleDelete (data) {
    handleDeleteRequest(`urbanismo-requisitos/${data.id}`, undefined, undefined, undefined, true);
  }

  function handleEdit (data) {
    history.push({
      pathname: enumPaths.URBANISMO_REQUISITOS_FORM,
      state: {
        data,
        edit: true
      }
    });
  }

  const tableArrayCustomRowButtons = [
    {
      variant: "warning",
      handleCustom: handleEdit,
      text: i18n.commonTable.editButton
    },
    {
      variant: "danger",
      handleCustom: handleDelete,
      text: i18n.commonTable.deleteButton
    }
  ];

  return (
    <UrbanismoRequisitosGenericTable
      tableTitle={tableTitle}
      numberPagesToShow={numberPagesToShow}
      handleGetData={handleGetData}
      handleGetSize={handleGetSize}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
      columnsToShow={enumTableColumnsToShow.FULL}
    >
    </UrbanismoRequisitosGenericTable>
  );
}

export default UrbanismoRequisitosTableEditDelete;
