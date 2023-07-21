package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoUrbanismoFlujoRequisitos;
import com.puggysoft.dtos.alcaldia.DtoUrbanismoTramiteFlujo;
import com.puggysoft.dtos.alcaldia.DtoUrbanismoTramiteRequisitos;
import com.puggysoft.entities.alcaldia.EntityUrbanismoFlujoRequisitos;
import com.puggysoft.entities.alcaldia.EntityUrbanismoTramiteFlujo;
import com.puggysoft.repositories.alcaldia.IRepositoryUrbanismoFlujoRequisitos;
import com.puggysoft.repositories.alcaldia.IRepositoryUrbanismoTramiteFlujo;
import com.puggysoft.repositories.alcaldia.IRepositoryUrbanismoTramiteRequisitos;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for create. */
@Service
public class ServiceUrbanismoTramiteFlujoCreate {

  @Autowired
  private IRepositoryUrbanismoFlujoRequisitos repositoryUrbanismoFlujoRequisitos;

  @Autowired
  private IRepositoryUrbanismoTramiteFlujo repositoryUrbanismoTramiteFlujo;

  @Autowired
  private IRepositoryUrbanismoTramiteRequisitos repositoryUrbanismoTramiteRequisitos;

  /** method for create. */
  public ResponseEntity<String> create(DtoUrbanismoTramiteFlujo dtoUrbanismoTramiteFlujo) {
    try {
      EntityUrbanismoTramiteFlujo entity = repositoryUrbanismoTramiteFlujo
          .save(dtoUrbanismoTramiteFlujo.dtoToEntity());
      DtoUrbanismoTramiteFlujo dto = DtoUrbanismoTramiteFlujo.entityToDto(entity);

      List<DtoUrbanismoTramiteRequisitos> listEntitiesTramiteRequisitos;
      listEntitiesTramiteRequisitos = repositoryUrbanismoTramiteRequisitos
        .findUrbanismoTramiteRequisitosByTramite(dto.getTramiteNombreCorto())
        .stream()
        .map(DtoUrbanismoTramiteRequisitos::entityToDto)
        .collect(Collectors.toList());
      
      for (DtoUrbanismoTramiteRequisitos tramite : listEntitiesTramiteRequisitos) {
        EntityUrbanismoFlujoRequisitos entityUrbanismoFlujoRequisitos = new EntityUrbanismoFlujoRequisitos();
        entityUrbanismoFlujoRequisitos.setIdTramiteFlujo(String.valueOf(dto.getId()));
        entityUrbanismoFlujoRequisitos.setRequisitoNombreCorto(tramite.getRequisitoNombreCorto());
        entityUrbanismoFlujoRequisitos.setEstado("INCUMPLIDO");
        entityUrbanismoFlujoRequisitos.setCreatedBy(dto.getCreatedBy());
        entityUrbanismoFlujoRequisitos.setTenant(dto.getTenant());
        repositoryUrbanismoFlujoRequisitos
          .save(entityUrbanismoFlujoRequisitos);
      }

      String idString = String.valueOf(dto.getId());
      return ResponseEntity.status(HttpStatus.CREATED).body(idString);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}
