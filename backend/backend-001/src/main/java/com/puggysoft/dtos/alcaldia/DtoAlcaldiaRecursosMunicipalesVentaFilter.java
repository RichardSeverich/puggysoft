package com.puggysoft.dtos.alcaldia;

import com.puggysoft.models.EnumCompareOperator;
import javax.validation.constraints.Size;
import lombok.Data;

/**
 * Class.
 */
@Data
public class DtoAlcaldiaRecursosMunicipalesVentaFilter {

  // ID
  public String idCriteria;
  public EnumCompareOperator idOperator;
  // CLIENTE NOMBRE
  public String clienteNombreCriteria;
  public EnumCompareOperator clienteNombreOperator;
  // CLIENTE CI NIT
  public String clienteCiNitCriteria;
  public EnumCompareOperator clienteCiNitOperator;
  // DIRECCION
  public String direccionCriteria;
  public EnumCompareOperator direccionOperator;
  // NOTA
  public String notaCriteria;
  public EnumCompareOperator notaOperator;
  // VENTA STATUS
  public String ventaStatusCriteria;
  public EnumCompareOperator ventaStatusOperator;
  // VENTA PRECIO TOTAL
  public String ventaPrecioTotalCriteria;
  public EnumCompareOperator ventaPrecioTotalOperator;
  // CLIENTE DINERO
  public String clienteDineroCriteria;
  public EnumCompareOperator clienteDineroOperator;
  // CLIENTE CAMBIO
  public String clienteCambioCriteria;
  public EnumCompareOperator clienteCambioOperator;
  // GLOSA
  public String glosaCriteria;
  public EnumCompareOperator glosaOperator;
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