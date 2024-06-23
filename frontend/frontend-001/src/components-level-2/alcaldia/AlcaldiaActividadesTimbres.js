import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import useInput from "../../hooks/useInput";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import i18n from "../../i18n/i18n";
import CommonLoading from "../../components-level-1/CommonLoading";
import { handleFilterRequest, handleEditRequest, handleGetRequest } from "../../actions/HandleManager";
import {
  handleValidation,
  classNameFormTextNew
} from "../../validations/alcaldia/HandleAlcaldiaActividadesTimbresValidations";
import AlcaldiaRecursosMunicipalesTimbresGenericTable from "./generic/AlcaldiaRecursosMunicipalesTimbresGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";
import "./../css/all-forms.css";

function AlcaldiaRecursosMunicipalesTimbresTable() {
  const tableTitle = i18n.alcaldiaRecursosMunicipalesTable.titleTimbres;
  const pageSize = 20;
  const numberPagesToShow = 7;

  const history = useHistory();
  const actividadSelected = history && history.location && history.location.state.actividad;
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);
  const [classNameFormText, setClassNameFormText] = useState(classNameFormTextNew);
  const [timbre, setTimbre] = useState(null);
  const [isRequestInProgressTimbres, setIsRequestInProgressTimbres] = useState(false);

  const {
    value: valueCantidadTimbres,
    onChange: onChangeCantidadTimbres
  } = useInput();

  function handleGetData(activePage, filterBody, updateArrayData) {
    handleFilterRequest(`alcaldia-recursos-municipales/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }

  function handleGetSize(filterBody, setTotalPages) {
    handleFilterRequest(`alcaldia-recursos-municipales/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  useEffect(() => {
    handleValidation({ valueCantidadTimbres }, setClassNameFormText);
  }, [valueCantidadTimbres]);

  const handleAfterEdit = function () {
    setIsRequestInProgress(false);
  };

  const handleAfterGetTimbreSuccess = (timbre) => {
    setTimbre(timbre);
    setIsRequestInProgressTimbres(false);
  }

  useEffect(() => {
    if (actividadSelected.idTimbre) {
      setIsRequestInProgressTimbres(true);
      handleGetRequest(`alcaldia-recursos-municipales/${actividadSelected.idTimbre}`, handleAfterGetTimbreSuccess);
    }
  }, []);

  function handleSelectionAdd(timbreSelected) {
    const isValid = handleValidation({ valueCantidadTimbres }, setClassNameFormText);
    if (isValid) {
      setTimbre(timbreSelected);
      setIsRequestInProgress(true);
      const username = window.sessionStorage.getItem("username");
      actividadSelected.idTimbre = timbreSelected.id;
      actividadSelected.cantidadTimbres = valueCantidadTimbres;
      actividadSelected.updatedBy = username;
      handleEditRequest(
        "alcaldia-actividades/",
        actividadSelected,
        actividadSelected.id,
        handleAfterEdit
      );
    } else {
      alert(i18n.errorMessages.validationError);
    }
  }

  function handleSelectionDeleted(timbreSelected) {
    setTimbre(null);
    setIsRequestInProgress(true);
    const username = window.sessionStorage.getItem("username");
    actividadSelected.idTimbre = "";
    actividadSelected.cantidadTimbres = "";
    actividadSelected.updatedBy = username;
    handleEditRequest(
      "alcaldia-actividades/",
      actividadSelected,
      actividadSelected.id,
      handleAfterEdit
    );
  }

  const tableArrayCustomRowButtons = [
    {
      variant: "info",
      handleCustom: handleSelectionAdd,
      text: i18n.commonTable.addButton
    },
    {
      variant: "danger",
      handleCustom: handleSelectionDeleted,
      text: i18n.commonTable.deleteButton
    }
  ];



  const fixArrayData = data => {
    return data.map(timbre => {
      timbre.disponible = Number(timbre.talonarioFinal) - Number(timbre.talonarioMovimiento);
      return timbre;
    });
  };

  if (isRequestInProgress || isRequestInProgressTimbres) {
    return <CommonLoading></CommonLoading>;
  }

  return (
    <div>
      <Card>
        <Card.Header
          as="h2">{`${i18n.alcaldiaActividadesTable.titleGroup} ${actividadSelected.name}`}
        </Card.Header>
        {timbre &&
          <Card.Header
            as="h4">{`${i18n.alcaldiaActividadesTable.titleNombreTimbre} ${timbre.name} - `}
            {`${i18n.alcaldiaActividadesTable.titleCantidadTimbres} ${actividadSelected.cantidadTimbres}`}
          </Card.Header>
        }
        <Card.Body>
          <div className="puggysoft-form-thirty-with">
            <Form>
              <Form.Group className="mb-3" controlId="codigo">
                <Form.Label>
                  {i18n.alcaldiaRecursosMunicipalesFoldersForm.fieldCantidadTimbres}
                </Form.Label>
                <Form.Control
                  onChange={onChangeCantidadTimbres}
                  value={valueCantidadTimbres}
                  type="number"
                />
                <Form.Text muted className={classNameFormText.cantidadTimbres}>
                  {i18n.alcaldiaRecursosMunicipalesFoldersForm.fieldFolderCantidadTimbres}
                </Form.Text>
              </Form.Group>
            </Form>
          </div>
        </Card.Body>
      </Card>
      <AlcaldiaRecursosMunicipalesTimbresGenericTable
        tableTitle={tableTitle}
        numberPagesToShow={numberPagesToShow}
        handleGetData={handleGetData}
        handleGetSize={handleGetSize}
        tableArrayCustomRowButtons={tableArrayCustomRowButtons}
        columnsToShow={enumTableColumnsToShow.MEDIUM}
        fixArrayData={fixArrayData}
      >
      </AlcaldiaRecursosMunicipalesTimbresGenericTable>
    </div>
  );
}

export default AlcaldiaRecursosMunicipalesTimbresTable;