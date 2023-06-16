package com.puggysoft.services.salary;

import com.puggysoft.repositories.salary.IRepositorySalaryEmployee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ServiceSalaryEmployeeDeleteById {

  @Autowired
  private IRepositorySalaryEmployee repositorySalaryEmployee;

  /**
   * Method to delete a salary employee.
   * @return a response message.
   */
  public ResponseEntity<String> deleteById(Long id) {
    try {
      if (repositorySalaryEmployee.existsById(id)) {
        repositorySalaryEmployee.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body("Deleted successfully");
      }
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found");
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}
