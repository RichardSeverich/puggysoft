package com.puggysoft.repositories.users;

import com.puggysoft.entities.users.EntityUser;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface IRepositoryUser extends JpaRepository<EntityUser, Long> {

  @Query(value = "SELECT * FROM users WHERE username = ?1 AND password = ?2", nativeQuery = true)
  List<EntityUser> findUserByUsernameAndPassword(String userName, String password);

  @Query(value = "SELECT users.* "
          + "FROM users "
          + "WHERE users.id "
          + "NOT IN ("
          + "SELECT users_rols.id_user "
          + "FROM users_rols "
          + "WHERE users_rols.id_rol = ?1);", nativeQuery = true)
  List<EntityUser> findUsersWithoutRols(Long idRol);

  @Query(value = "SELECT * FROM users LIMIT ?1,?2;", nativeQuery = true)
  List<EntityUser> findUsersByPagination(int page, int size);

  @Query(value = "SELECT COUNT(*) FROM users;", nativeQuery = true)
  Long findSize();

}