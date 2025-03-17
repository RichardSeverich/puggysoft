package com.puggysoft.entities.qa;

import com.puggysoft.entities.EntitySuperClass;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "qa_test_cases_steps")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityQaTestCaseStep extends EntitySuperClass {

  @Column(name = "id_test_case")
  private String idTestCase;
  @Column(name = "id_test_step")
  private String idTestStep;
  @Column(name = "tenant")
  private String tenant;

}