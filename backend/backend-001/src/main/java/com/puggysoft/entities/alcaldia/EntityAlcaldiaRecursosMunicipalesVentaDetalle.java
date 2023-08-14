package com.puggysoft.entities.alcaldia;

import com.puggysoft.entities.EntitySuperClass;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "alcaldia_recursos_municipales_venta_detalle")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityAlcaldiaRecursosMunicipalesVentaDetalle extends EntitySuperClass {

  @Column(name = "id_recurso_municipal")
  private String idRecursoMunicipal;
  @Column(name = "id_venta")
  private String idVenta;
  @Column(name = "precio_unidad")
  private String precioUnidad;
  @Column(name = "cantidad")
  private String cantidad;
  @Column(name = "tenant")
  private String tenant;

}