Feature: Login

  Scenario: Usuario inicia sesión correctamente
    Given El usuario está en la página de login
    When Ingresa "usuario123" en el campo de usuario
    And Ingresa "contraseña123" en el campo de contraseña
    And Presiona el botón de login
    Then Debería ver el dashboard
