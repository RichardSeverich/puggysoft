import React from "react";
import { useHistory } from "react-router";
import Card from "react-bootstrap/Card";
import i18n from "../../i18n/i18n";
import enumPaths from "../../models/enumPaths";
import { handleFilterRequest } from "../../actions/HandleManager";
import MateriaGenericTable from "./generic/MateriaGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";

function AsignarCalificacionesStep3 () {
  const tableTitle = i18n.escuela.materiasTableTitle;
  const tableSubTitle = i18n.escuela.materiasTableTitleSub;
  const pageSize = 7;
  const numberPagesToShow = 7;
  const history = useHistory();
  const {
    estudianteSelected,
    cursoSelected
  } = history && history.location && history.location.state;

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(
      `escuela-cursos-materias/filter?page=${activePage - 1}&size=${pageSize}&curso=${cursoSelected.shortName}&contains=true`,
      filterBody,
      updateArrayData
    );
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(
      `escuela-cursos-materias/filter/size?pageSize=${pageSize}&curso=${cursoSelected.shortName}&contains=true`,
      filterBody,
      setTotalPages
    );
  }

  function handleSelection (materiaSelected) {
    history.push({
      pathname: enumPaths.ESCUELA_ASIGNAR_CALIFICACIONES_STEP_FOUR,
      state: {
        estudianteSelected,
        cursoSelected,
        materiaSelected
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
          {" | "}
          {"Curso" + `: ${cursoSelected.name}`}
        </Card.Header>
      </Card>
      <MateriaGenericTable
        tableTitle={tableTitle}
        tableSubTitle={tableSubTitle}
        numberPagesToShow={numberPagesToShow}
        handleGetData={handleGetData}
        handleGetSize={handleGetSize}
        tableArrayCustomRowButtons={tableArrayCustomRowButtons}
        columnsToShow={enumTableColumnsToShow.MEDIUM}
      >
      </MateriaGenericTable>
    </div>
  );
}

export default AsignarCalificacionesStep3;
