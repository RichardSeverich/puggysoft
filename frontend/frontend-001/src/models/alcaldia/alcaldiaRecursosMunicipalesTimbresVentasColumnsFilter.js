import enumFilterType from "../enumFilterType";
import enumVentaStatus from "./../alcaldia/enumVentaStatus";
import i18n from "../../i18n/i18n";

const alcaldiaRecursosMunicipalesVentasColumnsFilter = function (
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
) {
  const arrayColumnsFilter = [
    {
      type: enumFilterType.NUMBER,
      criteriaValue: criteriaId,
      criteriaOnchange: criteriaOnChangeId,
      operatorValue: operatorId,
      operatorOnchange: operatorOnChangeId
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaClienteNombre,
      criteriaOnchange: criteriaOnChangeClienteNombre,
      operatorValue: operatorClienteNombre,
      operatorOnchange: operatorOnChangeClienteNombre
    },
    {
      type: enumFilterType.NUMBER,
      criteriaValue: criteriaClienteCiNit,
      criteriaOnchange: criteriaOnChangeClienteCiNit,
      operatorValue: operatorClienteCiNit,
      operatorOnchange: operatorOnChangeClienteCiNit
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaDireccion,
      criteriaOnchange: criteriaOnChangeDireccion,
      operatorValue: operatorDireccion,
      operatorOnchange: operatorOnChangeDireccion
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaNota,
      criteriaOnchange: criteriaOnChangeNota,
      operatorValue: operatorNota,
      operatorOnchange: operatorOnChangeNota
    },
    // {
    //   type: enumFilterType.TEXTBOX,
    //   criteriaValue: criteriaCantidad,
    //   criteriaOnchange: criteriaOnChangeCantidad,
    //   operatorValue: operatorCantidad,
    //   operatorOnchange: operatorOnChangeCantidad
    // },
    {
      type: enumFilterType.DROPDOWN,
      criteriaValue: criteriaVentaStatus,
      criteriaOnchange: criteriaOnChangeVentaStatus,
      operatorValue: operatorVentaStatus,
      operatorOnchange: operatorOnChangeVentaStatus,
      dropdownValues: [
        { value: "", text: i18n.alcaldiaVentaStatusText.all },
        { value: enumVentaStatus.ACTIVO, text: i18n.alcaldiaVentaStatusText.activo },
        { value: enumVentaStatus.ANULADO, text: i18n.alcaldiaVentaStatusText.anulado }
      ]
    },
    {
      type: enumFilterType.NUMBER,
      criteriaValue: criteriaVentaPrecioTotal,
      criteriaOnchange: criteriaOnChangeVentaPrecioTotal,
      operatorValue: operatorVentaPrecioTotal,
      operatorOnchange: operatorOnChangeVentaPrecioTotal
    },
    {
      type: enumFilterType.NUMBER,
      criteriaValue: criteriaClienteDinero,
      criteriaOnchange: criteriaOnChangeClienteDinero,
      operatorValue: operatorClienteDinero,
      operatorOnchange: operatorOnChangeClienteDinero
    },
    {
      type: enumFilterType.NUMBER,
      criteriaValue: criteriaClienteCambio,
      criteriaOnchange: criteriaOnChangeClienteCambio,
      operatorValue: operatorClienteCambio,
      operatorOnchange: operatorOnChangeClienteCambio
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaCreatedBy,
      criteriaOnchange: criteriaOnChangeCreatedBy,
      operatorValue: operatorCreatedBy,
      operatorOnchange: operatorOnChangeCreatedBy
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaUpdatedBy,
      criteriaOnchange: criteriaOnChangeUpdatedBy,
      operatorValue: operatorUpdatedBy,
      operatorOnchange: operatorOnChangeUpdatedBy
    },
    {
      type: enumFilterType.DATE,
      criteriaValue: criteriaCreatedDate,
      criteriaOnchange: criteriaOnChangeCreatedDate,
      operatorValue: operatorCreatedDate,
      operatorOnchange: operatorOnChangeCreatedDate
    },
    {
      type: enumFilterType.DATE,
      criteriaValue: criteriaUpdatedDate,
      criteriaOnchange: criteriaOnChangeUpdatedDate,
      operatorValue: operatorUpdatedDate,
      operatorOnchange: operatorOnChangeUpdatedDate
    }
  ];

  return arrayColumnsFilter;
};

export default alcaldiaRecursosMunicipalesVentasColumnsFilter;
