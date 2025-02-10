package xtime.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import xtime.com.core.Screen;

/**
 * Login screen.
 */
public class ReleaseNotesScreen extends Screen {


  /**
   * Constructor.
   */
  public ReleaseNotesScreen() {
    super();
  }

  // Head
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Release Notes\"]")
  public MobileElement releaseNotesTittleText;

  // Right body
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Version History\"]")
  public MobileElement versionHistoryText;

}

