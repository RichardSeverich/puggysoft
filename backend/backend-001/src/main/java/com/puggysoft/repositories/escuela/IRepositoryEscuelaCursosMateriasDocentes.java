package com.puggysoft.repositories.escuela;

import com.puggysoft.entities.escuela.EntityEscuelaCursosMateriasDocentes;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepositoryEscuelaCursosMateriasDocentes extends JpaRepository<EntityEscuelaCursosMateriasDocentes, Long> {

}
