package com.puggysoft.entities.qa;

import com.puggysoft.entities.EntitySuperClass;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "qa_tags")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityQaTag extends EntitySuperClass {

  @Column(name = "name")
  private String name;
  @Column(name = "tenant")
  private String tenant;

}