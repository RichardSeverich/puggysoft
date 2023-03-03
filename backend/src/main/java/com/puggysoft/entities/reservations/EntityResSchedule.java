package com.puggysoft.entities.reservations;

import com.puggysoft.entities.EntitySuperClass;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;


@Entity
@Table(name = "res_schedule")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityResSchedule extends EntitySuperClass {

  private String name;

}
