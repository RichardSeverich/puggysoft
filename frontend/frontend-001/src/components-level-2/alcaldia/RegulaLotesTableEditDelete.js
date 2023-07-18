import React from "react";
import { useHistory } from "react-router";
import i18n from "../../i18n/i18n";
import enumPaths from "../../models/enumPaths";
import {
  handleFilterRequest,
  handleDeleteRequest
} from "../../actions/HandleManager";
import RegulaLotesGenericTable from "./generic/RegulaLotesGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";

function RegulaLotesTableEditDelete () {
  const tableTitle = i18n.regulaLotesTable.title;
  const pageSize = 10;
  const numberPagesToShow = 10;

  const history = useHistory();

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(
      `regula-lotes/filter?page=${activePage - 1}&size=${pageSize}`,
      filterBody,
      updateArrayData
    );
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(
      `regula-lotes/filter/size/${pageSize}`,
      filterBody,
      setTotalPages
    );
  }

  function handleDelete (data) {
    handleDeleteRequest(
      `regula-lotes/${data.id}`,
      undefined,
      undefined,
      undefined,
      true
    );
  }

  function handleEdit (data) {
    history.push({
      pathname: enumPaths.REGULA_LOTES_FORM,
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

  const fixArray = (arrayData) => {
    const newArray = [];
    arrayData.forEach((item) => {
      if (item.boletaPago) {
        const fileUrlInitAux = `data:image/jpeg;base64, ${item.boletaPago}`;
        item.boletaPago = (
          <a
            href={fileUrlInitAux}
            download={"archivo.jpg"}
          >
            {i18n.commonTable.download}
          </a>
        );
      }
      newArray.push(item);
    });
    return newArray;
  };

  return (
    <RegulaLotesGenericTable
      tableTitle={tableTitle}
      numberPagesToShow={numberPagesToShow}
      handleGetData={handleGetData}
      handleGetSize={handleGetSize}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
      columnsToShow={enumTableColumnsToShow.FULL}
      fixArrayData={fixArray}
    ></RegulaLotesGenericTable>
  );
}

export default RegulaLotesTableEditDelete;
