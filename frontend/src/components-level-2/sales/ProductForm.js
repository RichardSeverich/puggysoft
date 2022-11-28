import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import i18n from "./../../i18n/i18n";
import useInput from "./../../hooks/useInput";

import { handleAddRequest, handleEditRequest, handleAddFileRequest } from "../../actions/HandleManager";
import { handleValidation, classNameFormTextNew } from "./../../validations/sales/HandleProductFormValidations";

import "./../css/all-forms.css";
import "./product-form-styles.css";

function ProductForm (props) {
  const history = useHistory();
  const isEditDefaultValue = history && history.location && history.location.state;
  const [isEdit, setIsEdit] = useState(isEditDefaultValue);
  const [classNameFormText, setClassNameFormText] = useState(classNameFormTextNew);

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
  };

  const getBody = function () {
    const username = window.sessionStorage.getItem("username");
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
      updatedBy: username
    };
    return body;
  };

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
      if (isEdit) {
        handleEditRequest("products/", body, id, handleAfterEdit);
      } else {
        handleAddRequest("products/", body, handleAfterAdd);
      }
    } else {
      alert(i18n.errorMessages.validationError);
    }
  };

  const handleUploadPicture = (event) => {
    // file.name file.size file.type
    const file = event.target.files[0];
    // const fileTypeName = file.constructor.name
    setPicture(file);
    onChangePicturePath(event);
  };

  const handleAddImage = (productId) => {
    // const pictureFile = { ...valuePicture }
    if (valuePicture !== null) {
      handleAddFileRequest("products/picture/", valuePicture, productId, null, false);
    }
  };

  useEffect(() => {
    const body = getBody();
    handleValidation(body, setClassNameFormText);
  }, [valueName, valuePurchasePrice, valueSalePrice, valueStock,
    valueDescription, valueLocation, valueMinimumStock]);

  return (
    <div className="puggysoft-product-form" >
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
