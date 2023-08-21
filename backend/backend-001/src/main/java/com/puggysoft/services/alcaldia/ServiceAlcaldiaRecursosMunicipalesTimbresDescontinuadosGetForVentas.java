package com.puggysoft.services.alcaldia;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for filter. */
@Service
public class ServiceAlcaldiaRecursosMunicipalesTimbresDescontinuadosGetForVentas {

  @PersistenceContext
  private EntityManager entityManager;

  /** method for filter. */
  @SuppressWarnings(value = "unchecked")

  public ResponseEntity<List<Number>> filter(int from, int to) {
    List<Number> listTimbresDescontinuados;

    String fullQuery = "SELECT alcaldia_timbres_descontinuados.codigo FROM alcaldia_timbres_descontinuados "
        + "WHERE alcaldia_timbres_descontinuados.codigo BETWEEN " + from + " AND " + to;
    // JQPL (createQuery) and Native (createNativeQuery)
    Query filterQuery = entityManager.createNativeQuery(fullQuery);
    listTimbresDescontinuados = (List<Number>) filterQuery.getResultList();

    return ResponseEntity.status(HttpStatus.OK).body(listTimbresDescontinuados);
  }

}