package com.puggysoft.services.users;

import com.puggysoft.dtos.users.DtoUserRole;
import com.puggysoft.repositories.users.IRepositoryUserRole;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get all users-roles. */
@Service
public class ServiceUserRoleGetAll {

  @Autowired
  private IRepositoryUserRole repositoryUserRole;

  /** method for retrive users-roles. */
  public ResponseEntity<List<DtoUserRole>> getAll() {
    List<DtoUserRole> listDtoUserRole = repositoryUserRole.findAll()
            .stream()
            .map(DtoUserRole::entityToDto)
            .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoUserRole);
  }
}