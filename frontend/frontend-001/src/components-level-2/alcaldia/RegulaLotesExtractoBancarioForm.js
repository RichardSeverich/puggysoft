import React, { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CommonLoading from "../../components-level-1/CommonLoading";
import i18n from "../../i18n/i18n";
import useInput from "../../hooks/useInput";
import {
  handleAddRequest
} from "../../actions/HandleManager";
import {
  handleValidation,
  classNameFormTextNew
} from "../../validations/alcaldia/HandleRegulaLotesExtractoBancarioFormValidations";
import { openCommonMessage } from "./../../redux/reducers/reducerCommonMessage";

import "./../css/all-forms.css";

function RegulaLotesExtractoBancarioForm () {
  const dispatch = useDispatch();
  const [classNameFormText, setClassNameFormText] =
    useState(classNameFormTextNew);
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);

  // Use custom hook
  const { value: valueFile, setValue: setFile } = useInput("");
  const { value: valueFileType, setValue: setFileType } = useInput("");
  const { value: valueFilePath, onChange: onChangeFilePath, setValue: setPicturePath } = useInput("");

  const handleReset = () => {
    setFile(null);
    setPicturePath("");
  };

  const getBody = useCallback(
    function () {
      const body = {
        file: valueFile,
        fileType: valueFileType
      };
      return body;
    },
    [valueFile]
  );

  const handleAfterAdd = function (resourceId) {
    handleReset();
    const body = getBody();
    handleValidation(body, setClassNameFormText);
    setIsRequestInProgress(false);
  };

  const handleAfterFail = function (response, errorMessage) {
    dispatch(openCommonMessage(
      {
        isMessageModalVisible: true,
        messageModalTitle: i18n.errorMessages.errorTitle,
        messageModalBody: errorMessage,
        messageModalVariant: "danger"
      }
    ));
  };

  const handleSavePdfData = (event) => {
    const body = getBody();
    const isValid = handleValidation(body, setClassNameFormText);
    if (isValid) {
      // readPdfFileTable(valueFile);
      // TODO: Call api in a bucle.
      handleAddRequest(
        "regula-lotes-extracto-bancario/",
        body,
        handleAfterAdd,
        false,
        handleAfterFail
      );
    } else {
      dispatch(openCommonMessage(
        {
          isMessageModalVisible: true,
          messageModalTitle: i18n.errorMessages.validationErrorTitle,
          messageModalBody: i18n.errorMessages.validationError,
          messageModalVariant: "danger"
        }
      ));
    }
  };

  const handleUploadFile = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    // const fileName = file.name;
    // const fileSize = file.size;
    // const filePath = event.target.value;
    const fileType = file.type; // application/pdf
    setFileType(fileType);
    setFile(file);
    onChangeFilePath(event);
  };

  useEffect(() => {
    const body = getBody();
    handleValidation(body, setClassNameFormText);
  }, [getBody]);

  if (isRequestInProgress) {
    return <CommonLoading></CommonLoading>;
  }

  return (
    <div className="puggysoft-form-thirty-with">
      <Card>
        <Card.Header as="h3">
          {i18n.regulaLotesForm.extractoBancarioTitleForm}
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="formFile" className="mb-3 puggysoft-form-item-input-file">
              <Form.Label>{i18n.regulaLotesForm.extractoBancariofieldFileLabel}</Form.Label>
              <Form.Control
                type="file"
                onChange={(event) => handleUploadFile(event)}
                value={valueFilePath}
              />
              <Form.Text muted className={classNameFormText.file}>
                {i18n.regulaLotesForm.extractoBancariofieldFileText}
              </Form.Text>
            </Form.Group>
            <Button onClick={handleSavePdfData} variant="primary" type="button">
              {i18n.commonForm.saveButton}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RegulaLotesExtractoBancarioForm;
