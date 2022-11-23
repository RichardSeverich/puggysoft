import { useHistory } from "react-router";
import TableFilterGeneric from "./../generic/TableFilterGeneric";
import { handleFilterRequest } from "../../actions/HandleManager";
import enumPaths from "./../../models/enumPaths"
import i18n from "../../i18n/i18n";
import arrayDataFields from "../../models/system/systemPropertiesDataFields";
import arrayColumns from "../../models/system/systemPropertiesColumns";
import enumCompareOperators from "./../../models/enumCompareOperators";
import useInput from "./../../hooks/useInput";
import getColumnsFilterModel from "../../models/system/systemPropertiesFilter";

function SystemPropertiesTableFilterEdit() {

  const pageSize = 10;
  const numberPagesToShow = 10;
  const tableTitle = i18n.systemPropertiesTable.title;
  const history = useHistory();

  function handleGetData(activePage, filterBody, updateArrayData) {
    handleFilterRequest(`system-properties/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }

  function handleGetSize(filterBody, setTotalPages) {
    handleFilterRequest(`system-properties/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  function handleEdit(data) {
    history.push({
      pathname: enumPaths.SYSTEM_PROPERTIES_FORM,
      state: {
        systemPropertyData: data,
      }
    })
  }

  const tableArrayCustomRowButtons = [
    {
      variant: "warning",
      handleCustom: handleEdit,
      text: i18n.commonTable.editButton
    },
  ]

  // CRITERIA OF SEARCH OR FILTER
  const { value: criteriaId, onChange: criteriaOnChangeId, setValue: criteriaSetId } = useInput('');
  const { value: criteriaName, onChange: criteriaOnChangeName, setValue: criteriaSetName } = useInput('');
  const { value: criteriaValue, onChange: criteriaOnChangeValue, setValue: criteriaSetValue } = useInput('');
  const { value: criteriaCreatedBy, onChange: criteriaOnChangeCreatedBy, setValue: criteriaSetCreatedBy } = useInput('');
  const { value: criteriaUpdatedBy, onChange: criteriaOnChangeUpdatedBy, setValue: criteriaSetUpdatedBy } = useInput('');
  const { value: criteriaCreatedDate, onChange: criteriaOnChangeCreatedDate, setValue: criteriaSetCreatedDate } = useInput('');
  const { value: criteriaUpdatedDate, onChange: criteriaOnChangeUpdatedDate, setValue: criteriaSetUpdatedDate } = useInput('');

  // FILTER OPERATORS
  const { value: operatorId, onChange: operatorOnChangeId, setValue: operatorSetId } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorName, onChange: operatorOnChangeName, setValue: operatorSetName } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorValue, onChange: operatorOnChangeValue, setValue: operatorSetValue } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorCreatedBy, onChange: operatorOnChangeCreatedBy, setValue: operatorSetCreatedBy } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorUpdatedBy, onChange: operatorOnChangeUpdatedBy, setValue: operatorSetUpdatedBy } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorCreatedDate, onChange: operatorOnChangeCreatedDate, setValue: operatorSetCreatedDate } = useInput(enumCompareOperators.DATE_EQUALS);
  const { value: operatorUpdatedDate, onChange: operatorOnChangeUpdatedDate, setValue: operatorSetUpdatedDate } = useInput(enumCompareOperators.DATE_EQUALS);

  const { arrayColumnsFilter, clearFilters, getFilterBody } = getColumnsFilterModel(
    /*ID*/ criteriaId, criteriaOnChangeId, criteriaSetId, operatorId, operatorOnChangeId, operatorSetId,
    /*CODE*/ criteriaValue, criteriaOnChangeValue, criteriaSetValue, operatorValue, operatorOnChangeValue, operatorSetValue,
    /*NAME*/ criteriaName, criteriaOnChangeName, criteriaSetName, operatorName, operatorOnChangeName, operatorSetName,
    /*CREATED BY*/criteriaCreatedBy, criteriaOnChangeCreatedBy, criteriaSetCreatedBy, operatorCreatedBy, operatorOnChangeCreatedBy, operatorSetCreatedBy,
    /*UPDATED BY*/criteriaUpdatedBy, criteriaOnChangeUpdatedBy, criteriaSetUpdatedBy, operatorUpdatedBy, operatorOnChangeUpdatedBy, operatorSetUpdatedBy,
    /*CREATED DATE*/criteriaCreatedDate, criteriaOnChangeCreatedDate, criteriaSetCreatedDate, operatorCreatedDate, operatorOnChangeCreatedDate, operatorSetCreatedDate,
    /*UPDATED DATE*/criteriaUpdatedDate, criteriaOnChangeUpdatedDate, criteriaSetUpdatedDate, operatorUpdatedDate, operatorOnChangeUpdatedDate, operatorSetUpdatedDate
  );

  return (
    <div className="puggysoft-system-properties-table-edit" >
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
  )
}

export default SystemPropertiesTableFilterEdit;