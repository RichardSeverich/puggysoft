package com.puggysoft.services.alcaldia;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

/** Services for filter. */
@Service
public class ServiceAlcaldiaRecursosMunicipalesFoldersGetForRegister {

  @PersistenceContext
  private EntityManager entityManager;

  public ResponseEntity<String> filter() {

    String fullQuery = "SELECT MAX(talonario_final) FROM alcaldia_recursos_municipales WHERE name LIKE 'FOLDERS'";

    Query filterQuery = entityManager.createNativeQuery(fullQuery);
    int count = ((Number) filterQuery.getSingleResult()).intValue();


    String max  =  String.valueOf(count);
    return ResponseEntity.status(HttpStatus.OK).body(max);
  }

}