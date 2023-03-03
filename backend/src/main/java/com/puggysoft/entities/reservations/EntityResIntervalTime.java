package com.puggysoft.entities.reservations;

import com.puggysoft.entities.EntitySuperClass;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;


@Entity
@Table(name = "res_interval_time")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityResIntervalTime extends EntitySuperClass {

  private String name;

  // revisar
  @Column(name = "start_time")
  private String  startTime;

  // revisar
  @Column(name = "end_time")
  private String  endTime;

}
