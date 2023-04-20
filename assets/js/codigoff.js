let sectionEncabezado = document.getElementById("encabezado");
let personajeSelect = document.getElementById("personaje-select");
let enemigoSelect = document.getElementById("enemigo-select");
let sectionAtaques = document.getElementById("ataques");
let sectionTextop = document.getElementById("texto-personajes");
let sectionReinicio = document.getElementById("reiniciar-juego");
let sectionSelectButton = document.getElementById("select-button");
let divAtaques = document.getElementById("notif-ataques");
let pvJugador = document.getElementById("pv-jugador");
let pvEnemigo = document.getElementById("pv-enemigo");
let botonSelect = document.getElementById("Seleccionar");
let botonDisparo = document.getElementById("disparo-jugador");
let botonGranada = document.getElementById("granada-jugador");
let botonPared = document.getElementById("tirar-pared");
let botonReinicio = document.getElementById("reinicio");

//aca creo las variables de cada check
let Jotaerre = document.getElementById("Jotaerre");
let Juanserino = document.getElementById("Juanserino");
let Alesi = document.getElementById("Alesi");
let Enzinix = document.getElementById("Enzinix");
let Alex = document.getElementById("Alex");
let spanPersonaje = document.getElementById("personaje");

let sectionPersonaje = document.getElementById("seleccionar-personaje");
let spanEnemigo = document.getElementById("personaje-enemigo");

let sectionMensajes = document.getElementById("resultado");

let AtaqueDelJugador = document.getElementById("ataque-jugador");
let AtaqueDelEnemigo = document.getElementById("ataque-enemigo");

let ataqueJugador;
let ataqueEnemigo;
let vidaJugador = 200;
let vidaEnemigo = 200;
let enemigoAleatorioName;
let enemigoAleatorio;

function empezarJuego() {
  sectionEncabezado.style.display = "flex";
  personajeSelect.style.display = "none";
  enemigoSelect.style.display = "none";
  sectionAtaques.style.display = "none";
  sectionTextop.style.display = "none";
  sectionReinicio.style.display = "none";
  sectionSelectButton.style.display = "flex";
  divAtaques.style.display = "none";
  pvJugador.style.display = "none";
  pvEnemigo.style.display = "none";

  botonSelect.addEventListener("click", SelectPlayer);
  //aca agrego los botones de atk y def(1)
  botonDisparo.addEventListener("click", disparar);
  botonGranada.addEventListener("click", escapar);
  botonPared.addEventListener("click", ponerPared);
  botonReinicio.addEventListener("click", reiniciar);
}
function SelectPlayer() {
  //seleccionar jugador
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
  sectionPersonaje.style.display = "none";
  sectionEncabezado.style.display = "none";
  personajeSelect.style.display = "flex";
  enemigoSelect.style.display = "flex";
  sectionAtaques.style.display = "flex";
  sectionTextop.style.display = "flex";
  sectionSelectButton.style.display = "none";
  divAtaques.style.display = "grid";
  pvJugador.style.display = "flex";
  pvEnemigo.style.display = "flex";
  pvJugador.innerHTML = vidaJugador;
  pvEnemigo.innerHTML = vidaEnemigo;
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
  ataqueJugador = "PARED";
  ataqueEnemigoAleatorio();
}
function ataqueEnemigoAleatorio() {
  pvJugador.style.display = "flex";
  pvEnemigo.style.display = "flex";
  let ataqueAleatorio = aleatorio(1, 3);

  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "DISPARO";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "ESCAPA";
  } else {
    ataqueEnemigo = "PARED";
  }
  combate();
}

function combate() {
  pvJugador.style.display = "flex";
  pvEnemigo.style.display = "flex";

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
      pvJugador.innerHTML = vidaJugador;
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
      pvEnemigo.innerHTML = vidaEnemigo;
    }
    if (ataqueEnemigo === "PARED") {
      crearMensaje("Zafó");
    }
    if (ataqueEnemigo === "DISPARO") {
      crearMensaje("Pelea de mancos");
      vidaJugador = vidaJugador - 50;
      vidaEnemigo = vidaEnemigo - 50;
      pvJugador.innerHTML = vidaJugador;
      pvEnemigo.innerHTML = vidaEnemigo;
    }
  }
  chequeoVidas();
}
function chequeoVidas() {
  if (vidaEnemigo == 0 && vidaJugador == 0) {
    alert("EMPATE");
    sectionMensajes.innerHTML = "EMPATE";

    botonDisparo.disabled = true;
    botonGranada.disabled = true;
    botonPared.disabled = true;

    sectionReinicio.style.display = "flex";
  } else if (vidaJugador == 0) {
    alert("PERDISTE");
    sectionMensajes.innerHTML = "Mejor suerte para la pócima";

    botonDisparo.disabled = true;
    botonGranada.disabled = true;
    botonPared.disabled = true;

    sectionReinicio.style.display = "flex";
  } else if (vidaEnemigo == 0) {
    alert("BOOYAH!!");
    sectionMensajes.innerHTML = "BOOYAH!!";

    botonDisparo.disabled = true;
    botonGranada.disabled = true;
    botonPared.disabled = true;

    sectionReinicio.style.display = "flex";
  }
}

function crearMensaje(resultado) {
  // creo los parrafos que van a mostrar los resultados y los ataques:
  let nuevoAtaqueJugador = document.createElement("p");
  let nuevoAtaqueEnemigo = document.createElement("p");
  // le doy el contenido a cada parrafo:
  sectionMensajes.innerHTML = resultado;
  nuevoAtaqueJugador.innerHTML = "Atacaste con: " + ataqueJugador;
  nuevoAtaqueEnemigo.innerHTML =
    enemigoAleatorioName + " ataca con: " + ataqueEnemigo;
  // indico donde va cada parrafo:
  AtaqueDelJugador.appendChild(nuevoAtaqueJugador);
  AtaqueDelEnemigo.appendChild(nuevoAtaqueEnemigo);

  // document.createElement hace justamente lo que dice, crea el elemento indicado entre parentesis, en este caso un parrafo("p")
  // variable.appendChild hace que mandemos lo que hay entre parentesis a la variable, en este caso indicamos que agregamos el parrafo a la secicon mensajes.
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
