package com.puggysoft.services.users;

import com.puggysoft.dtos.users.DtoUser;
import com.puggysoft.repositories.users.IRepositoryUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ServiceUserGetAll {

  @Autowired
  private IRepositoryUser _iRepositoryUser;

  public ResponseEntity<List<DtoUser>> getAll() {
    List<DtoUser> listDtoUser = _iRepositoryUser.findAll()
            .stream()
            .map(DtoUser::entityToDto)
            .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoUser);
  }
}