package com.puggysoft.repositories.users;

import com.puggysoft.entities.users.EntityRole;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface IRepositoryRole extends JpaRepository<EntityRole, Long> {


  @Query(value = "SELECT roles.* FROM roles WHERE roles.name = ?1", nativeQuery = true)
  EntityRole findRoleByName(String name);

  @Query(value = "SELECT COUNT(*) FROM roles;", nativeQuery = true)
  Long findSize();

  @Query(value = "SELECT roles.* "
          + "FROM roles "
          + "INNER JOIN users_roles ON users_roles.id_role=roles.id  "
          + "WHERE users_roles.id_user = ?1 ", nativeQuery = true)
  List<EntityRole> findRolesByUserId(Long iduser);

  @Query(value = "SELECT r.* "
          + "FROM roles r "
          + "JOIN users_roles ur ON ur.id_role = r.id  "
          + "JOIN users u ON ur.id_user = u.id  "
          + "WHERE u.username = :username", nativeQuery = true)
  List<EntityRole> findRolesByUsername(@Param("username") String username);

  @Query(value = "SELECT * FROM roles LIMIT ?1, ?2", nativeQuery = true)
  List<EntityRole> findRolesByPagination(int off, int size);

  // GET ALL ROLES THAT ARE PART OF A USER
  @Query(value = "SELECT roles.* "
          + "FROM roles "
          + "INNER JOIN users_roles ON users_roles.id_role=roles.id  "
          + "WHERE users_roles.id_user = ?1 LIMIT ?2, ?3", nativeQuery = true)
  List<EntityRole> findRolesWithRolesPagination(Long iduser, int off, int size);

  @Query(value = "SELECT COUNT(*) "
          + "FROM roles "
          + "INNER JOIN users_roles ON users_roles.id_role=roles.id  "
          + "WHERE users_roles.id_user = ?1", nativeQuery = true)
  Long findSizeWithUsers(Long iduser);

  // GET ALL ROLES THAT ARE NOT PART OF A USER
  @Query(value = "SELECT roles.* "
          + "FROM roles "
          + "WHERE roles.id "
          + "NOT IN ("
          + "SELECT users_roles.id_role "
          + "FROM users_roles "
          + "WHERE users_roles.id_user = ?1) LIMIT ?2, ?3", nativeQuery = true)
  List<EntityRole> findRolesWithoutUsersPagination(Long idUser, int off, int size);

  @Query(value = "SELECT COUNT(*) "
          + "FROM roles "
          + "WHERE roles.id "
          + "NOT IN ("
          + "SELECT users_roles.id_role "
          + "FROM users_roles "
          + "WHERE users_roles.id_user = ?1)", nativeQuery = true)
  Long findSizeWithoutUsers(Long idUser);

}
