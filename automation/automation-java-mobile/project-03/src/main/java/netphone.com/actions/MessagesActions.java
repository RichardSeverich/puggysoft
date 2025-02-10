package netphone.com.actions;


import netphone.com.screens.MessagesScreen;

/**
 * Home actions.
 */
public class MessagesActions extends AbstractActions {

  public MessagesScreen messagesScreen;

  /**
   * Constructor.
   */
  public MessagesActions() {
    this.messagesScreen = new MessagesScreen();
  }

  /**
   * Verification Start a conversation.
   */
  public void verifyStartAConversation() {
    this.waitForDisplayed(this.messagesScreen.startAConversationText);
  }

  /**
   * Verification Start a conversation under text.
   */
  public void verifyStartAConversationUnderText() {
    this.waitForDisplayed(this.messagesScreen.startAConversationUnderText);
  }

  /**
   * Verification Unread.
   */
  public void verifyUnread() {
    this.waitForDisplayed(this.messagesScreen.unreadText);
  }

}
