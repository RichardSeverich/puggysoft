package com.puggysoft.entities.salary;

import com.puggysoft.entities.EntitySuperClass;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "sueldos_detalle_contratacion")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntitySalaryEmployee extends EntitySuperClass {
  private String empleado;
  @Column(name = "fecha_ingreso")
  private String fechaIngreso;
  private String cargo;
  @Column(name = "haber_basico")
  private String haberBasico;
  private String tenant;
}
