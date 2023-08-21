package com.puggysoft.dtos.alcaldia;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.alcaldia.EntityAlcaldiaRecursosMunicipalesTimbresDescontinuados;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * Class.
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class DtoAlcaldiaRecursosMunicipalesTimbresDescontinuados extends DtoSuperClass {
  @NotNull
  @Size(min = 3, max = 30)
  private String codigo;
  private String tenant;

  /** convert from dto to entity. */

  public EntityAlcaldiaRecursosMunicipalesTimbresDescontinuados dtoToEntity() {
    EntityAlcaldiaRecursosMunicipalesTimbresDescontinuados entity = new EntityAlcaldiaRecursosMunicipalesTimbresDescontinuados();
    entity.setId(id);
    entity.setCodigo(codigo);
    entity.setTenant(tenant);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */

  public static DtoAlcaldiaRecursosMunicipalesTimbresDescontinuados entityToDto(EntityAlcaldiaRecursosMunicipalesTimbresDescontinuados entity) {
    DtoAlcaldiaRecursosMunicipalesTimbresDescontinuados dto = new DtoAlcaldiaRecursosMunicipalesTimbresDescontinuados();
    dto.setId(entity.getId());
    dto.setCodigo(entity.getCodigo());
    dto.setTenant(entity.getTenant());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}
