import React, { useRef } from "react";
import { useHistory } from "react-router";
import Card from "react-bootstrap/Card";
import i18n from "../../i18n/i18n";
import enumPaths from "../../models/enumPaths";
import { handleFilterRequest } from "../../actions/HandleManager";
import NotaGenericTable from "./generic/NotaGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";
import enumCompareOperators from "../../models/enumCompareOperators";

function AsignarCalificacionesStep4 () {
  const tableTitle = i18n.escuela.notasTableTitle;
  const tableSubTitle = i18n.escuela.notasTableTitleSub;
  const pageSize = 7;
  const numberPagesToShow = 7;
  const history = useHistory();
  const {
    estudianteSelected,
    cursoSelected,
    materiaSelected
  } = history && history.location && history.location.state;

  const notaSelectedRef = useRef({ notaSelected: "" });

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(
      `escuela-materias-notas/filter?page=${activePage - 1}&size=${pageSize}&materia=${materiaSelected.shortName}&contains=true`,
      filterBody,
      updateArrayData
    );
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(
      `escuela-materias-notas/filter/size?pageSize=${pageSize}&materia=${materiaSelected.shortName}&contains=true`,
      filterBody,
      setTotalPages
    );
  }

  function afterSearchCalificacion (calificacionArray) {
    let calificacionData;
    if (calificacionArray.length > 0) {
      calificacionData = calificacionArray[0];
    }
    console.log(calificacionData);
    history.push({
      pathname: enumPaths.ESCUELA_ASIGNAR_CALIFICACIONES_STEP_FIVE,
      state: {
        estudianteSelected,
        cursoSelected,
        materiaSelected,
        notaSelected: notaSelectedRef.notaSelected,
        calificacionData
      }
    });
  }

  function handleGetDataCalification () {
    const filterBodyCalificacion = {
      estudianteCriteria: estudianteSelected.username,
      estudianteOperator: enumCompareOperators.TEXT_EQUALS,
      cursoCriteria: cursoSelected.shortName,
      cursoOperator: enumCompareOperators.TEXT_EQUALS,
      materiaCriteria: materiaSelected.shortName,
      materiaOperator: enumCompareOperators.TEXT_EQUALS,
      notaCriteria: notaSelectedRef.notaSelected.shortName,
      notaOperator: enumCompareOperators.TEXT_EQUALS
    };
    handleFilterRequest(`escuela-calificaciones/filter?page=${0}&size=${1}`,
      filterBodyCalificacion,
      afterSearchCalificacion
    );
  }

  function handleSelection (newNotaSelected) {
    notaSelectedRef.notaSelected = newNotaSelected;
    handleGetDataCalification();
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
          {" | "}
          {"Materia" + `: ${materiaSelected.name}`}
        </Card.Header>
      </Card>
      <NotaGenericTable
        tableTitle={tableTitle}
        tableSubTitle={tableSubTitle}
        numberPagesToShow={numberPagesToShow}
        handleGetData={handleGetData}
        handleGetSize={handleGetSize}
        tableArrayCustomRowButtons={tableArrayCustomRowButtons}
        columnsToShow={enumTableColumnsToShow.MEDIUM}
      >
      </NotaGenericTable>
    </div>
  );
}

export default AsignarCalificacionesStep4;
