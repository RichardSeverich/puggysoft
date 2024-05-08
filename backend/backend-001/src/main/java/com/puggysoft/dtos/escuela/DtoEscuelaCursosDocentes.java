package com.puggysoft.dtos.escuela;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.escuela.EntityEscuelaCursosDocentes;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.NotNull;

/**
 * Class.
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class DtoEscuelaCursosDocentes extends DtoSuperClass {
  @NotNull
  private String curso;
  @NotNull
  private String docente;
  @NotNull
  private String tenant;

  /** convert from dto to entity. */
  public EntityEscuelaCursosDocentes dtoToEntity() {
    EntityEscuelaCursosDocentes entity = new EntityEscuelaCursosDocentes();
    entity.setId(id);
    entity.setCurso(curso);
    entity.setDocente(docente);
    entity.setTenant(tenant);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */
  public static DtoEscuelaCursosDocentes entityToDto(EntityEscuelaCursosDocentes entity) {
    DtoEscuelaCursosDocentes dto = new DtoEscuelaCursosDocentes();
    dto.setId(entity.getId());
    dto.setCurso(entity.getCurso());
    dto.setDocente(entity.getDocente());
    dto.setTenant(entity.getTenant());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}
