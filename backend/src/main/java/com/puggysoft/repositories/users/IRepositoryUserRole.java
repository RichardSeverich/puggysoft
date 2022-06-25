package com.puggysoft.repositories.users;

import com.puggysoft.entities.users.EntityUserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IRepositoryUserRole extends JpaRepository<EntityUserRole, Long> {

}
