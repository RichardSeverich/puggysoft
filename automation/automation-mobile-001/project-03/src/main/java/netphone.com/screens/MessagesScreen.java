package netphone.com.screens;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import netphone.com.core.Screen;

/**
 * Messages Screen.
 */
public class MessagesScreen extends Screen {

  /** Constructor. */
  public MessagesScreen() {
    super();
  }

  //ALL
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Start a conversation!\"]")
  public MobileElement startAConversationText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"You don't have any messages yet.\nTap the ＋ button to get started.\"]")
  public MobileElement startAConversationUnderText;

  //UNREAD
  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Unread\"]")
  public MobileElement unreadText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"No unread messages.\"]")
  public MobileElement noUnreadMessagesText;

  @AndroidFindBy(xpath = "//android.widget.TextView[@text=\"You don't have any new messages.\r\nCheck back later!\"]")
  public MobileElement noUnreadMessagesUnderText;

}
