import enumCompareOperators from "../enumCompareOperators";
import enumTableColumnsToShow from "../enumTableColumnsToShow";
import arrayDataFieldsImport from "./alcaldiaRecursosMunicipalesTimbresVentasDataFields";
import arrayColumnsLabelsImport from "./alcaldiaRecursosMunicipalesTimbresVentasColumnsLabels";
import alcaldiaRecursosMunicipalesTimbresVentasColumnsFilter from "./alcaldiaRecursosMunicipalesTimbresVentasColumnsFilter";

const alcaldiaRecursosMunicipalesTimbresVentasTableModels = function (
  tableColumnsToShow,
  /* ID */ criteriaId,
  criteriaOnChangeId,
  criteriaSetId,
  operatorId,
  operatorOnChangeId,
  operatorSetId,
  /* CLIENTE NOMBRE */ criteriaClienteNombre,
  criteriaOnChangeClienteNombre,
  criteriaSetClienteNombre,
  operatorClienteNombre,
  operatorOnChangeClienteNombre,
  operatorSetClienteNombre,
  /* CLIENTE CI NIT */ criteriaClienteCiNit,
  criteriaOnChangeClienteCiNit,
  criteriaSetClienteCiNit,
  operatorClienteCiNit,
  operatorOnChangeClienteCiNit,
  operatorSetClienteCiNit,
  /* DIRECCION */ criteriaDireccion,
  criteriaOnChangeDireccion,
  criteriaSetDireccion,
  operatorDireccion,
  operatorOnChangeDireccion,
  operatorSetDireccion,
  /* NOTA */ criteriaNota,
  criteriaOnChangeNota,
  criteriaSetNota,
  operatorNota,
  operatorOnChangeNota,
  operatorSetNota,
  // /* CANTIDAD */criteriaCantidad,
  // criteriaOnChangeCantidad,
  // criteriaSetCantidad, operatorCantidad,
  // operatorOnChangeCantidad,
  // operatorSetCantidad,
  /* VENTA STATUS */ criteriaVentaStatus,
  criteriaOnChangeVentaStatus,
  criteriaSetVentaStatus,
  operatorVentaStatus,
  operatorOnChangeVentaStatus,
  operatorSetVentaStatus,
  /* VENTA PRECIO TOTAL */ criteriaVentaPrecioTotal,
  criteriaOnChangeVentaPrecioTotal,
  criteriaSetVentaPrecioTotal,
  operatorVentaPrecioTotal,
  operatorOnChangeVentaPrecioTotal,
  operatorSetVentaPrecioTotal,
  /* CLIENTE DINERO */ criteriaClienteDinero,
  criteriaOnChangeClienteDinero,
  criteriaSetClienteDinero,
  operatorClienteDinero,
  operatorOnChangeClienteDinero,
  operatorSetClienteDinero,
  /* CLIENTE CAMBIO */ criteriaClienteCambio,
  criteriaOnChangeClienteCambio,
  criteriaSetClienteCambio,
  operatorClienteCambio,
  operatorOnChangeClienteCambio,
  operatorSetClienteCambio,
  /* CREATED BY */ criteriaCreatedBy,
  criteriaOnChangeCreatedBy,
  criteriaSetCreatedBy,
  operatorCreatedBy,
  operatorOnChangeCreatedBy,
  operatorSetCreatedBy,
  /* UPDATED BY */ criteriaUpdatedBy,
  criteriaOnChangeUpdatedBy,
  criteriaSetUpdatedBy,
  operatorUpdatedBy,
  operatorOnChangeUpdatedBy,
  operatorSetUpdatedBy,
  /* CREATED DATE */ criteriaCreatedDate,
  criteriaOnChangeCreatedDate,
  criteriaSetCreatedDate,
  operatorCreatedDate,
  operatorOnChangeCreatedDate,
  operatorSetCreatedDate,
  /* UPDATED DATE */ criteriaUpdatedDate,
  criteriaOnChangeUpdatedDate,
  criteriaSetUpdatedDate,
  operatorUpdatedDate,
  operatorOnChangeUpdatedDate,
  operatorSetUpdatedDate
) {
  let arrayDataFields = arrayDataFieldsImport;
  let arrayColumnsLabels = arrayColumnsLabelsImport;
  let arrayColumnsFilter = alcaldiaRecursosMunicipalesTimbresVentasColumnsFilter(
    /* ID */ criteriaId,
    criteriaOnChangeId,
    operatorId,
    operatorOnChangeId,
    /* CLIENTE NOMBRE */ criteriaClienteNombre,
    criteriaOnChangeClienteNombre,
    operatorClienteNombre,
    operatorOnChangeClienteNombre,
    /* CLIENTE CI NIT */ criteriaClienteCiNit,
    criteriaOnChangeClienteCiNit,
    operatorClienteCiNit,
    operatorOnChangeClienteCiNit,
    /* DIRECCION */ criteriaDireccion,
    criteriaOnChangeDireccion,
    operatorDireccion,
    operatorOnChangeDireccion,
    /* NOTA */ criteriaNota,
    criteriaOnChangeNota,
    operatorNota,
    operatorOnChangeNota,
    // /* CANTIDAD */ criteriaCantidad,
    // criteriaOnChangeCantidad,
    // operatorCantidad,
    // operatorOnChangeCantidad,
    /* VENTA STATUS */ criteriaVentaStatus,
    criteriaOnChangeVentaStatus,
    operatorVentaStatus,
    operatorOnChangeVentaStatus,
    /* VENTA PRECIO TOTAL */ criteriaVentaPrecioTotal,
    criteriaOnChangeVentaPrecioTotal,
    operatorVentaPrecioTotal,
    operatorOnChangeVentaPrecioTotal,
    /* CLIENTE DINERO */ criteriaClienteDinero,
    criteriaOnChangeClienteDinero,
    operatorClienteDinero,
    operatorOnChangeClienteDinero,
    /* CLIENTE CAMBIO */ criteriaClienteCambio,
    criteriaOnChangeClienteCambio,
    operatorClienteCambio,
    operatorOnChangeClienteCambio,
    /* CREATED BY */ criteriaCreatedBy,
    criteriaOnChangeCreatedBy,
    operatorCreatedBy,
    operatorOnChangeCreatedBy,
    /* UPDATED BY */ criteriaUpdatedBy,
    criteriaOnChangeUpdatedBy,
    operatorUpdatedBy,
    operatorOnChangeUpdatedBy,
    /* CREATED DATE */ criteriaCreatedDate,
    criteriaOnChangeCreatedDate,
    operatorCreatedDate,
    operatorOnChangeCreatedDate,
    /* UPDATED DATE */ criteriaUpdatedDate,
    criteriaOnChangeUpdatedDate,
    operatorUpdatedDate,
    operatorOnChangeUpdatedDate
  );

  const setOperatorsDefaultValues = function () {
    operatorSetId(enumCompareOperators.NUMBER_EQUALS);
    operatorSetClienteNombre(enumCompareOperators.TEXT_CONTAINS);
    operatorSetClienteCiNit(enumCompareOperators.NUMBER_EQUALS);
    operatorSetDireccion(enumCompareOperators.TEXT_CONTAINS);
    operatorSetNota(enumCompareOperators.TEXT_CONTAINS);
    // operatorSetCantidad(enumCompareOperators.TEXT_CONTAINS);
    operatorSetVentaStatus(enumCompareOperators.TEXT_CONTAINS);
    operatorSetVentaPrecioTotal(enumCompareOperators.NUMBER_EQUALS);
    operatorSetClienteDinero(enumCompareOperators.NUMBER_EQUALS);
    operatorSetClienteCambio(enumCompareOperators.NUMBER_EQUALS);
    operatorSetCreatedBy(enumCompareOperators.TEXT_CONTAINS);
    operatorSetUpdatedBy(enumCompareOperators.TEXT_CONTAINS);
    operatorSetCreatedDate(enumCompareOperators.DATE_EQUALS);
    operatorSetUpdatedDate(enumCompareOperators.DATE_EQUALS);
  };

  const clearFilters = function () {
    criteriaSetId("");
    criteriaSetClienteNombre("");
    criteriaSetClienteCiNit("");
    criteriaSetDireccion("");
    criteriaSetNota("");
    // criteriaSetCantidad("");
    criteriaSetVentaStatus("");
    criteriaSetVentaPrecioTotal("");
    criteriaSetClienteDinero("");
    criteriaSetClienteCambio("");
    criteriaSetCreatedBy("");
    criteriaSetUpdatedBy("");
    criteriaSetCreatedDate("");
    criteriaSetUpdatedDate("");
    setOperatorsDefaultValues();
  };

  const isMedium = tableColumnsToShow === enumTableColumnsToShow.MEDIUM;
  const isMinimum = tableColumnsToShow === enumTableColumnsToShow.MINIMUM;

  if (isMedium) {
    arrayColumnsFilter = arrayColumnsFilter.slice(
      0,
      arrayColumnsFilter.length - 4
    );
    arrayColumnsLabels = arrayColumnsLabels.slice(
      0,
      arrayColumnsLabels.length - 4
    );
    arrayDataFields = arrayDataFields.slice(0, arrayDataFields.length - 4);
  } else if (isMinimum) {
    arrayColumnsFilter = arrayColumnsFilter.slice(
      1,
      arrayColumnsFilter.length - 4
    );
    arrayColumnsLabels = arrayColumnsLabels.slice(
      1,
      arrayColumnsLabels.length - 4
    );
    arrayDataFields = arrayDataFields.slice(1, arrayDataFields.length - 4);
  }

  const getFilterBody = () => {
    const tenant = window.sessionStorage.getItem("tenant");
    const filterBody = {
      idCriteria: criteriaId,
      idOperator: operatorId,
      clienteNombreCriteria: criteriaClienteNombre,
      clienteNombreOperator: operatorClienteNombre,
      clienteCiNitCriteria: criteriaClienteCiNit,
      clienteCiNitOperator: operatorClienteCiNit,
      direccionCriteria: criteriaDireccion,
      direccionOperator: operatorDireccion,
      notaCriteria: criteriaNota,
      notaOperator: operatorNota,
      // cantidadCriteria: criteriaCantidad,
      // cantidadOperator: operatorCantidad,
      ventaStatusCriteria: criteriaVentaStatus,
      ventaStatusOperator: operatorVentaStatus,
      ventaPrecioTotalCriteria: criteriaVentaPrecioTotal,
      ventaPrecioTotalOperator: operatorVentaPrecioTotal,
      clienteDineroCriteria: criteriaClienteDinero,
      clienteDineroOperator: operatorClienteDinero,
      clienteCambioCriteria: criteriaClienteCambio,
      clienteCambioOperator: operatorClienteCambio,
      createdByCriteria: criteriaCreatedBy,
      createdByOperator: operatorCreatedBy,
      updatedByCriteria: criteriaUpdatedBy,
      updatedByOperator: operatorUpdatedBy,
      creationDateCriteria: criteriaCreatedDate,
      creationDateOperator: operatorCreatedDate,
      updateDateCriteria: criteriaUpdatedDate,
      updateDateOperator: operatorUpdatedDate,
      tenantCriteria: tenant,
      tenantOperator: enumCompareOperators.TEXT_EQUALS
    };
    return filterBody;
  };

  return {
    arrayColumnsFilter,
    clearFilters,
    getFilterBody,
    setOperatorsDefaultValues,
    arrayDataFields,
    arrayColumnsLabels
  };
};

export default alcaldiaRecursosMunicipalesTimbresVentasTableModels;
