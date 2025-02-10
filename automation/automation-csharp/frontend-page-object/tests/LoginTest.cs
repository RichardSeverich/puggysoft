using frontend_page_object.pages;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace frontend_page_object.tests
{
    public class Tests
    {
        private IWebDriver driver;
        private LoginPage loginPage;

        [SetUp]
        public void Setup()
        {
            driver = new ChromeDriver();
            driver.Manage().Window.Maximize();
            driver.Navigate().GoToUrl("https://example.com/login");
            loginPage = new LoginPage(driver);
        }

        [Test]
        public void Test1()
        {
            loginPage.EnterUsername("usuario123");
            loginPage.EnterPassword("contraseña123");
            loginPage.ClickLogin();

            Assert.IsTrue(loginPage.IsDashboardDisplayed(), "El login falló, dashboard no encontrado.");
        }

        [TearDown]
        public void TearDown()
        {
            driver.Quit();
        }
    }
}
