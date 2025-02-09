package puggysoft.support;

/** Support class. */
public final class StringIsNumber {

  /** Private constructor.*/
  private StringIsNumber() {}

  /** Verify function.*/
  public static boolean verify(String str) {
    try {
      Integer.parseInt(str);
      return true;
    } catch (NumberFormatException e) {
      return false;
    }
  }
}
