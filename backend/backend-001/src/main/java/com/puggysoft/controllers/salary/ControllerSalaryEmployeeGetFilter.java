package com.puggysoft.controllers.salary;

import com.puggysoft.dtos.salary.DtoSalaryEmployee;
import com.puggysoft.dtos.salary.DtoSalaryEmployeeFilter;
import com.puggysoft.services.salary.ServiceSalaryEmployeeGetFilter;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerSalaryEmployeeGetFilter {

  @Autowired
  private ServiceSalaryEmployeeGetFilter serviceSalaryEmployeeGetFilter;

  @PostMapping(path = "/api/v1/salary-employee/filter")
  public ResponseEntity<List<DtoSalaryEmployee>> getSalaryEmployeeFilter(@RequestParam int page, @RequestParam int size, @RequestBody @Valid DtoSalaryEmployeeFilter dtoSalaryEmployeeFilter) {
    return serviceSalaryEmployeeGetFilter.filter(dtoSalaryEmployeeFilter, page, size);
  }
}
