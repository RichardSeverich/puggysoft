package puggysoft.storage;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/** Class containing Data Interpreter.*/
public final class VariableInterpreter {

  private static final String SLASH = "/";
  private static final String AND = "&";
  private static final String REGEX_BRACKETS = "(?=\\[)(.*?)(?<=])";
  private static final String REGEX_BRACKETS_INSIDE = "(?<=\\[)(.*?)(?=])";

  /** Private constructor for the Data Builder utility class. */
  private VariableInterpreter() {}

  /**
   * This method return the value of a key stored in the Variables List.
   * Receives a String where the key and value are enclosed in brackets "[key.value]".
   *
   * @param textBrackets is the String parameter to process.
   * @return the key value.
   */
  private static String interpret(String textBrackets) {
    Pattern pattern = Pattern.compile(REGEX_BRACKETS_INSIDE);
    Matcher matcher = pattern.matcher(textBrackets);
    if (matcher.find()) {
      String[] keys = matcher.group(1).split("\\.");
      return keys.length > 1
        ? VariableList.findAttribute(keys[0], keys[1]).toString()
        : "";
    }
    return textBrackets;
  }

  /**
   * This method return a rebuilt message.
   * Replaces the key and value identifiers enclosed in brackets with the corresponding value.
   * E.g: "The name is [Project1.name]" -> "The name is Automated".
   *
   * @param textBrackets the original message parameter.
   * @return the rebuilt message.
   */
  public static String interpretText(String textBrackets) {
    return textBrackets.replaceAll(REGEX_BRACKETS, interpret(textBrackets));
  }

  /**
   * This method built a end point based in a string line parameter.
   * Replaces the key and value identifiers enclosed in brackets with the corresponding value.
   *
   * @param url the original string line parameter.
   * @param criteriaSplit criteria to split.
   * @return the built end point.
   */
  private static String interpretUrl(String url, String criteriaSplit) {
    String[] parts = url.split(criteriaSplit);
    for (int i = 0; i < parts.length; i++) {
      if (parts[i].contains(AND)) {
        parts[i] = interpretUrl(parts[i], AND);
      } else {
        parts[i] = interpretText(parts[i]);
      }
    }
    return String.join(criteriaSplit, parts);
  }

  /**
   * This method built a end point based in a string line parameter.
   * Replaces the key and value identifiers enclosed in brackets with the corresponding value.
   *
   * @param url the original string line parameter.
   * @return the built end point.
   */
  public static String interpretUrl(String url) {
    return interpretUrl(url, SLASH);
  }
}
