package puggysoft.pages.preservica;

import org.openqa.selenium.By;
import org.openqa.selenium.SearchContext;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import puggysoft.pages.Page;

/**
 * Home Page.
 */
public class PreservicaHomePage extends Page {

    @FindBy(css = "*[data-testid='explorer-header']")
    private WebElement homeHeader;

    @FindBy(css = "*[data-testid='user-settings-link']")
    private WebElement userSettingsLink;

    @FindBy(css = "*[data-testid='security-tab']")
    private WebElement securityTab;

    @FindBy(css = "*[id='metaDataUrl']")
    private WebElement inputMetadataUrlShadowHost;

    /**
     * navigate.
     */
    public void navigateToSecuritySettings() {
        userSettingsLink.click();
        securityTab.click();
    }

    /**
     * @return value.
     */
    public String getInputMetadataUrlValue() {
        SearchContext inputMetadataUrlShadowRoot = inputMetadataUrlShadowHost.getShadowRoot();
        WebElement inputMetadataUrl = inputMetadataUrlShadowRoot.findElement(By.cssSelector("input"));
        return inputMetadataUrl.getAttribute("value");
    }

    /**
     * @param text text.
     */
    public void fillInputMetadataUrlValue(String text) {
        SearchContext inputMetadataUrlShadowRoot = inputMetadataUrlShadowHost.getShadowRoot();
        WebElement inputMetadataUrl = inputMetadataUrlShadowRoot.findElement(By.cssSelector("input"));
        inputMetadataUrl.sendKeys(text);
    }

    /**
     * @return WebElement.
     */
    public WebElement getHomeHeaderWebElement() {
        return homeHeader;
    }
}
