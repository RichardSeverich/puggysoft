import React from "react";
import { useHistory } from "react-router";
import i18n from "../../i18n/i18n";
import enumPaths from "../../models/enumPaths";
import { handleFilterRequest } from "../../actions/HandleManager";
import enumWebElements from "../../models/enumWebElements";
import enumCompareOperators from "../../models/enumCompareOperators";
import UrbanismoTramiteRequisitosGenericTable from "./generic/UrbanismoTramiteRequisitosGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";

function UrbanismoFlujoRequisitosStepTwo () {
  const tableTitle = i18n.urbanismoEstadosTable.title;
  const tableSubTitle = i18n.urbanismoEstadosTable.subTitleSelection;
  const pageSize = 10;
  const numberPagesToShow = 10;

  const history = useHistory();

  const selectedFlujo = history && history.location && history.location.state.data;

  function handleGetData (activePage, filterBody, updateArrayData) {
    filterBody.tramiteNombreCortoOperator = enumCompareOperators.TEXT_CONTAINS;
    filterBody.tramiteNombreCortoCriteria = selectedFlujo.tramiteNombreCorto;
    handleFilterRequest(`urbanismo-tramite-requisitos/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }

  function handleGetSize (filterBody, setTotalPages) {
    filterBody.tramiteNombreCortoOperator = enumCompareOperators.TEXT_CONTAINS;
    filterBody.tramiteNombreCortoCriteria = selectedFlujo.tramiteNombreCorto;
    handleFilterRequest(`urbanismo-tramite-requisitos/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  function handleSelection (selectedRequisito) {
    history.push({
      pathname: enumPaths.URBANISMO_TRAMITE_ESTADOS_STEP_THREE,
      state: {
        data: { selectedRequisito, selectedFlujo }
      }
    });
  }

  function handleAddProductToSale (productData, textboxId) {
    const textboxElement = document.getElementById(textboxId);
    const file = textboxElement.files[0];
    URL.createObjectURL(file);
    console.log(textboxElement);
    console.log(productData);
  }

  const tableArrayCustomRowButtons = [
    {
      type: enumWebElements.TEXTBOX,
      placeholder: "",
      formType: "file"
    },
    {
      variant: "info",
      handleCustom: handleAddProductToSale,
      text: i18n.commonTable.selectButton
    },
    {
      variant: "info",
      handleCustom: handleSelection,
      text: i18n.commonTable.selectButton
    }
  ];

  return (
    <UrbanismoTramiteRequisitosGenericTable
      tableTitle={tableTitle}
      tableSubTitle={tableSubTitle}
      numberPagesToShow={numberPagesToShow}
      handleGetData={handleGetData}
      handleGetSize={handleGetSize}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
      columnsToShow={enumTableColumnsToShow.MEDIUM}
    >
    </UrbanismoTramiteRequisitosGenericTable>
  );
}

export default UrbanismoFlujoRequisitosStepTwo;
