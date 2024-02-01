import React, { useState } from "react";
import { useHistory } from "react-router";
import i18n from "../../i18n/i18n";
import {
  handleFilterRequest,
  handleAddRequest,
  handleDeleteRequest
} from "../../actions/HandleManager";
import MateriaGenericTable from "./generic/MateriaGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";
import Card from "react-bootstrap/Card";
import CommonLoading from "../../components-level-1/CommonLoading";

function AsignarMateriasStep2 () {
  const tableSubTitleOne = i18n.escuela.materiasTitleOne;
  const tableSubTitleTwo = i18n.escuela.materiasTitleTwo;
  const pageSize = 7;
  const numberPagesToShow = 7;
  const history = useHistory();
  const cursoSelected = history && history.location && history.location.state.data;
  const [isLoadingTable, setIsLoadingTable] = useState(false);

  function handleGetDataA (activePage, filterBody, updateArrayData) {
    handleFilterRequest(
      `escuela-cursos-materias/filter?page=${activePage - 1}&size=${pageSize}&curso=${cursoSelected.shortName}&contains=false`,
      filterBody,
      updateArrayData
    );
  }

  function handleGetSizeA (filterBody, setTotalPages) {
    handleFilterRequest(
      `escuela-cursos-materias/filter/size?pageSize=${pageSize}&curso=${cursoSelected.shortName}&contains=false`,
      filterBody,
      setTotalPages
    );
  }

  function handleGetDataB (activePage, filterBody, updateArrayData) {
    handleFilterRequest(
      `escuela-cursos-materias/filter?page=${activePage - 1}&size=${pageSize}&curso=${cursoSelected.shortName}&contains=true`,
      filterBody,
      updateArrayData
    );
  }

  function handleGetSizeB (filterBody, setTotalPages) {
    handleFilterRequest(
      `escuela-cursos-materias/filter/size?pageSize=${pageSize}&curso=${cursoSelected.shortName}&contains=true`,
      filterBody,
      setTotalPages
    );
  }

  function afterApiCall () {
    setIsLoadingTable(false);
  }

  const handleAggregate = function (materia) {
    setIsLoadingTable(true);
    const username = window.sessionStorage.getItem("username");
    const tenant = window.sessionStorage.getItem("tenant");
    const body = {
      curso: cursoSelected.shortName,
      materia: materia.shortName,
      createdBy: username,
      tenant
    };
    handleAddRequest("escuela-cursos-materias", body, afterApiCall);
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
    handleDeleteRequest(`escuela-cursos-materias/${materia.id}`, afterApiCall);
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
          {"Curso" + `: ${cursoSelected.name}`}
        </Card.Header>
      </Card>
      <div className="puggysoft-two-divs-side-by-side-child">
        <MateriaGenericTable
          tableTitle={tableSubTitleOne}
          numberPagesToShow={numberPagesToShow}
          handleGetData={handleGetDataA}
          handleGetSize={handleGetSizeA}
          tableArrayCustomRowButtons={tableArrayCustomRowButtons}
          columnsToShow={enumTableColumnsToShow.MEDIUM}
        />
      </div>
      <div className="puggysoft-two-divs-side-by-side-child">
        <MateriaGenericTable
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

export default AsignarMateriasStep2;
