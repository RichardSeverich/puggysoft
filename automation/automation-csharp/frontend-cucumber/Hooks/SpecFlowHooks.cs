using BoDi;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using TechTalk.SpecFlow;

namespace frontend_cucumber.Hooks
{
    [Binding]
    public class SpecFlowHooks
    {
        private readonly IObjectContainer container;
        private IWebDriver driver;

        public SpecFlowHooks(IObjectContainer container)
        {
            this.container = container;
        }

        [BeforeScenario]
        public void SetUp()
        {
            driver = new ChromeDriver();
            driver.Manage().Window.Maximize();
            driver.Navigate().GoToUrl("https://example.com/login");
            container.RegisterInstanceAs<IWebDriver>(driver);
        }

        [AfterScenario]
        public void TearDown()
        {
            driver.Quit();
        }
    }
}
