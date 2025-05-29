package com.puggysoft.services.escuela;

import com.puggysoft.dtos.users.DtoUser;
import com.puggysoft.dtos.users.DtoUserFilter;
import com.puggysoft.entities.users.EntityUser;
import com.puggysoft.tools.users.SqlUserFilterBuilderNative;

import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/**
 * Services for filter.
 */
@Service
public class ServiceEscuelaEstudiantesCursoGetFilter {

  @PersistenceContext
  private EntityManager entityManager;

  /**
   * method for filter.
   */
  @SuppressWarnings(value = "unchecked")

  public ResponseEntity<List<DtoUser>> filter(
      DtoUserFilter dtoFilter,
      int page,
      int size,
      String curso
  ) {
    String queryFilter = SqlUserFilterBuilderNative.build(dtoFilter);
    int off = page * size;
    if (queryFilter != null && !queryFilter.trim().isEmpty()) {
      queryFilter = queryFilter.substring(0, queryFilter.length() - 4);
      queryFilter = "AND " + queryFilter;
    }

    String fullQuery = "SELECT "
        + "users.* "
        + "FROM users "
        + "INNER JOIN escuela_cursos_estudiantes ON escuela_cursos_estudiantes.estudiante = users.username "
        + "WHERE escuela_cursos_estudiantes.curso = :curso "
        + queryFilter
        + " "
        + "LIMIT :off, :size";
    /**
     * @param curso cursos.shortName
    */
    List<EntityUser> listEntities = entityManager
        .createNativeQuery(fullQuery, EntityUser.class)
        .setParameter("curso", curso)
        .setParameter("off", off)
        .setParameter("size", size)
        .getResultList();

    List<DtoUser> listDtos = listEntities
        .stream()
        .map(DtoUser::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtos);
  }
}
