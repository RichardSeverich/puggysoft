package com.puggysoft.services.escuela;

import com.puggysoft.dtos.escuela.DtoEscuelaMateriasFilter;
import com.puggysoft.support.TotalPagesCalculator;
import com.puggysoft.tools.escuela.SqlEscuelaMateriasFilterBuilderNative;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/**
 * Services for get size.
 */
@Service
public class ServiceEscuelaCursosMateriasDocentesGetFilterSize {

  @PersistenceContext
  private EntityManager entityManager;

  /**
   * method for get size.
   */
  public ResponseEntity<Long> getSize(
      DtoEscuelaMateriasFilter dtoFilter,
      Long pageSize,
      String docente,
      String curso,
      boolean contains
  ) {
    String queryFilter = SqlEscuelaMateriasFilterBuilderNative.build(dtoFilter);
    String fullQuery;
    Long totalRows = 0L;
    if (queryFilter != null && !queryFilter.trim().isEmpty()) {
      queryFilter = queryFilter.substring(0, queryFilter.length() - 4);
      queryFilter = "AND " + queryFilter;
    }

    if (contains) {
      fullQuery = "SELECT COUNT(*) "
          + "FROM escuela_materias "
          + "INNER JOIN escuela_cursos_materias_docentes ON escuela_cursos_materias_docentes.materia = escuela_materias.short_name "
          + "WHERE escuela_cursos_materias_docentes.curso = :curso "
          + "AND escuela_cursos_materias_docentes.docente = :docente "
          + queryFilter;
      /**
       * @param curso curso.short_name
       * @param docente user.username
      */
      totalRows = ((Number) entityManager.createNativeQuery(fullQuery)
          .setParameter("curso", curso)
          .setParameter("docente", docente)
          .getSingleResult()).longValue();
    } else {
      fullQuery = "SELECT COUNT(*) "
          + "FROM escuela_materias "
          + "INNER JOIN escuela_cursos_materias ON escuela_cursos_materias.materia = escuela_materias.short_name "
          + "AND escuela_cursos_materias.curso = :curso "
          + "WHERE escuela_materias.id NOT IN ("
          + "SELECT escuela_materias.id "
          + "FROM escuela_materias "
          + "INNER JOIN escuela_cursos_materias_docentes ON escuela_cursos_materias_docentes.materia = escuela_materias.short_name "
          + "AND escuela_cursos_materias_docentes.curso = :curso "
          + ") "
          + queryFilter;
      /**
       * @param curso curso.short_name
      */
      totalRows = ((Number) entityManager.createNativeQuery(fullQuery)
          .setParameter("curso", curso)
          .getSingleResult()).longValue();
    }

    Long totalPages = TotalPagesCalculator.getTotalPages(totalRows, pageSize);
    return ResponseEntity.status(HttpStatus.OK).body(totalPages);
  }

}
