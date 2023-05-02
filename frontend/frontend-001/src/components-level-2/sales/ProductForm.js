import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CommonLoading from "./../../components-level-1/CommonLoading";
import i18n from "./../../i18n/i18n";
import useInput from "./../../hooks/useInput";
import appUrlConfig from "./../../tools/appUrlConfig";
import { handleAddRequest, handleEditRequest, handleAddFileRequest } from "../../actions/HandleManager";
import { handleValidation, classNameFormTextNew } from "./../../validations/sales/HandleProductFormValidations";
import CommonMessage from "./../../components-level-1/CommonMessage";

import "./../css/all-forms.css";
import "./product-form-styles.css";

function ProductForm (props) {
  const history = useHistory();
  const isEditDefaultValue = history && history.location && history.location.state;
  const [isEdit, setIsEdit] = useState(isEditDefaultValue);
  const [classNameFormText, setClassNameFormText] = useState(classNameFormTextNew);
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);
  // Message states
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [messageTitle, setMessageTitle] = useState("");
  const [messageText, setMessageText] = useState("");

  // CONFIGURE IMAGE
  const fileName = "products-default.jpg";
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

  // Put default values:
  const id = isEdit && isEdit.data.id !== null ? isEdit.data.id : "";
  const code = isEdit && isEdit.data.code !== null ? isEdit.data.code : "";
  const name = isEdit && isEdit.data.name !== null ? isEdit.data.name : "";
  const purchasePrice = isEdit && isEdit.data.purchasePrice !== null ? isEdit.data.purchasePrice : "";
  const salePrice = isEdit && isEdit.data.salePrice !== null ? isEdit.data.salePrice : "";
  const stock = isEdit && isEdit.data.stock !== null ? isEdit.data.stock : "";
  const minimumStock = isEdit && isEdit.data.minimumStock !== null ? isEdit.data.minimumStock : "";
  const description = isEdit && isEdit.data.description !== null ? isEdit.data.description : "";
  const barCode = isEdit && isEdit.data.barCode !== null ? isEdit.data.barCode : "";
  const location = isEdit && isEdit.data.location !== null ? isEdit.data.location : "";

  // Use custom hook
  const { value: valueCode, onChange: onChangeCode, reset: resetCode } = useInput(code);
  const { value: valueName, onChange: onChangeName, reset: resetName } = useInput(name);
  const { value: valuePurchasePrice, onChange: onChangePurchasePrice, reset: resetPurchasePrice } = useInput(purchasePrice);
  const { value: valueSalePrice, onChange: onChangeSalePrice, reset: resetSalePrice } = useInput(salePrice);
  const { value: valueStock, onChange: onChangeStock, reset: resetStock } = useInput(stock);
  const { value: valueMinimumStock, onChange: onChangeMinimumStock, reset: resetMinimumStock } = useInput(minimumStock);
  const { value: valueDescription, onChange: onChangeDescription, reset: resetDescription } = useInput(description);
  const { value: valueBarCode, onChange: onChangeBarCode, reset: resetBarCode } = useInput(barCode);
  const { value: valueLocation, onChange: onChangeLocation, reset: resetLocation } = useInput(location);
  const { value: valuePicture, setValue: setPicture } = useInput(null);
  const { value: valuePicturePath, onChange: onChangePicturePath, setValue: setPicturePath } = useInput("");

  const handleReset = () => {
    resetCode();
    resetName();
    resetPurchasePrice();
    resetSalePrice();
    resetStock();
    resetMinimumStock();
    resetDescription();
    resetBarCode();
    resetLocation();
    setPicture(null);
    setPicturePath("");
    setValuePictureToShow(imageUrlInit);
  };

  const getBody = function () {
    const username = window.sessionStorage.getItem("username");
    const tenant = window.sessionStorage.getItem("tenant");
    const body = {
      code: valueCode,
      name: valueName,
      purchasePrice: valuePurchasePrice,
      salePrice: valueSalePrice,
      stock: valueStock,
      description: valueDescription,
      barCode: valueBarCode,
      location: valueLocation,
      minimumStock: valueMinimumStock,
      createdBy: username,
      updatedBy: username,
      tenant
    };
    if (productImage !== null) {
      body.image = productImage;
    }
    return body;
  };

  function finishLoading () {
    setIsRequestInProgress(false);
  }

  const handleAfterAdd = function (newProductId) {
    handleAddImage(newProductId);
    handleReset();
    const body = getBody();
    handleValidation(body, setClassNameFormText);
  };

  const handleAfterEdit = function () {
    handleAddImage(id);
    handleReset();
    setIsEdit(undefined);
    const body = getBody();
    handleValidation(body, setClassNameFormText);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    const body = getBody();
    const isValid = handleValidation(body, setClassNameFormText);
    if (isValid) {
      setIsRequestInProgress(true);
      if (isEdit) {
        handleEditRequest("products/", body, id, handleAfterEdit);
      } else {
        handleAddRequest("products/", body, handleAfterAdd);
      }
    } else {
      setMessageTitle(i18n.errorMessages.validationErrorTitle);
      setMessageText(i18n.errorMessages.validationError);
      setIsMessageVisible(true);
    }
  };

  const handleUploadPicture = (event) => {
    // file.name file.size file.type
    const file = event.target.files[0];
    // const fileTypeName = file.constructor.name
    setPicture(file);
    onChangePicturePath(event);
    setValuePictureToShow(URL.createObjectURL(file));
  };

  const handleAddImage = (productId) => {
    // const pictureFile = { ...valuePicture }
    if (valuePicture !== null) {
      handleAddFileRequest("products/picture/",
        valuePicture,
        productId,
        finishLoading,
        false,
        finishLoading);
    } else {
      finishLoading();
    }
  };

  useEffect(() => {
    const body = getBody();
    handleValidation(body, setClassNameFormText);
  }, [valueName, valuePurchasePrice, valueSalePrice, valueStock,
    valueDescription, valueLocation, valueMinimumStock]);

  if (isRequestInProgress) {
    return <CommonLoading></CommonLoading>;
  }

  return (
    <div className="puggysoft-product-form" >
      <CommonMessage
        isVisible={isMessageVisible}
        setIsVisible={setIsMessageVisible}
        titleText={messageTitle}
        bodyText={messageText}
        variant="danger"
      />
      <Card>
        <Card.Header as='h3'>{i18n.productForm.title}</Card.Header>
        <Card.Body>
          <Form >
            <Form.Group className="mb-3" controlId="code">
              <Form.Label>{i18n.productForm.fieldCode}</Form.Label>
              <Form.Control
                onChange={onChangeCode}
                value={valueCode}
                type="text"
                placeholder={i18n.productForm.fieldCode} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>{i18n.productForm.fieldName}</Form.Label>
              <Form.Control
                onChange={onChangeName}
                value={valueName}
                type="text"
                placeholder={i18n.productForm.fieldName} />
              <Form.Text muted className={classNameFormText.name}>
                {i18n.productForm.formTextName}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="purcharse-price">
              <Form.Label>{i18n.productForm.fieldPurchasePrice}</Form.Label>
              <Form.Control
                onChange={onChangePurchasePrice}
                value={valuePurchasePrice}
                type="number"
                placeholder={i18n.productForm.fieldPurchasePrice} />
              <Form.Text muted className={classNameFormText.purchasePrice}>
                {i18n.productForm.formTextPurchasePrice}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="sale-price">
              <Form.Label>{i18n.productForm.fieldSalePrice}</Form.Label>
              <Form.Control
                onChange={onChangeSalePrice}
                value={valueSalePrice}
                type="number"
                placeholder={i18n.productForm.fieldSalePrice} />
              <Form.Text muted className={classNameFormText.salePrice}>
                {i18n.productForm.formTextSalePrice}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="stock">
              <Form.Label>{i18n.productForm.fieldStock}</Form.Label>
              <Form.Control
                onChange={onChangeStock}
                value={valueStock}
                type="number"
                placeholder={i18n.productForm.fieldStock} />
              <Form.Text muted className={classNameFormText.stock}>
                {i18n.productForm.formTextStock}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="minimum-stock">
              <Form.Label>{i18n.productForm.fieldMinimumStock}</Form.Label>
              <Form.Control
                onChange={onChangeMinimumStock}
                value={valueMinimumStock}
                type="number"
                placeholder={i18n.productForm.fieldMinimumStock} />
              <Form.Text muted className={classNameFormText.minimumStock}>
                {i18n.productForm.formTextMinimumStock}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>{i18n.productForm.fieldDescription}</Form.Label>
              <Form.Control
                onChange={onChangeDescription}
                value={valueDescription}
                as="textarea" rows={3}
                placeholder={i18n.productForm.fieldDescription} />
              <Form.Text muted className={classNameFormText.description}>
                {i18n.productForm.formTextDescription}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="bar-code">
              <Form.Label>{i18n.productForm.fieldBarCode}</Form.Label>
              <Form.Control
                onChange={onChangeBarCode}
                value={valueBarCode}
                type="text"
                placeholder={i18n.productForm.fieldBarCode} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="location">
              <Form.Label>{i18n.productForm.fieldLocation}</Form.Label>
              <Form.Control
                onChange={onChangeLocation}
                value={valueLocation}
                type="text"
                placeholder={i18n.productForm.fieldLocation} />
              <Form.Text muted className={classNameFormText.location}>
                {i18n.productForm.formTextLocation}
              </Form.Text>
            </Form.Group>
            <Card.Img variant="top product-image" size="" src={valuePictureToShow} />
            <Form.Group controlId="formFile" className="mb-3 puggysoft-form-item-input-file">
              <Form.Label>{i18n.productForm.fieldImage}</Form.Label>
              <Form.Control
                type="file"
                onChange={(event) => handleUploadPicture(event)}
                value={valuePicturePath}
              />
              <Form.Text muted>
                {i18n.productForm.formTextImage}
              </Form.Text>
            </Form.Group>
            <Button onClick={handleAdd} variant="primary" type="button">{i18n.productForm.buttonAdd}</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductForm;
