import React from "react";
import { useHistory } from "react-router";
import i18n from "../../i18n/i18n";
import enumPaths from "../../models/enumPaths";
import { handleFilterRequest, handleDeleteRequest } from "../../actions/HandleManager";
import CalificacionesGenericTable from "./generic/CalificacionesGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";
import enumCompareOperators from "../../models/enumCompareOperators";

function CalificacionesTable () {
  const tableTitle = i18n.escuela.calificacionTable;
  const pageSize = 7;
  const numberPagesToShow = 7;

  const history = useHistory();

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`escuela-calificaciones/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(`escuela-calificaciones/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  function handleDelete (data) {
    handleDeleteRequest(`escuela-calificaciones/${data.id}`, undefined, undefined, undefined, true);
  }

  function handleFilterRequestAsync(url, filtros) {
    return new Promise((resolve) => {
      handleFilterRequest(url, filtros, (data) => {
        resolve(data[0]);
      });
    });
  }

  function handleEdit (data) {
    const getStudent = async () => {
      const [getUser, getCurso, getMateria, getNota] = await Promise.all([
        handleFilterRequestAsync(`users/filter?page=0&size=1`,{usernameCriteria: data.estudiante, usernameOperator: enumCompareOperators.TEXT_EQUALS}),
        handleFilterRequestAsync(`escuela-cursos/filter?page=0&size=1`,{shortNameCriteria: data.curso, shortNameOperator: enumCompareOperators.TEXT_EQUALS}),
        handleFilterRequestAsync(`escuela-materias/filter?page=0&size=1`,{shortNameCriteria: data.materia, shortNameOperator: enumCompareOperators.TEXT_EQUALS}),
        handleFilterRequestAsync(`escuela-notas/filter?page=0&size=1`,{shortNameCriteria: data.nota, shortNameOperator: enumCompareOperators.TEXT_EQUALS}),
      ]);

      const toEdit = {
        estudianteSelected: {
          ...getUser
        },
        cursoSelected: {
          ...getCurso
        },
        materiaSelected: {
          ...getMateria
        },
        notaSelected: {
          ...getNota
        },
        calificacionData: {
          id: data.id,
          notaValor: data.notaValor,
        },
      }
      history.push({
        pathname: enumPaths.ESCUELA_ASIGNAR_CALIFICACIONES_STEP_FIVE,
        state: { ...toEdit }
      });
    }
    getStudent();
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
    <CalificacionesGenericTable
      tableTitle={tableTitle}
      numberPagesToShow={numberPagesToShow}
      handleGetData={handleGetData}
      handleGetSize={handleGetSize}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
      columnsToShow={enumTableColumnsToShow.FULL}
    >
    </CalificacionesGenericTable>
  );
}

export default CalificacionesTable;
