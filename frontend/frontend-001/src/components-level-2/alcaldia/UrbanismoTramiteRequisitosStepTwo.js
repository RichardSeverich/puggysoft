import React, { useState } from "react";
import { useHistory } from "react-router";
import i18n from "../../i18n/i18n";
import {
  handleFilterRequest,
  handleAddRequest,
  handleDeleteRequest
} from "../../actions/HandleManager";
import UrbanismoRequisitosGenericTable from "./generic/UrbanismoRequisitosGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";
import Card from "react-bootstrap/Card";
import CommonLoading from "../../components-level-1/CommonLoading";

function UrbanismoTramiteRequisitosStepTwo () {
  const tableSubTitleOne = i18n.urbanismoRequisitosTable.subTitleOne;
  const tableSubTitleTwo = i18n.urbanismoRequisitosTable.subTitleTwo;
  const pageSize = 7;
  const numberPagesToShow = 7;
  const history = useHistory();
  const tramiteSelected =
    history && history.location && history.location.state.data;
  const [isLoadingTable, setIsLoadingTable] = useState(false);

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(
      `requisitos/filter/without-tramites?page=${
        activePage - 1
      }&size=${pageSize}&tramite=${tramiteSelected.nombreCorto}`,
      filterBody,
      updateArrayData
    );
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(
      `requisitos/filter/without-tramites/size?pageSize=${pageSize}&tramite=${tramiteSelected.nombreCorto}`,
      filterBody,
      setTotalPages
    );
  }

  function handleGetDataTwo (activePage, filterBody, updateArrayData) {
    handleFilterRequest(
      `requisitos/filter/with-tramites?page=${
        activePage - 1
      }&size=${pageSize}&tramite=${tramiteSelected.nombreCorto}`,
      filterBody,
      updateArrayData
    );
  }

  function handleGetSizeTwo (filterBody, setTotalPages) {
    handleFilterRequest(
      `requisitos/filter/with-tramites/size?pageSize=${pageSize}&tramite=${tramiteSelected.nombreCorto}`,
      filterBody,
      setTotalPages
    );
  }

  function afterApiCall () {
    setIsLoadingTable(false);
  }

  const handleAggregate = function (requisito) {
    setIsLoadingTable(true);
    const username = window.sessionStorage.getItem("username");
    const tenant = window.sessionStorage.getItem("tenant");
    const body = {
      tramiteNombreCorto: tramiteSelected.nombreCorto,
      requisitoNombreCorto: requisito.nombreCorto,
      createdBy: username,
      tenant
    };
    handleAddRequest("urbanismo-tramite-requisitos", body, afterApiCall);
  };

  const tableArrayCustomRowButtons = [
    {
      variant: "info",
      handleCustom: handleAggregate,
      text: i18n.commonTable.aggregateButton
    }
  ];

  function handleDelete (requisito) {
    setIsLoadingTable(true);
    handleDeleteRequest(`urbanismo-tramite-requisitos/${requisito.id}`, afterApiCall);
  }

  const tableArrayCustomRowButtonsTwo = [
    {
      variant: "danger",
      handleCustom: handleDelete,
      text: i18n.commonTable.deleteButton
    }
  ];

  if (isLoadingTable) {
    return <CommonLoading/>;
  }

  return (
    <div>
      <Card>
        <Card.Header as="h3">
          {"Tramite" + `: ${tramiteSelected.nombre}`}
        </Card.Header>
      </Card>
      <div className="puggysoft-two-divs-side-by-side-child">
        <UrbanismoRequisitosGenericTable
          tableTitle={tableSubTitleOne}
          numberPagesToShow={numberPagesToShow}
          handleGetData={handleGetData}
          handleGetSize={handleGetSize}
          tableArrayCustomRowButtons={tableArrayCustomRowButtons}
          columnsToShow={enumTableColumnsToShow.MEDIUM}
        />
      </div>
      <div className="puggysoft-two-divs-side-by-side-child">
        <UrbanismoRequisitosGenericTable
          tableTitle={tableSubTitleTwo}
          numberPagesToShow={numberPagesToShow}
          handleGetData={handleGetDataTwo}
          handleGetSize={handleGetSizeTwo}
          tableArrayCustomRowButtons={tableArrayCustomRowButtonsTwo}
          columnsToShow={enumTableColumnsToShow.MEDIUM}
        />
      </div>
    </div>
  );
}

export default UrbanismoTramiteRequisitosStepTwo;
