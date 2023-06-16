package com.puggysoft.tools.salary;

import com.puggysoft.dtos.salary.DtoSalaryEmployeeFilter;
import com.puggysoft.tools.SqlFilterBuilder;

public final class SqlSalaryEmployeeFilterBuilderNative {

  private SqlSalaryEmployeeFilterBuilderNative(){}

  public static String build(DtoSalaryEmployeeFilter dtoSalaryEmployeeFilter) {
    String query = "";
    query = query + SqlFilterBuilder.getFilterQuery("empleado", dtoSalaryEmployeeFilter.empleadoCriteria, dtoSalaryEmployeeFilter.empleadoOperator);
    query = query + SqlFilterBuilder.getFilterQuery("fecha_ingreso", dtoSalaryEmployeeFilter.fechaIngresoCriteria, dtoSalaryEmployeeFilter.fechaIngresoOperator);
    query = query + SqlFilterBuilder.getFilterQuery("cargo ", dtoSalaryEmployeeFilter.cargoCriteria, dtoSalaryEmployeeFilter.cargoOperator);
    query = query + SqlFilterBuilder.getFilterQuery("haber_basico", dtoSalaryEmployeeFilter.haberBasicoCriteria, dtoSalaryEmployeeFilter.haberBasicoOperator);
    query = query + SqlFilterBuilder.getFilterQuery("tenant", dtoSalaryEmployeeFilter.tenantCriteria, dtoSalaryEmployeeFilter.tenantOperator);
    query = query + SqlFilterBuilder.getFilterQuery("created_by", dtoSalaryEmployeeFilter.createdByCriteria, dtoSalaryEmployeeFilter.createdByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("updated_by", dtoSalaryEmployeeFilter.updatedByCriteria, dtoSalaryEmployeeFilter.updatedByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("creation_date", dtoSalaryEmployeeFilter.creationDateCriteria, dtoSalaryEmployeeFilter.creationDateOperator);
    query = query + SqlFilterBuilder.getFilterQuery("update_date",  dtoSalaryEmployeeFilter.updateDateCriteria, dtoSalaryEmployeeFilter.updateDateOperator);
    return query;
  }
}
