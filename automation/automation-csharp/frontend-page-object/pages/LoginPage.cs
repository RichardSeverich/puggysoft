using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using System;

namespace frontend_page_object.pages
{
    public class LoginPage
    {
        private readonly IWebDriver driver;
        private readonly WebDriverWait wait;

        // Localizadores
        private By usernameField = By.Id("username");
        private By passwordField = By.Id("password");
        private By loginButton = By.Id("loginButton");
        private By dashboard = By.Id("dashboard");

        // Constructor
        public LoginPage(IWebDriver driver)
        {
            this.driver = driver;
            wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
        }

        // Métodos para interactuar con la página
        public void EnterUsername(string username)
        {
            wait.Until(d => d.FindElement(usernameField)).SendKeys(username);
        }

        public void EnterPassword(string password)
        {
            driver.FindElement(passwordField).SendKeys(password);
        }

        public void ClickLogin()
        {
            driver.FindElement(loginButton).Click();
        }

        public bool IsDashboardDisplayed()
        {
            return wait.Until(d => d.FindElement(dashboard).Displayed);
        }
    }
}
