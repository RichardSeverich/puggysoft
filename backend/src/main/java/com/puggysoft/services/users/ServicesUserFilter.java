package com.puggysoft.services.users;
 
import com.puggysoft.tools.SqlFilterBuilder;
import com.puggysoft.dtos.users.DtoUser;
import com.puggysoft.dtos.users.DtoUserFilter;
import com.puggysoft.repositories.users.IRepositoryUser;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get all users. */
@Service
public class ServicesUserFilter {

  @Autowired
  private IRepositoryUser repositoryUser;

  /** method for retrive users. */
  public ResponseEntity<List<DtoUser>> filter(int page, int size, DtoUserFilter dtoUserFilter) {

    String query = "";
    query = query + SqlFilterBuilder.getFilterQuery("id", dtoUserFilter.idCriteria, dtoUserFilter.idOperator.name());
    query = query + SqlFilterBuilder.getFilterQuery("username", dtoUserFilter.usernameCriteria, dtoUserFilter.usernameOperator.name());
    query = query + SqlFilterBuilder.getFilterQuery("password", dtoUserFilter.passwordCriteria, dtoUserFilter.passwordOperator.name());
    query = query + SqlFilterBuilder.getFilterQuery("dni", dtoUserFilter.dniCriteria, dtoUserFilter.dniOperator.name());
    query = query + SqlFilterBuilder.getFilterQuery("name", dtoUserFilter.nameCriteria, dtoUserFilter.nameOperator.name());
    query = query + SqlFilterBuilder.getFilterQuery("second_name", dtoUserFilter.secondNameCriteria, dtoUserFilter.secondNameOperator.name());
    query = query + SqlFilterBuilder.getFilterQuery("last_name", dtoUserFilter.lastNameCriteria, dtoUserFilter.lastNameOperator.name());
    query = query + SqlFilterBuilder.getFilterQuery("second_last_name", dtoUserFilter.secondLastNameCriteria, dtoUserFilter.secondLastNameOperator.name());
    query = query + SqlFilterBuilder.getFilterQuery("birth_date", dtoUserFilter.birthDateCriteria, dtoUserFilter.birthDateNameOperator.name());
    query = query + SqlFilterBuilder.getFilterQuery("telephone", dtoUserFilter.telephoneCriteria, dtoUserFilter.telephoneOperator.name());
    query = query + SqlFilterBuilder.getFilterQuery("address", dtoUserFilter.addressCriteria, dtoUserFilter.addressOperator.name());
    query = query + SqlFilterBuilder.getFilterQuery("email", dtoUserFilter.emailCriteria, dtoUserFilter.emailOperator.name());
    query = query + SqlFilterBuilder.getFilterQuery("created_by", dtoUserFilter.createdByCriteria, dtoUserFilter.createdByOperator.name());
    query = query + SqlFilterBuilder.getFilterQuery("updated_by", dtoUserFilter.updatedByCriteria, dtoUserFilter.updatedByOperator.name());
    query = query + SqlFilterBuilder.getFilterQuery("creation_date", dtoUserFilter.creationDateCriteria, dtoUserFilter.creationDateOperator.name());
    query = query + SqlFilterBuilder.getFilterQuery("update_date", dtoUserFilter.updateDateCriteria, dtoUserFilter.updateDateOperator.name());
    query = query.substring(0, query.length() - 4);
    int off = (page - 1)*size;
    List<DtoUser> listDtoUser = repositoryUser.filter(query, off, size)
            .stream()
            .map(DtoUser::entityToDto)
            .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoUser);
  }

}
