package com.puggysoft.repositories.users;

import com.puggysoft.entities.users.EntityUserRole;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


@Repository
public interface IRepositoryUserRole extends JpaRepository<EntityUserRole, Long> {

  @Modifying
  @Transactional
  @Query(value = "DELETE FROM users_roles WHERE id_user = ?1 AND id_role = ?2", nativeQuery = true)
  void deleteUserRoleByIds(Long idUser, Long idRole);

  @Query(value = "SELECT * FROM users_roles WHERE id_user = ?1 AND id_role = ?2", nativeQuery = true)
  List<EntityUserRole> findByIds(Long idUser, Long idRole);

}
