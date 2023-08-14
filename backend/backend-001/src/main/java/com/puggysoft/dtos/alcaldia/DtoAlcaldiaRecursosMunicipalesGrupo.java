package com.puggysoft.dtos.alcaldia;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.alcaldia.EntityAlcaldiaRecursosMunicipalesGrupo;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * Class.
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class DtoAlcaldiaRecursosMunicipalesGrupo extends DtoSuperClass {
  @NotNull
  private String idRecursoMunicipalPadre;
  @NotNull
  private String idRecursoMunicipalHijo;
  @NotNull
  private String tenant;

  /** convert from dto to entity. */

  public EntityAlcaldiaRecursosMunicipalesGrupo dtoToEntity() {
    EntityAlcaldiaRecursosMunicipalesGrupo entity = new EntityAlcaldiaRecursosMunicipalesGrupo();
    entity.setId(id);
    entity.setIdRecursoMunicipalPadre(idRecursoMunicipalPadre);
    entity.setIdRecursoMunicipalHijo(idRecursoMunicipalHijo);
    entity.setTenant(tenant);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */

  public static DtoAlcaldiaRecursosMunicipalesGrupo entityToDto(EntityAlcaldiaRecursosMunicipalesGrupo entity) {
    DtoAlcaldiaRecursosMunicipalesGrupo dto = new DtoAlcaldiaRecursosMunicipalesGrupo();
    dto.setId(entity.getId());
    dto.setIdRecursoMunicipalPadre(entity.getIdRecursoMunicipalPadre());
    dto.setIdRecursoMunicipalHijo(entity.getIdRecursoMunicipalHijo());
    dto.setTenant(entity.getTenant());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}
