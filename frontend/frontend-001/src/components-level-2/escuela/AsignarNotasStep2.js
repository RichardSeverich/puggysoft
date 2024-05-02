import React, { useState } from "react";
import { useHistory } from "react-router";
import i18n from "../../i18n/i18n";
import {
  handleFilterRequest,
  handleAddRequest,
  handleDeleteRequest
} from "../../actions/HandleManager";
import NotaGenericTable from "./generic/NotaGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";
import Card from "react-bootstrap/Card";
import CommonLoading from "../../components-level-1/CommonLoading";

function AsignarNotasStep2 () {
  const tableSubTitleOne = i18n.escuela.notasTitleOne;
  const tableSubTitleTwo = i18n.escuela.notasTitleTwo;
  const pageSize = 7;
  const numberPagesToShow = 7;
  const history = useHistory();
  const materiaSelected = history && history.location && history.location.state.data;
  const [isLoadingTable, setIsLoadingTable] = useState(false);

  function handleGetDataA (activePage, filterBody, updateArrayData) {
    handleFilterRequest(
      `escuela-materias-notas/filter?page=${activePage - 1}&size=${pageSize}&materia=${materiaSelected.shortName}&contains=false`,
      filterBody,
      updateArrayData
    );
  }

  function handleGetSizeA (filterBody, setTotalPages) {
    handleFilterRequest(
      `escuela-materias-notas/filter/size?pageSize=${pageSize}&materia=${materiaSelected.shortName}&contains=false`,
      filterBody,
      setTotalPages
    );
  }

  function handleGetDataB (activePage, filterBody, updateArrayData) {
    handleFilterRequest(
      `escuela-materias-notas/filter?page=${activePage - 1}&size=${pageSize}&materia=${materiaSelected.shortName}&contains=true`,
      filterBody,
      updateArrayData
    );
  }

  function handleGetSizeB (filterBody, setTotalPages) {
    handleFilterRequest(
      `escuela-materias-notas/filter/size?pageSize=${pageSize}&materia=${materiaSelected.shortName}&contains=true`,
      filterBody,
      setTotalPages
    );
  }

  function afterApiCall () {
    setIsLoadingTable(false);
  }

  const handleAggregate = function (nota) {
    setIsLoadingTable(true);
    const username = window.sessionStorage.getItem("username");
    const tenant = window.sessionStorage.getItem("tenant");
    const body = {
      materia: materiaSelected.shortName,
      nota: nota.shortName,
      createdBy: username,
      tenant
    };
    handleAddRequest("escuela-materias-notas", body, afterApiCall);
  };

  const tableArrayCustomRowButtons = [
    {
      variant: "info",
      handleCustom: handleAggregate,
      text: i18n.commonTable.aggregateButton
    }
  ];

  function handleDelete (materia) {
    setIsLoadingTable(true);
    handleDeleteRequest(`escuela-materias-notas/${materia.id}`, afterApiCall);
  }

  const tableArrayCustomRowButtonsTwo = [
    {
      variant: "danger",
      handleCustom: handleDelete,
      text: i18n.commonTable.deleteButton
    }
  ];

  if (isLoadingTable) {
    return <CommonLoading />;
  }

  return (
    <div>
      <Card>
        <Card.Header as="h3">
          {"Materia" + `: ${materiaSelected.name}`}
        </Card.Header>
      </Card>
      <div className="puggysoft-two-divs-side-by-side-child">
        <NotaGenericTable
          tableTitle={tableSubTitleOne}
          numberPagesToShow={numberPagesToShow}
          handleGetData={handleGetDataA}
          handleGetSize={handleGetSizeA}
          tableArrayCustomRowButtons={tableArrayCustomRowButtons}
          columnsToShow={enumTableColumnsToShow.MEDIUM}
        />
      </div>
      <div className="puggysoft-two-divs-side-by-side-child">
        <NotaGenericTable
          tableTitle={tableSubTitleTwo}
          numberPagesToShow={numberPagesToShow}
          handleGetData={handleGetDataB}
          handleGetSize={handleGetSizeB}
          tableArrayCustomRowButtons={tableArrayCustomRowButtonsTwo}
          columnsToShow={enumTableColumnsToShow.MEDIUM}
        />
      </div>
    </div>
  );
}

export default AsignarNotasStep2;
