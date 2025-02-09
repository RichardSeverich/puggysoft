package puggysoft.databases;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/** Class. */
public final class DbProperties {

  private static DbProperties instance;
  protected String dbUser;
  protected String dbPassword;
  protected String connectionString;
  protected String dbDriverPackage;
  private String dbHost;
  private String dbPort;
  private String dbName;
  private String dbDriver;

  /** Constructor.*/
  private DbProperties() {
    this.readProperties();
  }

  /** Singleton. */
  protected static DbProperties getInstance() {
    if (instance == null) {
      instance = new DbProperties();
    }
    return instance;
  }

  /** Method to read configuration file. */
  protected void readProperties() {
    try (InputStream input = new FileInputStream("config.app.properties")) {
      Properties prop = new Properties();
      prop.load(input);
      this.dbHost = prop.getProperty("db.host");
      this.dbPort = prop.getProperty("db.port");
      this.dbName = prop.getProperty("db.dbName");
      this.dbUser = prop.getProperty("db.dbUser");
      this.dbPassword = prop.getProperty("db.dbPassword");
      this.dbDriverPackage = prop.getProperty("db.driverPackage");
      this.dbDriver = prop.getProperty("db.driver");
      // Example: jdbc:postgresql://192.168.0.100:5432/puggysoft
      this.connectionString =
        this.dbDriver +
        "://" +
        this.dbHost +
        ":" +
        this.dbPort +
        "/" +
        this.dbName;
    } catch (IOException ex) {
      ex.printStackTrace();
      System.exit(0);
    }
  }
}
