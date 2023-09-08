package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaActividades;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaActividadesFilter;
import com.puggysoft.entities.alcaldia.EntityAlcaldiaActividades;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaActividades;
import com.puggysoft.tools.alcaldia.SqlAlcaldiaActividadesFilterBuilderNative;
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
public class ServiceAlcaldiaActividadesGetFilter {

  @Autowired
  private IRepositoryAlcaldiaActividades repository;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for filter. */
  @SuppressWarnings(value = "unchecked")

  public ResponseEntity<List<DtoAlcaldiaActividades>> filter(
    DtoAlcaldiaActividadesFilter dtoFilter, int page, int size) {

    String query = SqlAlcaldiaActividadesFilterBuilderNative.build(dtoFilter);
    int off = page * size;
    List<EntityAlcaldiaActividades> listEntities;
    if (query.equals("")) {
      listEntities = repository.findAlcaldiaActividadesByPagination(off, size);
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT alcaldia_actividades.* FROM alcaldia_actividades WHERE "
          + query + " LIMIT " + off + "," + size;
      // JQPL (createQuery) and Native (createNativeQuery)
      Query filterQuery = entityManager.createNativeQuery(fullQuery, EntityAlcaldiaActividades.class);
      listEntities = (List<EntityAlcaldiaActividades>) filterQuery.getResultList();
    }
    List<DtoAlcaldiaActividades> listDto = listEntities
        .stream()
        .map(DtoAlcaldiaActividades::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDto);
  }

}