package com.puggysoft.entities.mensualidad;

import com.puggysoft.dtos.mensualidad.DtoHistoryByCourse;
import com.puggysoft.dtos.mensualidad.DtoHistoryByStudentAndCourse;
import com.puggysoft.dtos.mensualidad.DtoTotalCuotasCurso;

import java.util.Date;

import javax.persistence.ColumnResult;
import javax.persistence.ConstructorResult;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.SqlResultSetMapping;
import javax.persistence.SqlResultSetMappings;

@Entity
@SqlResultSetMappings({
    @SqlResultSetMapping(
      name = "Mapping.HistoryByStudentAndCourse",
      classes = @ConstructorResult(
        targetClass = DtoHistoryByStudentAndCourse.class,
        columns = {
          @ColumnResult(name = "fee", type = String.class),
          @ColumnResult(name = "amount", type = Double.class),
          @ColumnResult(name = "creation_date", type = Date.class),
          @ColumnResult(name = "status", type = String.class),
          @ColumnResult(name = "sale_id", type = Long.class),
          @ColumnResult(name = "description", type = String.class)
        }
      )
    ),
    @SqlResultSetMapping(
      name = "Mapping.HistoryByCourse",
      classes = @ConstructorResult(
        targetClass = DtoHistoryByCourse.class,
        columns = {
          @ColumnResult(name = "ci", type = String.class),
          @ColumnResult(name = "paid_enrollment", type = Double.class),
          @ColumnResult(name = "paid_tuition", type = Double.class),
          @ColumnResult(name = "paid_other", type = Double.class),
          @ColumnResult(name = "debt_enrollment", type = Double.class),
          @ColumnResult(name = "debt_tuition", type = Double.class),
          @ColumnResult(name = "debt_other", type = Double.class)
        }
      )
    ),
    @SqlResultSetMapping(
      name = "Mapping.TotalCuotasCurso",
      classes = @ConstructorResult(
        targetClass = DtoTotalCuotasCurso.class,
        columns = {
          @ColumnResult(name = "total_enrollment", type = Double.class),
          @ColumnResult(name = "total_tuition", type = Double.class),
          @ColumnResult(name = "total_other", type = Double.class)
        }
      )
    )
})
public class EntityToMapping {

  @Id
  private Long dummyId; // Solo por requerimiento de JPA

}
