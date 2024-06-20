package com.puggysoft.entities.alcaldia;

import com.puggysoft.entities.EntitySuperClass;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "alcaldia_recursos_municipales_venta")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityAlcaldiaRecursosMunicipalesVenta extends EntitySuperClass {

  @Column(name = "numero_comprobante")
  private String numeroComprobante;
  @Column(name = "cliente_nombre")
  private String clienteNombre;
  @Column(name = "cliente_ci_nit")
  private String clienteCiNit;
  @Column(name = "direccion")
  private String direccion;
  @Column(name = "nota")
  private String nota;
  @Column(name = "venta_status")
  private String ventaStatus;
  @Column(name = "venta_precio_total")
  private String ventaPrecioTotal;
  @Column(name = "cliente_dinero")
  private String clienteDinero;
  @Column(name = "cliente_cambio")
  private String clienteCambio;
  @Column(name = "glosa")
  private String glosa;
  @Column(name = "aux")
  private String aux;
  @Column(name = "tenant")
  private String tenant;

}
