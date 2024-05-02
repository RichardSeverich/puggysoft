package com.puggysoft.services.escuela;

import com.puggysoft.dtos.escuela.DtoEscuelaNotas;
import com.puggysoft.dtos.escuela.DtoEscuelaNotasFilter;
import com.puggysoft.entities.escuela.EntityEscuelaNotas;
import com.puggysoft.tools.SqlJoinBuilder;
import com.puggysoft.tools.SqlNotInBuilder;
import com.puggysoft.tools.escuela.SqlEscuelaNotasFilterBuilderNative;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Services for filter.
 */
@Service
public class ServiceEscuelaMateriasNotasGetFilter {

  @PersistenceContext
  private EntityManager entityManager;

  /**
   * method for filter.
   */
  @SuppressWarnings(value = "unchecked")

  public ResponseEntity<List<DtoEscuelaNotas>> filter(
      DtoEscuelaNotasFilter dtoFilter,
      int page,
      int size,
      String materia,
      boolean contains
  ) {
    String queryFilter = SqlEscuelaNotasFilterBuilderNative.build(dtoFilter);
    // Principal Table
    String principalTableName = "escuela_notas";
    String principalTablePrimaryKey = "short_name";
    // Relationship table
    String relationTableName = "escuela_notas_materias";
    String relationForeignKey = "nota";
    String relationForeignKeyCriteria = "materia";
    String criteria = materia;
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
    Query query = entityManager.createNativeQuery(fullQuery, EntityEscuelaNotas.class);
    List<EntityEscuelaNotas> listEntities;
    listEntities = (List<EntityEscuelaNotas>) query.getResultList();
    List<DtoEscuelaNotas> listDtos = listEntities
        .stream()
        .map(DtoEscuelaNotas::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtos);
  }
}
