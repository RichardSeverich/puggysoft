import React from "react";
import PropTypes from "prop-types";
import TableFilterGeneric from "../../generic/TableFilterGeneric";
import useInput from "../../../hooks/useInput";
import enumCompareOperators from "../../../models/enumCompareOperators";
import enumTableColumnsToShow from "../../../models/enumTableColumnsToShow";
import alcaldiaRecursosMunicipalesVentasTableModels from "../../../models/alcaldia/alcaldiaRecursosMunicipalesVentasTableModels";

function AlcaldiaRecursosMunicipalesVentasGenericTable (props) {
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
  const { value: criteriaClienteNombre, onChange: criteriaOnChangeClienteNombre, setValue: criteriaSetClienteNombre } = useInput("");
  const { value: criteriaClienteCiNit, onChange: criteriaOnChangeClienteCiNit, setValue: criteriaSetClienteCiNit } = useInput("");
  const { value: criteriaDireccion, onChange: criteriaOnChangeDireccion, setValue: criteriaSetDireccion } = useInput("");
  const { value: criteriaNota, onChange: criteriaOnChangeNota, setValue: criteriaSetNota } = useInput("");
  const { value: criteriaVentaStatus, onChange: criteriaOnChangeVentaStatus, setValue: criteriaSetVentaStatus } = useInput("");
  const { value: criteriaVentaPrecioTotal, onChange: criteriaOnChangeVentaPrecioTotal, setValue: criteriaSetVentaPrecioTotal } = useInput("");
  const { value: criteriaClienteDinero, onChange: criteriaOnChangeClienteDinero, setValue: criteriaSetClienteDinero } = useInput("");
  const { value: criteriaClienteCambio, onChange: criteriaOnChangeClienteCambio, setValue: criteriaSetClienteCambio } = useInput("");
  const { value: criteriaCreatedBy, onChange: criteriaOnChangeCreatedBy, setValue: criteriaSetCreatedBy } = useInput("");
  const { value: criteriaUpdatedBy, onChange: criteriaOnChangeUpdatedBy, setValue: criteriaSetUpdatedBy } = useInput("");
  const { value: criteriaCreatedDate, onChange: criteriaOnChangeCreatedDate, setValue: criteriaSetCreatedDate } = useInput("");
  const { value: criteriaUpdatedDate, onChange: criteriaOnChangeUpdatedDate, setValue: criteriaSetUpdatedDate } = useInput("");

  // FILTER OPERATORS
  const { value: operatorId, onChange: operatorOnChangeId, setValue: operatorSetId } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorClienteNombre, onChange: operatorOnChangeClienteNombre, setValue: operatorSetClienteNombre } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorClienteCiNit, onChange: operatorOnChangeClienteCiNit, setValue: operatorSetClienteCiNit } = useInput(enumCompareOperators.NUMBER_EQUALS);
  const { value: operatorDireccion, onChange: operatorOnChangeDireccion, setValue: operatorSetDireccion } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorNota, onChange: operatorOnChangeNota, setValue: operatorSetNota } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorVentaStatus, onChange: operatorOnChangeVentaStatus, setValue: operatorSetVentaStatus } = useInput(enumCompareOperators.TEXT_EQUALS);
  const { value: operatorVentaPrecioTotal, onChange: operatorOnChangeVentaPrecioTotal, setValue: operatorSetVentaPrecioTotal } = useInput(enumCompareOperators.NUMBER_EQUALS);
  const { value: operatorClienteDinero, onChange: operatorOnChangeClienteDinero, setValue: operatorSetClienteDinero } = useInput(enumCompareOperators.NUMBER_EQUALS);
  const { value: operatorClienteCambio, onChange: operatorOnChangeClienteCambio, setValue: operatorSetClienteCambio } = useInput(enumCompareOperators.NUMBER_EQUALS);
  const { value: operatorCreatedBy, onChange: operatorOnChangeCreatedBy, setValue: operatorSetCreatedBy } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorUpdatedBy, onChange: operatorOnChangeUpdatedBy, setValue: operatorSetUpdatedBy } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorCreatedDate, onChange: operatorOnChangeCreatedDate, setValue: operatorSetCreatedDate } = useInput(enumCompareOperators.DATE_EQUALS);
  const { value: operatorUpdatedDate, onChange: operatorOnChangeUpdatedDate, setValue: operatorSetUpdatedDate } = useInput(enumCompareOperators.DATE_EQUALS);

  const { arrayColumnsFilter, clearFilters, getFilterBody, arrayColumnsLabels, arrayDataFields } = alcaldiaRecursosMunicipalesVentasTableModels(
    columnsToShow,
    /* ID */ criteriaId, criteriaOnChangeId, criteriaSetId, operatorId, operatorOnChangeId, operatorSetId,
    /* CLIENTE NOMBRE */ criteriaClienteNombre, criteriaOnChangeClienteNombre, criteriaSetClienteNombre, operatorClienteNombre, operatorOnChangeClienteNombre, operatorSetClienteNombre,
    /* CLIENTE CI NIT */criteriaClienteCiNit, criteriaOnChangeClienteCiNit, criteriaSetClienteCiNit, operatorClienteCiNit, operatorOnChangeClienteCiNit, operatorSetClienteCiNit,
    /* DIRECCION */criteriaDireccion, criteriaOnChangeDireccion, criteriaSetDireccion, operatorDireccion, operatorOnChangeDireccion, operatorSetDireccion,
    /* NOTA */criteriaNota, criteriaOnChangeNota, criteriaSetNota, operatorNota, operatorOnChangeNota, operatorSetNota,
    /* VENTA STATUS */criteriaVentaStatus, criteriaOnChangeVentaStatus, criteriaSetVentaStatus, operatorVentaStatus, operatorOnChangeVentaStatus, operatorSetVentaStatus,
    /* VENTA PRECIO TOTAL */criteriaVentaPrecioTotal, criteriaOnChangeVentaPrecioTotal, criteriaSetVentaPrecioTotal, operatorVentaPrecioTotal, operatorOnChangeVentaPrecioTotal, operatorSetVentaPrecioTotal,
    /* CLIENTE DINERO */criteriaClienteDinero, criteriaOnChangeClienteDinero, criteriaSetClienteDinero, operatorClienteDinero, operatorOnChangeClienteDinero, operatorSetClienteDinero,
    /* CLIENTE CAMBIO */criteriaClienteCambio, criteriaOnChangeClienteCambio, criteriaSetClienteCambio, operatorClienteCambio, operatorOnChangeClienteCambio, operatorSetClienteCambio,
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

export default AlcaldiaRecursosMunicipalesVentasGenericTable;

AlcaldiaRecursosMunicipalesVentasGenericTable.propTypes = {
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

AlcaldiaRecursosMunicipalesVentasGenericTable.defaultProps = {
  numberPagesToShow: 0,
  tableTitle: "",
  tableSubTitle: undefined,
  handleGetData: () => { },
  handleGetSize: () => { },
  tableArrayCustomRowButtons: [],
  columnsToShow: enumTableColumnsToShow.FULL
};
