package com.puggysoft.dtos.alcaldia;

import com.puggysoft.models.EnumCompareOperator;
import javax.validation.constraints.Size;
import lombok.Data;

/**
 * Class.
 */
@Data
public class DtoUrbanismoFlujoRequisitosFilter {

  // ID
  public String idCriteria;
  public EnumCompareOperator idOperator;
  // ID TRAMITE FLUJO
  public String idTramiteFlujoCriteria;
  public EnumCompareOperator idTramiteFlujoOperator;
  // REQUISITO NOMBRE CORTO
  public String requisitoNombreCortoCriteria;
  public EnumCompareOperator requisitoNombreCortoOperator;
  // ESTADO
  public String estadoCriteria;
  public EnumCompareOperator estadoOperator;
  // ARCHIVO REQUISITO
  public String archivoRequisitoCriteria;
  public EnumCompareOperator archivoRequisitoOperator;
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