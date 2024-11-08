import React, { useState } from "react";
import { useHistory } from "react-router";
import i18n from "../../i18n/i18n";
import {
  handleFilterRequest,
  handleAddRequest,
  handleDeleteRequest
} from "../../actions/HandleManager";
import ProductGroupGenericTable from "./generic/ProductGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";
import Card from "react-bootstrap/Card";
import CommonLoading from "../../components-level-1/CommonLoading";

function GroupProductForProductsStep2 () {
  const tableSubTitleOne = i18n.productTable.titleAvailable;
  const tableSubTitleTwo = i18n.productTable.titleaggregates;
  const pageSize = 7;
  const numberPagesToShow = 7;
  const history = useHistory();
  const productGroupSelected = history && history.location && history.location.state.data;
  const [isLoadingTable, setIsLoadingTable] = useState(false);

  function handleGetDataA (activePage, filterBody, updateArrayData) {
    handleFilterRequest(
      `products-by-product-groups/filter?page=${activePage - 1}&size=${pageSize}&productGroup=${productGroupSelected.id}&contains=false`,
      filterBody,
      updateArrayData
    );
  }

  function handleGetSizeA (filterBody, setTotalPages) {
    handleFilterRequest(
      `products-by-product-groups/filter/size?pageSize=${pageSize}&productGroup=${productGroupSelected.id}&contains=false`,
      filterBody,
      setTotalPages
    );
  }

  function handleGetDataB (activePage, filterBody, updateArrayData) {
    handleFilterRequest(
      `products-by-product-groups/filter?page=${activePage - 1}&size=${pageSize}&productGroup=${productGroupSelected.id}&contains=true`,
      filterBody,
      updateArrayData
    );
  }

  function handleGetSizeB (filterBody, setTotalPages) {
    handleFilterRequest(
      `products-by-product-groups/filter/size?pageSize=${pageSize}&productGroup=${productGroupSelected.id}&contains=true`,
      filterBody,
      setTotalPages
    );
  }

  function afterApiCall () {
    setIsLoadingTable(false);
  }

  const handleAggregate = function (product) {
    setIsLoadingTable(true);
    const username = window.sessionStorage.getItem("username");
    const tenant = window.sessionStorage.getItem("tenant");
    const body = {
      idProduct: product.id,
      idProductGroup: productGroupSelected.id,
      createdBy: username,
      tenant
    };
    handleAddRequest("product-groups-products", body, afterApiCall);
  };

  const tableArrayCustomRowButtons = [
    {
      variant: "info",
      handleCustom: handleAggregate,
      text: i18n.commonTable.aggregateButton
    }
  ];

  function handleDelete (productGroupsProducts) {
    setIsLoadingTable(true);
    handleDeleteRequest(`product-groups-products/${productGroupsProducts.id}`, afterApiCall);
  }

  const tableArrayCustomRowButtonsTwo = [
    {
      variant: "danger",
      handleCustom: handleDelete,
      text: i18n.commonTable.deleteButton
    }
  ];

  if (isLoadingTable) {
    return <CommonLoading />;
  }

  return (
    <div>
      <Card>
        <Card.Header as="h3">
          {"Categoria" + `: ${productGroupSelected.name}`}
        </Card.Header>
      </Card>
      <div className="puggysoft-two-divs-side-by-side-child">
        <ProductGroupGenericTable
          tableTitle={tableSubTitleOne}
          numberPagesToShow={numberPagesToShow}
          handleGetData={handleGetDataA}
          handleGetSize={handleGetSizeA}
          tableArrayCustomRowButtons={tableArrayCustomRowButtons}
          columnsToShow={enumTableColumnsToShow.MINIMUM}
        />
      </div>
      <div className="puggysoft-two-divs-side-by-side-child">
        <ProductGroupGenericTable
          tableTitle={tableSubTitleTwo}
          numberPagesToShow={numberPagesToShow}
          handleGetData={handleGetDataB}
          handleGetSize={handleGetSizeB}
          tableArrayCustomRowButtons={tableArrayCustomRowButtonsTwo}
          columnsToShow={enumTableColumnsToShow.MINIMUM}
        />
      </div>
    </div>
  );
}

export default GroupProductForProductsStep2;
