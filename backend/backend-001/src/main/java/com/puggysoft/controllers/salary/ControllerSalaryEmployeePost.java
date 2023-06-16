package com.puggysoft.controllers.salary;

import com.puggysoft.dtos.salary.DtoSalaryEmployee;
import com.puggysoft.services.salary.ServiceSalaryEmployeeCreate;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerSalaryEmployeePost {

  @Autowired
  private ServiceSalaryEmployeeCreate serviceSalaryEmployeeCreate;

  @PostMapping(path = "/api/v1/salary-employee")
  public ResponseEntity<String> post(@RequestBody @Valid DtoSalaryEmployee dtoSalaryEmployee) {
    return serviceSalaryEmployeeCreate.create(dtoSalaryEmployee);
  }
}
