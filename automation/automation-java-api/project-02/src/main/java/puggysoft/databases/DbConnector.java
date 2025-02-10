package puggysoft.databases;

import java.sql.Connection;
import java.sql.DriverManager;

/** Class */
public final class DbConnector {

  private static DbConnector instance;
  private DbProperties dbProperties;
  private Connection connection;

  /** Method */
  private DbConnector() {
    this.dbProperties = DbProperties.getInstance();
  }

  /** Singleton */
  private static DbConnector getInstance() {
    if (instance == null) {
      instance = new DbConnector();
    }
    return instance;
  }

  /** Method */
  protected static Connection openConnection() {
    return getInstance().open();
  }

  /** Method */
  protected Connection open() {
    try {
      Class.forName(this.dbProperties.dbDriverPackage);
      this.connection =
        DriverManager.getConnection(
          this.dbProperties.connectionString,
          this.dbProperties.dbUser,
          this.dbProperties.dbPassword
        );
    } catch (Exception e) {
      e.printStackTrace();
      System.err.println(e.getClass().getName() + ": " + e.getMessage());
      System.exit(0);
    }
    return this.connection;
  }
}
