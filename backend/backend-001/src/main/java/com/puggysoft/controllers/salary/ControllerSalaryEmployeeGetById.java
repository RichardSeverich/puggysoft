package com.puggysoft.controllers.salary;

import com.puggysoft.dtos.salary.DtoSalaryEmployee;
import com.puggysoft.services.salary.ServiceSalaryEmployeeGetById;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerSalaryEmployeeGetById {

  @Autowired
  private ServiceSalaryEmployeeGetById serviceSalaryEmployeeGetById;

  @GetMapping(path = "/api/v1/salary-employee/{id}")
  public ResponseEntity<DtoSalaryEmployee> getById(@PathVariable Long id) {
    return serviceSalaryEmployeeGetById.getById(id);
  }
}
