import React from "react";
import { useHistory } from "react-router";
import TableFilterGeneric from "./../generic/TableFilterGeneric";
import { handleFilterRequest, handleDeleteRequest } from "../../actions/HandleManager";
import enumPaths from "./../../models/enumPaths";
import i18n from "../../i18n/i18n";
import arrayDataFields from "../../models/sales/arrayProductDataFields";
import arrayColumns from "../../models/sales/arrayProductColumns";
import enumCompareOperators from "./../../models/enumCompareOperators";
import useInput from "./../../hooks/useInput";
import getColumnsFilterModel from "../../models/sales/arrayProductColumnsFilterSelection";

function ProductTableFilterEditDelete () {
  const pageSize = 10;
  const numberPagesToShow = 10;
  const tableTitle = i18n.productTable.titleSelectionToEditDelete;
  const history = useHistory();

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`products/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(`products/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  function handleEdit (data) {
    history.push({
      pathname: enumPaths.SALES_PRODUCTS_FORM,
      state: {
        data,
        edit: true
      }
    });
  }

  function handleDelete (data) {
    handleDeleteRequest(`products/${data.id}`, undefined, undefined, undefined, true);
  }

  const tableArrayCustomRowButtons = [
    {
      variant: "warning",
      handleCustom: handleEdit,
      text: i18n.commonTable.editButton
    },
    {
      variant: "danger",
      handleCustom: handleDelete,
      text: i18n.commonTable.deleteButton
    }
  ];

  // CRITERIA OF SEARCH OR FILTER
  const { value: criteriaId, onChange: criteriaOnChangeId, setValue: criteriaSetId } = useInput("");
  const { value: criteriaCode, onChange: criteriaOnChangeCode, setValue: criteriaSetCode } = useInput("");
  const { value: criteriaName, onChange: criteriaOnChangeName, setValue: criteriaSetName } = useInput("");
  const { value: criteriaPurchasePrice, onChange: criteriaOnChangePurchasePrice, setValue: criteriaSetPurchasePrice } = useInput("");
  const { value: criteriaSalePrice, onChange: criteriaOnChangeSalePrice, setValue: criteriaSetSalePrice } = useInput("");
  const { value: criteriaStock, onChange: criteriaOnChangeStock, setValue: criteriaSetStock } = useInput("");
  const { value: criteriaMinimumStock, onChange: criteriaOnChangeMinimumStock, setValue: criteriaSetMinimumStock } = useInput("");
  const { value: criteriaDescription, onChange: criteriaOnChangeDescription, setValue: criteriaSetDescription } = useInput("");
  const { value: criteriaLocation, onChange: criteriaOnChangeLocation, setValue: criteriaSetLocation } = useInput("");
  const { value: criteriaBarCode, onChange: criteriaOnChangeBarCode, setValue: criteriaSetBarCode } = useInput("");
  const { value: criteriaCreatedBy, onChange: criteriaOnChangeCreatedBy, setValue: criteriaSetCreatedBy } = useInput("");
  const { value: criteriaUpdatedBy, onChange: criteriaOnChangeUpdatedBy, setValue: criteriaSetUpdatedBy } = useInput("");
  const { value: criteriaCreatedDate, onChange: criteriaOnChangeCreatedDate, setValue: criteriaSetCreatedDate } = useInput("");
  const { value: criteriaUpdatedDate, onChange: criteriaOnChangeUpdatedDate, setValue: criteriaSetUpdatedDate } = useInput("");

  // FILTER OPERATORS
  const { value: operatorId, onChange: operatorOnChangeId, setValue: operatorSetId } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorCode, onChange: operatorOnChangeCode, setValue: operatorSetCode } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorName, onChange: operatorOnChangeName, setValue: operatorSetName } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorPurchasePrice, onChange: operatorOnChangePurchasePrice, setValue: operatorSetPurchasePrice } = useInput(enumCompareOperators.NUMBER_EQUALS);
  const { value: operatorSalePrice, onChange: operatorOnChangeSalePrice, setValue: operatorSetSalePrice } = useInput(enumCompareOperators.NUMBER_EQUALS);
  const { value: operatorStock, onChange: operatorOnChangeStock, setValue: operatorSetStock } = useInput(enumCompareOperators.NUMBER_EQUALS);
  const { value: operatorMinimumStock, onChange: operatorOnChangeMinimumStock, setValue: operatorSetMinimumStock } = useInput(enumCompareOperators.NUMBER_EQUALS);
  const { value: operatorDescription, onChange: operatorOnChangeDescription, setValue: operatorSetDescription } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorLocation, onChange: operatorOnChangeLocation, setValue: operatorSetLocation } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorBarCode, onChange: operatorOnChangeBarCode, setValue: operatorSetBarCode } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorCreatedBy, onChange: operatorOnChangeCreatedBy, setValue: operatorSetCreatedBy } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorUpdatedBy, onChange: operatorOnChangeUpdatedBy, setValue: operatorSetUpdatedBy } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorCreatedDate, onChange: operatorOnChangeCreatedDate, setValue: operatorSetCreatedDate } = useInput(enumCompareOperators.DATE_EQUALS);
  const { value: operatorUpdatedDate, onChange: operatorOnChangeUpdatedDate, setValue: operatorSetUpdatedDate } = useInput(enumCompareOperators.DATE_EQUALS);

  const criteriaTenant = window.sessionStorage.getItem("tenant");
  const operatorTenant = enumCompareOperators.TEXT_EQUALS;
  const { arrayColumnsFilter, clearFilters, getFilterBody } = getColumnsFilterModel(
    /* TENANT */ criteriaTenant, operatorTenant,
    /* ID */ criteriaId, criteriaOnChangeId, criteriaSetId, operatorId, operatorOnChangeId, operatorSetId,
    /* CODE */ criteriaCode, criteriaOnChangeCode, criteriaSetCode, operatorCode, operatorOnChangeCode, operatorSetCode,
    /* NAME */ criteriaName, criteriaOnChangeName, criteriaSetName, operatorName, operatorOnChangeName, operatorSetName,
    /* PURCHASE PRICE */criteriaPurchasePrice, criteriaOnChangePurchasePrice, criteriaSetPurchasePrice, operatorPurchasePrice, operatorOnChangePurchasePrice, operatorSetPurchasePrice,
    /* SALE PRICE */ criteriaSalePrice, criteriaOnChangeSalePrice, criteriaSetSalePrice, operatorSalePrice, operatorOnChangeSalePrice, operatorSetSalePrice,
    /* STOCK */criteriaStock, criteriaOnChangeStock, criteriaSetStock, operatorStock, operatorOnChangeStock, operatorSetStock,
    /* MINIMUM STOCK */criteriaMinimumStock, criteriaOnChangeMinimumStock, criteriaSetMinimumStock, operatorMinimumStock, operatorOnChangeMinimumStock, operatorSetMinimumStock,
    /* DESCRIPTION */criteriaDescription, criteriaOnChangeDescription, criteriaSetDescription, operatorDescription, operatorOnChangeDescription, operatorSetDescription,
    /* LOCATION */criteriaLocation, criteriaOnChangeLocation, criteriaSetLocation, operatorLocation, operatorOnChangeLocation, operatorSetLocation,
    /* BARCODE */criteriaBarCode, criteriaOnChangeBarCode, criteriaSetBarCode, operatorBarCode, operatorOnChangeBarCode, operatorSetBarCode,
    /* CREATED BY */criteriaCreatedBy, criteriaOnChangeCreatedBy, criteriaSetCreatedBy, operatorCreatedBy, operatorOnChangeCreatedBy, operatorSetCreatedBy,
    /* UPDATED BY */criteriaUpdatedBy, criteriaOnChangeUpdatedBy, criteriaSetUpdatedBy, operatorUpdatedBy, operatorOnChangeUpdatedBy, operatorSetUpdatedBy,
    /* CREATED DATE */criteriaCreatedDate, criteriaOnChangeCreatedDate, criteriaSetCreatedDate, operatorCreatedDate, operatorOnChangeCreatedDate, operatorSetCreatedDate,
    /* UPDATED DATE */criteriaUpdatedDate, criteriaOnChangeUpdatedDate, criteriaSetUpdatedDate, operatorUpdatedDate, operatorOnChangeUpdatedDate, operatorSetUpdatedDate
  );

  return (
    <div className="puggysoft-products-table-edit-delete" >
      <TableFilterGeneric
        arrayColumns={arrayColumns}
        arrayDataFields={arrayDataFields}
        handleGetData={handleGetData}
        handleGetSize={handleGetSize}
        tableTitle={tableTitle}
        tableArrayCustomRowButtons={tableArrayCustomRowButtons}
        numberPagesToShow={numberPagesToShow}
        arrayColumnsFilter={arrayColumnsFilter}
        clearFilters={clearFilters}
        getFilterBody={getFilterBody}
      >
      </TableFilterGeneric>
    </div>
  );
}

export default ProductTableFilterEditDelete;
