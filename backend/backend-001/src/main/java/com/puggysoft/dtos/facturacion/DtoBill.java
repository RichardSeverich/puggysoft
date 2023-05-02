package com.puggysoft.dtos.facturacion;

import com.puggysoft.dtos.DtoSuperClass;
import com.puggysoft.entities.facturacion.EntityBill;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * Class.
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class DtoBill extends DtoSuperClass {

  @NotNull
  private String numberAuthorization;
  @NotNull
  private String billNumber;
  @NotNull
  private String nitClient;
  @NotNull
  private String datePurchased;
  @NotNull
  private String dosageKey;
  @NotNull
  private String controlCode;
  @NotNull
  private String purchaseAmount;
  @NotNull
  private String tenant;

  /** convert from dto to entity. */
  public EntityBill dtoToEntity() {
    EntityBill entity = new EntityBill();
    entity.setId(id);
    entity.setNumberAuthorization(numberAuthorization);
    entity.setBillNumber(billNumber);
    entity.setNitClient(nitClient);
    entity.setDatePurchased(datePurchased);
    entity.setDosageKey(dosageKey);
    entity.setControlCode(controlCode);
    entity.setPurchaseAmount(purchaseAmount);
    entity.setTenant(tenant);
    entity.setCreatedBy(createdBy);
    entity.setUpdatedBy(updatedBy);
    return entity;
  }

  /** convert from entity to dto. */
  public static DtoBill entityToDto(EntityBill entity) {
    DtoBill dto = new DtoBill();
    dto.setId(entity.getId());
    dto.setNumberAuthorization(entity.getNumberAuthorization());
    dto.setBillNumber(entity.getBillNumber());
    dto.setNitClient(entity.getNitClient());
    dto.setDatePurchased(entity.getDatePurchased());
    dto.setDosageKey(entity.getDosageKey());
    dto.setControlCode(entity.getControlCode());
    dto.setPurchaseAmount(entity.getPurchaseAmount());
    dto.setTenant(entity.getTenant());
    dto.setCreatedBy(entity.getCreatedBy());
    dto.setUpdatedBy(entity.getUpdatedBy());
    dto.setCreationDate(entity.getCreationDate());
    dto.setUpdateDate(entity.getUpdateDate());
    return dto;
  }
}