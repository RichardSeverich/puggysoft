package com.puggysoft.tools;

import com.puggysoft.models.EnumCompareOperator;

/** Tool class.*/
public final class SqlFilterBuilder {

  /** Constructor.*/
  private SqlFilterBuilder() {
  }

  /** build filter query method. */
  public static String getFilterQuery(String field, String filterCriteria, EnumCompareOperator operator) {
    String filterQuery = "";
    if (operator == EnumCompareOperator.NONE
        || filterCriteria == null
        || operator == null
        || filterCriteria == ""
        ) {
      //filterQuery= field + " LIKE '%%' AND ";
      filterQuery = "";
    } else if (operator == EnumCompareOperator.TEXT_EQUALS) {
      filterQuery = field + " = '" + filterCriteria + "' AND ";
    } else if (operator == EnumCompareOperator.TEXT_CONTAINS) {
      filterQuery = field + " LIKE '%" + filterCriteria + "%' AND ";
    } else if (operator == EnumCompareOperator.TEXT_START_WITH) {
      filterQuery = field + " LIKE '" + filterCriteria + "%' AND ";
    } else if (operator == EnumCompareOperator.TEXT_END_WITH) {
      filterQuery = field + " LIKE '%" + filterCriteria + "' AND ";
    } else if (operator == EnumCompareOperator.DATE_BETWEEN) {
      String[] startAndEndDates = filterCriteria.split(" ");
      filterQuery = field + " BETWEEN '"
          + startAndEndDates[0] + "' AND '"
          + startAndEndDates[1] + "' AND ";
    } else if (operator == EnumCompareOperator.DATE_EQUALS) {
      filterQuery = field + " = '" + filterCriteria + "' AND ";
    } else if (operator == EnumCompareOperator.DATE_GREATER_EQUALS_THAN) {
      filterQuery = field + " >= '" + filterCriteria + "' AND ";
    } else if (operator == EnumCompareOperator.DATE_GREATER_THAN) {
      filterQuery = field + " > '" + filterCriteria + "' AND ";
    } else if (operator == EnumCompareOperator.DATE_SMALLER_EQUALS_THAN) {
      filterQuery = field + " <= '" + filterCriteria + "' AND ";
    } else if (operator == EnumCompareOperator.DATE_SMALLER_THAN) {
      filterQuery = field + " < '" + filterCriteria + "' AND ";
    } else if (operator == EnumCompareOperator.NUMBER_EQUALS) {
      filterQuery = field + " = " + filterCriteria + " AND ";
    } else if (operator == EnumCompareOperator.NUMBER_GREATER_EQUALS_THAN) {
      filterQuery = field + " >= " + filterCriteria + " AND ";
    }  else if (operator == EnumCompareOperator.NUMBER_GREATER_THAN) {
      filterQuery = field + " > " + filterCriteria + " AND ";
    } else if (operator == EnumCompareOperator.NUMBER_SMALLER_EQUALS_THAN) {
      filterQuery = field + " <= " + filterCriteria + " AND ";
    } else if (operator == EnumCompareOperator.NUMBER_SMALLER_THAN) {
      filterQuery = field + " < " + filterCriteria + " AND ";
    } else {
      filterQuery = "";
    }
    return filterQuery;
  }

}
