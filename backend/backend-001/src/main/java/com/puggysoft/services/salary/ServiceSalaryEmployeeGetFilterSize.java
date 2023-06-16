package com.puggysoft.services.salary;

import com.puggysoft.dtos.salary.DtoSalaryEmployeeFilter;
import com.puggysoft.repositories.salary.IRepositorySalaryEmployee;
import com.puggysoft.support.TotalPagesCalculator;
import com.puggysoft.tools.salary.SqlSalaryEmployeeFilterBuilderNative;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ServiceSalaryEmployeeGetFilterSize {

  @Autowired
  private IRepositorySalaryEmployee repositorySalaryEmployee;

  @PersistenceContext
  private EntityManager entityManager;

  /**
   * Method to get the salary employee size.
   * @return the salary employee size.
   */
  public ResponseEntity<Long> getSize(DtoSalaryEmployeeFilter dtoSalaryEmployeeFilter, Long pageSize) {

    String query = SqlSalaryEmployeeFilterBuilderNative.build(dtoSalaryEmployeeFilter);
    Long totalRows = 0L;
    if (query.equals("")) {
      totalRows = repositorySalaryEmployee.findSize();
    } else {
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT COUNT(*) FROM sueldos_detalle_contratacion WHERE " + query;
      Query filterQuery = entityManager.createNativeQuery(fullQuery);
      totalRows = Long.valueOf(filterQuery.getSingleResult().toString());
    }

    Long totalPages = TotalPagesCalculator.getTotalPages(totalRows, pageSize);
    return ResponseEntity.status(HttpStatus.OK).body(totalPages);
  }
}
