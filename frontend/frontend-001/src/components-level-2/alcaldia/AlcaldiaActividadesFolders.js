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
} from "../../validations/alcaldia/HandleAlcaldiaActividadesFoldersValidations";
import AlcaldiaRecursosMunicipalesFoldersGenericTable from "./generic/AlcaldiaRecursosMunicipalesFoldersGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";
import "./../css/all-forms.css";

function AlcaldiaActividadesFolders () {
  const tableTitle = i18n.alcaldiaRecursosMunicipalesTable.titleFolders;
  const pageSize = 20;
  const numberPagesToShow = 7;

  const history = useHistory();
  const actividadSelected = history && history.location && history.location.state.actividad;
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);
  const [classNameFormText, setClassNameFormText] = useState(classNameFormTextNew);
  const [folder, setFolder] = useState(null);
  const [isRequestInProgressFolders, setIsRequestInProgressFolders] = useState(false);

  const {
    value: valueCantidadFolders
  } = useInput(1);

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`alcaldia-recursos-municipales/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(`alcaldia-recursos-municipales/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  useEffect(() => {
    handleValidation({ valueCantidadFolders }, setClassNameFormText);
  }, [valueCantidadFolders]);

  const handleAfterEdit = function () {
    setIsRequestInProgress(false);
  };

  const handleAfterGetFolderSuccess = (folder) => {
    setFolder(folder);
    setIsRequestInProgressFolders(false);
  };

  useEffect(() => {
    if (actividadSelected.idFolder) {
      setIsRequestInProgressFolders(true);
      handleGetRequest(`alcaldia-recursos-municipales/${actividadSelected.idFolder}`, handleAfterGetFolderSuccess);
    }
  }, []);

  function handleSelectionAdd (folderSelected) {
    const isValid = handleValidation({ valueCantidadFolders }, setClassNameFormText);
    if (isValid) {
      setFolder(folderSelected);
      setIsRequestInProgress(true);
      const username = window.sessionStorage.getItem("username");
      actividadSelected.idFolder = folderSelected.id;
      actividadSelected.cantidadFolders = valueCantidadFolders;
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

  function handleSelectionDeleted (folderSelected) {
    setFolder(null);
    setIsRequestInProgress(true);
    const username = window.sessionStorage.getItem("username");
    actividadSelected.idFolder = "";
    actividadSelected.cantidadFolders = "";
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
    return data.map(folder => {
      folder.disponible = Number(folder.talonarioFinal) - Number(folder.talonarioMovimiento);
      return folder;
    });
  };

  if (isRequestInProgress || isRequestInProgressFolders) {
    return <CommonLoading></CommonLoading>;
  }

  return (
    <div>
      <Card>
        <Card.Header
          as="h2">{`${i18n.alcaldiaActividadesTable.titleGroup} ${actividadSelected.name}`}
        </Card.Header>
        {folder &&
          <Card.Header
            as="h4">{`${i18n.alcaldiaActividadesTable.titleNombreFolder} ${folder.name} - `}
            {`${i18n.alcaldiaActividadesTable.titleCantidadFolders} ${actividadSelected.cantidadFolders}`}
          </Card.Header>
        }
        <Card.Body>
          <div className="puggysoft-form-thirty-with">
            <Form>
              <Form.Group className="mb-3" controlId="codigo">
                <Form.Label>
                  {i18n.alcaldiaActividadesTable.fieldCantidadFolders}
                </Form.Label>
                <Form.Control
                  value={valueCantidadFolders}
                  type="number"
                  disabled
                />
                <Form.Text muted className={classNameFormText.cantidadFolders}>
                  {i18n.alcaldiaRecursosMunicipalesFoldersForm.fieldFolderCantidadTimbres}
                </Form.Text>
              </Form.Group>
            </Form>
          </div>
        </Card.Body>
      </Card>
      <AlcaldiaRecursosMunicipalesFoldersGenericTable
        tableTitle={tableTitle}
        numberPagesToShow={numberPagesToShow}
        handleGetData={handleGetData}
        handleGetSize={handleGetSize}
        tableArrayCustomRowButtons={tableArrayCustomRowButtons}
        columnsToShow={enumTableColumnsToShow.MEDIUM}
        fixArrayData={fixArrayData}
      >
      </AlcaldiaRecursosMunicipalesFoldersGenericTable>
    </div>
  );
}

export default AlcaldiaActividadesFolders;
