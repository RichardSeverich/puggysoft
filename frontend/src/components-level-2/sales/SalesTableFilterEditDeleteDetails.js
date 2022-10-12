import { useHistory } from "react-router";
import TableFilterGeneric from "./../generic/TableFilterGeneric";
import { handleFilterRequest, handleDeleteRequest } from "../../actions/HandleManager";
import enumPaths from "./../../models/enumPaths"
import i18n from "../../i18n/i18n";
import arrayDataFields from "../../models/sales/arraySaleDataFields";
import arrayColumns from "../../models/sales/arraySaleColumns";
import enumCompareOperators from "./../../models/enumCompareOperators";
import useInput from "./../../hooks/useInput";
import getColumnsFilterModel from "../../models/sales/arraySaleColumnsFilterSelection";

function SalesTableFilterEditDeleteDetails() {

  const pageSize = 10;
  const numberPagesToShow = 10;
  const tableTitle = i18n.saleTable.titleSelectionToEditDelete;
  const history = useHistory();

  function handleGetData(activePage, filterBody, updateArrayData) {
    handleFilterRequest(`sales/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }

  function handleGetSize(filterBody, setTotalPages) {
    handleFilterRequest(`sales/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  function handleEdit(data) {
    /*history.push({
      pathname: enumPaths.SALES_PRODUCTS_FORM,
      state: {
        data: data,
        edit: true
      }
    })*/
  }

  function handleDelete(data) {
    handleDeleteRequest("sales/", data.id)
  }

  function handleDetails(userData) {
    /*history.push({
      pathname: enumPaths.USERS_DETAILS,
      state: {
        data: userData,
      }
    })*/
  }

  const tableArrayCustomRowButtons = [
    {
      variant: "success",
      handleCustom: handleDetails,
      text: i18n.commonTable.detailsButton
    },
    {
      variant: "danger",
      handleCustom: handleDelete,
      text: i18n.commonTable.deleteButton
    }
  ]

  // CRITERIA OF SEARCH OR FILTER
  const { value: criteriaId, onChange: criteriaOnChangeId, setValue: criteriaSetId } = useInput('');
  const { value: criteriaClient, onChange: criteriaOnChangeClient, setValue: criteriaSetClient } = useInput('');
  const { value: criteriaStatus, onChange: criteriaOnChangeStatus, setValue: criteriaSetStatus } = useInput('');
  const { value: criteriaCreatedBy, onChange: criteriaOnChangeCreatedBy, setValue: criteriaSetCreatedBy } = useInput('');
  const { value: criteriaUpdatedBy, onChange: criteriaOnChangeUpdatedBy, setValue: criteriaSetUpdatedBy } = useInput('');
  const { value: criteriaCreatedDate, onChange: criteriaOnChangeCreatedDate, setValue: criteriaSetCreatedDate } = useInput('');
  const { value: criteriaUpdatedDate, onChange: criteriaOnChangeUpdatedDate, setValue: criteriaSetUpdatedDate } = useInput('');

  // FILTER OPERATORS
  const { value: operatorId, onChange: operatorOnChangeId, setValue: operatorSetId } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorClient, onChange: operatorOnChangeClient, setValue: operatorSetClient } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorStatus, onChange: operatorOnChangeStatus, setValue: operatorSetStatus } = useInput(enumCompareOperators.TEXT_EQUALS);
  const { value: operatorCreatedBy, onChange: operatorOnChangeCreatedBy, setValue: operatorSetCreatedBy } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorUpdatedBy, onChange: operatorOnChangeUpdatedBy, setValue: operatorSetUpdatedBy } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorCreatedDate, onChange: operatorOnChangeCreatedDate, setValue: operatorSetCreatedDate } = useInput(enumCompareOperators.DATE_EQUALS);
  const { value: operatorUpdatedDate, onChange: operatorOnChangeUpdatedDate, setValue: operatorSetUpdatedDate } = useInput(enumCompareOperators.DATE_EQUALS);

  const { arrayColumnsFilter, clearFilters, getFilterBody } = getColumnsFilterModel(
    /*ID*/ criteriaId, criteriaOnChangeId, criteriaSetId, operatorId, operatorOnChangeId, operatorSetId,
    /*CLIENT*/ criteriaClient, criteriaOnChangeClient, criteriaSetClient, operatorClient, operatorOnChangeClient, operatorSetClient,
    /*STATUS*/ criteriaStatus, criteriaOnChangeStatus, criteriaSetStatus, operatorStatus, operatorOnChangeStatus, operatorSetStatus,
    /*CREATED BY*/criteriaCreatedBy, criteriaOnChangeCreatedBy, criteriaSetCreatedBy, operatorCreatedBy, operatorOnChangeCreatedBy, operatorSetCreatedBy,
    /*UPDATED BY*/criteriaUpdatedBy, criteriaOnChangeUpdatedBy, criteriaSetUpdatedBy, operatorUpdatedBy, operatorOnChangeUpdatedBy, operatorSetUpdatedBy,
    /*CREATED DATE*/criteriaCreatedDate, criteriaOnChangeCreatedDate, criteriaSetCreatedDate, operatorCreatedDate, operatorOnChangeCreatedDate, operatorSetCreatedDate,
    /*UPDATED DATE*/criteriaUpdatedDate, criteriaOnChangeUpdatedDate, criteriaSetUpdatedDate, operatorUpdatedDate, operatorOnChangeUpdatedDate, operatorSetUpdatedDate
  );

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
    >
    </TableFilterGeneric>
  )
}

export default SalesTableFilterEditDeleteDetails;