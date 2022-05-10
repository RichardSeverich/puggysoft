package com.yeshua.services.users;

import com.yeshua.dtos.users.DtoUser;
import com.yeshua.repositories.users.IRepositoryUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ServiceUserGetPagination {

  @Autowired
  private IRepositoryUser _iRepositoryUser;

  public ResponseEntity<List<DtoUser>> getPagination(Pageable pageable) {
    List<DtoUser> listDtoUser = _iRepositoryUser.findAll(pageable)
            .stream()
            .map(DtoUser::entityToDto)
            .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoUser);
  }
}