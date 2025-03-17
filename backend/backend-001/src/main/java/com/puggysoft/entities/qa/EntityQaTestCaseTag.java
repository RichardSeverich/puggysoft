package com.puggysoft.entities.qa;

import com.puggysoft.entities.EntitySuperClass;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "qa_test_cases_tags")
@Data
@EqualsAndHashCode(callSuper = true)
public class EntityQaTestCaseTag extends EntitySuperClass {

  @Column(name = "id_test_case")
  private String idTestCase;
  @Column(name = "tag_name")
  private String tagName;
  @Column(name = "tenant")
  private String tenant;

}