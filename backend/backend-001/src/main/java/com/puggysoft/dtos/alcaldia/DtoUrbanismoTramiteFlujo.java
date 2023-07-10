package com.puggysoft.dtos.alcaldia;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.alcaldia.EntityUrbanismoTramiteFlujo;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * Class.
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class DtoUrbanismoTramiteFlujo extends DtoSuperClass {
  @NotNull
  private String tramiteNombreCorto;
  @NotNull
  private String estadoNombreCorto;
  @NotNull
  private String nombreCliente;
  @NotNull
  private String ciCliente;
  @NotNull
  private String tenant;

  /** convert from dto to entity. */

  public EntityUrbanismoTramiteFlujo dtoToEntity() {
    EntityUrbanismoTramiteFlujo entity = new EntityUrbanismoTramiteFlujo();
    entity.setId(id);
    entity.setTramiteNombreCorto(tramiteNombreCorto);
    entity.setEstadoNombreCorto(estadoNombreCorto);
    entity.setNombreCliente(nombreCliente);
    entity.setCiCliente(ciCliente);
    entity.setTenant(tenant);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */

  public static DtoUrbanismoTramiteFlujo entityToDto(EntityUrbanismoTramiteFlujo entity) {
    DtoUrbanismoTramiteFlujo dto = new DtoUrbanismoTramiteFlujo();
    dto.setId(entity.getId());
    dto.setTramiteNombreCorto(entity.getTramiteNombreCorto());
    dto.setEstadoNombreCorto(entity.getEstadoNombreCorto());
    dto.setNombreCliente(entity.getNombreCliente());
    dto.setCiCliente(entity.getCiCliente());
    dto.setTenant(entity.getTenant());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}
