package puggysoft.storage;

import java.util.HashMap;
import java.util.Map;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class VariableInterpreterTest {

  @Before
  public void setUp() {
    Map<String, String> variableTributes = new HashMap<>();
    variableTributes.put("id", "1001");
    variableTributes.put("username", "jhon.doe");
    variableTributes.put("email", "jhon.doe@puggysoft.com");
    VariableList.addVariable("User1", variableTributes);
    Map<String, String> userTributes = new HashMap<>();
    userTributes.put("id", "1099");
    userTributes.put("username", "bart.simpson");
    userTributes.put("email", "bart.simpson@puggysoft.com");
    VariableList.addVariable("User2", userTributes);
  }

  @Test
  public void test1() {
    String id = VariableInterpreter.interpretText("[User1.id]");
    String username = VariableInterpreter.interpretText("[User1.username]");
    String email = VariableInterpreter.interpretText("[User1.email]");
    Assert.assertEquals("1001", id);
    Assert.assertEquals("jhon.doe", username);
    Assert.assertEquals("jhon.doe@puggysoft.com", email);
  }

  @Test
  public void test2() {
    String id = VariableInterpreter.interpretText("[User2.id]");
    String username = VariableInterpreter.interpretText("[User2.username]");
    String email = VariableInterpreter.interpretText("[User2.email]");
    Assert.assertEquals("1099", id);
    Assert.assertEquals("bart.simpson", username);
    Assert.assertEquals("bart.simpson@puggysoft.com", email);
  }

  @Test
  public void test3() {
    String urlBrackets = "/users?userId=[User1.id]";
    String urlInterpreted = VariableInterpreter.interpretUrl(urlBrackets);
    Assert.assertEquals("/users?userId=1001", urlInterpreted);
  }

  @Test
  public void test4() {
    String urlBrackets = "/users/[User1.id]";
    String urlInterpreted = VariableInterpreter.interpretUrl(urlBrackets);
    Assert.assertEquals("/users/1001", urlInterpreted);
  }

  @Test
  public void test5() {
    String urlBrackets = "/users/[User1.id]/[User2.id]";
    String urlInterpreted = VariableInterpreter.interpretUrl(urlBrackets);
    Assert.assertEquals("/users/1001/1099", urlInterpreted);
  }

  @Test
  public void test6() {
    String urlBrackets = "/users?userId=[User1.id]&username=[User1.username]";
    String urlInterpreted = VariableInterpreter.interpretUrl(urlBrackets);
    Assert.assertEquals("/users?userId=1001&username=jhon.doe", urlInterpreted);
  }

  @Test
  public void test7() {
    String urlBrackets =
      "/users?employee=[User1.username]&manager=[User2.username]";
    String urlInterpreted = VariableInterpreter.interpretUrl(urlBrackets);
    Assert.assertEquals(
      "/users?employee=jhon.doe&manager=bart.simpson",
      urlInterpreted
    );
  }

  @Test
  public void test8() {
    String urlBrackets =
      "/mananger/[User1.id]/[User2.id]/users?employee=[User1.username]&manager=[User2.username]";
    String urlInterpreted = VariableInterpreter.interpretUrl(urlBrackets);
    Assert.assertEquals(
      "/mananger/1001/1099/users?employee=jhon.doe&manager=bart.simpson",
      urlInterpreted
    );
  }

  @Test
  public void test9() {
    String somevalue = VariableInterpreter.interpretText("somevalue");
    Assert.assertEquals("somevalue", somevalue);
  }
}
