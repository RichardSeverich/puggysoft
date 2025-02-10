package puggysoft.login;

import static io.restassured.RestAssured.given;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import java.util.HashMap;
import java.util.Map;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import puggysoft.Env;

public class LoginTest {

  @BeforeAll
  public static void setup() {
    RestAssured.baseURI = Env.urlBase;
  }

  @Test
  public void loginTest1() {
    Map<String, String> body = new HashMap<>();
    body.put("username", "admin");
    body.put("password", "admin123");
    Response response = given()
      .contentType(ContentType.JSON)
      .body(body)
      .when()
      .post("/login");
    Assertions.assertEquals(200, response.statusCode());
    Assertions.assertTrue(
      response.jsonPath().get("token").toString().contains("Bearer")
    );
  }

  @Test
  public void loginTest2() {
    Map<String, String> body = new HashMap<>();
    body.put("username", "jhon.doe");
    body.put("password", "admin123");
    Response response = given()
      .contentType(ContentType.JSON)
      .body(body)
      .when()
      .post("/login");
    Assertions.assertEquals(404, response.statusCode());
  }

  @Test
  public void loginTest3() {
    Map<String, String> body = new HashMap<>();
    body.put("username", "");
    body.put("password", "");
    Response response = given()
      .contentType(ContentType.JSON)
      .body(body)
      .when()
      .post("/login");
    Assertions.assertEquals(400, response.statusCode());
    Assertions.assertEquals("Bad Request", response.jsonPath().get("error"));
    Assertions.assertEquals(
      "Validation failed for object='dtoUserAuth'. Error count: 2",
      response.jsonPath().get("message")
    );
    Assertions.assertEquals(
      "size must be between 3 and 30",
      response.jsonPath().get("errors[0].defaultMessage")
    );
    Assertions.assertEquals(
      "dtoUserAuth",
      response.jsonPath().get("errors[0].objectName")
    );
    Assertions.assertEquals(
      "size must be between 3 and 30",
      response.jsonPath().get("errors[1].defaultMessage")
    );
    Assertions.assertEquals(
      "dtoUserAuth",
      response.jsonPath().get("errors[1].objectName")
    );
  }

  @Test
  public void loginTest4() {
    Response response = given()
      .contentType(ContentType.JSON)
      .when()
      .post("/login");
    Assertions.assertEquals(400, response.statusCode());
  }

  @Test
  public void loginTest5() {
    Map<String, String> body = new HashMap<>();
    Response response = given()
      .contentType(ContentType.JSON)
      .when()
      .body(body)
      .post("/login");
    Assertions.assertEquals(400, response.statusCode());
  }
}
