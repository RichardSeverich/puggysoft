package puggysoft.databases;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.List;
import java.util.ArrayList;

/** Class */
public final class DbManager {

  /**  Method to INSERT, UPDATE and DELETE. */
  public static void executeQuery(String sql) {
    Connection connection = DbConnector.openConnection();
    try {
      connection.setAutoCommit(false);
      Statement statement = null;
      statement = connection.createStatement();
      statement.executeUpdate(sql);
      statement.close();
      connection.commit();
      connection.close();
    } catch (Exception e) {
      System.err.println(e.getClass().getName() + ": " + e.getMessage());
    }
  }

  /**  Method to SELECT. */
  public static List<Object> executeSelectQuery(String sql) {
    Connection connection = DbConnector.openConnection();
    List<Object> data = new ArrayList<>();
    try {
      connection.setAutoCommit(false);
      Statement statement = null;
      statement = connection.createStatement();
      ResultSet resultSet = statement.executeQuery(sql);
      while (resultSet.next()) {
        data.add(resultSet.getObject(1));
      }
      resultSet.close();
      statement.close();
      connection.close();
    } catch (Exception e) {
      System.err.println(e.getClass().getName() + ": " + e.getMessage());
    }
    return data;
  }
}
