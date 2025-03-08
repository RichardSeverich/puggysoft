package com.puggysoft.services.mensualidad;

import com.puggysoft.dtos.sales.DtoProductFilter;
import com.puggysoft.support.TotalPagesCalculator;
import com.puggysoft.tools.sales.SqlProductFilterBuilderNative;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;


/** Services for filter. */
@Service
public class ServiceMensualidadCuotaByStudentAndCourseGetFilterSize {

  @PersistenceContext
  private EntityManager entityManager;

  /** method for filter. */
  public ResponseEntity<Long> filter(
    String studentUsername,
    Long courseId,
    DtoProductFilter dtoProductFilter,
    Long pageSize
  ) {
    String query = SqlProductFilterBuilderNative.build(dtoProductFilter);
    String fullQuery = "SELECT COUNT(*) "
        + "FROM products "
        + "INNER JOIN product_groups_products "
        + "ON product_groups_products.id_product = products.id "
        + "INNER JOIN product_groups "
        + "ON product_groups.id = product_groups_products.id_product_group "
        + "INNER JOIN escuela_cursos "
        + "ON product_groups.aux = escuela_cursos.short_name "
        + "INNER JOIN escuela_cursos_estudiantes "
        + "ON escuela_cursos_estudiantes.curso = escuela_cursos.short_name "
        + "WHERE escuela_cursos_estudiantes.estudiante = " + "'" + studentUsername + "'";
    if (query.isEmpty()) {
      fullQuery = fullQuery + " AND escuela_cursos.id = " + courseId;
    } else if (!query.isEmpty()) {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      fullQuery = fullQuery + " AND escuela_cursos.id = " + courseId + " AND " + query;
    }
    // JQPL (createQuery) and Native (createNativeQuery)
    Query filterQuery = entityManager.createNativeQuery(fullQuery);
    Long totalRows = Long.valueOf(filterQuery.getSingleResult().toString());
    Long totalPages = TotalPagesCalculator.getTotalPages(totalRows, pageSize);
    return ResponseEntity.status(HttpStatus.OK).body(totalPages);
  }

}
