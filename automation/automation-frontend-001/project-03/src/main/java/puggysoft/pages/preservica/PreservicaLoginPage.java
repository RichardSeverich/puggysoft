package puggysoft.pages.preservica;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import puggysoft.pages.Page;

/**
 * Login Page.
 */
public class PreservicaLoginPage extends Page {

    @FindBy(css = "input[id='username']")
    private WebElement inputUsername;

    @FindBy(css = "input[id='loginPassword']")
    private WebElement inputPassword;

    @FindBy(css = "button[data-testid='login-submit']")
    private WebElement buttonLogin;

    /**
     * @param username username.
     * @param password password.
     */
    public void login(String username, String password) {
        inputUsername.sendKeys(username);
        inputPassword.sendKeys(password);
        buttonLogin.click();
    }
}
