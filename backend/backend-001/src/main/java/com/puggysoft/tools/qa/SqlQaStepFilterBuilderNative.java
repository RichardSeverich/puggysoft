package com.puggysoft.tools.qa;

import com.puggysoft.dtos.qa.DtoQaStepFilter;
import com.puggysoft.tools.SqlFilterBuilder;

/** Tool class. */
public final class SqlQaStepFilterBuilderNative {

  /** Constructor. */
  private SqlQaStepFilterBuilderNative() {
  }

  /** build filter query method. */
  public static String build(DtoQaStepFilter dtoFilter) {
    StringBuilder query = new StringBuilder();
    return query
            .append(SqlFilterBuilder.getFilterQuery("qa_steps.id", dtoFilter.idCriteria,
            dtoFilter.idOperator))
            .append(SqlFilterBuilder.getFilterQuery("qa_steps.title", dtoFilter.titleCriteria,
                    dtoFilter.titleOperator))
            .append(SqlFilterBuilder.getFilterQuery("qa_steps.description", dtoFilter.descriptionCriteria,
                    dtoFilter.descriptionOperator))
            .append(SqlFilterBuilder.getFilterQuery("qa_steps.expected_result", dtoFilter.expectedResultCriteria,
                    dtoFilter.expectedResultOperator))
            .append(SqlFilterBuilder.getFilterQuery("qa_steps.tenant ", dtoFilter.tenantCriteria,
                    dtoFilter.tenantOperator))
            .append(SqlFilterBuilder.getFilterQuery("qa_steps.created_by", dtoFilter.createdByCriteria,
                    dtoFilter.createdByOperator))
            .append(SqlFilterBuilder.getFilterQuery("qa_steps.updated_by", dtoFilter.updatedByCriteria,
                    dtoFilter.updatedByOperator))
            .append(SqlFilterBuilder.getFilterQuery("qa_steps.creation_date", dtoFilter.creationDateCriteria,
                    dtoFilter.creationDateOperator))
            .append(SqlFilterBuilder.getFilterQuery("qa_steps.update_date", dtoFilter.updateDateCriteria,
                    dtoFilter.updateDateOperator))
            .toString();
  }
}
