package com.puggysoft.dtos.reservations;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.reservations.EntityResBooking;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
* Class.
*/
@Data
@EqualsAndHashCode(callSuper = true)
public class DtoResBooking extends DtoSuperClass {

  @NotNull
  protected Long idResource;

  @NotNull
  protected Long idIntervalTime;

  @NotNull
  @Pattern(regexp = "([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))")
  private String bookingDate;

  @NotNull
  @Size(min = 3, max = 60)
  private String comments;

  private byte[] voucher;

  @NotNull
  @Pattern(regexp = "(IN-PROGRESS|DONE)")
  private String status;

  /** convert from dto to entity. */
  public EntityResBooking dtoToEntity() {
    EntityResBooking entity = new EntityResBooking();
    entity.setId(id);
    entity.setIdResource(idResource);
    entity.setIdIntervalTime(idIntervalTime);
    entity.setBookingDate(bookingDate);
    entity.setComments(comments);
    entity.setVoucher(voucher);
    entity.setStatus(status);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */
  public static DtoResBooking entityToDto(EntityResBooking entity) {
    DtoResBooking dto = new DtoResBooking();
    dto.setId(entity.getId());
    dto.setIdResource(entity.getIdResource());
    dto.setIdIntervalTime(entity.getIdIntervalTime());
    dto.setBookingDate(entity.getBookingDate());
    dto.setComments(entity.getComments());
    dto.setVoucher(entity.getVoucher());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}