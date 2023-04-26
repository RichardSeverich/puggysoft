package com.puggysoft.controllers.users;

import com.puggysoft.dtos.users.DtoUserAuth;
import com.puggysoft.services.users.ServicesUserLogin;
import com.puggysoft.support.ObjectToStringJson;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;


/**
 * Test.
 */
@RunWith(SpringRunner.class)
@WebMvcTest(ControllerUserLogin.class)
public class ControllerUserLoginTest {

  @Autowired
  private MockMvc mockMvc;

  @MockBean
  private ServicesUserLogin service;

  private DtoUserAuth dtoUserAuth;


  /**
   * Before.
   */
  @Before
  public void setUp() {
    // Create DTO.
    dtoUserAuth = new DtoUserAuth();
    dtoUserAuth.setUsername("RichardSeverich");
    dtoUserAuth.setPassword("pass123");
    dtoUserAuth.setToken("Bearer eyJhbGciOiJIUzUxMiJ9");
    // Mock Services
    ResponseEntity response = ResponseEntity.status(HttpStatus.OK).body(dtoUserAuth);
    Mockito.when(service.login(Mockito.any(DtoUserAuth.class))).thenReturn(response);
  }

  /**
   * Test1.
   *
   * @throws Exception Exception.
   */
  @Test
  public void testControllerUserLogin() throws Exception {
    String expectedResult = "{"
        + "\"username\":\"RichardSeverich\","
        + "\"password\":\"pass123\","
        + "\"token\":\"Bearer eyJhbGciOiJIUzUxMiJ9\""
        + "}";
    // Request and Asserts.
    String bodyRequest = ObjectToStringJson.convert(dtoUserAuth);
    this.mockMvc
      .perform(MockMvcRequestBuilders.post("/api/v1/login")
          .accept(MediaType.APPLICATION_JSON).content(bodyRequest)
          .contentType(MediaType.APPLICATION_JSON))
      .andExpect(MockMvcResultMatchers.status().isOk())
      .andExpect(MockMvcResultMatchers.content().string(expectedResult));
  }

}