package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoUrbanismoTramiteRequisitos;
import com.puggysoft.dtos.alcaldia.DtoUrbanismoTramiteRequisitosFilter;
import com.puggysoft.entities.alcaldia.EntityUrbanismoTramiteRequisitos;
import com.puggysoft.repositories.alcaldia.IRepositoryUrbanismoTramiteRequisitos;
import com.puggysoft.tools.alcaldia.SqlUrbanismoTramiteRequisitosFilterBuilderNative;
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
public class ServiceUrbanismoTramiteRequisitosGetFilter {

  @Autowired
  private IRepositoryUrbanismoTramiteRequisitos repositoryUrbanismoTramiteRequisitos;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for filter. */
  @SuppressWarnings(value = "unchecked")

  public ResponseEntity<List<DtoUrbanismoTramiteRequisitos>> filter(
      DtoUrbanismoTramiteRequisitosFilter dtoUrbanismoTramiteRequisitosFilter, int page, int size) {

    String query = SqlUrbanismoTramiteRequisitosFilterBuilderNative.build(dtoUrbanismoTramiteRequisitosFilter);
    int off = page * size;
    List<EntityUrbanismoTramiteRequisitos> listEntities;
    if (query.equals("")) {
      listEntities = repositoryUrbanismoTramiteRequisitos.findUrbanismoTramiteRequisitosByPagination(off, size);
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT alc_urb_tramite_requisitos.* FROM alc_urb_tramite_requisitos WHERE "
          + query + " LIMIT " + off + "," + size;
      // JQPL (createQuery) and Native (createNativeQuery)
      Query filterQuery = entityManager.createNativeQuery(fullQuery, EntityUrbanismoTramiteRequisitos.class);
      listEntities = (List<EntityUrbanismoTramiteRequisitos>) filterQuery.getResultList();
    }
    List<DtoUrbanismoTramiteRequisitos> listDtoUrbanismoTramiteRequisitos = listEntities
        .stream()
        .map(DtoUrbanismoTramiteRequisitos::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoUrbanismoTramiteRequisitos);
  }

}