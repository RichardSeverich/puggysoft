package com.puggysoft.services.salary;

import com.puggysoft.dtos.salary.DtoSalaryEmployee;
import com.puggysoft.entities.salary.EntitySalaryEmployee;
import com.puggysoft.repositories.salary.IRepositorySalaryEmployee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ServiceSalaryEmployeeCreate {

  @Autowired
  private IRepositorySalaryEmployee repositorySalaryEmployee;

  /**
   * Method to Create a salary employee.
   * @return the salary employee id created.
   */
  public ResponseEntity<String> create(DtoSalaryEmployee dtoSalaryEmployee) {
    try {
      EntitySalaryEmployee entity = repositorySalaryEmployee.save(dtoSalaryEmployee.dtoToEntity());
      DtoSalaryEmployee dto = DtoSalaryEmployee.entityToDto(entity);
      String idString = String.valueOf(dto.getId());
      return ResponseEntity.status(HttpStatus.CREATED).body(idString);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}
