import React, { useState } from "react";
import { useHistory } from "react-router";

import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { handleFilterRequest, handleAddRequest, handleDeleteRequestNew } from "../../actions/HandleManager";
import ProductTableSuperReducedGeneric from "./ProductTableSuperReducedGeneric";
import i18n from "../../i18n/i18n";
import CommonLoading from "../../components-level-1/CommonLoading";
import arraySaleProductColumnsOne from "../../models/sales/arrayProductColumnsReducedSuperOne";
import arraySaleProductColumnsTwo from "../../models/sales/arrayProductColumnsReducedSuperTwo";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import enumWebElements from "./../../models/enumWebElements";
import enumSaleTableViewType from "../../models/sales/enumSaleTableViewType";
import enumPaths from "./../../models/enumPaths";

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

  const { saleData, saleTableViewType } = history &&
    history.location !== undefined &&
    history.location.state !== undefined &&
    history.location.state.data !== undefined
    ? history.location.state.data
    : { saleData: undefined, saleTableViewType: undefined };

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
      alert(i18n.saleErrorMessages.invalidQuantity);
    } else if (saleQuantity > productData.stock) {
      alert(i18n.saleErrorMessages.quantityGreaterThanStock);
    } else {
      setIsRequestInProgress(true);
      const body = {
        idSale: saleData.id,
        idProduct: productData.id,
        quantity: saleQuantity
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
    const idRelation = productData.id;
    handleDeleteRequestNew(`sales-products/${idRelation}`, handleAfterDeleteProductFromSale, handleAfterDeleteProductFromSale);
  }

  function fixArrayData (arrayProducts) {
    let totalToPayNew = 0;
    arrayProducts.forEach((product) => {
      totalToPayNew = totalToPayNew + Number(product.salePrice) * Number(product.stock);
    });
    setTotalToPay(totalToPayNew);
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

  function handleAfterDeleteOnSuccess (responseData) {
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
  function handleAfterDeleteOnFail (response) {
    setIsRequestInProgress(false);
  }

  function handleDelete () {
    setIsRequestInProgress(true);
    handleDeleteRequestNew(`sales/${saleData.id}`,
      handleAfterDeleteOnSuccess,
      handleAfterDeleteOnFail,
      handleAfterDeleteOnFail);
  }

  if (isRequestInProgress || !saleData) {
    return <CommonLoading />;
  }

  return (
    <div>
      <Card>
        <Card.Header as='h3'>{generalTitle} : {saleData.id}</Card.Header>
        <Card.Body className="sale-section-one">
          <div className="">
            <div className="puggysoft-six-divs-side-by-side-child">
              <Form.Group>
                <div className={"puggysoft-form-label"}><Form.Label>{i18n.saleProductTable.clientBox}</Form.Label></div>
                <div className={"puggysoft-form-input"}><Form.Control value={saleData.client} disabled /></div>
              </Form.Group>
            </div>
            <div className="puggysoft-six-divs-side-by-side-child">
              <Form.Group>
                <div className={"puggysoft-form-label"}><Form.Label>{i18n.saleProductTable.sellerBox}</Form.Label></div>
                <div className={"puggysoft-form-input"}><Form.Control value={saleData.createdBy} disabled /></div>
              </Form.Group>
            </div>
            <div className="puggysoft-six-divs-side-by-side-child">
              <Form.Group>
                <div className={"puggysoft-form-label"}><Form.Label>{i18n.saleProductTable.saleDate}</Form.Label></div>
                <div className={"puggysoft-form-input"}><Form.Control value={saleData.creationDate} disabled /></div>
              </Form.Group>
            </div>
            <div className="puggysoft-six-divs-side-by-side-child">
              <Form.Group>
                <div className={"puggysoft-form-label"}><Form.Label>{i18n.saleProductTable.saleTotalToPay}</Form.Label></div>
                <div className={"puggysoft-form-input"}><Form.Control value={totalToPay} disabled /></div>
              </Form.Group>
            </div>
            <div className="puggysoft-six-divs-side-by-side-child">
              <Form.Group>
                <div className={"puggysoft-form-label"}><Form.Label>{i18n.saleProductTable.clientCashToPay}</Form.Label></div>
                <div className={"puggysoft-form-input"}><Form.Control
                  value={clientCash}
                  onChange={(event) => {
                    onChangeClientCash(event.target.value);
                  }}
                /></div>
              </Form.Group>
            </div>
            <div className="puggysoft-six-divs-side-by-side-child">
              <Form.Group>
                <div className={"puggysoft-form-label"}><Form.Label>{i18n.saleProductTable.clientCashChange}</Form.Label></div>
                <div className={"puggysoft-form-input"}><Form.Control value={clientCashChange} disabled /></div>
              </Form.Group>
            </div>
          </div>
        </Card.Body>
        <Card.Body className="sale-section-two">
          <div className="">
            <div className="puggysoft-six-divs-side-by-side-child">
              <Button
                variant="danger sale-button"
                type="button"
                onClick={handleDelete}
              >
                {i18n.saleProductTable.buttonDeleteSale}</Button>
            </div>
            <div className="puggysoft-six-divs-side-by-side-child">
              {saleTableViewType !== enumSaleTableViewType.FOR_SELLER &&
                <Button
                  variant="success sale-button"
                  type="button"
                >{i18n.saleProductTable.buttonGenerateTicket}</Button>
              }
            </div>
            <div className="puggysoft-six-divs-side-by-side-child">
              {saleTableViewType !== enumSaleTableViewType.FOR_SELLER &&
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 60, hide: 256 }}
                  overlay={<Tooltip id="button-tooltip">
                    {i18n.saleProductTable.buttonChangeSaleStateToolTip}: {saleData.status}
                  </Tooltip>}
                >
                  <Button variant="info sale-button" type="button">{i18n.saleProductTable.buttonChangeSaleState}</Button>
                </OverlayTrigger>
              }
            </div>
            <div className="puggysoft-six-divs-side-by-side-child">
              {/* <Button variant="secondary sale-button" type="button">{i18n.saleProductTable.buttonGenerateBill}</Button> */}
            </div>
            <div className="puggysoft-six-divs-side-by-side-child">
            </div>
            <div className="puggysoft-six-divs-side-by-side-child">
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
