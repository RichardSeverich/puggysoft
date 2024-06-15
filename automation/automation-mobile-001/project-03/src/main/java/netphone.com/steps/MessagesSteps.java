package netphone.com.steps;

import cucumber.api.java.en.Then;
import netphone.com.actions.MessagesActions;

/**
 * Steps.
 */
public class MessagesSteps {

  private final MessagesActions messagesActions;

  /**
   * Constructor.
   */
  public MessagesSteps() {
    this.messagesActions = new MessagesActions();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Start a conversation' text is visible$")
  public void verifyStartAConversation() {
    this.messagesActions.verifyStartAConversation();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Start a conversation under text' text is visible$")
  public void verifyStartAConversationUnderText() {
    this.messagesActions.verifyStartAConversationUnderText();
  }

  /**
   * Verify.
   */
  @Then("^I verify 'Unread' text is visible$")
  public void verifyUnread() {
    this.messagesActions.verifyUnread();
  }

}
