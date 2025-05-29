import i18n from "../../../i18n/i18n";
import { useDispatch } from "react-redux";
import { openCommonMessage } from "../../../redux/reducers/reducerCommonMessage";
import {
  handleFilterRequest,
  handleAddRequest,
  handleEditRequest,
} from "../../../actions/HandleManager";
import NotaGenericTable from "./NotaGenericTable";
import enumBootstrapVariant from "../../../models/enumBootstrapVariant";
import enumTableColumnsToShow from "../../../models/enumTableColumnsToShow";
import enumTableColumnCalification from "../../../models/escuela/enumTableColumnCalification";
import enumWebElements from "../../../models/enumWebElements";
import { useState } from "react";

function NotasEstudianteMateriaModals (props) {
  const dispatch = useDispatch();
  const [promedio, setPromedio] = useState(0)
  const {
    notaFinalShow,
    columnCalification,
    estudiante,
    curso,
    materia,
  } = props

  const tableSubTitle = columnCalification === enumTableColumnCalification.MANAGE? `
    ${i18n.escuela.estudiante}: ${estudiante} | ${i18n.escuela.curso}: ${curso.name} | ${i18n.escuela.materia}: ${materia.name}
  `
  : notaFinalShow? `
    Notas del ${i18n.escuela.estudiante}: ${estudiante} | Nota Final: ${promedio}
  `: `
    Notas del ${i18n.escuela.estudiante}: ${estudiante} 
  `;
  const pageSize = 200;
  const numberPagesToShow = 1;

  function getCalificacionDeNota(nota) {
    return new Promise((resolve) => {
      handleFilterRequest(`escuela-calificaciones/filter?page=0&size=1`,
        {
          estudianteCriteria: estudiante,
          estudianteOperator: "TEXT_EQUALS",
          cursoCriteria: curso.shortName,
          cursoOperator: "TEXT_EQUALS",
          materiaCriteria: materia.shortName,
          materiaOperator: "TEXT_EQUALS",
          notaCriteria: nota.shortName,
          notaOperator: "TEXT_EQUALS"
        }, (calificacion) => {
          resolve({
            ...nota,
            calificacion: calificacion[0]?.notaValor,
            idRelation: calificacion[0]?.id
          })
        }
      );
    })
  }
  // obtenermos las notas y la calificacion de cada uno de estas para el estudiante si es que la tiene
  function handleGetDataNotas (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`escuela-materias-notas/filter?page=${activePage - 1}&size=${pageSize}&materia=${materia.shortName}&contains=true`, filterBody,
      (responseData) => {
        const promises = responseData.map(nota =>
          getCalificacionDeNota(nota, estudiante, curso, materia)
        );
        Promise.all(promises).then((dataCalificacion) => {
          updateArrayData(dataCalificacion);
          const ponderado = dataCalificacion.reduce((prev, current) => {
            return prev + ((Number(current.porcentaje / 100)) * (Number(current.calificacion) || 0) )
          }, 0);
          setPromedio(ponderado)
          if (columnCalification === enumTableColumnCalification.MANAGE) {
            cargarInput(dataCalificacion);
          }
        });
      }
    );
  }

  function cargarInput(dataCalificacion) {
    dataCalificacion.map(async (data) => {
      await waitForElement(`#textbox-${data.id}`).then(element => {
        element.value = data.calificacion? data.calificacion: 0;
      }).catch(err => {
        console.log(err)
      })
    })
  }

  // escuchar el dom para los imputs de calificaciones
  function waitForElement(selector, timeout = 5000) {
    return new Promise((resolve, reject) => {
      const element = document.querySelector(selector);
      if (element) return resolve(element);
  
      const observer = new MutationObserver(() => {
        const el = document.querySelector(selector);
        if (el) {
          observer.disconnect();
          resolve(el);
        }
      });
  
      observer.observe(document.body, { childList: true, subtree: true });
  
      if (timeout) {
        setTimeout(() => {
          observer.disconnect();
          reject(new Error(`Elemento "${selector}" no apareció en ${timeout}ms`));
        }, timeout);
      }
    });
  }
  
  // obtenemos todas las notas por lo que la pagina siempre sera 1
  function handleGetSizeNotas (filterBody, setTotalPages) {
    handleFilterRequest(`escuela-materias-notas/filter/size?pageSize=${pageSize}&materia=${materia.shortName}&contains=true`, filterBody, setTotalPages);
  }

  const handleSelect = function (data, textboxId) {
    // setTableVisible(false);
    const tenant = window.sessionStorage.getItem('tenant')
    const username = window.sessionStorage.getItem('username')
    const textboxElement = document.getElementById(textboxId);
    if (data.calificacion || textboxElement.calificacion) {
      const id = data.idRelation? data.idRelation: textboxElement.idRelation;
      const body = {
        estudiante:estudiante,
        curso:curso.shortName,
        materia:materia.shortName,
        nota:data.shortName,
        notaValor:textboxElement.value,
        tenant:tenant,
        updatedBy:username
      };
      handleEditRequest("escuela-calificaciones/", body, id, (response) => {handleAfterSave(true, response)}, showErrorMessage, false);
    } else {
      textboxElement.calificacion = textboxElement.value;
      const body = {
        estudiante:estudiante,
        curso:curso.shortName,
        materia:materia.shortName,
        nota:data.shortName,
        notaValor:textboxElement.value,
        tenant:tenant,
        createdBy:username
      };
      handleAddRequest("escuela-calificaciones/", body, (response) => {handleAfterSave(false, response, textboxElement)}, false, showErrorMessage);
    }
    // handleAddRequest()
  };

  const handleAfterSave = function(isEdit, response, textboxElement) {
    if (isEdit) {
      showSuccessMessage(isEdit);
    } else {
      textboxElement.idRelation = response;
      showSuccessMessage(isEdit);
    }
  };

  const showSuccessMessage = function (editData) {
    dispatch(openCommonMessage({
      isMessageModalVisible: true,
      messageModalTitle: i18n.successMessages.successTitle,
      messageModalBody: editData
        ? i18n.successMessages.successfullyEdited
        : i18n.successMessages.successfullyCreated,
      messageModalVariant: editData
        ? enumBootstrapVariant.WARNING
        : enumBootstrapVariant.successMessages
    }));
  };

  const showErrorMessage = function (response, errorMessage) {
    dispatch(openCommonMessage({
      isMessageModalVisible: true,
      messageModalTitle: i18n.errorMessages.errorTitle,
      messageModalBody: errorMessage,
      messageModalVariant: enumBootstrapVariant.DANGER
    }));
  };

  const tableArrayCustomRowButtons = [
    {
      type: enumWebElements.TEXTBOX,
      placeholder: "",
      formType: "number"
    },
    {
      variant: "info",
      handleCustom: handleSelect,
      text: i18n.commonTable.addButton
    }
  ];

  function fixArrayData(dataList) {
    return dataList.map((data) => {
      return {
        ...data,
        calificacion: data.calificacion? data.calificacion: 'Sin calificar',
        porcentaje: `${data.porcentaje} %`
      };
    })
    
  }

  return (
    <div>
      <NotaGenericTable
        tableSubTitle={tableSubTitle}
        numberPagesToShow={numberPagesToShow}
        handleGetData={handleGetDataNotas}
        handleGetSize={handleGetSizeNotas}
        tableArrayCustomRowButtons={columnCalification === enumTableColumnCalification.MANAGE? tableArrayCustomRowButtons: null}
        columnsToShow={enumTableColumnsToShow.MEDIUM}
        columnCalification={columnCalification}
        fixArrayData={columnCalification === enumTableColumnCalification.VIEW? fixArrayData: null}
      />
    </div>
  );
}

export default NotasEstudianteMateriaModals;
