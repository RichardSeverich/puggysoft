package com.puggysoft.dtos.file;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.file.EntityFile;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
* Class.
*/
@Data
@EqualsAndHashCode(callSuper = true)
public class DtoFile extends DtoSuperClass {

  private String aux;

  private String note;

  private String sis;

  private byte[] archive;

  /** convert from dto to entity. */
  public EntityFile dtoToEntity() {
    EntityFile entity = new EntityFile();
    entity.setId(id);
    entity.setAux(aux);
    entity.setNote(note);
    entity.setSis(sis);
    entity.setArchive(archive);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */
  public static DtoFile entityToDto(EntityFile entity) {
    DtoFile dto = new DtoFile();
    dto.setId(entity.getId());
    dto.setAux(entity.getAux());
    dto.setNote(entity.getNote());
    dto.setSis(entity.getSis());
    dto.setArchive(entity.getArchive());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}