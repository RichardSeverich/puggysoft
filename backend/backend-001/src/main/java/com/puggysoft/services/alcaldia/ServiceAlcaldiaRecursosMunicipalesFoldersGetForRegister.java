package com.puggysoft.services.alcaldia;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for filter. */
@Service
public class ServiceAlcaldiaRecursosMunicipalesFoldersGetForRegister {

  @PersistenceContext
  private EntityManager entityManager;

  /** filter method. */
  public ResponseEntity<String> filter(String tenant) {

    String fullQuery = "SELECT MAX(talonario_final) FROM alcaldia_recursos_municipales WHERE name LIKE '%FOLDERS%' "
        + "AND alcaldia_recursos_municipales.tenant = '${tenant}'";
    fullQuery = fullQuery.replace("${tenant}", tenant);

    Query filterQuery = entityManager.createNativeQuery(fullQuery);
    int count = ((Number) filterQuery.getSingleResult()).intValue();

    String max  =  String.valueOf(count);
    return ResponseEntity.status(HttpStatus.OK).body(max);
  }

}