package com.puggysoft.services.users;

import com.puggysoft.repositories.users.IRepositoryUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get size. */
@Service
public class ServiceUserGetPaginationSize {

  @Autowired
  private IRepositoryUser repositoryUser;

  /** method for get size. */
  public ResponseEntity<Long> getSize(Long pageSize) {
    Long size = repositoryUser.findSize();
    Long totalPages = size / pageSize;
    if (size % pageSize != 0) {
      totalPages = totalPages + 1L;
    }
    return ResponseEntity.status(HttpStatus.OK).body(totalPages);
  }
}