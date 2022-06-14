package com.puggysoft.tools;

import com.puggysoft.models.EnumCompareOperator;

/** Tool class.*/
public final class SqlFilterBuilder {

  /** Constructor.*/
  private SqlFilterBuilder() {
  }

  /** build filter query method. */
  public static String getFilterQuery(String field, String filterCriteria, String operator) {
    String filterQuery = "";
    if (operator.equals(EnumCompareOperator.NONE) || filterCriteria==null || operator==null) {
      //filterQuery= field + " LIKE '%%' AND ";
      filterQuery="";
    } else if (operator.equals(EnumCompareOperator.TEXT_EQUALS)) {
      filterQuery= field + " = '" + filterCriteria + "' AND ";
    } else if (operator.equals(EnumCompareOperator.TEXT_CONTAINS)) {
      filterQuery= field + " LIKE '%" + filterCriteria + "%' AND ";
    } else if (operator.equals(EnumCompareOperator.TEXT_START_WITH)) {
      filterQuery= field + " LIKE '" + filterCriteria + "%' AND ";
    } else if (operator.equals(EnumCompareOperator.TEXT_END_WITH)) {
      filterQuery= field + " LIKE '%" + filterCriteria+"' AND ";
    } else if (operator.equals(EnumCompareOperator.DATE_BETWEEN)) {
      String[] startAndEndDates = filterCriteria.split(" ");
      filterQuery = field + " BETWEEN '"
          + startAndEndDates[0] + "' AND '"
          + startAndEndDates[1] + "' AND ";
    } else if (operator.equals(EnumCompareOperator.DATE_GREATER_EQUALS_THAN)) {
      filterQuery= field + " >= " + filterCriteria + " AND ";
    } else if (operator.equals(EnumCompareOperator.DATE_GREATER_THAN)) {
      filterQuery= field + " > " + filterCriteria + " AND ";
    } else if (operator.equals(EnumCompareOperator.DATE_SMALLER_EQUALS_THAN)) {
      filterQuery= field + " <= " + filterCriteria + " AND ";
    } else if (operator.equals(EnumCompareOperator.DATE_SMALLER_THAN)) {
      filterQuery= field + " < " + filterCriteria + " AND ";
    } else if (operator.equals(EnumCompareOperator.NUMBER_EQUALS)) {
      filterQuery= field + " = " + filterCriteria + " AND ";
    } else if (operator.equals(EnumCompareOperator.NUMBER_GREATER_EQUALS_THAN)) {
      filterQuery= field + " >= " + filterCriteria + " AND ";
    }  else if (operator.equals(EnumCompareOperator.NUMBER_GREATER_THAN)) {
      filterQuery= field + " > " + filterCriteria + " AND ";
    } else if (operator.equals(EnumCompareOperator.NUMBER_SMALLER_EQUALS_THAN)) {
      filterQuery= field + " <= " + filterCriteria + " AND ";
    } else if (operator.equals(EnumCompareOperator.NUMBER_SMALLER_THAN)) {
      filterQuery= field + " < " + filterCriteria + " AND ";
    } else {
      filterQuery="";
    }
   return filterQuery;
  }

}
