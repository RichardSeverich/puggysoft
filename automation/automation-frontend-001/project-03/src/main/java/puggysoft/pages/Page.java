package puggysoft.pages;

import org.openqa.selenium.support.PageFactory;
import puggysoft.drivers.DriverManager;
import org.openqa.selenium.WebDriver;

/**
 * Created by Richard Severich.
 */
public abstract class Page {

    protected WebDriver webDriver;

    /**
     * This method is the constructor.
     */
    public Page() {
        webDriver = DriverManager.getWebDriver();
        // initialize web elements with @FindBy notation.
        PageFactory.initElements(webDriver, this);
    }

    /**
     * @param url url to navigate.
     */
    public void navigate(String url) {
        webDriver.navigate().to(url);
    }

    /**
     * quit web driver.
     */
    public void endSession() {
        webDriver.quit();
    }

}
