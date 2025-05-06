import React, { useState } from "react";
import { useHistory } from "react-router";
import HistoryPorEstudianteCursoGenericTable from "./generic/HistoryPorEstudianteCursoGenericTable";
import enumRoles from "../../models/users/enumRoles";
import enumSaleTableViewType from "../../models/sales/enumSaleTableViewType";
import enumPaths from "./../../models/enumPaths";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";
import pdfBuilder from "../../tools/mensualidad/pdfBuilderHistoryGeneric"
import i18n from "../../i18n/i18n";
import enumPaymentStatus from "../../models/mensualidad/enumPaymentStatus";
import { Button, Container } from "react-bootstrap";
import { handleGetRequest } from "../../actions/HandleManager";

function MensualidadHistoryPorEstudianteCurso () {
  const history = useHistory();
  const {
    cursoSelected,
    estudianteSelected,
  } = history.location.state?.data

  const tableTitle = i18n.HistoryPorEstudianteCursoTable.tableTitle + estudianteSelected.username;
  const tableSubTitle = i18n.HistoryPorEstudianteCursoTable.tableSubTitle + cursoSelected.name;
  const numberPagesToShow = 1;

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleGetRequest(`history-by-student-curse?courseName=${cursoSelected.name}&idCourse=${cursoSelected.id}&studentUsername=${estudianteSelected.username}`,
      (data) => { updateArrayData(data); },
      () => {console.log('Error')},
      false
    )
  }

  function handleGetSize (filterBody, setTotalPages) {
    setTotalPages(1)
  }

  const handleSelection = (data) => {
    handleGetRequest(`sales/${data.saleId}`,
      (saleData) => {
        let view = '';
        const role = window.sessionStorage.getItem('role');
        if (role === enumRoles.MENSUALIDAD_ENCARGADO) {
          view = enumSaleTableViewType.FOR_SELLER;
        }
        history.push({
          pathname: enumPaths.MENSUALIDAD_PAGO_STEP3_ENCARGADO,
          state: {
            data: {
              saleData,
              estudianteSelected,
              cursoSelected,
              saleTableViewType: view,
            }
          }
        });
      },
      () => {console.log('Error')},
      false
    )
  }

  const GeneratePDF = () => {
    pdfBuilder({ estudiante: estudianteSelected, curso: cursoSelected });
  }

  const tableArrayCustomRowButtons = [
    {
      variant: "info",
      handleCustom: handleSelection,
      text: i18n.HistoryPorEstudianteCursoTable.detailsButton,
    }
  ];

  function fixArrayData(listData) {
    return listData.map((data, index) => {
      const statusText = {
        DONE: i18n.mensualidadStatus.done,
        IN_PROGRESS: i18n.mensualidadStatus.inProgress,
        TODO: i18n.mensualidadStatus.todo,
      }
      const color = data.status === enumPaymentStatus.DONE? 'success'
          : data.status === enumPaymentStatus.IN_PROGRESS? 'primary'
          : 'danger'
      return {
        ...data,
        number: 1 + index,
        statusValue: data.status,
        buttonDisabled: data.status === enumPaymentStatus.TODO,
        status: 
          <strong
            className={`text-${color}`}
          >
            {statusText[data.status]}
          </strong>,
        limitDateBool: data.limitDateBool? i18n.HistoryPorEstudianteCursoTable.limitDateValueYes
            : i18n.HistoryPorEstudianteCursoTable.limitDateValueNo,
      }
    })
  }

  return (
    <>
      <Container className="my-3">
        <Button onClick={GeneratePDF}>Generar PDF</Button>
      </Container>
      <HistoryPorEstudianteCursoGenericTable
        tableTitle={tableTitle}
        tableSubTitle={tableSubTitle}
        numberPagesToShow={numberPagesToShow}
        handleGetData={handleGetData}
        handleGetSize={handleGetSize}
        tableArrayCustomRowButtons={tableArrayCustomRowButtons}
        columnsToShow={enumTableColumnsToShow.FULL}
        fixArrayData={fixArrayData}
      >
      </HistoryPorEstudianteCursoGenericTable>
    </>
  );
}

export default MensualidadHistoryPorEstudianteCurso;
