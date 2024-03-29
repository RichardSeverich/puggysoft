package com.puggysoft.repositories.system;

import com.puggysoft.entities.system.EntityTenant;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;



@Repository
public interface IRepositoryTenant extends JpaRepository<EntityTenant, Long> {

  @Query(value = "SELECT COUNT(*) FROM tenants;", nativeQuery = true)
  Long findSize();

  @Query(value = "SELECT * FROM tenants LIMIT ?1, ?2", nativeQuery = true)
  List<EntityTenant> findTenantsByPagination(int off, int size);

  @Query(value = "SELECT * FROM tenants "
      + "INNER JOIN tenants_users ON tenants_users.tenant=tenants.short_name "
      + "WHERE tenants_users.username = ?1 AND tenants.status = 'ACTIVE'", nativeQuery = true)
  List<EntityTenant> getTenantsByUsername(String username);

  // GET ALL TENANTS THAT ARE PART OF A USER
  @Query(value = "SELECT tenants.* "
          + "FROM tenants "
          + "INNER JOIN tenants_users ON tenants_users.tenant=tenants.short_name  "
          + "WHERE tenants_users.username = :username LIMIT :off, :size", nativeQuery = true)
  List<EntityTenant> findTenantsWithUsersPagination(@Param("username") String username, @Param("off") int off, @Param("size") int size);

  @Query(value = "SELECT COUNT(*) "
          + "FROM tenants "
          + "INNER JOIN tenants_users ON tenants_users.tenant=tenants.short_name  "
          + "WHERE tenants_users.username = :username", nativeQuery = true)
  Long findSizeWithUsers(@Param("username") String username);

  // GET ALL TENANTS THAT ARE NOT PART OF A USER
  @Query(value = "SELECT tenants.* "
          + "FROM tenants "
          + "WHERE tenants.short_name "
          + "NOT IN ("
          + "SELECT tenants_users.tenant "
          + "FROM tenants_users "
          + "WHERE tenants_users.username = :username) LIMIT :off, :size", nativeQuery = true)
  List<EntityTenant> findTenantsWithoutUsersPagination(@Param("username") String username, @Param("off") int off, @Param("size") int size);

  @Query(value = "SELECT COUNT(*) "
          + "FROM tenants "
          + "WHERE tenants.short_name "
          + "NOT IN ("
          + "SELECT tenants_users.tenant "
          + "FROM tenants_users "
          + "WHERE tenants_users.username = :username)", nativeQuery = true)
  Long findSizeWithoutUsers(@Param("username") String username);

  // GET ALL TENANTS THAT ARE PART OF A ROLE
  @Query(value = "SELECT tenants.* "
          + "FROM tenants "
          + "INNER JOIN tenants_roles ON tenants_roles.tenant=tenants.short_name  "
          + "WHERE tenants_roles.role = :role LIMIT :off, :size", nativeQuery = true)
  List<EntityTenant> findTenantsWithRolesPagination(@Param("role") String role, @Param("off") int off, @Param("size") int size);

  @Query(value = "SELECT COUNT(*) "
          + "FROM tenants "
          + "INNER JOIN tenants_roles ON tenants_roles.tenant=tenants.short_name  "
          + "WHERE tenants_roles.role = :role", nativeQuery = true)
  Long findSizeWithRoles(@Param("role") String role);

  // GET ALL TENANTS THAT ARE NOT PART OF A ROLE
  @Query(value = "SELECT tenants.* "
          + "FROM tenants "
          + "WHERE tenants.short_name "
          + "NOT IN ("
          + "SELECT tenants_roles.tenant "
          + "FROM tenants_roles "
          + "WHERE tenants_roles.role = :role) LIMIT :off, :size", nativeQuery = true)
  List<EntityTenant> findTenantsWithoutRolesPagination(@Param("role") String role, @Param("off") int off, @Param("size") int size);

  @Query(value = "SELECT COUNT(*) "
          + "FROM tenants "
          + "WHERE tenants.short_name "
          + "NOT IN ("
          + "SELECT tenants_roles.tenant "
          + "FROM tenants_roles "
          + "WHERE tenants_roles.role = :role)", nativeQuery = true)
  Long findSizeWithoutRoles(@Param("role") String role);

}