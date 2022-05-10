package com.yeshua.services.users;

import com.yeshua.dtos.users.DtoUser;
import com.yeshua.repositories.users.IRepositoryUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ServiceUserEditById {

  @Autowired
  private IRepositoryUser _iRepositoryUser;

  @Transactional
  public ResponseEntity<String> editById(Integer id, DtoUser dtoUser) {
    if (_iRepositoryUser.existsById(id.longValue())) {
      try {
        dtoUser.setId(id.longValue());
        _iRepositoryUser.save(dtoUser.dtoToEntity());

        return ResponseEntity.status(HttpStatus.OK).body("Updated successfully");
      } catch (DataAccessException ex) {
        String dbException = ex.getMostSpecificCause().getMessage();
        return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
      }
    }
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found");
  }
}