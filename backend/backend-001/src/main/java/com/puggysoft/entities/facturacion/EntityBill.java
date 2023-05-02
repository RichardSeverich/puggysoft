package com.puggysoft.entities.facturacion;

import com.puggysoft.entities.EntitySuperClass;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "fac_factura")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityBill extends EntitySuperClass {

  @Column(name = "number_authorization")
  private String numberAuthorization;
  @Column(name = "bill_number")
  private String billNumber;
  @Column(name = "nit_client")
  private String nitClient;
  @Column(name = "date_purchased")
  private String datePurchased;
  @Column(name = "dosage_key")
  private String dosageKey;
  @Column(name = "control_code")
  private String controlCode;
  @Column(name = "purchase_amount")
  private String purchaseAmount;
  @Column(name = "tenant")
  private String tenant;

}
