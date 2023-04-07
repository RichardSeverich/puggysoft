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

  @Query(value = "SELECT * FROM users LIMIT ?1, ?2", nativeQuery = true)
  List<EntityUser> findUsersByPagination(int off, int size);

  @Query(value = "SELECT COUNT(*) FROM users;", nativeQuery = true)
  Long findSize();

  // GET ALL USERS THAT ARE NOT PART OF A ROLE
  @Query(value = "SELECT users.* "
          + "FROM users "
          + "WHERE users.id "
          + "NOT IN ("
          + "SELECT users_roles.id_user "
          + "FROM users_roles "
          + "WHERE users_roles.id_role = ?1) LIMIT ?2, ?3", nativeQuery = true)
  List<EntityUser> findUsersWithoutRolesPagination(Long idRol, int off, int size);

  // GET COUNT USERS THAT ARE NOT PART OF A ROLE
  @Query(value = "SELECT COUNT(*) "
          + "FROM users "
          + "WHERE users.id "
          + "NOT IN ("
          + "SELECT users_roles.id_user "
          + "FROM users_roles "
          + "WHERE users_roles.id_role = ?1)", nativeQuery = true)
  Long findSizeWithoutRoles(Long idRol);

  // GET ALL USERS THAT ARE PART OF A ROLE
  @Query(value = "SELECT users.* "
          + "FROM users "
          + "INNER JOIN users_roles ON users_roles.id_user=users.id  "
          + "WHERE users_roles.id_role = ?1 LIMIT ?2, ?3", nativeQuery = true)
  List<EntityUser> findUsersWithRolesPagination(Long idRol, int off, int size);

  // GET COUNT USERS THAT ARE PART OF A ROLE
  @Query(value = "SELECT COUNT(*) "
          + "FROM users "
          + "INNER JOIN users_roles ON users_roles.id_user=users.id  "
          + "WHERE users_roles.id_role = ?1", nativeQuery = true)
  Long findSizeWithRoles(Long idRol);

}