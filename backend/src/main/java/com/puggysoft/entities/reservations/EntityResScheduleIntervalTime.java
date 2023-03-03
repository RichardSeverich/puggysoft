package com.puggysoft.entities.reservations;

import com.puggysoft.entities.EntitySuperClass;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;


@Entity
@Table(name = "res_schedule_interval_time")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityResScheduleIntervalTime extends EntitySuperClass {

  @Column(name = "id_schedule")
  private Long idSchedule;

  @Column(name = "id_interval_time")
  private Long idIntervalTime;

}
