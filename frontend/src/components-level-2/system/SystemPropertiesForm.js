import React from "react";
import { useHistory } from "react-router";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import i18n from "./../../i18n/i18n";
import useInput from "./../../hooks/useInput";

import { handleEditRequest } from "../../actions/HandleManager";
import systemPropertiesNames from "./../../models/system/systemPropertiesNames";
import systemPropertiesValues from "./../../models/system/systemPropertiesValues";
import enumPaths from "./../../models/enumPaths";

import "./../css/all-forms.css";

function SystemPropertiesForm () {
  const history = useHistory();

  const systemPropertyData = history !== undefined &&
    history.location !== undefined &&
    history.location.state !== undefined &&
    history.location.state.systemPropertyData !== undefined
    ? history.location.state.systemPropertyData
    : { id: "", name: "", value: "" };

  // Use custom hook
  const { value: valueName, onChange: onChangeName, reset: resetName } = useInput(systemPropertyData.name);
  const { value: valueValue, onChange: onChangeValue, reset: resetValue } = useInput(systemPropertyData.value);

  const handleReset = () => {
    systemPropertyData.id = "";
    resetName();
    resetValue();
  };

  const getBody = function () {
    const username = window.sessionStorage.getItem("username");
    const body = {
      name: valueName,
      value: valueValue,
      createdBy: username,
      updatedBy: username
    };
    return body;
  };

  const handleAfterEdit = function () {
    handleReset();
    history.push({
      pathname: enumPaths.SYSTEM_PROPERTIES_TABLE
    });
  };

  const handleAdd = (event) => {
    event.preventDefault();
    const body = getBody();
    if (systemPropertyData.id === "") {
      alert(i18n.systemPropertiesForm.errorPropertieNoSelected);
    } else {
      handleEditRequest("system-properties/", body, systemPropertyData.id, handleAfterEdit);
    }
  };

  function getOptions () {
    if (valueName === systemPropertiesNames.SYS_SALE_TYPE) {
      return <>
        <option key='option-generic'
          value={systemPropertiesValues.SYS_SALE_TYPE.GENERIC}>
          {i18n.systemPropertiesForm.fieldValueTypeGeneric}
        </option>
        <option key='option-restaurant'
          value={systemPropertiesValues.SYS_SALE_TYPE.RESTAURANT}>
          {i18n.systemPropertiesForm.fieldValueTypeRestaurant}
        </option>
      </>;
    } else if (valueName === systemPropertiesNames.SYS_AUTO_USER_REG_BO) {
      return <>
        <option
          key='option-true'
          value={systemPropertiesValues.SYS_AUTO_USER_REG_BO.TRUE}>
          {i18n.trueFalse.true}
        </option>
        <option
          key='option-false'
          value={systemPropertiesValues.SYS_AUTO_USER_REG_BO.FALSE}>
          {i18n.trueFalse.false}
        </option>
      </>;
    }
  }

  return (
    <div className="puggysoft-form-thirty-with" >
      <Card>
        <Card.Header as='h3'>{i18n.systemPropertiesForm.title}</Card.Header>
        <Card.Body>
          <Form >
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>{i18n.systemPropertiesForm.fieldName}</Form.Label>
              <Form.Control
                disabled
                onChange={onChangeName}
                value={valueName}
                type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="active">
              <div><Form.Label>{i18n.systemPropertiesForm.fieldValue}</Form.Label></div>
              <div ><Form.Select
                onChange={onChangeValue}
                value={valueValue} >
                {getOptions()}
              </Form.Select></div>
            </Form.Group>

            <Button onClick={handleAdd} variant="primary" type="button">{i18n.systemPropertiesForm.buttonAdd}</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SystemPropertiesForm;
