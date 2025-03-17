package com.puggysoft.services.alcaldia;

import com.google.gson.Gson;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaActividades;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipales;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesVenta;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesVentaDetalle;
import com.puggysoft.entities.alcaldia.EntityAlcaldiaRecursosMunicipales;
import com.puggysoft.entities.alcaldia.EntityAlcaldiaRecursosMunicipalesVenta;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaRecursosMunicipalesVenta;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaRecursosMunicipalesVentaDetalle;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/**
 * Services for filter.
 */
@Service
public class ServiceAlcaldiaRecursosMunicipalesVentaPorActividades {

  @Autowired
  private IRepositoryAlcaldiaRecursosMunicipalesVentaDetalle repositoryAlcaldiaRecursosMunicipalesVentaDetalle;

  @Autowired
  private IRepositoryAlcaldiaRecursosMunicipalesVenta repositoryAlcaldiaRecursosMunicipalesVenta;

  @PersistenceContext
  private EntityManager entityManager;

  @Autowired
  private ServiceAlcaldiaActividadesGetById serviceActividadesGetById;

  @Autowired
  private ServiceAlcaldiaRecursosMunicipalesGetById serviceRecursosGetById;

  @Autowired
  private ServiceAlcaldiaRecursosMunicipalesEditById serviceRecursosEditById;

  @Autowired
  private ServiceAlcaldiaRecursosMunicipalesVentaGetById serviceVentaGetById;

  /**
   * method for filter.
   */
  @SuppressWarnings(value = "unchecked")
  public ResponseEntity<String> create(DtoAlcaldiaRecursosMunicipalesVentaDetalle dto) {
    ResponseEntity<DtoAlcaldiaActividades> actividadResponse = serviceActividadesGetById.getById(Long.parseLong(dto.getIdRecursoMunicipal()));
    DtoAlcaldiaRecursosMunicipales dtoTimbre = null;
    DtoAlcaldiaRecursosMunicipales dtoFolder = null;
    DtoAlcaldiaActividades dtoActividades = null;
    DtoAlcaldiaRecursosMunicipalesVenta dtoVenta = null;
    String newVentaNota = "";
    String newVentaNotaFolders = "";

    if (actividadResponse.getBody() != null) {
      dtoActividades = actividadResponse.getBody();
      if (dtoActividades.getIdTimbre() != null && !dtoActividades.getIdTimbre().isEmpty()) {
        ResponseEntity<DtoAlcaldiaRecursosMunicipales> recursoResponse = serviceRecursosGetById.getById(Long.parseLong(dtoActividades.getIdTimbre()));
        dtoTimbre = recursoResponse.getBody();
        int disponibles = Integer.parseInt(dtoTimbre.getTalonarioFinal()) - Integer.parseInt(dtoTimbre.getTalonarioMovimiento());

        //Verificando si hay timbres disponibles
        if (Integer.parseInt(dtoActividades.getCantidadTimbres()) > disponibles) {
          return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Timbres no disponibles");
        } else {
          int movimientoOld = Integer.parseInt(dtoTimbre.getTalonarioMovimiento());
          int newMovimiento = Integer.parseInt(dtoTimbre.getTalonarioMovimiento()) + Integer.parseInt(dtoActividades.getCantidadTimbres());
          dtoTimbre.setTalonarioMovimiento(String.valueOf(newMovimiento));
          serviceRecursosEditById.editById(dtoTimbre.getId(), dtoTimbre);
          // Get venta
          ResponseEntity<DtoAlcaldiaRecursosMunicipalesVenta> ventaResponse = serviceVentaGetById.getById(Long.parseLong(dto.getIdVenta()));
          dtoVenta = ventaResponse.getBody();
          newVentaNota = "${nombreRecurso}-Desde el timbre ${inicio}, Hasta el timbre ${final}";
          newVentaNota = newVentaNota.replace("${nombreRecurso}", dtoActividades.getName());
          newVentaNota = newVentaNota.replace("${inicio}", String.valueOf(movimientoOld + 1));
          newVentaNota = newVentaNota.replace("${final}", String.valueOf(newMovimiento));
          dtoVenta.setNota(newVentaNota);
        }
      }

      if (dtoActividades.getIdFolder() != null && !dtoActividades.getIdFolder().isEmpty()) {
        ResponseEntity<DtoAlcaldiaRecursosMunicipales> recursoResponse = serviceRecursosGetById.getById(Long.parseLong(dtoActividades.getIdFolder()));
        dtoFolder = recursoResponse.getBody();
        int disponibles = Integer.parseInt(dtoFolder.getTalonarioFinal()) - Integer.parseInt(dtoFolder.getTalonarioMovimiento());

        //Verificando si hay folders disponibles
        if (Integer.parseInt(dtoActividades.getCantidadFolders()) > disponibles) {
          return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Folders no disponibles");
        } else {
          int movimientoOld = Integer.parseInt(dtoFolder.getTalonarioMovimiento());
          int newMovimiento = Integer.parseInt(dtoFolder.getTalonarioMovimiento()) + Integer.parseInt(dtoActividades.getCantidadFolders());
          dtoFolder.setTalonarioMovimiento(String.valueOf(newMovimiento));
          serviceRecursosEditById.editById(dtoFolder.getId(), dtoFolder);
          // Get venta
          ResponseEntity<DtoAlcaldiaRecursosMunicipalesVenta> ventaResponse = serviceVentaGetById.getById(Long.parseLong(dto.getIdVenta()));
          dtoVenta = ventaResponse.getBody();
          newVentaNotaFolders = "${nombreRecurso}-Desde el folder ${inicio}, Hasta el folder ${final}";
          newVentaNotaFolders = newVentaNotaFolders.replace("${nombreRecurso}", dtoActividades.getName());
          newVentaNotaFolders = newVentaNotaFolders.replace("${inicio}", String.valueOf(movimientoOld + 1));
          newVentaNotaFolders = newVentaNotaFolders.replace("${final}", String.valueOf(newMovimiento));
          dtoVenta.setNota(newVentaNotaFolders);
        }
      }
    }

    String fullQuery = "SELECT alcaldia_recursos_municipales.* "
        + "FROM alcaldia_recursos_municipales "
        + "INNER JOIN alcaldia_recursos_municipales_actividades ON alcaldia_recursos_municipales.id=alcaldia_recursos_municipales_actividades.id_recurso_municipal "
        + "INNER JOIN alcaldia_actividades ON alcaldia_recursos_municipales_actividades.id_actividades=alcaldia_actividades.id "
        + "WHERE alcaldia_actividades.id = " + dto.getIdRecursoMunicipal();
    Query filterQuery = entityManager.createNativeQuery(fullQuery, EntityAlcaldiaRecursosMunicipales.class);
    String arrayString = "[]";
    try {
      Double precioTotal = 0.0;
      List<DtoAlcaldiaRecursosMunicipales> listDto = ((List<EntityAlcaldiaRecursosMunicipales>) filterQuery.getResultList())
          .stream()
          .map(DtoAlcaldiaRecursosMunicipales::entityToDto)
          .collect(Collectors.toList());

      if (dtoTimbre != null) {
        listDto.add(dtoTimbre);
      }
      if (dtoFolder != null) {
        listDto.add(dtoFolder);
      }
      Gson gson = new Gson();
      arrayString = gson.toJson(listDto);
      Optional<EntityAlcaldiaRecursosMunicipalesVenta> optionalEntity = repositoryAlcaldiaRecursosMunicipalesVenta
          .findById(Long.parseLong(dto.getIdVenta()));
      DtoAlcaldiaRecursosMunicipalesVenta dtoControl = DtoAlcaldiaRecursosMunicipalesVenta
          .entityToDto(optionalEntity.get());

      for (DtoAlcaldiaRecursosMunicipales producto : listDto) {
        DtoAlcaldiaRecursosMunicipalesVentaDetalle dtoCreate = new DtoAlcaldiaRecursosMunicipalesVentaDetalle();
        dtoCreate.setIdVenta(dto.getIdVenta());
        dtoCreate.setIdRecursoMunicipal(String.valueOf(producto.getId()));

        if (producto.getName().contains("TIMBRES")) {
          dtoCreate.setCantidad(dtoActividades.getCantidadTimbres());
          // Float newPrecio = Float.parseFloat(producto.getPrecio()) * Float.parseFloat(dtoCreate.getCantidad());
          Float newPrecio = Float.parseFloat(producto.getPrecio());
          dtoCreate.setPrecioUnidad(newPrecio.toString());
        }
        if (producto.getName().contains("FOLDERS")) {
          dtoCreate.setCantidad(dtoActividades.getCantidadFolders());
          // Float newPrecio = Float.parseFloat(producto.getPrecio()) * Float.parseFloat(dtoCreate.getCantidad());
          Float newPrecio = Float.parseFloat(producto.getPrecio());
          dtoCreate.setPrecioUnidad(newPrecio.toString());
        }
        if (!producto.getName().contains("TIMBRES") && !producto.getName().contains("FOLDERS")) {
          dtoCreate.setCantidad("1");
          dtoCreate.setPrecioUnidad(producto.getPrecio());
        }

        dtoCreate.setCreatedBy(dto.getCreatedBy());
        dtoCreate.setTenant(dto.getTenant());
        precioTotal = precioTotal + Float.parseFloat(producto.getPrecio()) * Float.parseFloat(dtoCreate.getCantidad());
        repositoryAlcaldiaRecursosMunicipalesVentaDetalle
            .save(dtoCreate.dtoToEntity());
        Double actual = Double.parseDouble(dtoControl.getVentaPrecioTotal());
        Double add = Double.parseDouble(producto.getPrecio());
        dtoControl.setVentaPrecioTotal(String.valueOf(actual + add));
      }
      dtoControl.setId(Long.parseLong(dto.getIdVenta()));
      repositoryAlcaldiaRecursosMunicipalesVenta.save(dtoControl.dtoToEntity());

      String result = "{\"precioTotal\": \"${precioTotal}\", \"arrayRecursos\": ${arrayString}, \"newVentaNota\": \"${newVentaNota}\","
          + "\"newVentaNotaFolders\": \"${newVentaNotaFolders}\"}";
      result = result.replace("${precioTotal}", precioTotal.toString());
      result = result.replace("${arrayString}", arrayString);
      result = result.replace("${newVentaNota}", newVentaNota);
      result = result.replace("${newVentaNotaFolders}", newVentaNotaFolders);

      return ResponseEntity.status(HttpStatus.CREATED).body(result);
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }

}