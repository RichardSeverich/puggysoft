import React, {
  useState,
  useEffect
} from "react";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { handleValidation, classNameFormTextNew } from "./../../validations/escuela/HandleNotasFormValidations";
import useInput from "./../../hooks/useInput";
import i18n from "./../../i18n/i18n";
import CommonForm from "./../../components-level-1/CommonForm";
import enumInputType from "./../../models/enumInputType";
import enumBootstrapVariant from "./../../models/enumBootstrapVariant";
import { openCommonMessage } from "./../../redux/reducers/reducerCommonMessage";
import { handleAddRequest, handleEditRequest } from "../../actions/HandleManager";
import CommonLoading from "../../components-level-1/CommonLoading";

function NotasForm () {
  const dispatch = useDispatch();
  const history = useHistory();
  const editDataParam = history && history.location && history.location.state;
  const [editData, setEditData] = useState(editDataParam);
  const [classNameFormText, setClassNameFormText] = useState(classNameFormTextNew);
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);

  const name = editData && editData.data.name !== null ? editData.data.name : "";
  const shortName = editData && editData.data.shortName !== null ? editData.data.shortName : "";
  const porcentaje = editData && editData.data.porcentaje !== null ? editData.data.porcentaje : "";

  const { value: valueName, onChange: onChangeName, setValue: setName } = useInput(name);
  const { value: valueShortName, onChange: onChangeShortName, setValue: setShortName } = useInput(shortName);
  const { value: valuePorcentaje, onChange: onChangePorcentaje, setValue: setPorcentaje } = useInput(porcentaje);

  const getBody = function () {
    const username = window.sessionStorage.getItem("username");
    const tenant = window.sessionStorage.getItem("tenant");
    const body = {
      name: valueName,
      shortName: valueShortName,
      porcentaje: valuePorcentaje,
      tenant,
      createdBy: username,
      updatedBy: username
    };
    return body;
  };

  const handleReset = function () {
    setName("");
    setShortName("");
    setPorcentaje("");
    setEditData(null);
  };

  useEffect(() => {
    const body = getBody();
    handleValidation(body, setClassNameFormText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueName, valueShortName, valuePorcentaje]);

  const handleAddEdit = function (event) {
    event.preventDefault();
    setIsRequestInProgress(true);
    const body = getBody();
    const isValid = handleValidation(body, setClassNameFormText);
    if (isValid) {
      if (editData) {
        const id = editData.data.id;
        handleEditRequest("escuela-notas/", body, id, handleAferAddEdit, showErrorMessage, false);
      } else {
        handleAddRequest("escuela-notas/", body, handleAferAddEdit, false, showErrorMessage);
      }
    } else {
      showValidationMessage();
    }
  };

  const handleAferAddEdit = function () {
    handleReset();
    setIsRequestInProgress(false);
    showSuccessMessage();
  };

  const showSuccessMessage = function () {
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
    setIsRequestInProgress(false);
    dispatch(openCommonMessage({
      isMessageModalVisible: true,
      messageModalTitle: i18n.errorMessages.errorTitle,
      messageModalBody: errorMessage,
      messageModalVariant: enumBootstrapVariant.DANGER
    }));
  };

  const showValidationMessage = function () {
    setIsRequestInProgress(false);
    dispatch(openCommonMessage({
      isMessageModalVisible: true,
      messageModalTitle: i18n.errorMessages.validationErrorTitle,
      messageModalBody: i18n.errorMessages.validationError,
      messageModalVariant: enumBootstrapVariant.DANGER
    }));
  };

  const formProps = {
    title: i18n.escuela.notasFormTitle,
    handleAction: handleAddEdit,
    buttonText: i18n.commonForm.saveButton,
    buttonVariant: enumBootstrapVariant.PRIMARY,
    schema: [
      {
        key: "name",
        inputType: enumInputType.TEXT,
        label: i18n.escuela.notasNameLabel,
        inputValue: valueName,
        suggestionText: i18n.escuela.notasNameError,
        suggestionTextClassName: classNameFormText.name,
        onChange: onChangeName,
        isDisabledEdit: false,
        inputSelectOption: undefined
      },
      {
        key: "shortName",
        inputType: enumInputType.TEXT,
        label: i18n.escuela.notasShortNameLabel,
        inputValue: valueShortName,
        suggestionText: i18n.escuela.notasShortNameError,
        suggestionTextClassName: classNameFormText.shortName,
        onChange: onChangeShortName,
        isDisabledEdit: false,
        inputSelectOption: undefined
      },
      {
        key: "porcentaje",
        inputType: enumInputType.NUMBER,
        label: i18n.escuela.notasPorcentajeLabel,
        inputValue: valuePorcentaje,
        suggestionText: i18n.escuela.notasPorcentajeError,
        suggestionTextClassName: classNameFormText.porcentaje,
        onChange: onChangePorcentaje,
        isDisabledEdit: false,
        inputSelectOption: undefined
      }
    ]
  };

  if (isRequestInProgress) {
    return <CommonLoading />;
  }

  return (
    <CommonForm
      title={formProps.title}
      handleAction={formProps.handleAction}
      buttonText={formProps.buttonText}
      buttonVariant={formProps.buttonVariant}
      schema={formProps.schema}
    />
  );
}

export default NotasForm;
