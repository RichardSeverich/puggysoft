package puggysoft.storage;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Class containing VariableList.
 */
public final class VariableList {

  private static List<Variable> variablesList = new ArrayList<>();

  /** Private constructor for the variable utility class. */
  private VariableList() {}

  /**
   * his method add a new variable to the list.
   *
   * @param variable is the Variable object.
   */
  private static void addVariable(Variable variable) {
    variablesList.add(variable);
  }

  /**
   * This method add a new variable to the list.
   *
   * @param name     is the name of the variable.
   * @param attributesMap is the response body.
   */
  public static void addVariable(String name, Map<String, ?> attributesMap) {
    addVariable(new Variable(name, attributesMap));
  }

  /**
   * This method find an attribute value for a specific variable name.
   *
   * @param variableName is the variable name.
   * @param attribute    is the specified attribute.
   * @return the string representation of the attribute.
   */
  public static String findAttribute(String variableName, String attribute) {
    return variablesList
      .stream()
      .filter(variableItem ->
        variableName.equalsIgnoreCase(variableItem.getName())
      )
      .findFirst()
      .orElseThrow(() ->
        new NullPointerException(variableName + " Variable doesn't exist")
      )
      .getAttributeValue(attribute);
  }

  /** This method clean the list. */
  public static void cleanList() {
    variablesList.clear();
  }

  /**
   * This method return the list.
   * @return the variable list.
   */
  public static List<Variable> getList() {
    return variablesList;
  }
}
