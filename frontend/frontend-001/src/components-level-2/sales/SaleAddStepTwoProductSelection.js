import React, { useState } from "react";
import { useHistory } from "react-router";

import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { AiFillQuestionCircle } from "react-icons/ai";
import { handleFilterRequest, handleAddRequest, handleDeleteRequest, handleEditRequest } from "../../actions/HandleManager";
import ProductTableSuperReducedGeneric from "./ProductTableSuperReducedGeneric";
import i18n from "../../i18n/i18n";
import CommonLoading from "../../components-level-1/CommonLoading";
import CommonMessage from "./../../components-level-1/CommonMessage";
import arraySaleProductColumnsOne from "../../models/sales/arrayProductColumnsReducedSuperOne";
import arraySaleProductColumnsTwo from "../../models/sales/arrayProductColumnsReducedSuperTwo";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import enumWebElements from "./../../models/enumWebElements";
import enumSaleTableViewType from "../../models/sales/enumSaleTableViewType";
import enumSaleStatus from "../../models/sales/enumSaleStatus";
import enumPaths from "./../../models/enumPaths";
import fixDate from "./../../tools/fixDate";
import pdfBuilderTicket from "./../../tools/pdfBuilderTicket";
import useInput from "./../../hooks/useInput";

import "./../css/all-two-divs-side-by-side.css";
import "./../css/all-six-divs-side-by-side.css";
import "./../css/all-forms-inline-block.css";
import "./sale-add-step-two-product-selection.css";

function SaleAddStepTwoProductSelection () {
  const history = useHistory();
  const pageSize = 7;
  const numberPagesToShow = 10;
  const tableTitleAddProductsToSale = i18n.saleProductTable.titleSelectionAddSaleForSeller;
  const tableTitleDeleteProductsFromSale = i18n.saleProductTable.titleSelectionDeleteSaleForSeller;
  const generalTitle = i18n.saleProductTable.titleForSeller;
  const [totalToPay, setTotalToPay] = useState(0);
  const [clientCash, setClientCash] = useState(0);
  const [clientCashChange, setClientCashChange] = useState(0);
  const [arrayOfProductsFromSale, setArrayOfProductsFromSale] = useState([]);
  // Message states.
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [messageTitle, setMessageTitle] = useState("");
  const [messageText, setMessageText] = useState("");

  const { saleData, saleTableViewType } = history &&
    history.location !== undefined &&
    history.location.state !== undefined &&
    history.location.state.data !== undefined
    ? history.location.state.data
    : { saleData: undefined, saleTableViewType: undefined };

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

  const [isRequestInProgress, setIsRequestInProgress] = useState(false);

  // functions to add products to a sale.
  function handleGetDataProductsAddToSale (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`products/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }
  function handleGetSizeProductsAddToSale (filterBody, setTotalPages) {
    handleFilterRequest(`products/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  function handleAfterAddProductToSale (salesProductsOrError) {
    setIsRequestInProgress(false);
  }

  function handleAddProductToSale (productData, textboxId) {
    const textboxElement = document.getElementById(textboxId);
    const saleQuantity = textboxElement.value;
    if (!saleQuantity || saleQuantity === "" || saleQuantity <= 0) {
      setMessageTitle(i18n.errorMessages.errorTitle);
      setMessageText(i18n.saleErrorMessages.invalidQuantity);
      setIsMessageVisible(true);
    } else if (saleQuantity > productData.stock) {
      setMessageTitle(i18n.errorMessages.errorTitle);
      setMessageText(i18n.saleErrorMessages.quantityGreaterThanStock);
      setIsMessageVisible(true);
    } else {
      setIsRequestInProgress(true);
      setClientCash(0);
      setClientCashChange(0);
      const tenant = window.sessionStorage.getItem("tenant");
      const body = {
        idSale: saleData.id,
        idProduct: productData.id,
        quantity: saleQuantity,
        tenant
      };
      handleAddRequest("sales-products", body, handleAfterAddProductToSale, true, handleAfterAddProductToSale);
    }
  }

  const tableArrayCustomRowButtonsAddToSale = [
    {
      type: enumWebElements.TEXTBOX,
      placeholder: "",
      formType: "number"
    },
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
    setClientCash(0);
    setClientCashChange(0);
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

  function onChangeClientCash (clientCash) {
    setClientCashChange(clientCash - totalToPay);
    setClientCash(clientCash);
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
    const message = i18n.saleProductTable.buttonSaveNoteQuestion;
    const newSaleData = { ...saleData };
    newSaleData.note = valueNote;
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
    const message = i18n.saleProductTable.buttonChangeSaleStatusQuestion;
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

  function handleGenerateTicket () {
    if (arrayOfProductsFromSale.length === 0) {
      setMessageTitle(i18n.errorMessages.errorTitle);
      setMessageText(i18n.saleTicket.ticketWithoutProductError);
      setIsMessageVisible(true);
    } else {
      pdfBuilderTicket(saleData, totalToPay, arrayOfProductsFromSale);
    }
  }

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
      {i18n.saleProductTable.informationClient}
    </Tooltip>
  );

  const renderTooltipSeller = (props) => (
    <Tooltip id="tooltip-sales" {...props}>
      {i18n.saleProductTable.informationSeller}
    </Tooltip>
  );

  const renderTooltipSaleDate = (props) => (
    <Tooltip id="tooltip-sales" {...props}>
      {i18n.saleProductTable.informationSaleDate}
    </Tooltip>
  );

  const renderTooltipTotalToPay = (props) => (
    <Tooltip id="tooltip-sales" {...props}>
      {i18n.saleProductTable.informationTotalToPay}
    </Tooltip>
  );

  const renderTooltipClientCash = (props) => (
    <Tooltip id="tooltip-sales" {...props}>
      {i18n.saleProductTable.informationClientTotalCash}
    </Tooltip>
  );

  const renderTooltipClientChange = (props) => (
    <Tooltip id="tooltip-sales" {...props}>
      {i18n.saleProductTable.informationClientChange}
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
            <div className="puggysoft-six-divs-side-by-side-child">
              <Form.Group>
                <div className="puggysoft-form-label">
                  <Form.Label>{i18n.saleProductTable.clientBox}</Form.Label>
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
            <div className="puggysoft-six-divs-side-by-side-child">
              <Form.Group>
                <div className={"puggysoft-form-label"}>
                  <Form.Label>{i18n.saleProductTable.sellerBox}</Form.Label>
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
            <div className="puggysoft-six-divs-side-by-side-child">
              <Form.Group>
                <div className={"puggysoft-form-label"}>
                  <Form.Label>{i18n.saleProductTable.saleDate}</Form.Label>
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
            <div className="puggysoft-six-divs-side-by-side-child">
              <Form.Group>
                <div className={"puggysoft-form-label"}>
                  <Form.Label>{i18n.saleProductTable.saleTotalToPay}</Form.Label>
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
            <div className="puggysoft-six-divs-side-by-side-child">
              <Form.Group>
                <div className={"puggysoft-form-label"}>
                  <Form.Label>{i18n.saleProductTable.clientCashToPay}</Form.Label>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 60, hide: 256 }}
                    overlay={renderTooltipClientCash}
                  >
                    <div className="question-mark-sales">
                      <AiFillQuestionCircle />
                    </div>
                  </OverlayTrigger>
                </div>
                <div className={"puggysoft-form-input"}>
                  <Form.Control
                    type="number"
                    value={clientCash}
                    onChange={(event) => {
                      onChangeClientCash(event.target.value);
                    }}
                  />
                </div>
              </Form.Group>
            </div>
            <div className="puggysoft-six-divs-side-by-side-child">
              <Form.Group>
                <div className={"puggysoft-form-label"}>
                  <Form.Label>{i18n.saleProductTable.clientCashChange}</Form.Label>
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 60, hide: 256 }}
                    overlay={renderTooltipClientChange}
                  >
                    <div className="question-mark-sales">
                      <AiFillQuestionCircle />
                    </div>
                  </OverlayTrigger>
                </div>
                <div className={"puggysoft-form-input"}>
                  <Form.Control value={clientCashChange} disabled />
                </div>
              </Form.Group>
            </div>
          </div>
        </Card.Body>
        <Card.Body className="sale-section-two">
          <div className="">
            {(saleTableViewType === enumSaleTableViewType.FOR_CASHIER ||
              saleTableViewType === enumSaleTableViewType.FOR_SELLER) &&
              <div className="puggysoft-six-divs-side-by-side-child">
                <Button
                  variant="danger sale-button"
                  type="button"
                  onClick={handleDelete}
                >
                  {i18n.saleProductTable.buttonDeleteSale}</Button>
              </div>}
            <div className="puggysoft-six-divs-side-by-side-child">
              {(saleTableViewType === enumSaleTableViewType.FOR_CASHIER ||
                saleTableViewType === enumSaleTableViewType.FOR_DISPATCHER
              ) &&
                <Button
                  variant="success sale-button"
                  type="button"
                  onClick={handleGenerateTicket}
                >{i18n.saleProductTable.buttonGenerateTicket}</Button>
              }
            </div>
            <div className="puggysoft-six-divs-side-by-side-child">
              {(saleTableViewType === enumSaleTableViewType.FOR_CASHIER ||
                saleTableViewType === enumSaleTableViewType.FOR_DISPATCHER
              ) &&
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 60, hide: 256 }}
                  overlay={<Tooltip id="button-tooltip">
                    <div className='new-line'>
                      {i18n.saleProductTable.buttonChangeSaleStateToolTip}: {getSaleStatusToShow(saleData.status)}
                    </div>
                    <div className='new-line'>
                      {i18n.saleProductTable.buttonChangeSaleStateToolTipNext}: {getSaleStatusToShowNext(saleData.status)}
                    </div>
                  </Tooltip>}
                >
                  <Button
                    variant="info sale-button"
                    type="button"
                    onClick={handleChangeSaleStatus}
                  >
                    {i18n.saleProductTable.buttonChangeSaleState}
                  </Button>
                </OverlayTrigger>
              }
            </div>
            <div className="puggysoft-six-divs-side-by-side-child">
              <Form.Group>
                <div><Form.Control
                  value={valueNote}
                  onChange={onChangeNote}
                  as="textarea"
                  placeholder={i18n.saleProductTable.noteBox}
                />
                </div>
              </Form.Group>
            </div>
            <div className="puggysoft-six-divs-side-by-side-child">
              <Button
                variant="primary sale-button"
                type="button"
                onClick={handleSaveNote}
              >{i18n.saleProductTable.buttonSaveNote}</Button>
            </div>
            <div className="puggysoft-six-divs-side-by-side-child">
              {/* <Button variant="secondary sale-button" type="button">{i18n.saleProductTable.buttonGenerateBill}</Button> */}
            </div>
          </div>
        </Card.Body>
      </Card>

      <div>
        <div className="puggysoft-two-divs-side-by-side-child">
          <ProductTableSuperReducedGeneric
            tableTitle={tableTitleAddProductsToSale}
            handleGetData={handleGetDataProductsAddToSale}
            handleGetSize={handleGetSizeProductsAddToSale}
            tableArrayCustomRowButtons={tableArrayCustomRowButtonsAddToSale}
            arrayColumns={arraySaleProductColumnsOne}
            numberPagesToShow={numberPagesToShow}
          >
          </ProductTableSuperReducedGeneric>
        </div>
        <div className="puggysoft-two-divs-side-by-side-child">
          <ProductTableSuperReducedGeneric
            tableTitle={tableTitleDeleteProductsFromSale}
            handleGetData={handleGetDataProductsToDelete}
            handleGetSize={handleGetSizeProductsToDelete}
            tableArrayCustomRowButtons={tableArrayCustomRowButtonsDeleteFromSale}
            numberPagesToShow={numberPagesToShow}
            arrayColumns={arraySaleProductColumnsTwo}
            fixArrayData={fixArrayData}
          >
          </ProductTableSuperReducedGeneric>
        </div>
      </div >
    </div>
  );
}

export default SaleAddStepTwoProductSelection;
