package com.puggysoft.dtos.salary;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.salary.EntitySalaryEmployee;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class DtoSalaryEmployee extends DtoSuperClass {
  @NotNull
  private String empleado;

  @NotNull
  private String fechaIngreso;

  @NotNull
  private String cargo;

  @NotNull
  private String haberBasico;

  @NotNull
  private String tenant;

  /** convert from dto to entity. */
  public EntitySalaryEmployee dtoToEntity() {
    EntitySalaryEmployee entity = new EntitySalaryEmployee();
    entity.setId(id);
    entity.setEmpleado(empleado);
    entity.setFechaIngreso(fechaIngreso);
    entity.setCargo(cargo);
    entity.setHaberBasico(haberBasico);
    entity.setTenant(tenant);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */
  public static DtoSalaryEmployee entityToDto(EntitySalaryEmployee entity) {
    DtoSalaryEmployee dto = new DtoSalaryEmployee();
    dto.setId(entity.getId());
    dto.setEmpleado(entity.getEmpleado());
    dto.setFechaIngreso(entity.getFechaIngreso());
    dto.setCargo(entity.getCargo());
    dto.setHaberBasico(entity.getHaberBasico());
    dto.setTenant(entity.getTenant());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}
