package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoUrbanismoHistorial;
import com.puggysoft.dtos.alcaldia.DtoUrbanismoHistorialFilter;
import com.puggysoft.entities.alcaldia.EntityUrbanismoHistorial;
import com.puggysoft.repositories.alcaldia.IRepositoryUrbanismoHistorial;
import com.puggysoft.tools.alcaldia.SqlUrbanismoHistorialFilterBuilderNative;
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
public class ServiceUrbanismoHistorialGetFilter {

  @Autowired
  private IRepositoryUrbanismoHistorial repositoryUrbanismoHistorial;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for filter. */
  @SuppressWarnings(value = "unchecked")

  public ResponseEntity<List<DtoUrbanismoHistorial>> filter(
    DtoUrbanismoHistorialFilter dtoUrbanismoHistorialFilter, int page, int size) {

    String query = SqlUrbanismoHistorialFilterBuilderNative.build(dtoUrbanismoHistorialFilter);
    int off = page * size;
    List<EntityUrbanismoHistorial> listEntities;
    if (query.equals("")) {
      listEntities = repositoryUrbanismoHistorial.findUrbanismoHistorialByPagination(off, size);
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT alc_urb_historial.* FROM alc_urb_historial WHERE "
          + query + " LIMIT " + off + "," + size;
      // JQPL (createQuery) and Native (createNativeQuery)
      Query filterQuery = entityManager.createNativeQuery(fullQuery, EntityUrbanismoHistorial.class);
      listEntities = (List<EntityUrbanismoHistorial>) filterQuery.getResultList();
    }
    List<DtoUrbanismoHistorial> listDtoUrbanismoHistorial = listEntities
        .stream()
        .map(DtoUrbanismoHistorial::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoUrbanismoHistorial);
  }

}