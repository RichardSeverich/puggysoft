package com.puggysoft.entities.alcaldia;

import com.puggysoft.entities.EntitySuperClass;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "alcaldia_actividades")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityAlcaldiaActividades extends EntitySuperClass {

  @Column(name = "name")
  private String name;
  @Column(name = "id_timbre")
  private String idTimbre;
  @Column(name = "cantidad_timbres")
  private String cantidadTimbres;
  @Column(name = "id_folder")
  private String idFolder;
  @Column(name = "cantidad_folders")
  private String cantidadFolders;
  @Column(name = "aux")
  private String aux;
  @Column(name = "tenant")
  private String tenant;

}