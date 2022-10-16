import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import i18n from "./../../i18n/i18n";
import useInput from "./../../hooks/useInput";

import { handleAddRequest, handleEditRequest } from "../../actions/HandleManager";
import { handleValidation, classNameFormTextNew } from "./../../validations/sales/HandleProductFormValidations"

import "./../css/all-forms.css"
import "./product-form-styles.css"


function ProductForm(props) {

  const history = useHistory();
  const isEditDefaultValue = history && history.location && history.location.state;
  const [isEdit, setIsEdit] = useState(isEditDefaultValue);
  const [classNameFormText, setClassNameFormText] = useState(classNameFormTextNew);

  // Put default values:
  let id = isEdit && isEdit.data.id !== null ? isEdit.data.id : "";
  let name = isEdit && isEdit.data.name !== null ? isEdit.data.name : "";
  let purchasePrice = isEdit && isEdit.data.purchasePrice !== null ? isEdit.data.purchasePrice : "";
  let salePrice = isEdit && isEdit.data.salePrice !== null ? isEdit.data.salePrice : "";
  let stock = isEdit && isEdit.data.stock !== null ? isEdit.data.stock : "";
  let minimumStock = isEdit && isEdit.data.minimumStock !== null ? isEdit.data.minimumStock : "";
  let description = isEdit && isEdit.data.description !== null ? isEdit.data.description : "";
  let barCode = isEdit && isEdit.data.barCode !== null ? isEdit.data.barCode : "";
  let location = isEdit && isEdit.data.location !== null ? isEdit.data.location : "";

  // Use custom hook
  const { value: valueName, onChange: onChangeName, reset: resetName } = useInput(name);
  const { value: valuePurchasePrice, onChange: onChangePurchasePrice, reset: resetPurchasePrice } = useInput(purchasePrice);
  const { value: valueSalePrice, onChange: onChangeSalePrice, reset: resetSalePrice } = useInput(salePrice);
  const { value: valueStock, onChange: onChangeStock, reset: resetStock } = useInput(stock);
  const { value: valueMinimumStock, onChange: onChangeMinimumStock, reset: resetMinimumStock } = useInput(minimumStock);
  const { value: valueDescription, onChange: onChangeDescription, reset: resetDescription } = useInput(description);
  const { value: valueBarCode, onChange: onChangeBarCode, reset: resetBarCode } = useInput(barCode);
  const { value: valueLocation, onChange: onChangeLocation, reset: resetLocation } = useInput(location);

  const handleReset = () => {
    resetName();
    resetPurchasePrice();
    resetSalePrice();
    resetStock();
    resetMinimumStock();
    resetDescription();
    resetBarCode();
    resetLocation();
  }

  const getBody = function () {
    const username = window.sessionStorage.getItem("username");
    const body = {
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
    }
    return body;
  }

  const handleAfterAdd = function () {
    handleReset();
    const body = getBody();
    handleValidation(body, setClassNameFormText)
  }

  const handleAfterEdit = function () {
    handleReset();
    setIsEdit(undefined);
    const body = getBody();
    handleValidation(body, setClassNameFormText)
  }

  const handleAdd = (event) => {
    event.preventDefault();
    const body = getBody();
    const isValid = handleValidation(body, setClassNameFormText);
    if (isValid) {
      if (isEdit) {
        handleEditRequest("products/", body, id, handleAfterEdit)
      } else {
        handleAddRequest("products/", body, handleAfterAdd);
      }
    } else {
      alert(i18n.errorMessages.validationError);
    }
  }

  useEffect(() => {
    const body = getBody();
    handleValidation(body, setClassNameFormText)
  }, [valueName, valuePurchasePrice, valueSalePrice, valueStock,
    valueDescription, valueLocation, valueMinimumStock]);

  return (
    <div className="puggysoft-product-form" >
      <Card>
        <Card.Title>{i18n.productForm.title}</Card.Title>
        <Card.Body>
          <Form >
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
            <Button onClick={handleAdd} variant="primary" type="button">{i18n.productForm.buttonAdd}</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductForm;
