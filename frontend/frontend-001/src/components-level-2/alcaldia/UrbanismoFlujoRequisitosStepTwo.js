import React, { useState } from "react";
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";
import CommonLoading from "../../components-level-1/CommonLoading";
import i18n from "../../i18n/i18n";
import enumPaths from "../../models/enumPaths";
import { handleFilterRequest, handleEditRequest } from "../../actions/HandleManager";
import enumCompareOperators from "../../models/enumCompareOperators";
import UrbanismoFlujoRequisitosGenericTable from "./generic/UrbanismoFlujoRequisitosGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";

function UrbanismoFlujoRequisitosStepTwo () {
  const tableTitle = i18n.urbanismoFlujoRequisitosTable.title;
  const tableSubTitle = i18n.urbanismoFlujoRequisitosTable.subTitleSelection;
  const pageSize = 20;
  const numberPagesToShow = 10;
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);

  const history = useHistory();

  const selectedFlujo = history && history.location && history.location.state.data;

  function handleGetData (activePage, filterBody, updateArrayData) {
    filterBody.idTramiteFlujoOperator = enumCompareOperators.TEXT_CONTAINS;
    filterBody.idTramiteFlujoCriteria = selectedFlujo.id;
    handleFilterRequest(`urbanismo-flujo-requisitos/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }

  function handleGetSize (filterBody, setTotalPages) {
    filterBody.idTramiteFlujoOperator = enumCompareOperators.TEXT_CONTAINS;
    filterBody.idTramiteFlujoCriteria = selectedFlujo.id;
    handleFilterRequest(`urbanismo-flujo-requisitos/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  function handleAddProductToSale (productData, textboxId) {
    const textboxElement = document.getElementById(textboxId);
    const file = textboxElement.files[0];
    URL.createObjectURL(file);
    // console.log(textboxElement);
    // console.log(productData);
  }

  function handleCambiarEstado (data, textboxId) {
    setIsRequestInProgress(true);
    data.estado = data.estado === "INCUMPLIDO" ? "CUMPLIDO" : "INCUMPLIDO";
    handleEditRequest("urbanismo-flujo-requisitos/", data, data.id, () => setIsRequestInProgress(false), () => setIsRequestInProgress(false));
  }

  function handlehistorial () {
    history.push({
      pathname: enumPaths.URBANISMO_HISTORIAL_ESTADO_STEP_TWO,
      state: {
        data: selectedFlujo
      }
    });
  }

  const tableArrayCustomRowButtons = [
    // {
    //   type: enumWebElements.TEXTBOX,
    //   placeholder: "",
    //   formType: "file"
    // },
    {
      variant: "warning",
      handleCustom: handleCambiarEstado,
      text: "Cambiar estado"
    },
    {
      variant: "success",
      handleCustom: handleAddProductToSale,
      text: "Agregar documento"
    }
  ];

  if (isRequestInProgress) {
    return <CommonLoading></CommonLoading>;
  }

  return (
    <div>
      <Button
        style={{ margin: "10px" }}
        variant="primary"
        onClick={handlehistorial}
      >
        Comenzar historial del tramite
      </Button>
      <UrbanismoFlujoRequisitosGenericTable
        tableTitle={tableTitle}
        tableSubTitle={tableSubTitle}
        numberPagesToShow={numberPagesToShow}
        handleGetData={handleGetData}
        handleGetSize={handleGetSize}
        tableArrayCustomRowButtons={tableArrayCustomRowButtons}
        columnsToShow={enumTableColumnsToShow.MEDIUM}
      >
      </UrbanismoFlujoRequisitosGenericTable>
    </div>
  );
}

export default UrbanismoFlujoRequisitosStepTwo;
