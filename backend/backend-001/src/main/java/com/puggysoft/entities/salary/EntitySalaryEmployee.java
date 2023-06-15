package com.puggysoft.entities.salary;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.puggysoft.entities.EntitySuperClass;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "sueldos_detalle_contratacion")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntitySalaryEmployee extends EntitySuperClass {
    @Column(name = "empleado")
    private String empleado;
    @Column(name = "fecha_ingreso")
    private String fechaIngreso;
    @Column(name = "cargo")
    private String cargo;
    @Column(name = "haber_basico")
    private String haberBasico;
    @Column(name = "tenant")
    private String tenant;
}
