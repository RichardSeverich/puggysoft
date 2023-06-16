package com.puggysoft.dtos.salary;

import com.puggysoft.models.EnumCompareOperator;
import javax.validation.constraints.Size;
import lombok.Data;

@Data
public class DtoSalaryEmployeeFilter {

  public String empleadoCriteria;
  public EnumCompareOperator empleadoOperator;

  public String fechaIngresoCriteria;
  public EnumCompareOperator fechaIngresoOperator;

  public String cargoCriteria;
  public EnumCompareOperator cargoOperator;

  public String haberBasicoCriteria;
  public EnumCompareOperator haberBasicoOperator;

  public String tenantCriteria;
  public EnumCompareOperator tenantOperator;

  @Size(max = 20)
  public String createdByCriteria;
  public EnumCompareOperator createdByOperator;

  @Size(max = 20)
  public String updatedByCriteria;
  public EnumCompareOperator updatedByOperator;

  public String creationDateCriteria;
  public EnumCompareOperator creationDateOperator;

  public String updateDateCriteria;
  public EnumCompareOperator updateDateOperator;
}
