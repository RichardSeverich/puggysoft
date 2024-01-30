import React, {
  useState,
  useEffect
} from "react";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { handleValidation, classNameFormTextNew } from "./../../validations/escuela/HandleCursosFormValidations";
import useInput from "./../../hooks/useInput";
import i18n from "./../../i18n/i18n";
import CommonForm from "./../../components-level-1/CommonForm";
import enumInputType from "./../../models/enumInputType";
import enumBootstrapVariant from "./../../models/enumBootstrapVariant";
import { openCommonMessage } from "./../../redux/reducers/reducerCommonMessage";
import { handleAddRequest, handleEditRequest } from "../../actions/HandleManager";
import CommonLoading from "../../components-level-1/CommonLoading";

function CursosForm () {
  const dispatch = useDispatch();
  const history = useHistory();
  const editDataParam = history && history.location && history.location.state;
  const [editData, setEditData] = useState(editDataParam);
  const [classNameFormText, setClassNameFormText] = useState(classNameFormTextNew);
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);

  const name = editData && editData.data.name !== null ? editData.data.name : "";
  const shortName = editData && editData.data.shortName !== null ? editData.data.shortName : "";
  const gestion = editData && editData.data.gestion !== null ? editData.data.gestion : "";

  const { value: valueName, onChange: onChangeName, setValue: setName } = useInput(name);
  const { value: valueShortName, onChange: onChangeShortName, setValue: setShortName } = useInput(shortName);
  const { value: valueGestion, onChange: onChangeGestion, setValue: setGestion } = useInput(gestion);

  const getBody = function () {
    const username = window.sessionStorage.getItem("username");
    const tenant = window.sessionStorage.getItem("tenant");
    const body = {
      name: valueName,
      shortName: valueShortName,
      gestion: valueGestion,
      tenant,
      createdBy: username,
      updatedBy: username
    };
    return body;
  };

  const handleReset = function () {
    setName("");
    setShortName("");
    setGestion("");
    setEditData(null);
  };

  useEffect(() => {
    const body = getBody();
    handleValidation(body, setClassNameFormText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueName, valueShortName, valueGestion]);

  const handleAddEdit = function (event) {
    event.preventDefault();
    setIsRequestInProgress(true);
    const body = getBody();
    const isValid = handleValidation(body, setClassNameFormText);
    if (isValid) {
      if (editData) {
        const id = editData.data.id;
        handleEditRequest("escuela-cursos/", body, id, handleAferAddEdit, showErrorMessage, false);
      } else {
        handleAddRequest("escuela-cursos/", body, handleAferAddEdit, false, showErrorMessage);
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
    title: i18n.escuela.cursosFormTitle,
    handleAction: handleAddEdit,
    buttonText: i18n.commonForm.saveButton,
    buttonVariant: enumBootstrapVariant.PRIMARY,
    schema: [
      {
        key: "name",
        inputType: enumInputType.TEXT,
        label: i18n.escuela.cursosNameLabel,
        inputValue: valueName,
        suggestionText: i18n.escuela.cursosNameError,
        suggestionTextClassName: classNameFormText.name,
        onChange: onChangeName,
        isDisabledEdit: false,
        inputSelectOption: undefined
      },
      {
        key: "shortName",
        inputType: enumInputType.TEXT,
        label: i18n.escuela.cursosShortNameLabel,
        inputValue: valueShortName,
        suggestionText: i18n.escuela.cursosShortNameError,
        suggestionTextClassName: classNameFormText.shortName,
        onChange: onChangeShortName,
        isDisabledEdit: false,
        inputSelectOption: undefined
      },
      {
        key: "gestion",
        inputType: enumInputType.TEXT,
        label: i18n.escuela.cursosGestionLabel,
        inputValue: valueGestion,
        suggestionText: i18n.escuela.cursosGestionError,
        suggestionTextClassName: classNameFormText.gestion,
        onChange: onChangeGestion,
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

export default CursosForm;
