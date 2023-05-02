package com.puggysoft.dtos.facturacion;

import com.puggysoft.models.EnumCompareOperator;
import javax.validation.constraints.Size;
import lombok.Data;

/**
 * Class.
 */
@Data
public class DtoBillFilter {

  // AUTORIZACION
  public String numberAuthorizationCriteria;
  public EnumCompareOperator numberAuthorizationOperator;
  // NUMERO DE FACTURA
  public String billNumberCriteria;
  public EnumCompareOperator billNumberOperator;
  // NIT CLIENTE
  public String nitClientCriteria;
  public EnumCompareOperator nitClientOperator;
  // DATO COMPRA
  public String datePurchasedCriteria;
  public EnumCompareOperator datePurchasedOperator;
  // LLAVE DE DOSIFICACION
  public String dosageKeyCriteria;
  public EnumCompareOperator dosageKeyOperator;
  // CODIGO DE CONTROL
  public String controlCodeCriteria;
  public EnumCompareOperator controlCodeOperator;
  // MONTO DE LA COMPRA
  public String purchaseAmountCriteria;
  public EnumCompareOperator purchaseAmountOperator;
  // TENANT
  public String tenantCriteria;
  public EnumCompareOperator tenantOperator;

  // CREATED BY
  @Size(max = 20)
  public String createdByCriteria;
  public EnumCompareOperator createdByOperator;
  // UPDATED BY
  @Size(max = 20)
  public String updatedByCriteria;
  public EnumCompareOperator updatedByOperator;
  // CREATION DATE
  public String creationDateCriteria;
  public EnumCompareOperator creationDateOperator;
  // UPDATED DATE
  public String updateDateCriteria;
  public EnumCompareOperator updateDateOperator;

}