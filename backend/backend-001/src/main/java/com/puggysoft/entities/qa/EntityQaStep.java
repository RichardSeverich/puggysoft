package com.puggysoft.entities.qa;

import com.puggysoft.entities.EntitySuperClass;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "qa_steps")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityQaStep extends EntitySuperClass {

  @Column(name = "title")
  private String title;
  @Column(name = "description")
  private String description;
  @Column(name = "expected_result")
  private String expectedResult;
  @Column(name = "tenant")
  private String tenant;

}