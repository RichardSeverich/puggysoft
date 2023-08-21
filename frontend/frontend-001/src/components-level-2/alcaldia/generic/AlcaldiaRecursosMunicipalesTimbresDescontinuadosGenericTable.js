import React from "react";
import PropTypes from "prop-types";
import TableFilterGeneric from "../../generic/TableFilterGeneric";
import useInput from "../../../hooks/useInput";
import enumCompareOperators from "../../../models/enumCompareOperators";
import enumTableColumnsToShow from "../../../models/enumTableColumnsToShow";
import alcaldiaRecursosMunicipalesTimbresDescontinuadosTableModels from "../../../models/alcaldia/alcaldiaRecursosMunicipalesTimbresDescontinuadosTableModels";

function AlcaldiaRecursosMunicipalesTimbresDescontinuadosGenericTable (props) {
  const {
    numberPagesToShow,
    tableTitle,
    tableSubTitle,
    handleGetData,
    handleGetSize,
    tableArrayCustomRowButtons,
    columnsToShow,
    fixArrayData
  } = props;

  // CRITERIA OF SEARCH OR FILTER
  const { value: criteriaId, onChange: criteriaOnChangeId, setValue: criteriaSetId } = useInput("");
  const { value: criteriaCodigo, onChange: criteriaOnChangeCodigo, setValue: criteriaSetCodigo } = useInput("");
  const { value: criteriaCreatedBy, onChange: criteriaOnChangeCreatedBy, setValue: criteriaSetCreatedBy } = useInput("");
  const { value: criteriaUpdatedBy, onChange: criteriaOnChangeUpdatedBy, setValue: criteriaSetUpdatedBy } = useInput("");
  const { value: criteriaCreatedDate, onChange: criteriaOnChangeCreatedDate, setValue: criteriaSetCreatedDate } = useInput("");
  const { value: criteriaUpdatedDate, onChange: criteriaOnChangeUpdatedDate, setValue: criteriaSetUpdatedDate } = useInput("");

  // FILTER OPERATORS
  const { value: operatorId, onChange: operatorOnChangeId, setValue: operatorSetId } = useInput(enumCompareOperators.NUMBER_EQUALS);
  const { value: operatorCodigo, onChange: operatorOnChangeCodigo, setValue: operatorSetCodigo } = useInput(enumCompareOperators.NUMBER_EQUALS);
  const { value: operatorCreatedBy, onChange: operatorOnChangeCreatedBy, setValue: operatorSetCreatedBy } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorUpdatedBy, onChange: operatorOnChangeUpdatedBy, setValue: operatorSetUpdatedBy } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorCreatedDate, onChange: operatorOnChangeCreatedDate, setValue: operatorSetCreatedDate } = useInput(enumCompareOperators.DATE_EQUALS);
  const { value: operatorUpdatedDate, onChange: operatorOnChangeUpdatedDate, setValue: operatorSetUpdatedDate } = useInput(enumCompareOperators.DATE_EQUALS);

  const { arrayColumnsFilter, clearFilters, getFilterBody, arrayColumnsLabels, arrayDataFields } = alcaldiaRecursosMunicipalesTimbresDescontinuadosTableModels(
    columnsToShow,
    /* ID */ criteriaId, criteriaOnChangeId, criteriaSetId, operatorId, operatorOnChangeId, operatorSetId,
    /* CODIGO */ criteriaCodigo, criteriaOnChangeCodigo, criteriaSetCodigo, operatorCodigo, operatorOnChangeCodigo, operatorSetCodigo,
    /* CREATED BY */criteriaCreatedBy, criteriaOnChangeCreatedBy, criteriaSetCreatedBy, operatorCreatedBy, operatorOnChangeCreatedBy, operatorSetCreatedBy,
    /* UPDATED BY */criteriaUpdatedBy, criteriaOnChangeUpdatedBy, criteriaSetUpdatedBy, operatorUpdatedBy, operatorOnChangeUpdatedBy, operatorSetUpdatedBy,
    /* CREATED DATE */criteriaCreatedDate, criteriaOnChangeCreatedDate, criteriaSetCreatedDate, operatorCreatedDate, operatorOnChangeCreatedDate, operatorSetCreatedDate,
    /* UPDATED DATE */criteriaUpdatedDate, criteriaOnChangeUpdatedDate, criteriaSetUpdatedDate, operatorUpdatedDate, operatorOnChangeUpdatedDate, operatorSetUpdatedDate
  );

  return (
    <TableFilterGeneric
      arrayColumns={arrayColumnsLabels}
      arrayDataFields={arrayDataFields}
      handleGetData={handleGetData}
      handleGetSize={handleGetSize}
      tableTitle={tableTitle}
      tableSubTitle={tableSubTitle}
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

export default AlcaldiaRecursosMunicipalesTimbresDescontinuadosGenericTable;

AlcaldiaRecursosMunicipalesTimbresDescontinuadosGenericTable.propTypes = {
  numberPagesToShow: PropTypes.number,
  tableTitle: PropTypes.string,
  tableSubTitle: PropTypes.string,
  handleGetData: PropTypes.func,
  handleGetSize: PropTypes.func,
  tableArrayCustomRowButtons: PropTypes.array,
  columnsToShow: PropTypes.oneOf([
    enumTableColumnsToShow.FULL,
    enumTableColumnsToShow.MEDIUM,
    enumTableColumnsToShow.MINIMUM
  ]),
  fixArrayData: PropTypes.func
};

AlcaldiaRecursosMunicipalesTimbresDescontinuadosGenericTable.defaultProps = {
  numberPagesToShow: 0,
  tableTitle: "",
  tableSubTitle: undefined,
  handleGetData: () => { },
  handleGetSize: () => { },
  tableArrayCustomRowButtons: [],
  columnsToShow: enumTableColumnsToShow.FULL,
  fixArrayData: undefined
};
