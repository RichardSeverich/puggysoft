package com.puggysoft.entities.alcaldia;

import com.puggysoft.entities.EntitySuperClass;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "alcaldia_recursos_municipales_grupo_para_reportes")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityAlcaldiaRecursosMunicipalesGrupo extends EntitySuperClass {

  @Column(name = "id_recurso_municipal_padre")
  private String idRecursoMunicipalPadre;
  @Column(name = "id_recurso_municipal_hijo")
  private String idRecursoMunicipalHijo;
  @Column(name = "tenant")
  private String tenant;

}