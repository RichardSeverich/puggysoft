import React, { useState } from "react";
import { useHistory } from "react-router";

import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { AiFillQuestionCircle } from "react-icons/ai";
import { handleFilterRequest, handleAddRequest, handleDeleteRequest, handleEditRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";
import CommonLoading from "../../components-level-1/CommonLoading";
import CommonMessage from "../../components-level-1/CommonMessage";
import CuotaPagoGenericTable from "./generic/CuotaPagoGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import enumSaleTableViewType from "../../models/sales/enumSaleTableViewType";
import enumSaleStatus from "../../models/sales/enumSaleStatus";
import enumPaths from "../../models/enumPaths";
import fixDate from "../../tools/fixDate";
import useInput from "../../hooks/useInput";

import "./../css/all-two-divs-side-by-side.css";
import "./../css/all-four-divs-side-by-side.css";
import "./VentaMensualidades.css";
import "./../css/all-forms-inline-block.css";
import "../sales/sale-add-step-two-product-selection.css";

function VentaMensualidades () {
  const history = useHistory();
  const pageSize = 7;
  const numberPagesToShow = 10;
  const tableTitleAddProductsToSale = i18n.registroPagoMensualidad.titleSelectionAddSaleForSeller;
  const tableTitleDeleteProductsFromSale = i18n.registroPagoMensualidad.titleSelectionDeleteSaleForSeller;
  const generalTitle = i18n.registroPagoMensualidad.titleForSeller;
  const [arrayOfProductsFromSale, setArrayOfProductsFromSale] = useState([]);
  // Message states.
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [messageTitle, setMessageTitle] = useState("");
  const [messageText, setMessageText] = useState("");

  const {
    saleData,
    saleTableViewType,
    estudianteSelected,
    cursoSelected
  } = history &&
    history.location !== undefined &&
    history.location.state !== undefined &&
    history.location.state.data !== undefined
    ? history.location.state.data
    : { saleData: undefined, saleTableViewType: undefined };

  const { value: valuePicturePath, onChange: onChangePicturePath, setValue: setPicturePath } = useInput("");
  const { value: valueNote, onChange: onChangeNote } = useInput(
    saleData && saleData.note
      ? saleData.note
      : "");
  if (saleData && saleData.status && saleData.status === i18n.saleStatus.todo) {
    saleData.status = enumSaleStatus.TODO;
  } else if (saleData && saleData.status && saleData.status === i18n.saleStatus.inProgress) {
    saleData.status = enumSaleStatus.IN_PROGRESS;
  } else if (saleData && saleData.status && saleData.status === i18n.saleStatus.done) {
    saleData.status = enumSaleStatus.DONE;
  }

  const [totalToPay, setTotalToPay] = useState(saleData?.totalPrice ? saleData.totalPrice : 0);

  const [isRequestInProgress, setIsRequestInProgress] = useState(false);

  // functions to add products to a sale.
  function handleGetDataProductsAddToSale (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`mensualidad-cuota-by-student-and-course/filter?studentUsername=${estudianteSelected.username}&courseId=${cursoSelected.id}&page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }
  function handleGetSizeProductsAddToSale (filterBody, setTotalPages) {
    handleFilterRequest(`mensualidad-cuota-by-student-and-course/filter/size/?studentUsername=${estudianteSelected.username}&courseId=${cursoSelected.id}&pageSize=${pageSize}`, filterBody, setTotalPages);
    
  }

  function handleAfterAddProductToSale (salesProductsOrError) {
    setIsRequestInProgress(false);
  }

  function handleAddProductToSale (productData, textboxId) {
    setIsRequestInProgress(true);
    const tenant = window.sessionStorage.getItem("tenant");
    const body = {
      idSale: saleData.id,
      idProduct: productData.id,
      quantity: 1,
      tenant
    };
    handleAddRequest("sales-products", body, handleAfterAddProductToSale, true, handleAfterAddProductToSale);
  }

  const tableArrayCustomRowButtonsAddToSale = [
    {
      variant: "primary",
      handleCustom: handleAddProductToSale,
      text: i18n.commonTable.addButton
    }
  ];

  /* - dataElement.onChange
  - dataElement.value */

  // functions to delete products from a sale.
  function handleGetDataProductsToDelete (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`products/filter-by-sale-id?page=${activePage - 1}&size=${pageSize}&saleId=${saleData.id}`, filterBody, updateArrayData);
  }
  function handleGetSizeProductsToDelete (filterBody, setTotalPages) {
    handleFilterRequest(`products/filter/size-by-sale-id?pageSize=${pageSize}&saleId=${saleData.id}`, filterBody, setTotalPages);
  }

  function handleAfterDeleteProductFromSale () {
    setIsRequestInProgress(false);
  }

  function handleDeleteSaleProductRelation (productData) {
    // NOTE: The ID field of this ${productData} object is the relation ID. sales_products.id
    // NOTE: The STOCK filed of this ${productData} object is the quantity of sales_products.
    setIsRequestInProgress(true);
    const idRelation = productData.id;
    handleDeleteRequest(`sales-products/${idRelation}`, handleAfterDeleteProductFromSale, handleAfterDeleteProductFromSale);
  }

  function fixArrayData (arrayProducts) {
    let totalToPayNew = 0;
    arrayProducts.forEach((product) => {
      totalToPayNew = totalToPayNew + Number(product.salePrice) * Number(product.stock);
    });
    setTotalToPay(totalToPayNew);
    setArrayOfProductsFromSale(arrayProducts);
    return arrayProducts;
  }

  const tableArrayCustomRowButtonsDeleteFromSale = [
    {
      variant: "danger",
      handleCustom: handleDeleteSaleProductRelation,
      text: i18n.commonTable.deleteButton
    }
  ];

  function handleAfterOnSuccess (responseData) {
    let pathName = enumPaths.SALES_SALES_TABLE_FILTER_TO_EDIT_DELETE_DETAILS;
    if (saleTableViewType === enumSaleTableViewType.FOR_CASHIER) {
      pathName = enumPaths.SALES_SALES_TABLE_FILTER_TO_EDIT_DELETE_DETAILS_TODO;
    } else if (saleTableViewType === enumSaleTableViewType.FOR_DISPATCHER) {
      pathName = enumPaths.SALES_SALES_TABLE_FILTER_TO_EDIT_DELETE_DETAILS_IN_PROGRESS;
    }
    history.push({
      pathname: pathName
    });
  }
  function handleAfterOnFail (response) {
    setIsRequestInProgress(false);
  }

  function handleDelete () {
    setIsRequestInProgress(true);
    handleDeleteRequest(`sales/${saleData.id}`,
      handleAfterOnSuccess,
      handleAfterOnFail,
      handleAfterOnFail);
  }

  function handleAfterOnSuccessSaveNote () {
    saleData.note = valueNote;
    setIsRequestInProgress(false);
  }

  function handleSaveNote () {
    const message = i18n.registroPagoMensualidad.buttonSaveNoteQuestion;
    const newSaleData = { ...saleData };
    newSaleData.note = valueNote;
    newSaleData.totalPrice = totalToPay;
    newSaleData.customerCash = totalToPay;
    newSaleData.customerCashChange = 0;
    const username = window.sessionStorage.getItem("username");
    newSaleData.updatedBy = username;
    const result = window.confirm(message);
    if (result) {
      setIsRequestInProgress(true);
      handleEditRequest("sales/",
        newSaleData,
        saleData.id,
        handleAfterOnSuccessSaveNote);
    }
  }

  function handleChangeSaleStatus () {
    const message = i18n.registroPagoMensualidad.buttonChangeSaleStatusQuestion;
    const newSaleData = { ...saleData };
    const username = window.sessionStorage.getItem("username");
    newSaleData.updatedBy = username;
    const result = window.confirm(message);
    if (result) {
      setIsRequestInProgress(true);
      newSaleData.status = getSaleStatusToRequestNext(newSaleData.status);
      handleEditRequest("sales/",
        newSaleData,
        saleData.id,
        handleAfterOnSuccess);
    }
  }

  const handleUploadPicture = (event) => {
    const file = event.target.files[0];
    setPicture(file);
    onChangePicturePath(event);
    setValuePictureToShow(URL.createObjectURL(file));
  };

  if (isRequestInProgress || !saleData) {
    return <CommonLoading />;
  }

  function getSaleStatusToShow (someSaleStatus) {
    if (someSaleStatus === enumSaleStatus.TODO) {
      return i18n.saleStatus.todo;
    } else if (someSaleStatus === enumSaleStatus.IN_PROGRESS) {
      return i18n.saleStatus.inProgress;
    } else if (someSaleStatus === enumSaleStatus.DONE) {
      return i18n.saleStatus.done;
    } else {
      return someSaleStatus;
    }
  }

  function getSaleStatusToShowNext (someSaleStatus) {
    if (someSaleStatus === enumSaleStatus.TODO) {
      return i18n.saleStatus.inProgress;
    } else if (someSaleStatus === enumSaleStatus.IN_PROGRESS) {
      return i18n.saleStatus.done;
    } else if (someSaleStatus === enumSaleStatus.DONE) {
      return i18n.saleStatus.todo;
    } else {
      return someSaleStatus;
    }
  }

  function getSaleStatusToRequestNext (someSaleStatus) {
    if (someSaleStatus === enumSaleStatus.TODO) {
      return enumSaleStatus.IN_PROGRESS;
    } else if (someSaleStatus === enumSaleStatus.IN_PROGRESS) {
      return enumSaleStatus.DONE;
    } else if (someSaleStatus === enumSaleStatus.DONE) {
      return i18n.saleStatus.TODO;
    } else {
      return someSaleStatus;
    }
  }

  const renderTooltipClient = (props) => (
    <Tooltip id="tooltip-sales" {...props}>
      {i18n.registroPagoMensualidad.informationClient}
    </Tooltip>
  );

  const renderTooltipSeller = (props) => (
    <Tooltip id="tooltip-sales" {...props}>
      {i18n.registroPagoMensualidad.informationSeller}
    </Tooltip>
  );

  const renderTooltipSaleDate = (props) => (
    <Tooltip id="tooltip-sales" {...props}>
      {i18n.registroPagoMensualidad.informationSaleDate}
    </Tooltip>
  );

  const renderTooltipTotalToPay = (props) => (
    <Tooltip id="tooltip-sales" {...props}>
      {i18n.registroPagoMensualidad.informationTotalToPay}
    </Tooltip>
  );

  const renderTooltipClientChange = (props) => (
    <Tooltip id="tooltip-sales" {...props}>
      {i18n.registroPagoMensualidad.informationClientChange}
    </Tooltip>
  );

  return (
    <div>
      <CommonMessage
        isVisible={isMessageVisible}
        setIsVisible={setIsMessageVisible}
        titleText={messageTitle}
        bodyText={messageText}
        variant="danger"
      />
      <Card>
        <Card.Header as='h3'>{generalTitle} : {saleData.id}</Card.Header>
        <Card.Body className="sale-section-one">
          <div className="">
            <div className="puggysoft-five-divs-side-by-side-child">
              <Form.Group className="puggysoft-form-group">
                <div className="puggysoft-form-label">
                  <Form.Label>{i18n.registroPagoMensualidad.clientBox}</Form.Label>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 60, hide: 256 }}
                    overlay={renderTooltipClient}
                  >
                    <div className="question-mark-sales">
                      <AiFillQuestionCircle />
                    </div>
                  </OverlayTrigger>
                </div>
                <div className={"puggysoft-form-input"}><Form.Control value={saleData.client} disabled /></div>
              </Form.Group>
            </div>
            <div className="puggysoft-five-divs-side-by-side-child">
              <Form.Group className="puggysoft-form-group">
                <div className={"puggysoft-form-label"}>
                  <Form.Label>{i18n.registroPagoMensualidad.sellerBox}</Form.Label>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 60, hide: 256 }}
                    overlay={renderTooltipSeller}
                  >
                    <div className="question-mark-sales">
                      <AiFillQuestionCircle />
                    </div>
                  </OverlayTrigger>
                </div>
                <div className={"puggysoft-form-input"}><Form.Control value={saleData.createdBy} disabled /></div>
              </Form.Group>
            </div>
            <div className="puggysoft-five-divs-side-by-side-child">
              <Form.Group className="puggysoft-form-group">
                <div className={"puggysoft-form-label"}>
                  <Form.Label>{i18n.registroPagoMensualidad.saleDate}</Form.Label>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 60, hide: 256 }}
                    overlay={renderTooltipSaleDate}
                  >
                    <div className="question-mark-sales">
                      <AiFillQuestionCircle />
                    </div>
                  </OverlayTrigger>

                </div>
                <div className={"puggysoft-form-input"}><Form.Control value={fixDate(saleData.creationDate)} disabled /></div>
              </Form.Group>
            </div>
            <div className="puggysoft-five-divs-side-by-side-child">
              <Form.Group className="puggysoft-form-group">
                <div className={"puggysoft-form-label"}>
                  <Form.Label>{i18n.registroPagoMensualidad.saleTotalToPay}</Form.Label>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 60, hide: 256 }}
                    overlay={renderTooltipTotalToPay}
                  >
                    <div className="question-mark-sales">
                      <AiFillQuestionCircle />
                    </div>
                  </OverlayTrigger>
                </div>
                <div className={"puggysoft-form-input"}><Form.Control value={totalToPay} disabled /></div>
              </Form.Group>
            </div>
            {(saleTableViewType === enumSaleTableViewType.FOR_SELLER) &&
              <div className="puggysoft-five-divs-side-by-side-child">
                <Form.Group controlId="formFile" className="puggysoft-form-group">
                  <div className={"puggysoft-form-label"}>
                    <Form.Label>{i18n.registroPagoMensualidad.comprobanteDePago}</Form.Label>
                  </div>
                  <div className={"puggysoft-form-input"}>
                    <Form.Control
                      type="file"
                      onChange={(event) => handleUploadPicture(event)}
                      value={valuePicturePath}
                    />
                  </div>
                </Form.Group>
              </div>}
          </div>
        </Card.Body>
        <Card.Body className="sale-section-two">
          <div className="">
            {(saleTableViewType === enumSaleTableViewType.FOR_SELLER) &&
              <div className="puggysoft-four-divs-side-by-side-child">
                <Button
                  variant="danger sale-button"
                  type="button"
                  onClick={handleDelete}
                >
                  {i18n.registroPagoMensualidad.buttonDeleteSale}</Button>
              </div>}
            <div className="puggysoft-four-divs-side-by-side-child">
              {(saleTableViewType === enumSaleTableViewType.FOR_SELLER
              ) &&
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 60, hide: 256 }}
                  overlay={<Tooltip id="button-tooltip">
                    <div className='new-line'>
                      {i18n.registroPagoMensualidad.buttonChangeSaleStateToolTip}: {getSaleStatusToShow(saleData.status)}
                    </div>
                    <div className='new-line'>
                      {i18n.registroPagoMensualidad.buttonChangeSaleStateToolTipNext}: {getSaleStatusToShowNext(saleData.status)}
                    </div>
                  </Tooltip>}
                >
                  <Button
                    variant="info sale-button"
                    type="button"
                    onClick={handleChangeSaleStatus}
                  >
                    {i18n.registroPagoMensualidad.buttonChangeSaleState}
                  </Button>
                </OverlayTrigger>
              }
            </div>
            <div className="puggysoft-four-divs-side-by-side-child">
              <Button
                variant="primary sale-button"
                type="button"
                onClick={handleSaveNote}
              >{i18n.registroPagoMensualidad.buttonSaveNote}</Button>
            </div>
            <div className="puggysoft-four-divs-side-by-side-child">
              <Form.Group className="">
                <div><Form.Control
                  value={valueNote}
                  onChange={onChangeNote}
                  as="textarea"
                  placeholder={i18n.registroPagoMensualidad.noteBox}
                />
                </div>
              </Form.Group>
            </div>
          </div>
        </Card.Body>
      </Card>

      <div>
        <div className="puggysoft-two-divs-side-by-side-child">
          <CuotaPagoGenericTable
            tableTitle={tableTitleAddProductsToSale}
            numberPagesToShow={numberPagesToShow}
            handleGetData={handleGetDataProductsAddToSale}
            handleGetSize={handleGetSizeProductsAddToSale}
            tableArrayCustomRowButtons={tableArrayCustomRowButtonsAddToSale}
            columnsToShow={enumTableColumnsToShow.MEDIUM}
          />
        </div>
        <div className="puggysoft-two-divs-side-by-side-child">
          <CuotaPagoGenericTable
            tableTitle={tableTitleDeleteProductsFromSale}
            numberPagesToShow={numberPagesToShow}
            handleGetData={handleGetDataProductsToDelete}
            handleGetSize={handleGetSizeProductsToDelete}
            tableArrayCustomRowButtons={tableArrayCustomRowButtonsDeleteFromSale}
            fixArrayData={fixArrayData}
            columnsToShow={enumTableColumnsToShow.MEDIUM}
          />
        </div>
      </div >
    </div>
  );
}

export default VentaMensualidades;
