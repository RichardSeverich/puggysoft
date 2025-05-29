package com.puggysoft.dtos.escuela;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.escuela.EntityEscuelaCursosMateriasDocentes;

import javax.validation.constraints.NotNull;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * Class.
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class DtoEscuelaCursosMateriasDocentes extends DtoSuperClass {
  @NotNull
  private String curso;
  @NotNull
  private String docente;
  @NotNull
  private String materia;
  @NotNull
  private String tenant;

  /** convert from dto to entity. */
  public EntityEscuelaCursosMateriasDocentes dtoToEntity() {
    EntityEscuelaCursosMateriasDocentes entity = new EntityEscuelaCursosMateriasDocentes();
    entity.setId(id);
    entity.setCurso(curso);
    entity.setDocente(docente);
    entity.setMateria(materia);
    entity.setTenant(tenant);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */
  public static DtoEscuelaCursosMateriasDocentes entityToDto(EntityEscuelaCursosMateriasDocentes entity) {
    DtoEscuelaCursosMateriasDocentes dto = new DtoEscuelaCursosMateriasDocentes();
    dto.setId(entity.getId());
    dto.setCurso(entity.getCurso());
    dto.setDocente(entity.getDocente());
    dto.setMateria(entity.getMateria());
    dto.setTenant(entity.getTenant());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}
