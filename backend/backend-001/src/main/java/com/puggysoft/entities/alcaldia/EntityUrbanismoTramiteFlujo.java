package com.puggysoft.entities.alcaldia;

import com.puggysoft.entities.EntitySuperClass;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "alc_urb_tramite_flujo")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityUrbanismoTramiteFlujo extends EntitySuperClass {

  @Column(name = "tramite_nombre_corto")
  private String tramiteNombreCorto;
  @Column(name = "estado_nombre_corto")
  private String estadoNombreCorto;
  @Column(name = "nombre_cliente")
  private String nombreCliente;
  @Column(name = "ci_cliente")
  private String ciCliente;
  @Column(name = "tenant")
  private String tenant;

}