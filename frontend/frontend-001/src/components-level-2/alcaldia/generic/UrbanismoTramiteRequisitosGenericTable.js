import React from "react";
import PropTypes from "prop-types";
import TableFilterGeneric from "../../generic/TableFilterGeneric";
import useInput from "../../../hooks/useInput";
import enumCompareOperators from "../../../models/enumCompareOperators";
import enumTableColumnsToShow from "../../../models/enumTableColumnsToShow";
import urbanismoTramiteRequisitosTableModels from "../../../models/alcaldia/urbanismoTramiteRequisitosTableModels";

function UrbanismoTramiteRequisitosGenericTable (props) {
  const {
    numberPagesToShow,
    tableTitle,
    tableSubTitle,
    handleGetData,
    handleGetSize,
    tableArrayCustomRowButtons,
    columnsToShow
  } = props;

  // CRITERIA OF SEARCH OR FILTER
  const { value: criteriaId, onChange: criteriaOnChangeId, setValue: criteriaSetId } = useInput("");
  const { value: criteriaTramite, onChange: criteriaOnChangeTramite, setValue: criteriaSetTramite } = useInput("");
  const { value: criteriaRequisitos, onChange: criteriaOnChangeRequisitos, setValue: criteriaSetRequisitos } = useInput("");
  const { value: criteriaCreatedBy, onChange: criteriaOnChangeCreatedBy, setValue: criteriaSetCreatedBy } = useInput("");
  const { value: criteriaUpdatedBy, onChange: criteriaOnChangeUpdatedBy, setValue: criteriaSetUpdatedBy } = useInput("");
  const { value: criteriaCreatedDate, onChange: criteriaOnChangeCreatedDate, setValue: criteriaSetCreatedDate } = useInput("");
  const { value: criteriaUpdatedDate, onChange: criteriaOnChangeUpdatedDate, setValue: criteriaSetUpdatedDate } = useInput("");

  // FILTER OPERATORS
  const { value: operatorId, onChange: operatorOnChangeId, setValue: operatorSetId } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorTramite, onChange: operatorOnChangeTramite, setValue: operatorSetTramite } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorRequisitos, onChange: operatorOnChangeRequisitos, setValue: operatorSetRequisitos } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorCreatedBy, onChange: operatorOnChangeCreatedBy, setValue: operatorSetCreatedBy } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorUpdatedBy, onChange: operatorOnChangeUpdatedBy, setValue: operatorSetUpdatedBy } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorCreatedDate, onChange: operatorOnChangeCreatedDate, setValue: operatorSetCreatedDate } = useInput(enumCompareOperators.DATE_EQUALS);
  const { value: operatorUpdatedDate, onChange: operatorOnChangeUpdatedDate, setValue: operatorSetUpdatedDate } = useInput(enumCompareOperators.DATE_EQUALS);

  const { arrayColumnsFilter, clearFilters, getFilterBody, arrayColumnsLabels, arrayDataFields } = urbanismoTramiteRequisitosTableModels(
    columnsToShow,
    /* ID */ criteriaId, criteriaOnChangeId, criteriaSetId, operatorId, operatorOnChangeId, operatorSetId,
    /* Tramite */ criteriaTramite, criteriaOnChangeTramite, criteriaSetTramite, operatorTramite, operatorOnChangeTramite, operatorSetTramite,
    /* REQUISITOS */criteriaRequisitos, criteriaOnChangeRequisitos, criteriaSetRequisitos, operatorRequisitos, operatorOnChangeRequisitos, operatorSetRequisitos,
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
    >
    </TableFilterGeneric>
  );
}

export default UrbanismoTramiteRequisitosGenericTable;

UrbanismoTramiteRequisitosGenericTable.propTypes = {
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
  ])
};

UrbanismoTramiteRequisitosGenericTable.defaultProps = {
  numberPagesToShow: 0,
  tableTitle: "",
  tableSubTitle: undefined,
  handleGetData: () => { },
  handleGetSize: () => { },
  tableArrayCustomRowButtons: [],
  columnsToShow: enumTableColumnsToShow.FULL
};
