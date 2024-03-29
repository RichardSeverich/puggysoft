package puggysoft.storage;

import java.util.Map;

/**
 * Class containing Variable.
 */
public class Variable {

  private static final String RESPONSE_TYPE = "kind";
  private String variableName;
  private Map<String, ?> attributesMap;

  /**
   * Constructor for the Variable class.
   *
   * @param variableName  is the name of the variable.
   * @param attributesMap is the attributes map that contains keys and values.
   */
  public Variable(String variableName, Map<String, ?> attributesMap) {
    this.variableName = variableName;
    this.attributesMap = attributesMap;
  }

  /**
   * This method return the name of the Value.
   *
   * @return the name of the variable.
   */
  public String getName() {
    return variableName;
  }

  /**
   * This method return the type of response.
   *
   * @return the type string value.
   */
  public String getType() {
    return attributesMap.get(RESPONSE_TYPE).toString();
  }

  /**
   * This method return a attribute value of a specified key.
   *
   * @param attribute is the key identifier.
   * @return the string value representation.
   */
  public String getAttributeValue(String attribute) {
    return attributesMap.get(attribute).toString();
  }
}
