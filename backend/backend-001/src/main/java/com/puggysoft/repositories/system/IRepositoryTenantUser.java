package com.puggysoft.repositories.system;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.puggysoft.entities.system.EntityTenantUser;


@Repository
public interface IRepositoryTenantUser extends JpaRepository<EntityTenantUser, Long> {

  @Query(value = "SELECT COUNT(*) FROM tenants_users;", nativeQuery = true)
  Long findSize();

  @Query(value = "SELECT * FROM tenants_users LIMIT ?1, ?2", nativeQuery = true)
  List<EntityTenantUser> findProductsByPagination(int off, int size);

}