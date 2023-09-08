package com.puggysoft.entities.alcaldia;

import com.puggysoft.entities.EntitySuperClass;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "alcaldia_recursos_municipales_actividades")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityAlcaldiaRecursosMunicipalesActividad extends EntitySuperClass {

  @Column(name = "id_actividades")
  private String idActividades;
  @Column(name = "id_recurso_municipal")
  private String idRecursoMunicipal;
  @Column(name = "tenant")
  private String tenant;

}