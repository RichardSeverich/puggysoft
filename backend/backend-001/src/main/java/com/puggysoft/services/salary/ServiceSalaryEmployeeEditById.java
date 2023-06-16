package com.puggysoft.services.salary;

import com.puggysoft.dtos.salary.DtoSalaryEmployee;
import com.puggysoft.repositories.salary.IRepositorySalaryEmployee;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ServiceSalaryEmployeeEditById {

  @Autowired
  private IRepositorySalaryEmployee repositorySalaryEmployee;

  /**
   * Method to edit a salary employee.
   * @return a edit message.
   */
  @Transactional
  public ResponseEntity<String> editById(Long id, DtoSalaryEmployee dtoSalaryEmployee) {
    if (repositorySalaryEmployee.existsById(id)) {
      try {
        dtoSalaryEmployee.setId(id.longValue());
        repositorySalaryEmployee.save(dtoSalaryEmployee.dtoToEntity());
        return ResponseEntity.status(HttpStatus.OK).body("Updated successfully");
      } catch (DataAccessException ex) {
        String dbException = ex.getMostSpecificCause().getMessage();
        return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
      }
    }
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found");
  }
}
