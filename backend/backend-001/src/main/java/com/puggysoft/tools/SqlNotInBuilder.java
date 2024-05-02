package com.puggysoft.tools;

/**
 * Tool class.
 */
public final class SqlNotInBuilder {

  /**
   * Constructor.
   */
  private SqlNotInBuilder() {
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
      String queryFilter,
      int page,
      int size
  ) {
    String query = "SELECT " + principalTableName + ".* FROM " + principalTableName + " WHERE "
        + principalTableName + "." + principalTablePrimaryKey
        + " NOT IN ( SELECT " + relationTableName + "." + relationForeignKey + " FROM " + relationTableName
        + " WHERE " + relationTableName + "." + relationForeignKeyCriteria + " = '" + criteria + "')";
    if (!queryFilter.equals("")) {
      // Delete last 'AND' key word.
      queryFilter = queryFilter.substring(0, queryFilter.length() - 4);
      query = query + " AND " + queryFilter;
    }
    int off = page * size;
    query = query + " LIMIT " + off + "," + size;
    return query;
  }

}
