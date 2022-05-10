package com.puggysoft.entities;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import java.util.Date;

@MappedSuperclass
@Data
public abstract class EntitySuperClass {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  protected Long id;

  @Column(name = "created_by", updatable = false)
  protected String createdBy;

  @Column(name = "updated_by", insertable = false)
  protected String updatedBy;

  @Column(name = "creation_date", insertable = false, updatable = false)
  protected Date creationDate;

  @Column(name = "update_date", insertable = false, updatable = false)
  protected Date updateDate;
}