package com.puggysoft.tools.salary;

import com.puggysoft.dtos.salary.DtoSalaryEmployeeFilter;
import com.puggysoft.tools.SqlFilterBuilder;

public final class SqlSalaryEmployeeFilterBuilderNative {

  private SqlSalaryEmployeeFilterBuilderNative(){}

  /**
   * Method to build the filter salary employee query.
   * @return the salary employee query.
   */
  public static String build(DtoSalaryEmployeeFilter dtoSalaryEmployeeFilter) {
    //sueldos_detalle_contratacion
    String query = "";
    query = query + SqlFilterBuilder.getFilterQuery("sueldos_detalle_contratacion.empleado", dtoSalaryEmployeeFilter.empleadoCriteria, dtoSalaryEmployeeFilter.empleadoOperator);
    query = query + SqlFilterBuilder.getFilterQuery("sueldos_detalle_contratacion.fecha_ingreso", dtoSalaryEmployeeFilter.fechaIngresoCriteria, dtoSalaryEmployeeFilter.fechaIngresoOperator);
    query = query + SqlFilterBuilder.getFilterQuery("sueldos_detalle_contratacion.cargo ", dtoSalaryEmployeeFilter.cargoCriteria, dtoSalaryEmployeeFilter.cargoOperator);
    query = query + SqlFilterBuilder.getFilterQuery("sueldos_detalle_contratacion.haber_basico", dtoSalaryEmployeeFilter.haberBasicoCriteria, dtoSalaryEmployeeFilter.haberBasicoOperator);
    query = query + SqlFilterBuilder.getFilterQuery("sueldos_detalle_contratacion.tenant", dtoSalaryEmployeeFilter.tenantCriteria, dtoSalaryEmployeeFilter.tenantOperator);
    query = query + SqlFilterBuilder.getFilterQuery("sueldos_detalle_contratacion.created_by", dtoSalaryEmployeeFilter.createdByCriteria, dtoSalaryEmployeeFilter.createdByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("sueldos_detalle_contratacion.updated_by", dtoSalaryEmployeeFilter.updatedByCriteria, dtoSalaryEmployeeFilter.updatedByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("sueldos_detalle_contratacion.creation_date", dtoSalaryEmployeeFilter.creationDateCriteria, dtoSalaryEmployeeFilter.creationDateOperator);
    query = query + SqlFilterBuilder.getFilterQuery("sueldos_detalle_contratacion.update_date",  dtoSalaryEmployeeFilter.updateDateCriteria, dtoSalaryEmployeeFilter.updateDateOperator);
    return query;
  }
}
