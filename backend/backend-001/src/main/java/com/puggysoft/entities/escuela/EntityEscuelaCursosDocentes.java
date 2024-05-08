package com.puggysoft.entities.escuela;

import com.puggysoft.entities.EntitySuperClass;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "escuela_cursos_docentes")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityEscuelaCursosDocentes extends EntitySuperClass {

  @Column(name = "curso")
  private String curso;
  @Column(name = "docente")
  private String docente;
  @Column(name = "tenant")
  private String tenant;
}
