import React from "react";
import { useHistory } from "react-router";
import enumPaths from "../../models/enumPaths";
import { handleFilterRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";
import CursoGenericTable from "./generic/CursoGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";

function AsignarCursosMateriasADocentesStep2 () {
  const history = useHistory();
  const userSelected = history && history.location && history.location.state.data;
  const tableTitle = i18n.escuela.cursosTableTitle;
  const tableSubTitle = i18n.escuela.cursosTableTitleSub;
  const pageSize = 7;
  const numberPagesToShow = 7;

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`escuela-cursos/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(`escuela-cursos/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  function handleSelection (data) {
    history.push({
      pathname: enumPaths.ESCUELA_ASIGNAR_CURSOS_MATERIAS_A_DOCENTE_STEP_THREE,
      state: {
        userData: userSelected,
        courseData: data,
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
  );
}

export default AsignarCursosMateriasADocentesStep2;
