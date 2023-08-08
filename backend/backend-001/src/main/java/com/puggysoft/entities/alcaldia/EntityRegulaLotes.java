package com.puggysoft.entities.alcaldia;

import com.puggysoft.entities.EntitySuperClass;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "alc_reg_lotes")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityRegulaLotes extends EntitySuperClass {

  @Column(name = "nombre_cliente")
  private String nombreCliente;
  @Column(name = "ci_cliente")
  private String ciCliente;
  @Column(name = "numero_inmueble")
  private String numeroInmueble;
  @Column(name = "monto")
  private String monto;
  @Column(name = "tenant")
  private String tenant;

}