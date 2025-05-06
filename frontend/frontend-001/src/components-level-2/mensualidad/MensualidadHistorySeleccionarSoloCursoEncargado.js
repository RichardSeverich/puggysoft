import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import i18n from "../../i18n/i18n";
import enumPaths from "../../models/enumPaths";
import enumBootstrapVariant from "../../models/enumBootstrapVariant";
import { openCommonMessage } from "../../redux/reducers/reducerCommonMessage";
import { handleFilterRequest } from "../../actions/HandleManager";
import CommonLoading from "../../components-level-1/CommonLoading";
import CursoGenericTable from "../escuela/generic/CursoGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";
import enumCompareOperators from "../../models/enumCompareOperators";

function MensualidadHistorySeleccionarSoloCursoEncargado (props) {
  const pageSize = 7;
  const numberPagesToShow = 7;

  const history = useHistory();
  const dispatch = useDispatch();
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);

  const tableTitle = i18n.escuela.cursosTableTitle;

  function handleGetData (activePage, filterBody, updateArrayData) {
    const arrayCursosNew = [];
    const callbakOnSuccess = (arrayCursos) => {
      const updateArrayDataProductGroup = (arrayProductGroup, curso) => {
        if (arrayProductGroup.length > 0) {
          const productGroup = arrayProductGroup[0];
          const cursoNew = arrayCursos.filter((c) => c.shortName === productGroup.aux)[0];
          cursoNew.image = productGroup.image;
          cursoNew.idProductGroup = productGroup.id;
          arrayCursosNew.push(cursoNew);
        } else {
          arrayCursosNew.push(curso);
        }
      };
      const updateArrayDataProductGroupLast = (arrayProductGroup, curso) => {
        if (arrayProductGroup.length > 0) {
          const productGroup = arrayProductGroup[0];
          const cursoNew = arrayCursos.filter((c) => c.shortName === productGroup.aux)[0];
          cursoNew.image = productGroup.image;
          cursoNew.idProductGroup = productGroup.id;
          arrayCursosNew.push(cursoNew);
        } else {
          arrayCursosNew.push(curso);
        }
        updateArrayData(arrayCursosNew);
      };
      if (arrayCursos.length === 0) {
        updateArrayData(arrayCursos);
      }
      arrayCursos.forEach((curso, index) => {
        const productGroupBody = getFilterProductGroupBody(curso.shortName);
        if (index === arrayCursos.length - 1) {
          handleFilterRequest(`product-groups/filter?page=${0}&size=${1}`, productGroupBody, updateArrayDataProductGroupLast, undefined, true, curso);
        } else {
          handleFilterRequest(`product-groups/filter?page=${0}&size=${1}`, productGroupBody, updateArrayDataProductGroup, undefined, true, curso);
        }
      });
    };
    handleFilterRequest(`escuela-cursos/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, callbakOnSuccess);
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(`escuela-cursos/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  const messageDeleteOnSuccess = function () {
    setIsRequestInProgress(false);
    dispatch(openCommonMessage({
      isMessageModalVisible: true,
      messageModalTitle: i18n.successMessages.successTitle,
      messageModalBody: i18n.successMessages.successfullyDeleted,
      messageModalVariant: enumBootstrapVariant.SUCCESS
    }));
  };

  function handleSelect (data) {
    history.push({
      pathname: enumPaths.MENSUALIDAD_HISTORY_POR_CURSO,
      state: { data }
    });
  }

  const tableArrayCustomRowButtons = [
    {
      variant: "info",
      handleCustom: handleSelect,
      text: i18n.commonTable.selectButton,
    },
  ];

  const getFilterProductGroupBody = (cursoShortName) => {
    const tenant = window.sessionStorage.getItem("tenant");
    const filterBody = {
      idCriteria: "",
      idOperator: enumCompareOperators.NONE,
      nameCriteria: "",
      nameOperator: enumCompareOperators.NONE,
      auxCriteria: cursoShortName,
      auxOperator: enumCompareOperators.TEXT_EQUALS,
      createdByCriteria: "",
      createdByOperator: enumCompareOperators.NONE,
      updatedByCriteria: "",
      updatedByOperator: enumCompareOperators.NONE,
      creationDateCriteria: "",
      creationDateOperator: enumCompareOperators.NONE,
      updateDateCriteria: "",
      updateDateOperator: enumCompareOperators.NONE,
      tenantCriteria: tenant,
      tenantOperator: enumCompareOperators.TEXT_EQUALS
    };
    return filterBody;
  };

  const fixArrayData = (datosCursos) => {
    return datosCursos;
  };

  if (isRequestInProgress) {
    return <CommonLoading />;
  }

  return (
    <CursoGenericTable
      tableTitle={tableTitle}
      numberPagesToShow={numberPagesToShow}
      handleGetData={handleGetData}
      handleGetSize={handleGetSize}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
      columnsToShow={enumTableColumnsToShow.FULL}
      fixArrayData={fixArrayData}
    >
    </CursoGenericTable>
  );
}

export default MensualidadHistorySeleccionarSoloCursoEncargado;
