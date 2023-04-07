package com.puggysoft.tools;

import com.puggysoft.models.EnumCompareOperator;

/** Tool class.*/
public final class SqlFilterBuilderBoolean {

  /** Constructor.*/
  private SqlFilterBuilderBoolean() {
  }

  /** build filter query method. */
  public static String getFilterQuery(String field, Boolean filterCriteria, EnumCompareOperator operator) {
    String filterQuery = "";
    if (operator == EnumCompareOperator.NONE
        || filterCriteria == null
        || operator == null
        ) {
      //filterQuery= field + " LIKE '%%' AND ";
      filterQuery = "";
    } else if (operator == EnumCompareOperator.BOOLEAN_EQUALS) {
      filterQuery = field + " = " + filterCriteria + " AND ";
    } else {
      filterQuery = "";
    }
    return filterQuery;
  }

}
