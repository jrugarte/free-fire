let ataqueJugador;
let ataqueEnemigo;
let vidaJugador = 200;
let vidaEnemigo = 200;
let enemigoAleatorioName;
let enemigoAleatorio;
let pJugador = document.createElement("p");
let pEnemigo = document.createElement("p");

function empezarJuego() {
  // let sectionEncabezado = document.getElementById("encabezado");
  // sectionEncabezado.style.display = "block";
  let personajeSelect = document.getElementById("personaje-select");
  personajeSelect.style.display = "none";
  let enemigoSelect = document.getElementById("enemigo-select");
  enemigoSelect.style.display = "none";
  let sectionAtaques = document.getElementById("ataques");
  sectionAtaques.style.display = "none";
  let sectionTextop = document.getElementById("texto-personajes");
  sectionTextop.style.display = "none";
  let sectionReinicio = document.getElementById("reiniciar-juego");
  sectionReinicio.style.display = "none";
  let sectionSelectButton = document.getElementById("select-button");
  sectionSelectButton.style.display = "flex";
  pJugador.style.display = "none";
  pEnemigo.style.display = "none";

  let botonSelect = document.getElementById("Seleccionar");
  botonSelect.addEventListener("click", SelectPlayer);
  //aca agrego los botones de atk y def(1)
  let botonDisparo = document.getElementById("disparo-jugador");
  botonDisparo.addEventListener("click", disparar);
  let botonGranada = document.getElementById("granada-jugador");
  botonGranada.addEventListener("click", escapar);
  let botonPared = document.getElementById("tirar-pared");
  botonPared.addEventListener("click", ponerPared);
  let botonReinicio = document.getElementById("reinicio");
  botonReinicio.addEventListener("click", reiniciar);
}
function SelectPlayer() {
  //seleccionar jugador
  //aca creo las variables de cada check
  let Jotaerre = document.getElementById("Jotaerre");
  let Juanserino = document.getElementById("Juanserino");
  let Alesi = document.getElementById("Alesi");
  let Enzinix = document.getElementById("Enzinix");
  let Alex = document.getElementById("Alex");
  let spanPersonaje = document.getElementById("personaje");
  let jugar = 1;

  if (Jotaerre.checked) {
    //.innerHTML hace que podamos darle un valor a lo que hay en el span indicado anteriormente, en este caso con un condicional
    spanPersonaje.innerHTML = " L4F~Jotaerre ";
  } else if (Juanserino.checked) {
    spanPersonaje.innerHTML = " L4F~Juanserino";
  } else if (Alesi.checked) {
    spanPersonaje.innerHTML = " L4F~Alesi";
  } else if (Enzinix.checked) {
    spanPersonaje.innerHTML = " L4F~Enzinix";
  } else if (Alex.checked) {
    spanPersonaje.innerHTML = " L4F~Alex";
  } else {
    alert("Por favor, selecciona un jugador.");
    jugar = 0;
  }
  if (jugar == 1) {
    SelectEnemy();
  }
}
function SelectEnemy() {
  let sectionPersonaje = document.getElementById("seleccionar-personaje");
  sectionPersonaje.style.display = "none";
  let sectionEncabezado = document.getElementById("encabezado");
  sectionEncabezado.style.display = "none";
  let personajeSelect = document.getElementById("personaje-select");
  personajeSelect.style.display = "flex";
  let enemigoSelect = document.getElementById("enemigo-select");
  enemigoSelect.style.display = "flex";
  let sectionAtaques = document.getElementById("ataques");
  sectionAtaques.style.display = "flex";
  let sectionTextop = document.getElementById("texto-personajes");
  sectionTextop.style.display = "flex";
  let sectionSelectButton = document.getElementById("select-button");
  sectionSelectButton.style.display = "none";
  // let Titulo = document.getElementsByClassName("title");
  // Titulo.style.display = "flex";

  pJugador.style.display = "flex";
  pEnemigo.style.display = "flex";
  pJugador.innerHTML = "Tu PV: " + vidaJugador;
  pEnemigo.innerHTML = "PV Enemigo: " + vidaEnemigo;
  sectionAtaques.appendChild(pJugador);
  sectionAtaques.appendChild(pEnemigo);

  let spanEnemigo = document.getElementById("personaje-enemigo");
  enemigoAleatorio = aleatorio(1, 5);
  enemigoAleatorioName;

  if (enemigoAleatorio == 1) {
    spanEnemigo.innerHTML = " L4F~Jotaerre";
    enemigoAleatorioName = " L4F~Jotaerre";
  } else if (enemigoAleatorio == 2) {
    spanEnemigo.innerHTML = " L4F~Juanserino";
    enemigoAleatorioName = " L4F~Juanserino";
  } else if (enemigoAleatorio == 3) {
    spanEnemigo.innerHTML = " L4F~Alesi";
    enemigoAleatorioName = " L4F~Alesi";
  } else if (enemigoAleatorio == 4) {
    spanEnemigo.innerHTML = " L4F~Enzinix";
    enemigoAleatorioName = " L4F~Enzinix";
  } else {
    spanEnemigo.innerHTML = " L4F~Alex";
    enemigoAleatorioName = " L4F~Alex";
  }
}
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//aca van los ataques(1)
function disparar() {
  ataqueJugador = "DISPARO";
  ataqueEnemigoAleatorio();
}

function escapar() {
  ataqueJugador = "ESCAPAR";
  ataqueEnemigoAleatorio();
}
function ponerPared() {
  // console.log("PUSISTE UNA PARED");
  ataqueJugador = "PARED";
  ataqueEnemigoAleatorio();
}
function ataqueEnemigoAleatorio() {
  let ataqueAleatorio = aleatorio(1, 3);
  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "DISPARO";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "ESCAPA";
  } else {
    ataqueEnemigo = "PARED";
  }
  combate();
  // respuestaEnemigo.innerHTML = "El enemigo " + ataqueEnemigo;
}

function combate() {
  if (ataqueJugador === "ESCAPAR") {
    if (ataqueEnemigo === "ESCAPA") {
      crearMensaje("Empate");
    }
    if (ataqueEnemigo === "PARED") {
      crearMensaje("Zafaste");
    }
    if (ataqueEnemigo === "DISPARO") {
      crearMensaje("Te espaldeó");
      vidaJugador = vidaJugador - 50;
      pJugador.innerHTML = "Tu PV: " + vidaJugador;
    }
  } else if (ataqueJugador === "PARED") {
    if (ataqueEnemigo === "ESCAPA") {
      crearMensaje("Pestañaste");
    }
    if (ataqueEnemigo === "PARED") {
      crearMensaje("Empate");
    }
    if (ataqueEnemigo === "DISPARO") {
      crearMensaje("Zafaste");
    }
  } else if (ataqueJugador === "DISPARO") {
    if (ataqueEnemigo === "ESCAPA") {
      crearMensaje("Espaldeaste");
      vidaEnemigo = vidaEnemigo - 50;
      pEnemigo.innerHTML = "PV Enemigo: " + vidaEnemigo;
    }
    if (ataqueEnemigo === "PARED") {
      crearMensaje("Zafó");
    }
    if (ataqueEnemigo === "DISPARO") {
      crearMensaje("Pelea de mancos");
      vidaJugador = vidaJugador - 50;
      vidaEnemigo = vidaEnemigo - 50;
      pJugador.innerHTML = "Tu PV: " + vidaJugador;
      pEnemigo.innerHTML = "PV Enemigo: " + vidaEnemigo;
    }
  }
  chequeoVidas();
}
function chequeoVidas() {
  let sectionAtaques = document.getElementById("ataques");
  let pBooyah = document.createElement("p");

  if (vidaEnemigo == 0 && vidaJugador == 0) {
    alert("EMPATE");
    pBooyah.innerHTML = "Al piso ambos";
    sectionAtaques.appendChild(pBooyah);
    let botonDisparo = document.getElementById("disparo-jugador");
    botonDisparo.disabled = true;
    let botonGranada = document.getElementById("granada-jugador");
    botonGranada.disabled = true;
    let botonPared = document.getElementById("tirar-pared");
    botonPared.disabled = true;

    let sectionReinicio = document.getElementById("reiniciar-juego");
    sectionReinicio.style.display = "flex";
  } else if (vidaJugador == 0) {
    alert("Mejor suerte para la pócima");
    pBooyah.innerHTML = "SOS FRANCES";
    sectionAtaques.appendChild(pBooyah);
    let botonDisparo = document.getElementById("disparo-jugador");
    botonDisparo.disabled = true;
    let botonGranada = document.getElementById("granada-jugador");
    botonGranada.disabled = true;
    let botonPared = document.getElementById("tirar-pared");
    botonPared.disabled = true;

    let sectionReinicio = document.getElementById("reiniciar-juego");
    sectionReinicio.style.display = "flex";
  } else if (vidaEnemigo == 0) {
    alert("BOOYAH!!");
    pBooyah.innerHTML = "BOOYAH!!";
    sectionAtaques.appendChild(pBooyah);
    let botonDisparo = document.getElementById("disparo-jugador");
    botonDisparo.disabled = true;
    let botonGranada = document.getElementById("granada-jugador");
    botonGranada.disabled = true;
    let botonPared = document.getElementById("tirar-pared");
    botonPared.disabled = true;

    let sectionReinicio = document.getElementById("reiniciar-juego");
    sectionReinicio.style.display = "flex";
  }
}

function crearMensaje(resultado) {
  let sectionMensajes = document.getElementById("texto-personajes");
  // document.createElement hace justamente lo que dice, crea el elemento indicado entre parentesis, en este caso un parrafo("p")
  let parrafo = document.createElement("p");
  parrafo.innerHTML =
    "Atacaste con " +
    ataqueJugador +
    " y " +
    enemigoAleatorioName +
    " " +
    ataqueEnemigo +
    ": " +
    resultado;
  // variable.appendChild hace que mandemos lo que hay entre parentesis a la variable, en este caso indicamos que agregamos el parrafo a la secicon mensajes.
  sectionMensajes.appendChild(parrafo);
}
function reiniciar() {
  // pa reiniciar el juego
  location.reload();
}
//cuando cargue todo el codigo, arranca la funcion empezarjuego
window.addEventListener("load", empezarJuego);
//Los lets son para crear variables y utilizarlas en js
//El document.getElementById() te trae el elemento desde html con el mismo id
//addEventListener('evento', funcion) es para ejecutar la funcion nombrada cuando el evento se dispara(ejemplo, cuando se hace un click)

// //aca creo las variables de los botones
// let botonAlok = document.getElementById("alok");
// let botonJota = document.getElementById("jota");
// let botonK = document.getElementById("k");
// let botonCr7 = document.getElementById("cr7");
// let botonKelly = document.getElementById("kelly");
