package com.puggysoft.dtos.alcaldia;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.alcaldia.EntityAlcaldiaActividades;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * Class.
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class DtoAlcaldiaActividades extends DtoSuperClass {
  @NotNull
  private String name;

  private String idTimbre;

  private String cantidadTimbres;

  private String idFolder;

  private String cantidadFolders;

  private String aux;
  @NotNull
  private String tenant;

  /** convert from dto to entity. */

  public EntityAlcaldiaActividades dtoToEntity() {
    EntityAlcaldiaActividades entity = new EntityAlcaldiaActividades();
    entity.setId(id);
    entity.setName(name);
    entity.setIdTimbre(idTimbre);
    entity.setCantidadTimbres(cantidadTimbres);
    entity.setIdFolder(idFolder);
    entity.setCantidadFolders(cantidadFolders);
    entity.setAux(aux);
    entity.setTenant(tenant);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */

  public static DtoAlcaldiaActividades entityToDto(EntityAlcaldiaActividades entity) {
    DtoAlcaldiaActividades dto = new DtoAlcaldiaActividades();
    dto.setId(entity.getId());
    dto.setName(entity.getName());
    dto.setIdTimbre(entity.getIdTimbre());
    dto.setCantidadTimbres(entity.getCantidadTimbres());
    dto.setIdFolder(entity.getIdFolder());
    dto.setCantidadFolders(entity.getCantidadFolders());
    dto.setAux(entity.getAux());
    dto.setTenant(entity.getTenant());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}
