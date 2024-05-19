package com.puggysoft.tools.qa;

import com.puggysoft.dtos.qa.DtoQaTagFilter;
import com.puggysoft.tools.SqlFilterBuilder;

/** Tool class. */
public final class SqlQaTagFilterBuilderNative {

  /** Constructor. */
  private SqlQaTagFilterBuilderNative() {
  }

  /** build filter query method. */
  public static String build(DtoQaTagFilter dtoFilter) {
    StringBuilder query = new StringBuilder();
    return query
            .append(SqlFilterBuilder.getFilterQuery("qa_tags.id", dtoFilter.idCriteria,
            dtoFilter.idOperator))
            .append(SqlFilterBuilder.getFilterQuery("qa_tags.name", dtoFilter.nameCriteria,
                    dtoFilter.nameOperator))
            .append(SqlFilterBuilder.getFilterQuery("qa_tags.tenant ", dtoFilter.tenantCriteria,
                    dtoFilter.tenantOperator))
            .append(SqlFilterBuilder.getFilterQuery("qa_tags.created_by", dtoFilter.createdByCriteria,
                    dtoFilter.createdByOperator))
            .append(SqlFilterBuilder.getFilterQuery("qa_tags.updated_by", dtoFilter.updatedByCriteria,
                    dtoFilter.updatedByOperator))
            .append(SqlFilterBuilder.getFilterQuery("qa_tags.creation_date", dtoFilter.creationDateCriteria,
                    dtoFilter.creationDateOperator))
            .append(SqlFilterBuilder.getFilterQuery("qa_tags.update_date", dtoFilter.updateDateCriteria,
                    dtoFilter.updateDateOperator))
            .toString();
  }
}
