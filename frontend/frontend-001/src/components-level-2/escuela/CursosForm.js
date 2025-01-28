import React, {
  useState,
  useEffect
} from "react";

import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { handleValidation, classNameFormTextNew } from "./../../validations/escuela/HandleCursosFormValidations";
import useInput from "./../../hooks/useInput";
import i18n from "./../../i18n/i18n";
import CommonForm from "./../../components-level-1/CommonForm";
import enumInputType from "./../../models/enumInputType";
import enumBootstrapVariant from "./../../models/enumBootstrapVariant";
import { openCommonMessage } from "./../../redux/reducers/reducerCommonMessage";
import { handleAddRequest, handleEditRequest, handleAddFileRequest } from "../../actions/HandleManager";
import CommonLoading from "../../components-level-1/CommonLoading";
import enumSystems from "../../models/enumSystems";
import appUrlConfig from "../../tools/appUrlConfig";
import enumPaths from "../../models/enumPaths";

function CursosForm (props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const historyState = history && history.location && history.location.state;
  const [editData, setEditData] = useState(historyState);
  const [classNameFormText, setClassNameFormText] = useState(classNameFormTextNew);
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);

  const whatSystemIs = historyState ? historyState.whatSystemIs : props.whatSystemIs;
  let formTitle;
  let nameLabel;
  let shortNameLabel;
  let gestionLabel;
  let imageLabel;
  let imageErrorText;
  let pathTable;
  switch (whatSystemIs) {
  case enumSystems.MENSUALIDAD:
    formTitle = i18n.mensualidad.programaPostgradoFormTitle;
    nameLabel = i18n.mensualidad.programaPostgradoNameLabel;
    shortNameLabel = i18n.mensualidad.programaPostgradoCodigoLabel;
    gestionLabel = i18n.mensualidad.programaPostgradoGestionErrorText;
    imageLabel = i18n.mensualidad.programaPostgradoImageLabel;
    imageErrorText = i18n.mensualidad.programaPostgradoImageErrorText;
    pathTable = enumPaths.MENSUALIDAD_PROGRAMA_POSTGRADO_CURSO_TABLE;
    break;
  default:
    formTitle = i18n.escuela.cursosFormTitle;
    nameLabel = i18n.escuela.cursosNameLabel;
    shortNameLabel = i18n.escuela.cursosShortNameLabel;
    gestionLabel = i18n.escuela.cursosGestionLabel;
    imageLabel = i18n.commonForm.image;
    imageErrorText = i18n.commonForm.selectImage;
    pathTable = enumPaths.ESCUELA_CURSOS_TABLE;
    break;
  }

  const name = editData && editData.data.name !== null ? editData.data.name : "";
  const shortName = editData && editData.data.shortName !== null ? editData.data.shortName : "";
  const gestion = editData && editData.data.gestion !== null ? editData.data.gestion : "";

  // CONFIGURE IMAGE
  const fileName = "product-groups-default.jpg";
  const imageUrlInit = `${appUrlConfig.PROTOCOL}//${appUrlConfig.HOSTNAME}:${appUrlConfig.PORT}/${fileName}`;
  let imageUrlInitAux = imageUrlInit;
  const productImage =
  editData &&
  editData.data &&
  editData.data.image &&
  editData.data.image !== null
    ? editData.data.image
    : null;
  if (productImage && productImage !== null) {
    if (productImage.includes("blob:")) {
      imageUrlInitAux = productImage;
    } else {
      imageUrlInitAux = `data:image/jpeg;base64, ${productImage}`;
    }
  }
  const { value: valuePictureToShow, setValue: setValuePictureToShow } = useInput(imageUrlInitAux);
  const { value: valuePicturePath, onChange: onChangePicturePath, setValue: setPicturePath } = useInput("");
  const { value: valuePicture, setValue: setPicture } = useInput(null);
  const { value: valueName, onChange: onChangeName, setValue: setName } = useInput(name);
  const { value: valueShortName, onChange: onChangeShortName, setValue: setShortName } = useInput(shortName);
  const { value: valueGestion, onChange: onChangeGestion, setValue: setGestion } = useInput(gestion);

  const getBodyCurso = function () {
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

  const getBodyProductGroup = function () {
    const username = window.sessionStorage.getItem("username");
    const tenant = window.sessionStorage.getItem("tenant");
    const body = {
      name: valueName,
      aux: valueShortName,
      tenant,
      createdBy: username,
      updatedBy: username
    };
    if (productImage !== null) {
      body.image = productImage;
    }
    return body;
  };

  const handleReset = function () {
    setName("");
    setShortName("");
    setGestion("");
    setPicture(null);
    setPicturePath("");
    setValuePictureToShow(imageUrlInit);
    setEditData(null);
  };

  useEffect(() => {
    const bodyCurso = getBodyCurso();
    handleValidation(bodyCurso, setClassNameFormText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueName, valueShortName, valueGestion]);

  const handleAddEdit = function (event) {
    event.preventDefault();
    setIsRequestInProgress(true);
    const bodyCurso = getBodyCurso();
    const bodyProductGroup = getBodyProductGroup();
    const isValid = handleValidation(bodyCurso, setClassNameFormText);
    if (isValid) {
      if (editData) {
        const idCurso = editData.data.id;
        const idProductGroup = editData.data.idProductGroup;
        handleEditRequest("escuela-cursos/", bodyCurso, idCurso, () => {}, () => {}, false);
        handleEditRequest("product-groups/", bodyProductGroup, idProductGroup, handleAferAddEdit, showErrorMessage, false);
      } else {
        handleAddRequest("escuela-cursos/", bodyCurso, () => {}, false, () => {}, false);
        handleAddRequest("product-groups/", bodyProductGroup, handleAferAddEdit, false, showErrorMessage);
      }
    } else {
      showValidationMessage();
    }
  };

  const handleAferAddEdit = function (id) {
    if (editData) {
      handleAddImage(editData.data?.idProductGroup);
    } else {
      handleAddImage(id);
    }
  };

  const handleAddImage = (id) => {
    if (valuePicture !== null) {
      handleAddFileRequest("product-groups/picture/",
        valuePicture,
        id,
        finishLoading,
        false,
        finishLoading);
    } else {
      finishLoading();
    }
  };

  function finishLoading () {
    setIsRequestInProgress(false);
    handleReset();
    showSuccessMessage();
    if (editData) {
      history.push({
        pathname: pathTable
      });
    }
  }

  const handleUploadPicture = (event) => {
    // file.name file.size file.type
    const file = event.target.files[0];
    // const fileTypeName = file.constructor.name
    setPicture(file);
    onChangePicturePath(event);
    setValuePictureToShow(URL.createObjectURL(file));
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
    title: formTitle,
    handleAction: handleAddEdit,
    buttonText: i18n.commonForm.saveButton,
    buttonVariant: enumBootstrapVariant.PRIMARY,
    schema: [
      {
        key: "name",
        inputType: enumInputType.TEXT,
        label: nameLabel,
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
        label: shortNameLabel,
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
        label: gestionLabel,
        inputValue: valueGestion,
        suggestionText: i18n.escuela.cursosGestionError,
        suggestionTextClassName: classNameFormText.gestion,
        onChange: onChangeGestion,
        isDisabledEdit: false,
        inputSelectOption: undefined
      },
      {
        key: "image-product-group",
        inputType: enumInputType.FILE_IMAGE,
        label: imageLabel,
        inputValue: valuePicturePath,
        pictureToShow: valuePictureToShow,
        suggestionText: imageErrorText,
        suggestionTextClassName: classNameFormText.image,
        onChange: handleUploadPicture,
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

CursosForm.propTypes = {
  whatSystemIs: PropTypes.oneOf([
    enumSystems.MENSUALIDAD,
    enumSystems.SALES,
    enumSystems.ESCUELA
  ])
};

CursosForm.defaultProps = {
  whatSystemIs: enumSystems.ESCUELA
};
