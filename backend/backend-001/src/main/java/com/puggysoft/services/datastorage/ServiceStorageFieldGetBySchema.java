package com.puggysoft.services.datastorage;

import com.puggysoft.dtos.datastorage.DtoStorageField;
import com.puggysoft.entities.datastorage.EntityStorageField;
import com.puggysoft.repositories.datastorage.IRepositoryStorageField;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get all. */
@Service
public class ServiceStorageFieldGetBySchema {

  @Autowired
  private IRepositoryStorageField repository;

  /** method for retrive. */
  public ResponseEntity<List<DtoStorageField>> getBySchema(String schemaShortName) {
    List<EntityStorageField> listEntities = repository.findFieldsBySchema(schemaShortName);
    List<DtoStorageField> listDtoStorageField = listEntities
        .stream()
        .map(DtoStorageField::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoStorageField);
  }
}