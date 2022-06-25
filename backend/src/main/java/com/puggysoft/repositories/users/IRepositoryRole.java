package com.puggysoft.repositories.users;

import com.puggysoft.entities.users.EntityRole;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface IRepositoryRole extends JpaRepository<EntityRole, Long> {

  @Query(value = "SELECT COUNT(*) FROM roles;", nativeQuery = true)
  Long findSize();

  @Query(value = "SELECT roles.* "
          + "FROM roles "
          + "INNER JOIN users_roles ON users_roles.id_role=roles.id  "
          + "WHERE users_roles.id_user = ?1", nativeQuery = true)
  List<EntityRole> findRolesByUserId(Long iduser);

  @Query(value = "SELECT r.* "
          + "FROM roles r "
          + "JOIN users_roles ur ON ur.id_role = r.id  "
          + "JOIN users u ON ur.id_user = u.id  "
          + "WHERE u.username = :username", nativeQuery = true)
  List<EntityRole> findRolesByUsername(@Param("username") String username);

}
