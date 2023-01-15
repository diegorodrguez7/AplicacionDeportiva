//IMC
function calcularImc() {
  let p = document.getElementById("resultado");
  let imc;
  let peso;
  let estatura;
  do {
    estatura = window.prompt("¿Cual es tu estatura?");
    peso = window.prompt("¿Cual es tu peso?");
  } while (typeof peso == "number" && typeof estatura == "number");
  estatura = estatura / 100;
  let operacion = estatura * estatura;
  //Calcular IMC.
  imc = peso / operacion;
  alert("Tu índice de masa corporal es:" + imc);
  //Calcular tipo IMC según resultado.
  if (imc < 16.0) {
    p.setAttribute("style", "color: red");
    document.getElementById("resultado").innerHTML +=
      "Tienes delgadez severa.<br>" +
      "Tu peso es: " +
      peso +
      " Kg.<br>" +
      "Tu altura es: " +
      estatura +
      " m.<br>" +
      "Tu imc es: " +
      parseInt(imc) +
      "<br>";
  } else if (imc <= 16.0 || imc <= 16.99) {
    p.setAttribute("style", "color: blue");
    document.getElementById("resultado").innerHTML +=
      "Tienes delgadez moderada.<br>" +
      "Tu peso es: " +
      peso +
      " Kg.<br>" +
      "Tu altura es: " +
      estatura +
      " m.<br>" +
      "Tu imc es: " +
      parseInt(imc) +
      "<br>";
  } else if (imc <= 17.0 || imc <= 18.49) {
    p.setAttribute("style", "color: navy");
    document.getElementById("resultado").innerHTML +=
      "Tienes delgadez aceptable.<br>" +
      "Tu peso es: " +
      peso +
      " Kg.<br>" +
      "Tu altura es: " +
      estatura +
      " m.<br>" +
      "Tu imc es: " +
      parseInt(imc) +
      "<br>";
  } else if (imc <= 18.5 || imc <= 24.99) {
    p.setAttribute("style", "color: blue");
    document.getElementById("resultado").innerHTML +=
      "Tienes el peso normal.<br>" +
      "Tu peso es: " +
      peso +
      " Kg.<br>" +
      "Tu altura es: " +
      estatura +
      " m.<br>" +
      "Tu imc es: " +
      parseInt(imc) +
      "<br>";
  } else if (imc <= 25.0 || imc <= 29.99) {
    p.setAttribute("style", "color: gray");
    document.getElementById("resultado").innerHTML +=
      "Tienes sobrepeso.<br>" +
      "Tu peso es: " +
      peso +
      " Kg.<br>" +
      "Tu altura es: " +
      estatura +
      " m.<br>" +
      "Tu imc es: " +
      parseInt(imc) +
      "<br>";
  } else if (imc <= 30.0 || imc <= 34.99) {
    p.setAttribute("style", "color: violet");
    document.getElementById("resultado").innerHTML +=
      "Tienes obesidad tipo 1.<br>" +
      "Tu peso es: " +
      peso +
      " Kg.<br>" +
      "Tu altura es: " +
      estatura +
      " m.<br>" +
      "Tu imc es: " +
      parseInt(imc) +
      "<br>";
  } else if (imc <= 35.0 || imc <= 40.0) {
    p.setAttribute("style", "color: brown");
    document.getElementById("resultado").innerHTML +=
      "Tienes obesidad tipo 2.<br>" +
      "Tu peso es: " +
      peso +
      " Kg.<br>" +
      "Tu altura es: " +
      estatura +
      " m.<br>" +
      "Tu imc es: " +
      parseInt(imc) +
      "<br>";
  } else if (imc > 40.0) {
    p.setAttribute("style", "color: orange");
    document.getElementById("resultado").innerHTML +=
      "Tienes obesidad tipo 3.<br>" +
      "Tu peso es: " +
      peso +
      " Kg.<br>" +
      "Tu altura es: " +
      estatura +
      " m.<br>" +
      "Tu imc es: " +
      parseInt(imc) +
      "<br>";
  }
}

//FCM
function calcularFcm() {
  let p = document.getElementById("resultado2");
  let fcm;
  let edad;
  let sexo;
  do {
    edad = window.prompt("¿Cual es tu edad?");
    sexo = window.prompt("¿Cual es tu sexo?");
  } while (typeof edad == "number" && typeof sexo == "string");

  //Calcular FCM segun sexo.
  if (sexo == "hombre") {
    fcm = 220 - edad * 0.8;
  }
  if (sexo == "mujer") {
    fcm = 225 - edad * 0.7;
  }

  let zona = fcm * 0.6;
  let zona2 = fcm * 0.7;
  let zona3 = fcm * 0.8;
  let zona4 = fcm * 0.9;

  alert("Tu frecuencia cardíaca máxima es: " + fcm);

  //Calcular tipo de zona según resultado en un rango de pulsaciones.
  document.getElementById("resultado2").innerHTML +=
    "0. Tu frecuencia cardíaca máxima es: " + fcm + "<br>";
  document.getElementById("resultado2").innerHTML +=
    "1. Zona de recuperación entre " +
    parseInt(zona) +
    " y " +
    parseInt(zona2) +
    " pulsaciones.<br>";
  document.getElementById("resultado2").innerHTML +=
    "2. Zona aeróbica entre " +
    parseInt(zona2) +
    " y " +
    parseInt(zona3) +
    " pulsaciones.<br>";
  document.getElementById("resultado2").innerHTML +=
    "3. Zona anaeróbica entre " +
    parseInt(zona3) +
    " y " +
    parseInt(zona4) +
    " pulsaciones.<br>";
  document.getElementById("resultado2").innerHTML +=
    "4. Zona de línea roja hasta: " + parseInt(zona4) + " pulsaciones.<br>";
}

//CE
function calcularCe() {
  let p = document.getElementById("resultado3");
  let anio;
  do {
    anio = window.prompt("¿Cual es tu año de nacimiento?");
  } while (typeof anio == "number");
  //Calcular categoria.
  alert(
    "Naciste en el año: " + anio + ". Con lo cual perteneces a la categoria -->"
  );
  //Calcular tipo categoria según el año.
  if (anio == 2015 || anio == 2016) {
    p.setAttribute("style", "color: red");
    document.getElementById("resultado3").innerHTML +=
      "1. Naciste en: " + anio + "<br>";
    document.getElementById("resultado3").innerHTML +=
      "2. Tu categoría es: PREBENJAMIN.";
  } else if (anio == 2013 || anio == 2014) {
    p.setAttribute("style", "color: blue");
    document.getElementById("resultado3").innerHTML +=
      "1. Naciste en: " + anio + "<br>";
    document.getElementById("resultado3").innerHTML +=
      "2. Tu categoría es: BENJAMIN.";
  } else if (anio == 2011 || anio == 2012) {
    p.setAttribute("style", "color: navy");
    document.getElementById("resultado3").innerHTML +=
      "1. Naciste en: " + anio + "<br>";
    document.getElementById("resultado3").innerHTML +=
      "2. Tu categoría es: ALEVIN.";
  } else if (anio == 2009 || anio == 2010) {
    p.setAttribute("style", "color: blue");
    document.getElementById("resultado3").innerHTML +=
      "1. Naciste en: " + anio + "<br>";
    document.getElementById("resultado3").innerHTML +=
      "2. Tu categoría es: INFANTIL.";
  } else if (anio == 2007 || anio == 2008) {
    p.setAttribute("style", "color: gray");
    document.getElementById("resultado3").innerHTML +=
      "1. Naciste en: " + anio + "<br>";
    document.getElementById("resultado3").innerHTML +=
      "2. Tu categoría es: CADETE.";
  } else if (anio == 2005 || anio == 2006) {
    p.setAttribute("style", "color: violet");
    document.getElementById("resultado3").innerHTML +=
      "1. Naciste en: " + anio + "<br>";
    document.getElementById("resultado3").innerHTML +=
      "2. Tu categoría es: JUVENIL.";
  } else if (anio == 2003 || anio == 2004) {
    p.setAttribute("style", "color: brown");
    document.getElementById("resultado3").innerHTML +=
      "1. Naciste en: " + anio + "<br>";
    document.getElementById("resultado3").innerHTML +=
      "2. Tu categoría es: AFICIONADO.";
  } else if (anio == 2001 || anio == 2002) {
    p.setAttribute("style", "color: orange");
    document.getElementById("resultado3").innerHTML +=
      "1. Naciste en: " + anio + "<br>";
    document.getElementById("resultado3").innerHTML +=
      "2. Tu categoría es: VETERANO.";
  } else if (anio >= 2017) {
    p.setAttribute("style", "color: black");
    document.getElementById("resultado3").innerHTML +=
      "1. Naciste en: " + anio + "<br>";
    document.getElementById("resultado3").innerHTML +=
      "Eres muy pequeño para tener categoria.";
  } else if (anio <= 2000) {
    p.setAttribute("style", "color: black");
    document.getElementById("resultado3").innerHTML +=
      "1. Naciste en: " + anio + "<br>";
    document.getElementById("resultado3").innerHTML +=
      "Retirate. Tienes demasiada edad para una categoria.";
  }
}

//Calendario
function calendario() {
  hoy = new Date(); //objeto fecha actual
  document.getElementById("resultado4").innerHTML += hoy.toLocaleDateString(
    "es-es",
    { year: "numeric" }
  );
  document.getElementById("resultado5").innerHTML += hoy.toLocaleDateString(
    "es-es",
    { day: "numeric" }
  );
  document.getElementById("resultado6").innerHTML += hoy.toLocaleDateString(
    "es-es",
    { month: "long" }
  );
}

//Aviso legal
function GetCookie(name) {
  var arg = name + "=";
  var alen = arg.length;
  var clen = document.cookie.length;
  var i = 0;

  while (i < clen) {
    var j = i + alen;

    if (document.cookie.substring(i, j) == arg) return "1";
    i = document.cookie.indexOf(" ", i) + 1;
    if (i == 0) break;
  }

  return null;
}

function aceptar_cookies() {
  var expire = new Date();
  expire = new Date(expire.getTime() + 7776000000);
  document.cookie = "cookies_surestao=aceptada; expires=" + expire;

  var visit = GetCookie("cookies_surestao");

  if (visit == 1) {
    popbox3();
  }
}

$(function () {
  var visit = GetCookie("cookies_surestao");
  if (visit == 1) {
    popbox3();
  }
});

function popbox3() {
  $("#overbox3").toggle();
}

//Alerta
function alerta() {
  setTimeout(
    () => window.alert("¡BIENVENIDOS A APLICACIONES DEPORTIVAS!"),
    10000
  );
}

//Contraseña
function seguridad_clave() {
  clave = window.prompt("Introduce la contraseña");
  var regularExpression =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
  if (regularExpression.test(clave)) {
    document.getElementById("resultado7").innerHTML += "Contraseña valida.";
  } else {
    document.getElementById("resultado7").innerHTML += "Contraseña no valida.";
  }
}

//Reloj
function mueveReloj() {
  momentoActual = new Date();
  hora = momentoActual.getHours();
  minuto = momentoActual.getMinutes();
  segundo = momentoActual.getSeconds();
  horaImprimible = hora + " : " + minuto + " : " + segundo;
  document.form_reloj.reloj.value = horaImprimible;
  setTimeout("mueveReloj()", 1000);
}
