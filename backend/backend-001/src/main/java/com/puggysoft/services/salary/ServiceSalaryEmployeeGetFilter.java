package com.puggysoft.services.salary;

import com.puggysoft.dtos.salary.DtoSalaryEmployee;
import com.puggysoft.dtos.salary.DtoSalaryEmployeeFilter;
import com.puggysoft.entities.salary.EntitySalaryEmployee;
import com.puggysoft.repositories.salary.IRepositorySalaryEmployee;
import com.puggysoft.tools.salary.SqlSalaryEmployeeFilterBuilderNative;
import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ServiceSalaryEmployeeGetFilter {

  @Autowired
  private IRepositorySalaryEmployee repositorySalaryEmployee;

  @PersistenceContext
  private EntityManager entityManager;

  /**
   * Method to filter the salary employees.
   * @return a list of salary employees.
   */
  public ResponseEntity<List<DtoSalaryEmployee>> filter(DtoSalaryEmployeeFilter dtoSalaryEmployeeFilter, int page,
      int size) {

    String query = SqlSalaryEmployeeFilterBuilderNative.build(dtoSalaryEmployeeFilter);
    int off = page * size;
    List<EntitySalaryEmployee> listEntities;

    if (query.equals("")) {
      listEntities = repositorySalaryEmployee.findBillByPagination(off, size);
    } else {
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT sueldos_detalle_contratacion.* FROM sueldos_detalle_contratacion WHERE "
          + query + " LIMIT " + off + "," + size;
      Query filterQuery = entityManager.createNativeQuery(fullQuery, EntitySalaryEmployee.class);
      listEntities = (List<EntitySalaryEmployee>) filterQuery.getResultList();

    }

    List<DtoSalaryEmployee> listDtoSalaryEmployee = listEntities
        .stream()
        .map(DtoSalaryEmployee::entityToDto)
        .collect(Collectors.toList());

    return ResponseEntity.status(HttpStatus.OK).body(listDtoSalaryEmployee);
  }

}
