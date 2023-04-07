package com.puggysoft.entities.reservations;

import com.puggysoft.entities.EntitySuperClass;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;


@Entity
@Table(name = "res_schedule_work_days")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityResScheduleWorkDay extends EntitySuperClass {

  private Long idSchedule;

  @Column(name = "work_day")
  private String workDay;

}
