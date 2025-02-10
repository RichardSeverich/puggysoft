using NUnit.Framework;
using OpenQA.Selenium;
using frontend_cucumber.Pages;
using TechTalk.SpecFlow;

namespace frontend_cucumber.Steps
{
    [Binding]
    public class LoginSteps
    {
        private readonly IWebDriver driver;
        private readonly LoginPage loginPage;

        public LoginSteps(IWebDriver driver)
        {
            this.driver = driver;
            loginPage = new LoginPage(driver);
        }

        [Given(@"El usuario está en la página de login")]
        public void GivenElUsuarioEstaEnLaPaginaDeLogin()
        {
            Assert.IsTrue(driver.Url.Contains("login"));
        }

        [When(@"Ingresa ""(.*)"" en el campo de usuario")]
        public void WhenIngresaUsuarioEnElCampoDeUsuario(string username)
        {
            loginPage.EnterUsername(username);
        }

        [When(@"Ingresa ""(.*)"" en el campo de contraseña")]
        public void WhenIngresaPasswordEnElCampoDeContrasena(string password)
        {
            loginPage.EnterPassword(password);
        }

        [When(@"Presiona el botón de login")]
        public void WhenPresionaElBotonDeLogin()
        {
            loginPage.ClickLogin();
        }

        [Then(@"Debería ver el dashboard")]
        public void ThenDeberiaVerElDashboard()
        {
            Assert.IsTrue(loginPage.IsDashboardDisplayed(), "El dashboard no está visible.");
        }
    }
}
