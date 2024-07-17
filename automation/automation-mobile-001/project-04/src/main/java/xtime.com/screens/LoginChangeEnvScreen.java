package xtime.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import xtime.com.core.Screen;

public class LoginChangeEnvScreen extends Screen {

  public LoginChangeEnvScreen() {
    super();
  }

  // ******* ******* ******* SET CODE ******* ******* *******
  @AndroidFindBy(xpath = "//android.widget.EditText[@content-desc=\"pinCode-input-0\"]")
  public MobileElement pinCodeInput1;

  @AndroidFindBy(xpath = "//android.widget.EditText[@content-desc=\"pinCode-input-1\"]")
  public MobileElement pinCodeInput2;

  @AndroidFindBy(xpath = "//android.widget.EditText[@content-desc=\"pinCode-input-2\"]")
  public MobileElement pinCodeInput3;

  @AndroidFindBy(xpath = "//android.widget.EditText[@content-desc=\"pinCode-input-3\"]")
  public MobileElement pinCodeInput4;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Back\"]")
  public MobileElement backButton;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Select Environment\"]")
  public MobileElement selectEnvironmentText;

  @AndroidFindBy(xpath = "//android.widget.EditText[@text=\"Please enter an environment and click Done or Choose an environment from the list below\"]")
  public MobileElement selectEnvironmentInput;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Done\"]")
  public MobileElement doneButton;

  @AndroidFindBy(xpath = "//android.widget.TextView[@resource-id=\"envText\"]")
  public MobileElement envText;
}
