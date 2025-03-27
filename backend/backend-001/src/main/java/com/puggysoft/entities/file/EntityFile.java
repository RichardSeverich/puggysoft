package com.puggysoft.entities.file;

import com.puggysoft.entities.EntitySuperClass;

import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;


@Entity
@Table(name = "app_files")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityFile extends EntitySuperClass {

  private String aux;

  private String note;

  private String sis;

  @Lob
  private byte[] archive;

}
