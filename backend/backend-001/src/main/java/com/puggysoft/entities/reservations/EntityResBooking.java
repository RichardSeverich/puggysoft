package com.puggysoft.entities.reservations;

import com.puggysoft.entities.EntitySuperClass;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;


@Entity
@Table(name = "res_bookings")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityResBooking extends EntitySuperClass {

  @Column(name = "id_resource")
  private Long idResource;

  @Column(name = "id_interval_time")
  private Long idIntervalTime;

  @Column(name = "booking_date")
  private String bookingDate;

  private String comments;

  @Lob
  private byte[] voucher;

  private String status;

}
