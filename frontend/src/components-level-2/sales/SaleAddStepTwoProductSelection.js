import { useHistory } from "react-router";
import { useState } from "react";
import { handleFilterRequest, handleAddRequest, handleDeleteRequestNew } from "../../actions/HandleManager";
import ProductTableGeneric from "./ProductTableGeneric";
import i18n from "../../i18n/i18n";
import CommonLoading from '../../components-level-1/CommonLoading';
import arraySaleProductColumns from "../../models/sales/arraySaleProductColumns";
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import enumWebElements from './../../models/enumWebElements'

import "./../css/all-two-divs-side-by-side.css"
import "./../css/all-three-divs-side-by-side.css"
import "./../css/all-forms-inline-block.css"


function SaleAddStepTwoProductSelection(props) {

  const history = useHistory();
  const pageSize = 7;
  const numberPagesToShow = 10;
  const tableTitleAddProductsToSale = i18n.saleProductTable.titleSelectionAddSaleForSeller;
  const tableTitleDeleteProductsFromSale = i18n.saleProductTable.titleSelectionDeleteSaleForSeller;
  const generalTitle = i18n.saleProductTable.titleForSeller;

  const { saleData } = history && history.location && history.location.state && history.location.state.data;
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);

  // functions to add products to a sale.
  function handleGetDataProductsAddToSale(activePage, filterBody, updateArrayData) {
    handleFilterRequest(`products/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }
  function handleGetSizeProductsAddToSale(filterBody, setTotalPages) {
    handleFilterRequest(`products/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  function handleAfterAddProductToSale(salesProductsOrError) {
    setIsRequestInProgress(false);
  }

  function handleAddProductToSale(productData, textboxId) {
    let textboxElement = document.getElementById(textboxId);
    let saleQuantity = textboxElement.value;
    if (!saleQuantity || saleQuantity === '' || saleQuantity <= 0) {
      alert(i18n.saleErrorMessages.invalidQuantity);
    } else if (saleQuantity > productData.stock) {
      alert(i18n.saleErrorMessages.quantityGreaterThanStock);
    } else {
      setIsRequestInProgress(true);
      const body = {
        idSale: saleData.id,
        idProduct: productData.id,
        quantity: saleQuantity
      }
      handleAddRequest(`sales-products`, body, handleAfterAddProductToSale, true, handleAfterAddProductToSale)
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
    },
  ]

  /*- dataElement.onChange
  - dataElement.value*/

  // functions to delete products from a sale.
  function handleGetDataProductsToDelete(activePage, filterBody, updateArrayData) {
    handleFilterRequest(`products/filter-by-sale-id?page=${activePage - 1}&size=${pageSize}&saleId=${saleData.id}`, filterBody, updateArrayData);
  }
  function handleGetSizeProductsToDelete(filterBody, setTotalPages) {
    handleFilterRequest(`products/filter/size-by-sale-id?pageSize=${pageSize}&saleId=${saleData.id}`, filterBody, setTotalPages);
  }

  function handleAfterDeleteProductFromSale() {
    setIsRequestInProgress(false);
  }

  function handleDeleteSaleProductRelation(productData) {
    // NOTE: The ID field of this ${productData} object is the relation ID. sales_products.id
    // NOTE: The STOCK filed of this ${productData} object is the quantity of sales_products.
    setIsRequestInProgress(true);
    const idRelation = productData.id;
    handleDeleteRequestNew(`sales-products/${idRelation}`, handleAfterDeleteProductFromSale, handleAfterDeleteProductFromSale)
  }

  const tableArrayCustomRowButtonsDeleteFromSale = [
    {
      variant: "danger",
      handleCustom: handleDeleteSaleProductRelation,
      text: i18n.commonTable.deleteButton
    },
  ]

  if (isRequestInProgress) {
    return <CommonLoading />
  }

  return (
    <div>
      <Card>
        <Card.Header as='h3'>{generalTitle}</Card.Header>
        <Card.Body>
          <div className="">
            <div className="puggysoft-three-divs-side-by-side-child">
              <Form.Group>
                <div className={"puggysoft-form-label"}><Form.Label>{i18n.saleProductTable.clientBox}</Form.Label></div>
                <div className={"puggysoft-form-input"}><Form.Control value={saleData.client} disabled /></div>
              </Form.Group>
            </div>
            <div className="puggysoft-three-divs-side-by-side-child">
              <Form.Group>
                <div className={"puggysoft-form-label"}><Form.Label>{i18n.saleProductTable.sellerBox}</Form.Label></div>
                <div className={"puggysoft-form-input"}><Form.Control value={saleData.createdBy} disabled /></div>
              </Form.Group>
            </div>
            <div className="puggysoft-three-divs-side-by-side-child">
              <Form.Group>
                <div className={"puggysoft-form-label"}><Form.Label>{i18n.saleProductTable.saleDate}</Form.Label></div>
                <div className={"puggysoft-form-input"}><Form.Control value={saleData.creationDate} disabled /></div>
              </Form.Group>
            </div>
          </div>
        </Card.Body>
      </Card>

      <div>
        <div className="puggysoft-two-divs-side-by-side-child">
          <ProductTableGeneric
            tableTitle={tableTitleAddProductsToSale}
            handleGetData={handleGetDataProductsAddToSale}
            handleGetSize={handleGetSizeProductsAddToSale}
            tableArrayCustomRowButtons={tableArrayCustomRowButtonsAddToSale}
            numberPagesToShow={numberPagesToShow}
          >
          </ProductTableGeneric>
        </div>
        <div className="puggysoft-two-divs-side-by-side-child">
          <ProductTableGeneric
            tableTitle={tableTitleDeleteProductsFromSale}
            handleGetData={handleGetDataProductsToDelete}
            handleGetSize={handleGetSizeProductsToDelete}
            tableArrayCustomRowButtons={tableArrayCustomRowButtonsDeleteFromSale}
            numberPagesToShow={numberPagesToShow}
            arrayColumns={arraySaleProductColumns}
          >
          </ProductTableGeneric>
        </div>
      </div >
    </div>
  )
}

export default SaleAddStepTwoProductSelection;