package com.puggysoft.dtos.alcaldia;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.alcaldia.EntityRegulaLotes;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * Class.
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class DtoRegulaLotes extends DtoSuperClass {
  @NotNull
  private String nombreCliente;
  @NotNull
  private String ciCliente;
  private String numeroInmueble;
  @NotNull
  private String monto;
  @NotNull
  private String tenant;

  /** convert from dto to entity. */

  public EntityRegulaLotes dtoToEntity() {
    EntityRegulaLotes entity = new EntityRegulaLotes();
    entity.setId(id);
    entity.setNombreCliente(nombreCliente);
    entity.setCiCliente(ciCliente);
    entity.setNumeroInmueble(numeroInmueble);
    entity.setMonto(monto);
    entity.setTenant(tenant);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */

  public static DtoRegulaLotes entityToDto(EntityRegulaLotes entity) {
    DtoRegulaLotes dto = new DtoRegulaLotes();
    dto.setId(entity.getId());
    dto.setNombreCliente(entity.getNombreCliente());
    dto.setCiCliente(entity.getCiCliente());
    dto.setNumeroInmueble(entity.getNumeroInmueble());
    dto.setMonto(entity.getMonto());
    dto.setTenant(entity.getTenant());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}
