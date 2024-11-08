import React, {
  useState,
  useEffect
} from "react";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { handleValidation, classNameFormTextNew } from "./../../validations/sales/HandleProductGroupsFormValidations";
import useInput from "./../../hooks/useInput";
import appUrlConfig from "./../../tools/appUrlConfig";
import i18n from "./../../i18n/i18n";
import CommonForm from "./../../components-level-1/CommonForm";
import enumPaths from "../../models/enumPaths";
import enumInputType from "./../../models/enumInputType";
import enumBootstrapVariant from "./../../models/enumBootstrapVariant";
import { openCommonMessage } from "./../../redux/reducers/reducerCommonMessage";
import { handleAddRequest, handleEditRequest, handleAddFileRequest } from "../../actions/HandleManager";
import CommonLoading from "../../components-level-1/CommonLoading";

function MateriasForm () {
  const dispatch = useDispatch();
  const history = useHistory();
  const isEditDefaultValue = history && history.location && history.location.state;
  const [isEdit] = useState(isEditDefaultValue);
  const editDataParam = history && history.location && history.location.state;
  const [editData, setEditData] = useState(editDataParam);
  const [classNameFormText, setClassNameFormText] = useState(classNameFormTextNew);
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);

  // CONFIGURE IMAGE
  const fileName = "product-groups-default.jpg";
  const imageUrlInit = `${appUrlConfig.PROTOCOL}//${appUrlConfig.HOSTNAME}:${appUrlConfig.PORT}/${fileName}`;
  let imageUrlInitAux = imageUrlInit;
  const productImage =
  isEdit &&
  isEdit.data &&
  isEdit.data.image &&
  isEdit.data.image !== null
    ? isEdit.data.image
    : null;
  
  if (productImage && productImage !== null) {
    if (productImage.includes("blob:")) {
      imageUrlInitAux = productImage;
    } else {
      imageUrlInitAux = `data:image/jpeg;base64, ${productImage}`;
    }
  }
  const { value: valuePictureToShow, setValue: setValuePictureToShow } = useInput(imageUrlInitAux);
// ----

  const name = editData && editData.data.name !== null ? editData.data.name : "";

  const { value: valueName, onChange: onChangeName, setValue: setName } = useInput(name);
  const { value: valuePicture, setValue: setPicture } = useInput(null);
  const { value: valuePicturePath, onChange: onChangePicturePath, setValue: setPicturePath } = useInput("");

  const getBody = function () {
    const username = window.sessionStorage.getItem("username");
    const tenant = window.sessionStorage.getItem("tenant");
    const body = {
      name: valueName,
      tenant,
      createdBy: username,
      updatedBy: username
    };
    return body;
  };

  const handleReset = function () {
    setName("");
    setPicture(null);
    setPicturePath("");
    setValuePictureToShow(imageUrlInit);
    setEditData(null);
  };

  function finishLoading () {
    setIsRequestInProgress(false);
    handleReset();
    showSuccessMessage();
    if (isEdit) {
      history.push({
        pathname: enumPaths.SALES_GROUP_PRODUCTS_TABLE_FILTER,
      });
    }
  }

  useEffect(() => {
    const body = getBody();
    handleValidation(body, setClassNameFormText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueName]);

  const handleAddEdit = function (event) {
    event.preventDefault();
    setIsRequestInProgress(true);
    const body = getBody();
    const isValid = handleValidation(body, setClassNameFormText);
    if (isValid) {
      if (editData) {
        const id = editData.data.id;
        handleEditRequest("product-groups/", body, id, handleAferAddEdit, showErrorMessage, false);
      } else {
        handleAddRequest("product-groups/", body, handleAferAddEdit, false, showErrorMessage);
      }
    } else {
      showValidationMessage();
    }
  };

  const handleAferAddEdit = function (idProductGroups) {
    if (isEdit) {
      handleAddImage(isEdit.data?.id)
    } else {
      handleAddImage(idProductGroups)
    }
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
        : enumBootstrapVariant.SUCCESS
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

  const handleUploadPicture = (event) => {
    // file.name file.size file.type
    const file = event.target.files[0];
    // const fileTypeName = file.constructor.name
    setPicture(file);
    onChangePicturePath(event);
    setValuePictureToShow(URL.createObjectURL(file));
  };

  const handleAddImage = (producGrouptId) => {
    // const pictureFile = { ...valuePicture }
    if (valuePicture !== null) {
      handleAddFileRequest("product-groups/picture/",
        valuePicture,
        producGrouptId,
        finishLoading,
        false,
        finishLoading);
    } else {
      finishLoading();
    }
  };

  const formProps = {
    title: i18n.productGroupForm.title,
    handleAction: handleAddEdit,
    buttonText: i18n.commonForm.saveButton,
    buttonVariant: enumBootstrapVariant.PRIMARY,
    schema: [
      {
        key: "name",
        inputType: enumInputType.TEXT,
        label: i18n.productGroupForm.fieldName,
        inputValue: valueName,
        suggestionText: i18n.escuela.materiasNameError,
        suggestionTextClassName: classNameFormText.name,
        onChange: onChangeName,
        isDisabledEdit: false,
        inputSelectOption: undefined
      },
      {
        key: "image-product-group",
        inputType: enumInputType.FILE_IMAGE,
        label: i18n.productGroupForm.fieldImage,
        inputValue: valuePicturePath,
        pictureToShow: valuePictureToShow,
        suggestionText: i18n.productGroupForm.formTextImage,
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

export default MateriasForm;
