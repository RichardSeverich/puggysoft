package com.puggysoft.entities.reservations;

import com.puggysoft.entities.EntitySuperClass;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;


@Entity
@Table(name = "res_resources_schedule")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityResResourceSchedule extends EntitySuperClass {

  @Column(name = "id_schedule")
  private Long idSchedule;

  @Column(name = "id_resource")
  private Long idResource;

}
