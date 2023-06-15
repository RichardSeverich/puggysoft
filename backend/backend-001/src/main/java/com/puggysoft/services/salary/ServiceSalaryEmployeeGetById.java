package com.puggysoft.services.salary;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.puggysoft.dtos.salary.DtoSalaryEmployee;
import com.puggysoft.entities.salary.EntitySalaryEmployee;
import com.puggysoft.repositories.salary.IRepositorySalaryEmployee;

@Service
public class ServiceSalaryEmployeeGetById {

    @Autowired
    private IRepositorySalaryEmployee repositorySalaryEmployee;

    /** method for retrive. */
    public ResponseEntity<DtoSalaryEmployee> getById(Long id) {
        Optional<EntitySalaryEmployee> optionalEntity = repositorySalaryEmployee.findById(id);
        if (optionalEntity.isPresent()) {
        DtoSalaryEmployee dtoProduct = DtoSalaryEmployee.entityToDto(optionalEntity.get());
        return ResponseEntity.status(HttpStatus.OK).body(dtoProduct);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }
}
