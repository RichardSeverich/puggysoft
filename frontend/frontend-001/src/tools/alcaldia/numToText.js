import i18n from "../../i18n/i18n";

function Unidades (num) {
  switch (num) {
  case 1: return i18n.alcaldiaRecursosMunicipalesNumToText.UN;
  case 2: return i18n.alcaldiaRecursosMunicipalesNumToText.DOS;
  case 3: return i18n.alcaldiaRecursosMunicipalesNumToText.TRES;
  case 4: return i18n.alcaldiaRecursosMunicipalesNumToText.CUATRO;
  case 5: return i18n.alcaldiaRecursosMunicipalesNumToText.CINCO;
  case 6: return i18n.alcaldiaRecursosMunicipalesNumToText.SEIS;
  case 7: return i18n.alcaldiaRecursosMunicipalesNumToText.SIETE;
  case 8: return i18n.alcaldiaRecursosMunicipalesNumToText.OCHO;
  case 9: return i18n.alcaldiaRecursosMunicipalesNumToText.NUEVE;
  }

  return "";
}

function Decenas (num) {
  const decena = Math.floor(num / 10);
  const unidad = num - (decena * 10);

  switch (decena) {
  case 1:
    switch (unidad) {
    case 0: return i18n.alcaldiaRecursosMunicipalesNumToText.DIEZ;
    case 1: return i18n.alcaldiaRecursosMunicipalesNumToText.ONCE;
    case 2: return i18n.alcaldiaRecursosMunicipalesNumToText.DOCE;
    case 3: return i18n.alcaldiaRecursosMunicipalesNumToText.TRECE;
    case 4: return i18n.alcaldiaRecursosMunicipalesNumToText.CATORCE;
    case 5: return i18n.alcaldiaRecursosMunicipalesNumToText.QUINCE;
    default: return i18n.alcaldiaRecursosMunicipalesNumToText.DIECI + Unidades(unidad);
    }
  case 2:
    switch (unidad) {
    case 0: return i18n.alcaldiaRecursosMunicipalesNumToText.VEINTE;
    default: return i18n.alcaldiaRecursosMunicipalesNumToText.VEINTI + Unidades(unidad);
    }
  case 3: return DecenasY(i18n.alcaldiaRecursosMunicipalesNumToText.TREINTA, unidad);
  case 4: return DecenasY(i18n.alcaldiaRecursosMunicipalesNumToText.CUARENTA, unidad);
  case 5: return DecenasY(i18n.alcaldiaRecursosMunicipalesNumToText.CINCUENTA, unidad);
  case 6: return DecenasY(i18n.alcaldiaRecursosMunicipalesNumToText.SESENTA, unidad);
  case 7: return DecenasY(i18n.alcaldiaRecursosMunicipalesNumToText.SETENTA, unidad);
  case 8: return DecenasY(i18n.alcaldiaRecursosMunicipalesNumToText.OCHENTA, unidad);
  case 9: return DecenasY(i18n.alcaldiaRecursosMunicipalesNumToText.NOVENTA, unidad);
  case 0: return Unidades(unidad);
  }
}

function DecenasY (strSin, numUnidades) {
  if (numUnidades > 0) return strSin + " Y " + Unidades(numUnidades);

  return strSin;
}

function Centenas (num) {
  const centenas = Math.floor(num / 100);
  const decenas = num - (centenas * 100);

  switch (centenas) {
  case 1:
    if (decenas > 0) return `${i18n.alcaldiaRecursosMunicipalesNumToText.CIENTO} ` + Decenas(decenas);
    return `${i18n.alcaldiaRecursosMunicipalesNumToText.CIEN}`;
  case 2: return `${i18n.alcaldiaRecursosMunicipalesNumToText.DOSCIENTOS} ` + Decenas(decenas);
  case 3: return `${i18n.alcaldiaRecursosMunicipalesNumToText.TRESCIENTOS} ` + Decenas(decenas);
  case 4: return `${i18n.alcaldiaRecursosMunicipalesNumToText.CUATROCIENTOS} ` + Decenas(decenas);
  case 5: return `${i18n.alcaldiaRecursosMunicipalesNumToText.QUINIENTOS} ` + Decenas(decenas);
  case 6: return `${i18n.alcaldiaRecursosMunicipalesNumToText.SEISCIENTOS} ` + Decenas(decenas);
  case 7: return `${i18n.alcaldiaRecursosMunicipalesNumToText.SETECIENTOS} ` + Decenas(decenas);
  case 8: return `${i18n.alcaldiaRecursosMunicipalesNumToText.OCHOCIENTOS} ` + Decenas(decenas);
  case 9: return `${i18n.alcaldiaRecursosMunicipalesNumToText.NOVECIENTOS} ` + Decenas(decenas);
  }

  return Decenas(decenas);
}// Centenas()

function Seccion (num, divisor, strSingular, strPlural) {
  const cientos = Math.floor(num / divisor);
  const resto = num - (cientos * divisor);

  let letras = "";

  if (cientos > 0) {
    if (cientos > 1) {
      letras = Centenas(cientos) + " " + strPlural;
    } else {
      letras = strPlural;
    }
  }

  if (resto > 0) {
    letras += "";
  }

  return letras;
}// Seccion()

function Miles (num) {
  const divisor = 1000;
  const cientos = Math.floor(num / divisor);
  const resto = num - (cientos * divisor);

  const strMiles = Seccion(num, divisor
    , `${i18n.alcaldiaRecursosMunicipalesNumToText.UN} ${i18n.alcaldiaRecursosMunicipalesNumToText.MIL}`
    , i18n.alcaldiaRecursosMunicipalesNumToText.MIL);
  const strCentenas = Centenas(resto);

  if (strMiles === "") {
    return strCentenas;
  }

  return strMiles + " " + strCentenas;
}// Miles()

function Millones (num) {
  const divisor = 1000000;
  const cientos = Math.floor(num / divisor);
  const resto = num - (cientos * divisor);

  const strMillones = Seccion(num, divisor
    , `${i18n.alcaldiaRecursosMunicipalesNumToText.UN} ${i18n.alcaldiaRecursosMunicipalesNumToText.MILLON} DE`
    , `${i18n.alcaldiaRecursosMunicipalesNumToText.MILLONES} DE`);
  const strMiles = Miles(resto);

  if (strMillones === "") {
    return strMiles;
  }

  return strMillones + " " + strMiles;
}// Millones()

function NumeroALetras (num) {
  const data = {
    numero: num,
    enteros: Math.floor(num),
    centavos: (((Math.round(num * 100)) - (Math.floor(num) * 100))),
    letrasCentavos: "",
    letrasMonedaPlural: i18n.alcaldiaRecursosMunicipalesNumToText.BOLIVIANOS, // "PESOS", "Dólares", "Bolívares", "etcs"
    letrasMonedaSingular: i18n.alcaldiaRecursosMunicipalesNumToText.BOLIVIANO, // "PESO", "Dólar", "Bolivar", "etc"

    letrasMonedaCentavoPlural: i18n.alcaldiaRecursosMunicipalesNumToText.CENTAVOS,
    letrasMonedaCentavoSingular: i18n.alcaldiaRecursosMunicipalesNumToText.CENTAVO
  };

  if (data.centavos > 0) {
    data.letrasCentavos = "CON " + (function () {
      if (data.centavos === 1) {
        return Millones(data.centavos) + " " + data.letrasMonedaCentavoSingular;
      } else {
        return Millones(data.centavos) + " " + data.letrasMonedaCentavoPlural;
      }
    })();
  }

  if (data.enteros === 0) {
    return `${i18n.alcaldiaRecursosMunicipalesNumToText.CERO} ` + data.letrasMonedaPlural + " " + data.letrasCentavos;
  }
  if (data.enteros === 1) {
    return Millones(data.enteros) + " " + data.letrasMonedaSingular + " " + data.letrasCentavos;
  } else {
    return Millones(data.enteros) + " " + data.letrasMonedaPlural + " " + data.letrasCentavos;
  }
}// NumeroALetras()

export default NumeroALetras;
