package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoUrbanismoFlujoRequisitos;
import com.puggysoft.dtos.alcaldia.DtoUrbanismoFlujoRequisitosFilter;
import com.puggysoft.entities.alcaldia.EntityUrbanismoFlujoRequisitos;
import com.puggysoft.repositories.alcaldia.IRepositoryUrbanismoFlujoRequisitos;
import com.puggysoft.tools.alcaldia.SqlUrbanismoFlujoRequisitosFilterBuilderNative;
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
public class ServiceUrbanismoFlujoRequisitosGetFilter {

  @Autowired
  private IRepositoryUrbanismoFlujoRequisitos repositoryUrbanismoFlujoRequisitos;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for filter. */
  @SuppressWarnings(value = "unchecked")

  public ResponseEntity<List<DtoUrbanismoFlujoRequisitos>> filter(
    DtoUrbanismoFlujoRequisitosFilter dtoUrbanismoFlujoRequisitosFilter, int page, int size) {

    String query = SqlUrbanismoFlujoRequisitosFilterBuilderNative.build(dtoUrbanismoFlujoRequisitosFilter);
    int off = page * size;
    List<EntityUrbanismoFlujoRequisitos> listEntities;
    if (query.equals("")) {
      listEntities = repositoryUrbanismoFlujoRequisitos.findUrbanismoFlujoRequisitosByPagination(off, size);
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT alc_urb_tramite_flujo_requisitos.* FROM alc_urb_tramite_flujo_requisitos WHERE "
          + query + " LIMIT " + off + "," + size;
      // JQPL (createQuery) and Native (createNativeQuery)
      Query filterQuery = entityManager.createNativeQuery(fullQuery, EntityUrbanismoFlujoRequisitos.class);
      listEntities = (List<EntityUrbanismoFlujoRequisitos>) filterQuery.getResultList();
    }
    List<DtoUrbanismoFlujoRequisitos> listDtoUrbanismoFlujoRequisitos = listEntities
        .stream()
        .map(DtoUrbanismoFlujoRequisitos::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoUrbanismoFlujoRequisitos);
  }

}