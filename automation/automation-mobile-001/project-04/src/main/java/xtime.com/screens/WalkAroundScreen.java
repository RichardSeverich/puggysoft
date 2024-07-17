package xtime.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import xtime.com.core.Screen;

/**
 * Login screen.
 */
public class WalkAroundScreen extends Screen {


  /**
   * Constructor.
   */
  public WalkAroundScreen() {
    super();
  }

  // ******* ******* ******* Head ******* ******* *******
  @AndroidFindBy(xpath = "//android.widget.TextView[@content-desc=\"walkaround-title\"]")
  public MobileElement walkAroundTittleText;

  // ******* ******* ******* Body ******* ******* *******
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"VRC\"]")
  public MobileElement vRCButton;

  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"mark-as-no-damage\"]")
  public MobileElement marcAsNoDamageButton;

  //android.view.View/android.widget.TextView
  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"drawingComponent\"]/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View")
  public MobileElement carDrawingImage;

  // ******* ******* ******* Inspection options ******* ******* *******
  @AndroidFindBy(xpath = "//android.widget.TextView[@content-desc=\"inspectionTitle-12410\"]")
  public MobileElement bodyDamageOption;

  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"dropDown-12410\"]")
  public MobileElement bodyDamageSelectConditionDropdown;

  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"toggle-now-repair-label-12410\"]")
  public MobileElement bodyDamageNowButton;

  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"toggle-later-repair-label-12410\"]")
  public MobileElement bodyDamageLaterButton;

  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"toggle-never-repair-label-12410\"]")
  public MobileElement bodyDamageNeverButton;

  @AndroidFindBy(xpath = "//android.widget.TextView[@content-desc=\"inspectionTitle-14143\"]")
  public MobileElement conditionsAffectingAllTiresOption;

  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"toggle-good-14143\"]")
  public MobileElement conditionsAffectingAllTiresOptionGoodButton;

  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"toggle-fair-14143\"]")
  public MobileElement conditionsAffectingAllTiresOptionFairButton;

  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"toggle-poor-14143\"]")
  public MobileElement conditionsAffectingAllTiresOptionPoorButton;

  @AndroidFindBy(xpath = "  //android.view.ViewGroup[@content-desc=\"dropDown-14143\"]\n")
  public MobileElement conditionsAffectingAllTiresSelectConditionDropdown;

  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"toggle-now-repair-label-14143\"]")
  public MobileElement conditionsAffectingAllTiresNowButton;

  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"toggle-later-repair-label-14143\"]")
  public MobileElement conditionsAffectingAllTiresLaterButton;

  @AndroidFindBy(xpath = "//android.view.ViewGroup[@content-desc=\"toggle-never-repair-label-14143\"]")
  public MobileElement conditionsAffectingAllTiresNeverButton;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Rotate tires\"]")
  public MobileElement conditionsAffectingAllTiresRotateTiresText;

  @AndroidFindBy(xpath = "(//android.view.ViewGroup[@content-desc=\"inspection-checkbox\"])[1]")
  public MobileElement conditionsAffectingAllTiresRotateTiresCheckBox;

}

