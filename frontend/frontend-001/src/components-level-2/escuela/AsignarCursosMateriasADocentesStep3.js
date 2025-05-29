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

function AsignarCursosMateriasADocentesStep3 () {
  const tableSubTitleOne = i18n.escuela.materiasTitleOne;
  const tableSubTitleTwo = i18n.escuela.materiasTitleTwo;
  const pageSize = 7;
  const numberPagesToShow = 7;
  const history = useHistory();
  const { userData, courseData } = history && history.location && history.location.state;
  const [isLoadingTable, setIsLoadingTable] = useState(false);
  console.log(userData);
  console.log(courseData);

  function handleGetDataA (activePage, filterBody, updateArrayData) {
    handleFilterRequest(
      `escuela-cursos-materias-docentes/filter?page=${activePage - 1}&size=${pageSize}&docente=${userData.username}&curso=${courseData.shortName}&contains=false`,
      filterBody,
      updateArrayData
    );
  }

  function handleGetSizeA (filterBody, setTotalPages) {
    handleFilterRequest(
      `escuela-cursos-materias-docentes/filter/size?pageSize=${pageSize}&docente=${userData.username}&curso=${courseData.shortName}&contains=false`,
      filterBody,
      setTotalPages
    );
  }

  function handleGetDataB (activePage, filterBody, updateArrayData) {
    handleFilterRequest(
      `escuela-cursos-materias-docentes/filter?page=${activePage - 1}&size=${pageSize}&docente=${userData.username}&curso=${courseData.shortName}&contains=true`,
      filterBody,
      updateArrayData
    );
  }

  function handleGetSizeB (filterBody, setTotalPages) {
    handleFilterRequest(
      `escuela-cursos-materias-docentes/filter/size?pageSize=${pageSize}&docente=${userData.username}&curso=${courseData.shortName}&contains=true`,
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
      docente: userData.username,
      curso: courseData.shortName,
      materia: materia.shortName,
      createdBy: username,
      tenant
    };
    handleAddRequest("escuela-cursos-materias-docentes", body, afterApiCall);
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
    handleDeleteRequest(`escuela-cursos-materias-docentes/${materia.id}`, afterApiCall);
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
          {"Docente" + `: ${userData.name}`}<br/>
          {"Curso" + `: ${courseData.name}`}
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

export default AsignarCursosMateriasADocentesStep3;
