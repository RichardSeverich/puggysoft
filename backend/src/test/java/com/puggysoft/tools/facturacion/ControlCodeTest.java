package com.puggysoft.tools.facturacion;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;


/**
 * Test.
 */
public class ControlCodeTest {

  private ControlCode controlCode;
  private String fileName = "src\\test\\resources\\5000CasosPruebaCCVer7.txt";
  // private String fileName = System.getProperty("user.dir") +  "\\src\\test\\resources\\5000CasosPruebaCCVer7.txt";

  /**
   * Before.
   */
  @Before
  public void setUp() {
    controlCode = new ControlCode();
  }

  /**
   * Test 1.
   */
  @Test
  public void test1() {
    int numberOfTests = 0;
    int fiveDigitsVerhoeffCountErrors = 0;
    int stringDKeyCountErrors = 0;
    int sumProductCountErrors = 0;
    int base64SINCountErrors = 0;
    int codeControlCountErrors = 0;
    try (BufferedReader br = new BufferedReader(new FileReader(fileName))) {
      String line;
      while ((line = br.readLine()) != null) {
        numberOfTests += 1;
        //reemplaza "|" por "/-/" por no ser compatible con el metodo split
        line = line.replace("|", "/-/");
        String[] arrayOfValues = line.split("/-/");
        //genera codigo de control
        String authorizationNumber = arrayOfValues[0]; // Numero de autorizacion.
        String invoiceNumber = arrayOfValues[1]; // Numero de factura.
        String nitci = arrayOfValues[2]; // ci o nit del cliente.
        String dateTransaction = arrayOfValues[3]; // Fecha de transaccion.
        String transactionAmount = arrayOfValues[4]; ; // Monto de la Transacción.
        String dosagekey = arrayOfValues[5]; // Llave de Dosificación.
        String controlCodeGenerated = controlCode.generate(authorizationNumber, invoiceNumber, nitci, dateTransaction.replace("/", ""), transactionAmount, dosagekey);
        // Contar los errores
        if (!arrayOfValues[6].equals(controlCode.getFiveDigitsVerhoeff())) {
          fiveDigitsVerhoeffCountErrors += 1;
        }
        if (!arrayOfValues[7].equals(controlCode.getStringDKey())) {
          stringDKeyCountErrors += 1;
        }
        if (!arrayOfValues[8].equals(String.valueOf(controlCode.getSumProduct()))) {
          sumProductCountErrors += 1;
        }
        if (!arrayOfValues[9].equals(String.valueOf(controlCode.getBase64SIN()))) {
          base64SINCountErrors += 1;
        }
        if (!arrayOfValues[10].equals(controlCodeGenerated)) {
          codeControlCountErrors += 1;
        }
      }
    } catch (IOException e) {
      System.err.println(e.getMessage());
    }
    Assert.assertEquals(5000, numberOfTests);
    Assert.assertEquals(0, fiveDigitsVerhoeffCountErrors);
    Assert.assertEquals(0, stringDKeyCountErrors);
    Assert.assertEquals(0, sumProductCountErrors);
    Assert.assertEquals(0, base64SINCountErrors);
    Assert.assertEquals(0, codeControlCountErrors);
  }
}
