package com.puggysoft.services.users;

import com.puggysoft.dtos.users.DtoRole;
import com.puggysoft.repositories.users.IRepositoryRole;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get all roles. */
@Service
public class ServiceRoleGetAll {

  @Autowired
  private IRepositoryRole repositoryRole;

  /** method for retrive role. */
  public ResponseEntity<List<DtoRole>> getAll() {
    List<DtoRole> listDtoRole = repositoryRole.findAll()
            .stream()
            .map(DtoRole::entityToDto)
            .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoRole);
  }
}