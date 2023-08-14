package com.puggysoft.dtos.alcaldia;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.alcaldia.EntityAlcaldiaRecursosMunicipalesVentaDetalle;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * Class.
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class DtoAlcaldiaRecursosMunicipalesVentaDetalle extends DtoSuperClass {
  @NotNull
  private String idRecursoMunicipal;
  @NotNull
  private String idVenta;
  @NotNull
  private String precioUnidad;
  @NotNull
  private String cantidad;
  @NotNull
  private String tenant;

  /** convert from dto to entity. */

  public EntityAlcaldiaRecursosMunicipalesVentaDetalle dtoToEntity() {
    EntityAlcaldiaRecursosMunicipalesVentaDetalle entity = new EntityAlcaldiaRecursosMunicipalesVentaDetalle();
    entity.setId(id);
    entity.setIdRecursoMunicipal(idRecursoMunicipal);
    entity.setIdVenta(idVenta);
    entity.setPrecioUnidad(precioUnidad);
    entity.setCantidad(cantidad);
    entity.setTenant(tenant);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */

  public static DtoAlcaldiaRecursosMunicipalesVentaDetalle entityToDto(
      EntityAlcaldiaRecursosMunicipalesVentaDetalle entity) {
    DtoAlcaldiaRecursosMunicipalesVentaDetalle dto = new DtoAlcaldiaRecursosMunicipalesVentaDetalle();
    dto.setId(entity.getId());
    dto.setIdRecursoMunicipal(entity.getIdRecursoMunicipal());
    dto.setIdVenta(entity.getIdVenta());
    dto.setPrecioUnidad(entity.getPrecioUnidad());
    dto.setCantidad(entity.getCantidad());
    dto.setTenant(entity.getTenant());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}
