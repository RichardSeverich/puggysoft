package com.puggysoft.controllers.salary;

import com.puggysoft.dtos.salary.DtoSalaryEmployeeFilter;
import com.puggysoft.services.salary.ServiceSalaryEmployeeGetFilterSize;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerSalaryEmployeeGetFilterSize {

  @Autowired
  private ServiceSalaryEmployeeGetFilterSize serviceSalaryEmployeeGetFilterSize;

  @PostMapping(path = "/api/v1/salary-employee/filter/size/{pageSize}")
  public ResponseEntity<Long> getSize(@RequestBody @Valid DtoSalaryEmployeeFilter dtoSalaryEmployeeFilter, @PathVariable Long pageSize) {
    return serviceSalaryEmployeeGetFilterSize.getSize(dtoSalaryEmployeeFilter, pageSize);
  }
}
