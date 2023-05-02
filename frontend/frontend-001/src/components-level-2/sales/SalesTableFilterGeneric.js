import React from "react";
import PropTypes from "prop-types";

import TableFilterGeneric from "./../generic/TableFilterGeneric";
import { handleFilterRequest } from "../../actions/HandleManager";
import arrayDataFields from "../../models/sales/arraySaleDataFields";
import arrayColumns from "../../models/sales/arraySaleColumns";
import enumCompareOperators from "./../../models/enumCompareOperators";
import useInput from "./../../hooks/useInput";
import getColumnsFilterModel from "../../models/sales/arraySaleColumnsFilterSelection";
import fixArrayDataSales from "./../../tools/sales/fixArrayDataSales";
import enumSaleStatus from "./../../models/sales/enumSaleStatus";

function SalesTableFilterGeneric ({
  tableArrayCustomRowButtons,
  tableFilterSaleStatusCriteria,
  tableTitle
}) {
  const pageSize = 10;
  const numberPagesToShow = 10;

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`sales/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(`sales/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  // CRITERIA OF SEARCH OR FILTER
  const { value: criteriaId, onChange: criteriaOnChangeId, setValue: criteriaSetId } = useInput("");
  const { value: criteriaClient, onChange: criteriaOnChangeClient, setValue: criteriaSetClient } = useInput("");
  let criteriaStatusDefault = "";
  if (tableFilterSaleStatusCriteria === enumSaleStatus.TODO) {
    criteriaStatusDefault = enumSaleStatus.TODO;
  } else if (tableFilterSaleStatusCriteria === enumSaleStatus.IN_PROGRESS) {
    criteriaStatusDefault = enumSaleStatus.IN_PROGRESS;
  }
  const { value: criteriaStatus, onChange: criteriaOnChangeStatus, setValue: criteriaSetStatus } = useInput(criteriaStatusDefault);
  const { value: criteriaCreatedBy, onChange: criteriaOnChangeCreatedBy, setValue: criteriaSetCreatedBy } = useInput("");
  const { value: criteriaUpdatedBy, onChange: criteriaOnChangeUpdatedBy, setValue: criteriaSetUpdatedBy } = useInput("");
  const { value: criteriaCreatedDate, onChange: criteriaOnChangeCreatedDate, setValue: criteriaSetCreatedDate } = useInput("");
  const { value: criteriaUpdatedDate, onChange: criteriaOnChangeUpdatedDate, setValue: criteriaSetUpdatedDate } = useInput("");

  // FILTER OPERATORS
  const { value: operatorId, onChange: operatorOnChangeId, setValue: operatorSetId } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorClient, onChange: operatorOnChangeClient, setValue: operatorSetClient } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorStatus, onChange: operatorOnChangeStatus, setValue: operatorSetStatus } = useInput(enumCompareOperators.TEXT_EQUALS);
  const { value: operatorCreatedBy, onChange: operatorOnChangeCreatedBy, setValue: operatorSetCreatedBy } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorUpdatedBy, onChange: operatorOnChangeUpdatedBy, setValue: operatorSetUpdatedBy } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorCreatedDate, onChange: operatorOnChangeCreatedDate, setValue: operatorSetCreatedDate } = useInput(enumCompareOperators.DATE_EQUALS);
  const { value: operatorUpdatedDate, onChange: operatorOnChangeUpdatedDate, setValue: operatorSetUpdatedDate } = useInput(enumCompareOperators.DATE_EQUALS);

  const criteriaTenant = window.sessionStorage.getItem("tenant");
  const operatorTenant = enumCompareOperators.TEXT_EQUALS;
  const { arrayColumnsFilter, clearFilters, getFilterBody } = getColumnsFilterModel(
    /* TENANT */ criteriaTenant, operatorTenant,
    /* ID */ criteriaId, criteriaOnChangeId, criteriaSetId, operatorId, operatorOnChangeId, operatorSetId,
    /* CLIENT */ criteriaClient, criteriaOnChangeClient, criteriaSetClient, operatorClient, operatorOnChangeClient, operatorSetClient,
    /* STATUS */ criteriaStatus, criteriaOnChangeStatus, criteriaSetStatus, operatorStatus, operatorOnChangeStatus, operatorSetStatus,
    /* CREATED BY */criteriaCreatedBy, criteriaOnChangeCreatedBy, criteriaSetCreatedBy, operatorCreatedBy, operatorOnChangeCreatedBy, operatorSetCreatedBy,
    /* UPDATED BY */criteriaUpdatedBy, criteriaOnChangeUpdatedBy, criteriaSetUpdatedBy, operatorUpdatedBy, operatorOnChangeUpdatedBy, operatorSetUpdatedBy,
    /* CREATED DATE */criteriaCreatedDate, criteriaOnChangeCreatedDate, criteriaSetCreatedDate, operatorCreatedDate, operatorOnChangeCreatedDate, operatorSetCreatedDate,
    /* UPDATED DATE */criteriaUpdatedDate, criteriaOnChangeUpdatedDate, criteriaSetUpdatedDate, operatorUpdatedDate, operatorOnChangeUpdatedDate, operatorSetUpdatedDate,
    criteriaStatusDefault
  );

  function fixArrayData (arraySales) {
    const arraySalesFixed = fixArrayDataSales(arraySales);
    return arraySalesFixed;
  }

  return (
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
      fixArrayData={fixArrayData}
    >
    </TableFilterGeneric>
  );
}

export default SalesTableFilterGeneric;

SalesTableFilterGeneric.propTypes = {
  tableTitle: PropTypes.string,
  tableArrayCustomRowButtons: PropTypes.array,
  tableFilterSaleStatusCriteria: PropTypes.oneOf([
    enumSaleStatus.DONE,
    enumSaleStatus.IN_PROGRESS,
    enumSaleStatus.TODO
  ])
};

SalesTableFilterGeneric.defaultProps = {
  tableTitle: "Default Sales Title",
  tableArrayCustomRowButtons: [],
  tableFilterSaleStatusCriteria: enumSaleStatus.DONE
};
