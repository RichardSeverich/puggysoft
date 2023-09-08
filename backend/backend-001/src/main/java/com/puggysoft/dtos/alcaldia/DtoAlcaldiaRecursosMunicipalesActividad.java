package com.puggysoft.dtos.alcaldia;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.alcaldia.EntityAlcaldiaRecursosMunicipalesActividad;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * Class.
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class DtoAlcaldiaRecursosMunicipalesActividad extends DtoSuperClass {
  @NotNull
  private String idActividades;
  @NotNull
  private String idRecursoMunicipal;
  @NotNull
  private String tenant;

  /** convert from dto to entity. */

  public EntityAlcaldiaRecursosMunicipalesActividad dtoToEntity() {
    EntityAlcaldiaRecursosMunicipalesActividad entity = new EntityAlcaldiaRecursosMunicipalesActividad();
    entity.setId(id);
    entity.setIdActividades(idActividades);
    entity.setIdRecursoMunicipal(idRecursoMunicipal);
    entity.setTenant(tenant);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */

  public static DtoAlcaldiaRecursosMunicipalesActividad entityToDto(EntityAlcaldiaRecursosMunicipalesActividad entity) {
    DtoAlcaldiaRecursosMunicipalesActividad dto = new DtoAlcaldiaRecursosMunicipalesActividad();
    dto.setId(entity.getId());
    dto.setIdActividades(entity.getIdActividades());
    dto.setIdRecursoMunicipal(entity.getIdRecursoMunicipal());
    dto.setTenant(entity.getTenant());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}
