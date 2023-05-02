package com.puggysoft.dtos.sales;

import com.puggysoft.models.EnumCompareOperator;
import javax.validation.constraints.Size;
import lombok.Data;

/**
* Class.
*/
@Data
public class DtoProductFilter {

  // ID
  public String idCriteria;
  public EnumCompareOperator idOperator;
  // NAME
  public String nameCriteria;
  public EnumCompareOperator nameOperator;
  // PURCHASE PRICE
  public String purchasePriceCriteria;
  public EnumCompareOperator purchasePriceOperator;
  // SALE PRICE
  public String salePriceCriteria;
  public EnumCompareOperator salePriceOperator;
  // STOCK
  public String stockCriteria;
  public EnumCompareOperator stockOperator;
  // DESCRIPTION
  public String descriptionCriteria;
  public EnumCompareOperator descriptionOperator;
  // BAR CODE
  public String barCodeCriteria;
  public EnumCompareOperator barCodeOperator;
  // LOCATION
  public String locationCriteria;
  public EnumCompareOperator locationOperator;
  // MINIMUM STOCK
  public String minimumStockCriteria;
  public EnumCompareOperator minimumStockOperator;
  // CODE
  public String codeCriteria;
  public EnumCompareOperator codeOperator;
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