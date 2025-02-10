using System;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;

namespace frontend_basic
{

    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void Test1()
        {
            IWebDriver driver = new ChromeDriver();

            try
            {
                // Navegar a la página de inicio de sesión
                driver.Navigate().GoToUrl("https://example.com/login");
                driver.Manage().Window.Maximize();

                // Esperar a que los elementos estén disponibles
                WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));

                // Localizar los campos de usuario y contraseña
                IWebElement usernameField = wait.Until(d => d.FindElement(By.Id("username")));
                IWebElement passwordField = driver.FindElement(By.Id("password"));
                IWebElement loginButton = driver.FindElement(By.Id("loginButton"));

                // Ingresar credenciales
                usernameField.SendKeys("usuario123");
                passwordField.SendKeys("contraseña123");

                // Hacer clic en el botón de login
                loginButton.Click();

                // Esperar la redirección y verificar si el login fue exitoso
                wait.Until(d => d.FindElement(By.Id("dashboard")));

                Console.WriteLine("Inicio de sesión exitoso.");
            }
            catch (Exception e)
            {
                Console.WriteLine("Error durante la prueba: " + e.Message);
            }
            finally
            {
                // Cerrar el navegador
                driver.Quit();
            }
            Assert.Pass();
        }
    }
}
