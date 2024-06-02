package com.puggysoft.dtos.alcaldia;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.alcaldia.EntityAlcaldiaRecursosMunicipalesVenta;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * Class.
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class DtoAlcaldiaRecursosMunicipalesVenta extends DtoSuperClass {
  @NotNull
  private String clienteNombre;
  @NotNull
  private String clienteCiNit;
  @NotNull
  private String direccion;
  @NotNull
  private String nota;
  @NotNull
  private String ventaStatus;
  @NotNull
  private String ventaPrecioTotal;
  @NotNull
  private String clienteDinero;
  @NotNull
  private String clienteCambio;
  //@NotNull
  private String glosa;
  @NotNull
  private String tenant;

  /** convert from dto to entity. */

  public EntityAlcaldiaRecursosMunicipalesVenta dtoToEntity() {
    EntityAlcaldiaRecursosMunicipalesVenta entity = new EntityAlcaldiaRecursosMunicipalesVenta();
    entity.setId(id);
    entity.setClienteNombre(clienteNombre);
    entity.setClienteCiNit(clienteCiNit);
    entity.setDireccion(direccion);
    entity.setNota(nota);
    entity.setVentaStatus(ventaStatus);
    entity.setVentaPrecioTotal(ventaPrecioTotal);
    entity.setClienteDinero(clienteDinero);
    entity.setClienteCambio(clienteCambio);
    entity.setGlosa(glosa);
    entity.setTenant(tenant);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */

  public static DtoAlcaldiaRecursosMunicipalesVenta entityToDto(EntityAlcaldiaRecursosMunicipalesVenta entity) {
    DtoAlcaldiaRecursosMunicipalesVenta dto = new DtoAlcaldiaRecursosMunicipalesVenta();
    dto.setId(entity.getId());
    dto.setClienteNombre(entity.getClienteNombre());
    dto.setClienteCiNit(entity.getClienteCiNit());
    dto.setDireccion(entity.getDireccion());
    dto.setNota(entity.getNota());
    dto.setVentaStatus(entity.getVentaStatus());
    dto.setVentaPrecioTotal(entity.getVentaPrecioTotal());
    dto.setClienteDinero(entity.getClienteDinero());
    dto.setClienteCambio(entity.getClienteCambio());
    dto.setGlosa(entity.getGlosa());
    dto.setTenant(entity.getTenant());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}
