package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoUrbanismoEstados;
import com.puggysoft.dtos.alcaldia.DtoUrbanismoEstadosFilter;
import com.puggysoft.entities.alcaldia.EntityUrbanismoEstados;
import com.puggysoft.repositories.alcaldia.IRepositoryUrbanismoEstados;
import com.puggysoft.tools.alcaldia.SqlUrbanismoEstadosFilterBuilderNative;
import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for filter Estadoss. */
@Service
public class ServiceEstadosGetFilterWithoutTramites {

  @Autowired
  private IRepositoryUrbanismoEstados repositoryEstados;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for filter Estadoss. */
  public ResponseEntity<List<DtoUrbanismoEstados>> filter(DtoUrbanismoEstadosFilter dtoUrbanismoEstadosFilter, int page, int size,
      String tramite) {

    String query = SqlUrbanismoEstadosFilterBuilderNative.build(dtoUrbanismoEstadosFilter);
    int off = page * size;
    List<EntityUrbanismoEstados> listEntities;
    if (query.equals("")) {
      listEntities = repositoryEstados.findEstadosWithoutTramites(tramite, off, size);
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT alc_urb_estados.* FROM alc_urb_estados WHERE "
          + "alc_urb_estados.nombre_corto "
          + "NOT IN ( SELECT alc_urb_tramite_flujo.estado_nombre_corto FROM alc_urb_tramite_flujo "
          + "WHERE alc_urb_tramite_flujo.tramite_nombre_corto = '" + tramite + "'"
          + ") AND " + query + " LIMIT " + off + "," + size;
      // JQPL (createQuery) and Native (createNativeQuery)
      Query filterQuery = entityManager.createNativeQuery(fullQuery, EntityUrbanismoEstados.class);
      listEntities = (List<EntityUrbanismoEstados>) filterQuery.getResultList();
    }
    List<DtoUrbanismoEstados> listDtoEstados = listEntities
        .stream()
        .map(DtoUrbanismoEstados::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoEstados);
  }

}
