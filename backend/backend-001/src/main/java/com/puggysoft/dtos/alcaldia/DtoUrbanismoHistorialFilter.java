package com.puggysoft.dtos.alcaldia;

import com.puggysoft.models.EnumCompareOperator;
import javax.validation.constraints.Size;
import lombok.Data;

/**
 * Class.
 */
@Data
public class DtoUrbanismoHistorialFilter {

  // ID
  public String idCriteria;
  public EnumCompareOperator idOperator;
  // ID TRAMITE FLUJO
  public String idTramiteFlujoCriteria;
  public EnumCompareOperator idTramiteFlujoOperator;
  // REQUISITO NOMBRE CORTO
  public String usernameCriteria;
  public EnumCompareOperator usernameOperator;
  // ESTADO ANTERIOR
  public String estadoAnteriorCriteria;
  public EnumCompareOperator estadoAnteriorOperator;
  // ESTADO NUEVO
  public String estadoNuevoCriteria;
  public EnumCompareOperator estadoNuevoOperator;
  // TENANT
  public String tenantCriteria;
  public EnumCompareOperator tenantOperator;
  // CREATED BY
  @Size(max = 30)
  public String createdByCriteria;
  public EnumCompareOperator createdByOperator;
  // UPDATED BY
  @Size(max = 30)
  public String updatedByCriteria;
  public EnumCompareOperator updatedByOperator;
  // CREATION DATE
  public String creationDateCriteria;
  public EnumCompareOperator creationDateOperator;
  // UPDATED DATE
  public String updateDateCriteria;
  public EnumCompareOperator updateDateOperator;
}