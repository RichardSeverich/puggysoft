package com.puggysoft.entities.alcaldia;

import com.puggysoft.entities.EntitySuperClass;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "alcaldia_recursos_municipales")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityAlcaldiaRecursosMunicipales extends EntitySuperClass {

  @Column(name = "codigo")
  private String codigo;
  @Column(name = "codigo_auxiliar")
  private String codigoAuxiliar;
  @Column(name = "name")
  private String name;
  @Column(name = "precio")
  private String precio;
  @Column(name = "talonario_movimiento")
  private String talonarioMovimiento;
  @Column(name = "talonario_inicio")
  private String talonarioInicio;
  @Column(name = "talonario_final")
  private String talonarioFinal;
  @Column(name = "tipo")
  private String tipo;
  @Column(name = "tenant")
  private String tenant;

}