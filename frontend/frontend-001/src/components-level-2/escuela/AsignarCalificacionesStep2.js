import React from "react";
import { useHistory } from "react-router";
import Card from "react-bootstrap/Card";
import i18n from "../../i18n/i18n";
import enumPaths from "../../models/enumPaths";
import { handleFilterRequest } from "../../actions/HandleManager";
import CursoGenericTable from "./generic/CursoGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";

function AsignarCalificacionesStep2 () {
  const tableTitle = i18n.escuela.cursosTableTitle;
  const tableSubTitle = i18n.escuela.cursosTableTitleSub;
  const pageSize = 7;
  const numberPagesToShow = 7;
  const history = useHistory();
  const { estudianteSelected } = history && history.location && history.location.state;

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(
      `escuela-cursos-estudiantes/filter?page=${activePage - 1}&size=${pageSize}&estudiante=${estudianteSelected.username}&contains=true`,
      filterBody,
      updateArrayData
    );
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(
      `escuela-cursos-estudiantes/filter/size?pageSize=${pageSize}&estudiante=${estudianteSelected.username}&contains=true`,
      filterBody,
      setTotalPages
    );
  }

  function handleSelection (cursoSelected) {
    history.push({
      pathname: enumPaths.ESCUELA_ASIGNAR_CALIFICACIONES_STEP_THREE,
      state: {
        estudianteSelected,
        cursoSelected
      }
    });
  }

  const tableArrayCustomRowButtons = [
    {
      variant: "info",
      handleCustom: handleSelection,
      text: i18n.commonTable.selectButton
    }
  ];

  return (
    <div>
      <Card>
        <Card.Header as="h4">
          {"Estudiante" + `: ${estudianteSelected.username}`}
        </Card.Header>
      </Card>
      <CursoGenericTable
        tableTitle={tableTitle}
        tableSubTitle={tableSubTitle}
        numberPagesToShow={numberPagesToShow}
        handleGetData={handleGetData}
        handleGetSize={handleGetSize}
        tableArrayCustomRowButtons={tableArrayCustomRowButtons}
        columnsToShow={enumTableColumnsToShow.MEDIUM}
      >
      </CursoGenericTable>
    </div>
  );
}

export default AsignarCalificacionesStep2;
