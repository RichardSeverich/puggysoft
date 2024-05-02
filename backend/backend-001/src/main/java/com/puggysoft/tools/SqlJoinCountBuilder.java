package com.puggysoft.tools;

/**
 * Tool class.
 */
public final class SqlJoinCountBuilder {

  /**
   * Constructor.
   */
  private SqlJoinCountBuilder() {
  }

  /**
   * build query method.
   */
  public static String getQuery(
      String principalTableName,
      String principalTablePrimaryKey,
      String relationTableName,
      String relationForeignKey,
      String relationForeignKeyCriteria,
      String criteria,
      String queryFilter
  ) {
    String query = "SELECT COUNT(*) FROM "
        + principalTableName + " INNER JOIN " + relationTableName + " ON "
        + relationTableName + "." + relationForeignKey + " = " + principalTableName + "." + principalTablePrimaryKey
        + " WHERE " + relationTableName + "." + relationForeignKeyCriteria + " = '" + criteria + "'";
    if (!queryFilter.equals("")) {
      // Delete last 'AND' key word.
      queryFilter = queryFilter.substring(0, queryFilter.length() - 4);
      query = query + " AND " + queryFilter;
    }
    return query;
  }

}
