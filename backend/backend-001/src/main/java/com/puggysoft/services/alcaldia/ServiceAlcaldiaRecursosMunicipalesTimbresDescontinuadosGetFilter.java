package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesTimbresDescontinuados;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesTimbresDescontinuadosFilter;
import com.puggysoft.entities.alcaldia.EntityAlcaldiaRecursosMunicipalesTimbresDescontinuados;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaRecursosMunicipalesTimbresDescontinuados;
import com.puggysoft.tools.alcaldia.SqlAlcaldiaRecursosMunicipalesTimbresDescontinuadosFilterBuilderNative;
import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for filter. */
@Service
public class ServiceAlcaldiaRecursosMunicipalesTimbresDescontinuadosGetFilter {

  @Autowired
  private IRepositoryAlcaldiaRecursosMunicipalesTimbresDescontinuados repository;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for filter. */
  @SuppressWarnings(value = "unchecked")

  public ResponseEntity<List<DtoAlcaldiaRecursosMunicipalesTimbresDescontinuados>> filter(
    DtoAlcaldiaRecursosMunicipalesTimbresDescontinuadosFilter dtoAlcaldiaRecursosMunicipalesFilter, int page, int size) {

    String query = SqlAlcaldiaRecursosMunicipalesTimbresDescontinuadosFilterBuilderNative.build(dtoAlcaldiaRecursosMunicipalesFilter);
    int off = page * size;
    List<EntityAlcaldiaRecursosMunicipalesTimbresDescontinuados> listEntities;
    if (query.equals("")) {
      listEntities = repository.findAlcaldiaRecursosMunicipalesTimbresDescontinuadosByPagination(off, size);
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT alcaldia_timbres_descontinuados.* FROM alcaldia_timbres_descontinuados WHERE "
          + query + " ORDER BY id DESC" + " LIMIT " + off + "," + size;
      // JQPL (createQuery) and Native (createNativeQuery)
      Query filterQuery = entityManager.createNativeQuery(fullQuery, EntityAlcaldiaRecursosMunicipalesTimbresDescontinuados.class);
      listEntities = (List<EntityAlcaldiaRecursosMunicipalesTimbresDescontinuados>) filterQuery.getResultList();
    }
    List<DtoAlcaldiaRecursosMunicipalesTimbresDescontinuados> listDtoAlcaldiaRecursosMunicipales = listEntities
        .stream()
        .map(DtoAlcaldiaRecursosMunicipalesTimbresDescontinuados::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoAlcaldiaRecursosMunicipales);
  }

}