package com.puggysoft.entities.alcaldia;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.Data;

@Entity
@Data
public class EntityAlcaldiaRecursosMunicipalesReportItem {

  @Id
  @Column(name = "numero_venta")
  private String numeroVenta;

  @Column(name = "ingreso_venta")
  private String ingresoVenta;
}
