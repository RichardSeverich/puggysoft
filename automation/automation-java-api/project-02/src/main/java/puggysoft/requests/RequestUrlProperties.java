package puggysoft.requests;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/** Class. */
public final class RequestUrlProperties {

  private static RequestUrlProperties instance;
  private String host;
  private String port;
  private String protocol;
  private String version;
  private String urlBase;

  /** Constructor. */
  private RequestUrlProperties() {
    this.readProperties();
  }

  /** get singleton . */
  private static RequestUrlProperties getInstance() {
    if (instance == null) {
      instance = new RequestUrlProperties();
    }
    return instance;
  }

  /** get urlBase . */
  public static String getUrlBase() {
    return getInstance().urlBase;
  }

  /** Method to read configuration file.*/
  private void readProperties() {
    try (InputStream input = new FileInputStream("config.app.properties")) {
      Properties prop = new Properties();
      prop.load(input);
      this.protocol = prop.getProperty("app.protocol");
      this.host = prop.getProperty("app.host");
      this.port = prop.getProperty("app.port");
      this.version = prop.getProperty("app.version");
      this.urlBase =
        this.protocol + "://" + this.host + ":" + this.port + this.version;
    } catch (IOException ex) {
      ex.printStackTrace();
      System.exit(0);
    }
  }
}
