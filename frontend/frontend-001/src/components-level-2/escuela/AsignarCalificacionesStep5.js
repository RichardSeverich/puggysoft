import React, {
  useState,
  useEffect
} from "react";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { handleValidation, classNameFormTextNew } from "./../../validations/escuela/HandleCalificacionesFormValidations";
import useInput from "./../../hooks/useInput";
import i18n from "./../../i18n/i18n";
import CommonForm from "./../../components-level-1/CommonForm";
import enumInputType from "./../../models/enumInputType";
import enumBootstrapVariant from "./../../models/enumBootstrapVariant";
import { openCommonMessage } from "./../../redux/reducers/reducerCommonMessage";
import { handleAddRequest, handleEditRequest } from "../../actions/HandleManager";
import CommonLoading from "../../components-level-1/CommonLoading";

function AsignarCalificacionesStep5 () {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    estudianteSelected,
    cursoSelected,
    materiaSelected,
    notaSelected,
    calificacionData
  } = history && history.location && history.location.state;

  const [editData, setEditData] = useState(calificacionData);
  const [classNameFormText, setClassNameFormText] = useState(classNameFormTextNew);
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);
  const calificacion = editData && editData.notaValor !== null ? editData.notaValor : "";
  const { value: valueCalificacion, onChange: onChangeCalificacion } = useInput(calificacion);

  const getBody = function () {
    const username = window.sessionStorage.getItem("username");
    const tenant = window.sessionStorage.getItem("tenant");
    const body = {
      estudiante: estudianteSelected.username,
      curso: cursoSelected.shortName,
      materia: materiaSelected.shortName,
      nota: notaSelected.shortName,
      notaValor: valueCalificacion,
      tenant,
      createdBy: username,
      updatedBy: username
    };
    return body;
  };

  useEffect(() => {
    const body = getBody();
    handleValidation(body, setClassNameFormText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueCalificacion]);

  const handleAddEdit = function (event) {
    event.preventDefault();
    setIsRequestInProgress(true);
    const body = getBody();
    const isValid = handleValidation(body, setClassNameFormText);
    if (isValid) {
      if (editData) {
        const id = editData.id;
        handleEditRequest("escuela-calificaciones/", body, id, handleAferAddEdit, showErrorMessage, false);
      } else {
        handleAddRequest("escuela-calificaciones/", body, handleAferAddEdit, false, showErrorMessage);
      }
    } else {
      showValidationMessage();
    }
  };

  const handleAferAddEdit = function (idCalificacion) {
    setEditData({ id: idCalificacion, calificacion: valueCalificacion });
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
        key: "estudiante",
        inputType: enumInputType.TEXT,
        label: i18n.escuela.estudiante,
        inputValue: estudianteSelected.name + " " + estudianteSelected.lastName,
        suggestionText: "",
        suggestionTextClassName: "",
        onChange: () => { },
        isDisabledEdit: true,
        inputSelectOption: undefined
      },
      {
        key: "curso",
        inputType: enumInputType.TEXT,
        label: i18n.escuela.curso,
        inputValue: cursoSelected.name,
        suggestionText: "",
        suggestionTextClassName: "",
        onChange: () => { },
        isDisabledEdit: true,
        inputSelectOption: undefined
      },
      {
        key: "materia",
        inputType: enumInputType.TEXT,
        label: i18n.escuela.materia,
        inputValue: materiaSelected.name,
        suggestionText: "",
        suggestionTextClassName: "",
        onChange: () => { },
        isDisabledEdit: true,
        inputSelectOption: undefined
      },
      {
        key: "nota",
        inputType: enumInputType.TEXT,
        label: i18n.escuela.nota,
        inputValue: notaSelected.name,
        suggestionText: "",
        suggestionTextClassName: "",
        onChange: () => { },
        isDisabledEdit: true,
        inputSelectOption: undefined
      },
      {
        key: "nota-valor",
        inputType: enumInputType.NUMBER,
        label: i18n.escuela.calificacion,
        inputValue: valueCalificacion,
        suggestionText: i18n.escuela.calificacionValidation,
        suggestionTextClassName: classNameFormText.calificacion,
        onChange: onChangeCalificacion,
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

export default AsignarCalificacionesStep5;
