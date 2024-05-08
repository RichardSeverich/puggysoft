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

function AsignarCursosStep2 () {
  const tableSubTitleOne = i18n.escuela.cursosTitleOne;
  const tableSubTitleTwo = i18n.escuela.cursosTitleTwo;
  const pageSize = 7;
  const numberPagesToShow = 7;
  const history = useHistory();
  const userSelected = history && history.location && history.location.state.data;
  const [isLoadingTable, setIsLoadingTable] = useState(false);

  function handleGetDataA (activePage, filterBody, updateArrayData) {
    handleFilterRequest(
      `escuela-cursos-estudiantes/filter?page=${activePage - 1}&size=${pageSize}&estudiante=${userSelected.username}&contains=false`,
      filterBody,
      updateArrayData
    );
  }

  function handleGetSizeA (filterBody, setTotalPages) {
    handleFilterRequest(
      `escuela-cursos-estudiantes/filter/size?pageSize=${pageSize}&estudiante=${userSelected.username}&contains=false`,
      filterBody,
      setTotalPages
    );
  }

  function handleGetDataB (activePage, filterBody, updateArrayData) {
    handleFilterRequest(
      `escuela-cursos-estudiantes/filter?page=${activePage - 1}&size=${pageSize}&estudiante=${userSelected.username}&contains=true`,
      filterBody,
      updateArrayData
    );
  }

  function handleGetSizeB (filterBody, setTotalPages) {
    handleFilterRequest(
      `escuela-cursos-estudiantes/filter/size?pageSize=${pageSize}&estudiante=${userSelected.username}&contains=true`,
      filterBody,
      setTotalPages
    );
  }

  function afterApiCall () {
    setIsLoadingTable(false);
  }

  const handleAggregate = function (curso) {
    setIsLoadingTable(true);
    const username = window.sessionStorage.getItem("username");
    const tenant = window.sessionStorage.getItem("tenant");
    const body = {
      estudiante: userSelected.username,
      curso: curso.shortName,
      createdBy: username,
      tenant
    };
    handleAddRequest("escuela-cursos-estudiantes", body, afterApiCall);
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
    handleDeleteRequest(`escuela-cursos-estudiantes/${materia.id}`, afterApiCall);
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
          {"Estudiante" + `: ${userSelected.name}`}
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

export default AsignarCursosStep2;
