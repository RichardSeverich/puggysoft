import React, {
  useState,
  useEffect
} from "react";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { handleValidation, classNameFormTextNew } from "./../../validations/mensualidad/HandleColegiaturaMatriculaFormValidations";
import useInput from "./../../hooks/useInput";
import i18n from "./../../i18n/i18n";
import CommonForm from "./../../components-level-1/CommonForm";
import enumInputType from "./../../models/enumInputType";
import enumBootstrapVariant from "./../../models/enumBootstrapVariant";
import { openCommonMessage } from "./../../redux/reducers/reducerCommonMessage";
import { handleAddRequest, handleEditRequest } from "../../actions/HandleManager";
import CommonLoading from "../../components-level-1/CommonLoading";

function ColegiaturaMatriculaForm () {
  const dispatch = useDispatch();
  const history = useHistory();
  const editDataParam = history && history.location && history.location.state;
  const [editData, setEditData] = useState(editDataParam);
  const [classNameFormText, setClassNameFormText] = useState(classNameFormTextNew);
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);

  const name = editData && editData.data.name !== null ? editData.data.name : "";
  const salePrice = editData && editData.data.salePrice !== null ? editData.data.salePrice : "";
  const description = editData && editData.data.description !== null ? editData.data.description : "";

  const { value: valueName, onChange: onChangeName, setValue: setName } = useInput(name);
  const { value: valueSalePrice, onChange: onChangeSalePrice, setValue: setSalePrice } = useInput(salePrice);
  const { value: valueDescription, onChange: onChangeDescription, setValue: setDescription } = useInput(description);

  const getBody = function () {
    const username = window.sessionStorage.getItem("username");
    const tenant = window.sessionStorage.getItem("tenant");
    const body = {
      name: valueName,
      purchasePrice: 0,
      salePrice: valueSalePrice,
      stock: 9999999,
      description: valueDescription,
      createdBy: username,
      updatedBy: username,
      tenant
    };
    return body;
  };

  const handleReset = function () {
    setName("");
    setSalePrice("");
    setDescription("");
    setEditData(null);
  };

  useEffect(() => {
    const body = getBody();
    handleValidation(body, setClassNameFormText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueName, valueSalePrice, valueDescription]);

  const handleAddEdit = function (event) {
    event.preventDefault();
    setIsRequestInProgress(true);
    const body = getBody();
    const isValid = handleValidation(body, setClassNameFormText);
    if (isValid) {
      if (editData) {
        const id = editData.data.id;
        handleEditRequest("products/", body, id, handleAferAddEdit, showErrorMessage, false);
      } else {
        handleAddRequest("products/", body, handleAferAddEdit, false, showErrorMessage);
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
    title: i18n.mensualidad.colegiaturaMatriculaFormTitle,
    handleAction: handleAddEdit,
    buttonText: i18n.commonForm.saveButton,
    buttonVariant: enumBootstrapVariant.PRIMARY,
    schema: [
      {
        key: "name",
        inputType: enumInputType.TEXT,
        label: i18n.mensualidad.colegiaturaMatriculaConceptLabel,
        inputValue: valueName,
        suggestionText: i18n.mensualidad.colegiaturaMatriculaConceptError,
        suggestionTextClassName: classNameFormText.name,
        onChange: onChangeName,
        isDisabledEdit: false,
        inputSelectOption: undefined
      },
      {
        key: "salePrice",
        inputType: enumInputType.NUMBER,
        label: i18n.mensualidad.colegiaturaMatriculaImportBsLabel,
        inputValue: valueSalePrice,
        suggestionText: i18n.mensualidad.colegiaturaMatriculaImportBsError,
        suggestionTextClassName: classNameFormText.salePrice,
        onChange: onChangeSalePrice,
        isDisabledEdit: false,
        inputSelectOption: undefined
      },
      {
        key: "description",
        inputType: enumInputType.DATE,
        label: i18n.mensualidad.colegiaturaMatriculaCancellationDateLabel,
        inputValue: valueDescription,
        suggestionText: i18n.mensualidad.colegiaturaMatriculaCancellationDateError,
        suggestionTextClassName: classNameFormText.description,
        onChange: onChangeDescription,
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

export default ColegiaturaMatriculaForm;
