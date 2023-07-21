import React from "react";
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";
import i18n from "../../i18n/i18n";
import enumPaths from "../../models/enumPaths";
import { handleFilterRequest } from "../../actions/HandleManager";
import enumCompareOperators from "../../models/enumCompareOperators";
import UrbanismoHistorialGenericTable from "./generic/UrbanismoHistorialGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";

function UrbanismoFlujoHistorialStepTwo () {
  const tableTitle = i18n.urbanismoHistorialTable.title;
  const tableSubTitle = i18n.urbanismoHistorialTable.subTitleSelection;
  const pageSize = 10;
  const numberPagesToShow = 10;

  const history = useHistory();
  const selectedFlujo = history && history.location && history.location.state.data;

  function handleGetData (activePage, filterBody, updateArrayData) {
    filterBody.idTramiteFlujoOperator = enumCompareOperators.TEXT_CONTAINS;
    filterBody.idTramiteFlujoCriteria = selectedFlujo.id;
    handleFilterRequest(`urbanismo-historial/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }

  function handleGetSize (filterBody, setTotalPages) {
    filterBody.idTramiteFlujoOperator = enumCompareOperators.TEXT_CONTAINS;
    filterBody.idTramiteFlujoCriteria = selectedFlujo.id;
    handleFilterRequest(`urbanismo-historial/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  function handlehistorial () {
    history.push({
      pathname: enumPaths.URBANISMO_HISTORIAL_ESTADO_STEP_TWO,
      state: {
        data: selectedFlujo
      }
    });
  }

  return (
    <div>
      <Button
        style={{ margin: "10px" }}
        variant="primary"
        onClick={handlehistorial}
      >
        Agregar movimiento al historial
      </Button>
      <UrbanismoHistorialGenericTable
        tableTitle={tableTitle}
        tableSubTitle={tableSubTitle}
        numberPagesToShow={numberPagesToShow}
        handleGetData={handleGetData}
        handleGetSize={handleGetSize}
        columnsToShow={enumTableColumnsToShow.MEDIUM}
      >
      </UrbanismoHistorialGenericTable>
    </div>
  );
}

export default UrbanismoFlujoHistorialStepTwo;
