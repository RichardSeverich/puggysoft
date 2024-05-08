package com.puggysoft.services.escuela;

import com.puggysoft.dtos.escuela.DtoEscuelaCursos;
import com.puggysoft.dtos.escuela.DtoEscuelaCursosFilter;
import com.puggysoft.entities.escuela.EntityEscuelaCursos;
import com.puggysoft.tools.SqlJoinBuilder;
import com.puggysoft.tools.SqlNotInBuilder;
import com.puggysoft.tools.escuela.SqlEscuelaCursosFilterBuilderNative;
import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/**
 * Services for filter.
 */
@Service
public class ServiceEscuelaCursosDocentesGetFilter {

  @PersistenceContext
  private EntityManager entityManager;

  /**
   * method for filter.
   */
  @SuppressWarnings(value = "unchecked")

  public ResponseEntity<List<DtoEscuelaCursos>> filter(
      DtoEscuelaCursosFilter dtoFilter,
      int page,
      int size,
      String docente,
      boolean contains
  ) {
    String queryFilter = SqlEscuelaCursosFilterBuilderNative.build(dtoFilter);
    // Principal Table
    String principalTableName = "escuela_cursos";
    String principalTablePrimaryKey = "short_name";
    // Relationship table
    String relationTableName = "escuela_cursos_docentes";
    String relationForeignKey = "curso";
    String relationForeignKeyCriteria = "docente";
    String criteria = docente;
    //
    String fullQuery;
    if (contains) {
      fullQuery = SqlJoinBuilder.getQuery(
          principalTableName,
          principalTablePrimaryKey,
          relationTableName,
          relationForeignKey,
          relationForeignKeyCriteria,
          criteria,
          queryFilter,
          page,
          size
      );
    } else {
      fullQuery = SqlNotInBuilder.getQuery(
          principalTableName,
          principalTablePrimaryKey,
          relationTableName,
          relationForeignKey,
          relationForeignKeyCriteria,
          criteria,
          queryFilter,
          page,
          size
      );
    }
    // JQPL (createQuery) and Native (createNativeQuery)
    Query query = entityManager.createNativeQuery(fullQuery, EntityEscuelaCursos.class);
    List<EntityEscuelaCursos> listEntities;
    listEntities = (List<EntityEscuelaCursos>) query.getResultList();
    List<DtoEscuelaCursos> listDtos = listEntities
        .stream()
        .map(DtoEscuelaCursos::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtos);
  }
}
