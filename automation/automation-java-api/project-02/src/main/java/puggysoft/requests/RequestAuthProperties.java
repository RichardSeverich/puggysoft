package puggysoft.requests;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/** Class. */
public final class RequestAuthProperties {

  private static RequestAuthProperties instance;
  private String username;
  private String password;
  private String authEndpoint;

  /** Constructor. */
  private RequestAuthProperties() {
    this.readProperties();
  }

  /** get singleton . */
  private static RequestAuthProperties getInstance() {
    if (instance == null) {
      instance = new RequestAuthProperties();
    }
    return instance;
  }

  /** get username . */
  protected static String getUsername() {
    return getInstance().username;
  }

  /** get password . */
  protected static String getPassword() {
    return getInstance().password;
  }

  /** get password . */
  protected static String getAuthEndpoint() {
    return getInstance().authEndpoint;
  }

  /** Method to read configuration file.*/
  private void readProperties() {
    try (InputStream input = new FileInputStream("config.app.properties")) {
      Properties prop = new Properties();
      prop.load(input);
      this.username = prop.getProperty("app.username");
      this.password = prop.getProperty("app.password");
      this.authEndpoint = prop.getProperty("app.authEndpoint");
    } catch (IOException ex) {
      ex.printStackTrace();
      System.exit(0);
    }
  }
}
