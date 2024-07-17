package xtime.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import xtime.com.core.Screen;

/**
 * Login screen.
 */
public class SymptomSurveyScreen extends Screen {


  /**
   * Constructor.
   */
  public SymptomSurveyScreen() {
    super();
  }

  // ******* ******* ******* Head ******* ******* *******
  @AndroidFindBy(xpath = "(//android.widget.TextView[@text=\"Symptom Survey\"])[1]")
  public MobileElement symptomSurveyTittleText;

  // ******* ******* ******* Body ******* ******* *******
  @AndroidFindBy(xpath = "(//android.widget.TextView[@text=\"Symptom Survey\"])[2]")
  public MobileElement symptomSurveySubTittleText;

}

