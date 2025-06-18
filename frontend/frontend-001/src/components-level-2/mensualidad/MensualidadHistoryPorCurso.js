import React, { useState } from "react";
import { useHistory } from "react-router";
import HistoryPorCursoGenericTable from "./generic/HistoryPorCursoGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";
import pdfBuilder from "../../tools/mensualidad/pdfBuilderInformeGeneric"
import i18n from "../../i18n/i18n";
import { Button, Container } from "react-bootstrap";
import { handleGetRequest } from "../../actions/HandleManager";

function MensualidadHistoryPorCurso () {
  const history = useHistory();
  const { data } = history.location.state

  const tableTitle = i18n.HistoryPorEstudianteCursoTable.tableSubTitle + data.name;
  const numberPagesToShow = 1;

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleGetRequest(`history-course?courseShortName=${data.shortName}&courseId=${data.id}`,
      (data) => { updateArrayData(data); },
      () => {console.log('Error')},
      false
    )
  }

  function handleGetSize (filterBody, setTotalPages) {
    setTotalPages(1)
  }

  const GeneratePDF = () => {
    pdfBuilder({ curso: data });
  }

  function fixArrayData(listData) {
    return listData.map((data, index) => {
      return {
        number: index + 1,
        ...data,
        debtEnrollment: <strong className={`text-danger`}>{data.debtEnrollment}</strong>,
        debtTuition: <strong className={`text-danger`}>{data.debtTuition}</strong>,
        debtOther: <strong className={`text-danger`}>{data.debtOther}</strong>,
      }
    });
  }

  return (
    <>
      <Container className="my-3">
        <Button onClick={GeneratePDF}>Generar PDF</Button>
      </Container>
      <HistoryPorCursoGenericTable
        tableTitle={tableTitle}
        numberPagesToShow={numberPagesToShow}
        handleGetData={handleGetData}
        handleGetSize={handleGetSize}
        columnsToShow={enumTableColumnsToShow.FULL}
        fixArrayData={fixArrayData}
      >
      </HistoryPorCursoGenericTable>
    </>
  );
}

export default MensualidadHistoryPorCurso;
