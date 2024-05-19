package com.puggysoft.tools.qa;

import com.puggysoft.dtos.qa.DtoQaTestCaseFilter;
import com.puggysoft.tools.SqlFilterBuilder;

/** Tool class. */
public final class SqlQaTestCaseFilterBuilderNative {

  /** Constructor. */
  private SqlQaTestCaseFilterBuilderNative() {
  }

  /** build filter query method. */
  public static String build(DtoQaTestCaseFilter dtoFilter) {
    /*String query = "";
    query = query + SqlFilterBuilder.getFilterQuery("qa_test_cases.id", dtoFilter.idCriteria,
            dtoFilter.idOperator);
    query = query + SqlFilterBuilder.getFilterQuery("qa_test_cases.title", dtoFilter.titleCriteria,
            dtoFilter.titleOperator);
    query = query + SqlFilterBuilder.getFilterQuery("qa_test_cases.description", dtoFilter.descriptionCriteria,
            dtoFilter.descriptionOperator);
    query = query + SqlFilterBuilder.getFilterQuery("qa_test_cases.priority", dtoFilter.priorityCriteria.toString(),
            dtoFilter.priorityOperator);
    query = query + SqlFilterBuilder.getFilterQuery("qa_test_cases.tenant ", dtoFilter.tenantCriteria,
            dtoFilter.tenantOperator);
    query = query + SqlFilterBuilder.getFilterQuery("qa_test_cases.created_by", dtoFilter.createdByCriteria,
            dtoFilter.createdByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("qa_test_cases.updated_by", dtoFilter.updatedByCriteria,
            dtoFilter.updatedByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("qa_test_cases.creation_date", dtoFilter.creationDateCriteria,
            dtoFilter.creationDateOperator);
    query = query + SqlFilterBuilder.getFilterQuery("qa_test_cases.update_date", dtoFilter.updateDateCriteria,
            dtoFilter.updateDateOperator);
    return query;*/
    StringBuilder query = new StringBuilder();
    return query
            .append(SqlFilterBuilder.getFilterQuery("qa_test_cases.id", dtoFilter.idCriteria,
            dtoFilter.idOperator))
            .append(SqlFilterBuilder.getFilterQuery("qa_test_cases.title", dtoFilter.titleCriteria,
                    dtoFilter.titleOperator))
            .append(SqlFilterBuilder.getFilterQuery("qa_test_cases.description", dtoFilter.descriptionCriteria,
                    dtoFilter.descriptionOperator))
            .append(SqlFilterBuilder.getFilterQuery("qa_test_cases.priority", dtoFilter.priorityCriteria.toString(),
                    dtoFilter.priorityOperator))
            .append(SqlFilterBuilder.getFilterQuery("qa_test_cases.tenant ", dtoFilter.tenantCriteria,
                    dtoFilter.tenantOperator))
            .append(SqlFilterBuilder.getFilterQuery("qa_test_cases.created_by", dtoFilter.createdByCriteria,
                    dtoFilter.createdByOperator))
            .append(SqlFilterBuilder.getFilterQuery("qa_test_cases.updated_by", dtoFilter.updatedByCriteria,
                    dtoFilter.updatedByOperator))
            .append(SqlFilterBuilder.getFilterQuery("qa_test_cases.creation_date", dtoFilter.creationDateCriteria,
                    dtoFilter.creationDateOperator))
            .append(SqlFilterBuilder.getFilterQuery("qa_test_cases.update_date", dtoFilter.updateDateCriteria,
                    dtoFilter.updateDateOperator))
            .toString();
  }
}
