package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoUrbanismoRequisitos;
import com.puggysoft.dtos.alcaldia.DtoUrbanismoRequisitosFilter;
import com.puggysoft.entities.alcaldia.EntityUrbanismoRequisitos;
import com.puggysoft.repositories.alcaldia.IRepositoryUrbanismoRequisitos;
import com.puggysoft.tools.alcaldia.SqlUrbanismoRequisitosFilterBuilderNative;
import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for filter Requisitoss. */
@Service
public class ServiceRequisitosGetFilterWithoutTramites {

  @Autowired
  private IRepositoryUrbanismoRequisitos repositoryRequisitos;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for filter Requisitoss. */
  public ResponseEntity<List<DtoUrbanismoRequisitos>> filter(DtoUrbanismoRequisitosFilter dtoUrbanismoRequisitosFilter, int page, int size,
      String tramite) {

    String query = SqlUrbanismoRequisitosFilterBuilderNative.build(dtoUrbanismoRequisitosFilter);
    int off = page * size;
    List<EntityUrbanismoRequisitos> listEntities;
    if (query.equals("")) {
      listEntities = repositoryRequisitos.findRequisitosWithoutTramites(tramite, off, size);
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT alc_urb_requisitos.* FROM alc_urb_requisitos WHERE "
          + "alc_urb_requisitos.nombre_corto "
          + "NOT IN ( SELECT alc_urb_tramite_requisitos.requisito_nombre_corto FROM alc_urb_tramite_requisitos "
          + "WHERE alc_urb_tramite_requisitos.tramite_nombre_corto = '" + tramite + "'"
          + ") AND " + query + " LIMIT " + off + "," + size;
      // JQPL (createQuery) and Native (createNativeQuery)
      Query filterQuery = entityManager.createNativeQuery(fullQuery, EntityUrbanismoRequisitos.class);
      listEntities = (List<EntityUrbanismoRequisitos>) filterQuery.getResultList();
    }
    List<DtoUrbanismoRequisitos> listDtoRequisitos = listEntities
        .stream()
        .map(DtoUrbanismoRequisitos::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoRequisitos);
  }

}
