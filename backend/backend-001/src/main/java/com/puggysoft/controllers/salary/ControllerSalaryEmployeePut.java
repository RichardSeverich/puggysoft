package com.puggysoft.controllers.salary;

import com.puggysoft.dtos.salary.DtoSalaryEmployee;
import com.puggysoft.services.salary.ServiceSalaryEmployeeEditById;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerSalaryEmployeePut {

  @Autowired
  private ServiceSalaryEmployeeEditById serviceSalaryEmployeeEditById;

  @PutMapping(path = "/api/v1/salary-employee/{id}")
  public ResponseEntity<String> put(@PathVariable Long id,
      @RequestBody @Valid DtoSalaryEmployee dtoSalaryEmployee) {
    return serviceSalaryEmployeeEditById.editById(id, dtoSalaryEmployee);
  }
}
