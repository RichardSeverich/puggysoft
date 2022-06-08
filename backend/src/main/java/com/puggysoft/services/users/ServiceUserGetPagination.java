package com.puggysoft.services.users;

import com.puggysoft.dtos.users.DtoUser;
import com.puggysoft.repositories.users.IRepositoryUser;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get pagination users. */
@Service
public class ServiceUserGetPagination {

  @Autowired
  private IRepositoryUser repositoryUser;

  /** method for retrive users with pagination. */
  public ResponseEntity<List<DtoUser>> getPagination(Pageable pageable) {
    List<DtoUser> listDtoUser = repositoryUser.findAll(pageable)
            .stream()
            .map(DtoUser::entityToDto)
            .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoUser);
  }
}