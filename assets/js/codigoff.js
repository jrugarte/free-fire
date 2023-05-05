const sectionTitulo = document.getElementById("titulo");
const sectionEncabezado = document.getElementById("encabezado");
const personajeSelect = document.getElementById("personaje-select");
const enemigoSelect = document.getElementById("enemigo-select");
const sectionAtaques = document.getElementById("ataques");
const sectionTextop = document.getElementById("texto-personajes");
const sectionReinicio = document.getElementById("reiniciar-juego");
const sectionSelectButton = document.getElementById("select-button");
const divAtaques = document.getElementById("notif-ataques");
const pvJugador = document.getElementById("pv-jugador");
const pvEnemigo = document.getElementById("pv-enemigo");
const botonSelect = document.getElementById("Seleccionar");
const botonReinicio = document.getElementById("reinicio");
const divBotones = document.getElementById("div-botones");
// creo la seccion y el canvas
const sectionVerMapa = document.getElementById("ver-mapa");
const mapa = document.getElementById("mapa");
//aca creo las variables de cada check
const spanPersonaje = document.getElementById("personaje");

const sectionPersonaje = document.getElementById("seleccionar-personaje");
const spanEnemigo = document.getElementById("personaje-enemigo");

const sectionMensajes = document.getElementById("resultado");

const AtaqueDelJugador = document.getElementById("ataque-jugador");
const AtaqueDelEnemigo = document.getElementById("ataque-enemigo");

// formato para crear un Array, con los corchetes cuadrados[]:
let Jugadores = [];

let ataqueJugador;
let ataqueEnemigo;
let opcionDeJugador;
let inputJotaerre = document.getElementById("L4F~Jotaerre");
let inputJuanserino = document.getElementById("L4F~Juanserino");
let inputAlesi = document.getElementById("L4F~Alesi");
let inputEnzinix = document.getElementById("L4F~Enzinix");
let inputAlex = document.getElementById("L4F~Alex");
let playerSelected;
let miJugadorObjeto;
let opcionAtaques;
let botonDisparo;
let botonGranada;
let botonPared;
// creo la variable lienzo, para utilizarlo en el canvas y dibujar:
let lienzo = mapa.getContext("2d");
let intervalo;
let mapaBg = new Image();
mapaBg.src = "./assets/images/mapaBg.jpeg";
let vidaJugador = 200;
let vidaEnemigo = 200;
let enemigoAleatorioName;
const alturaMax = 490;
let alturaBuscada;
let anchoMapa = window.innerWidth - 20;
alturaBuscada = (anchoMapa * 490) / 450;
const anchoMaxMapa = 490;

if (anchoMapa > anchoMaxMapa) {
  anchoMapa = anchoMaxMapa - 20;
}
if (alturaBuscada > alturaMax) {
  alturaBuscada = alturaMax - 20;
}
mapa.width = anchoMapa;
mapa.height = alturaBuscada;
// creando una clase: Una clase tiene un constructor, el cual indica las propiedades del objeto a ser creado en la clase(nombre, foto, vida, ataques, etc)
class Jugador {
  constructor(nombre, vida, foto) {
    // Las propiedades se guardan en el constructor con el siguiente formato:
    this.nombre = nombre;
    this.vida = vida;
    this.foto = foto;
    this.ataques = [];
    this.ancho = 80;
    this.alto = 80;
    this.x = aleatorio(0, mapa.width - this.ancho);
    this.y = aleatorio(0, mapa.height - this.alto);
    this.mapaFoto = new Image();
    this.mapaFoto.src = foto;
    this.velocidadX = 0;
    this.velocidadY = 0;
  }
  pintarJugador() {
    // Cuando el valor de una propiedad de un objeto es una función se le llama: método.
    // El método, entonces, es una función que está asociada a un objeto.
    //.drawImage(variable donde esta la img, x,y, ancho y alto) ingresa una imagen dentro del canvas:
    lienzo.drawImage(this.mapaFoto, this.x, this.y, this.ancho, this.alto);
  }
}
// Creo una variable y le asigno una clase, en este caso Jugador, y le indico las propiedades:
let L4FJotaerre = new Jugador("L4F~Jotaerre", "200", "./assets/images/jr2.png");
let L4FJuanse = new Jugador("L4F~Juanserino", "200", "./assets/images/js.png");
let L4FAlesi = new Jugador("L4F~Alesi", "200", "./assets/images/alesi.png");
let L4FEnzo = new Jugador("L4F~Enzinix", "200", "./assets/images/enzinix.png");
let L4FAlex = new Jugador("L4F~Alex", "200", "./assets/images/alex.png");
let EnemigoL4FJotaerre = new Jugador(
  "L4F~Jotaerre",
  "200",
  "./assets/images/jr2.png"
);
let EnemigoL4FJuanse = new Jugador(
  "L4F~Juanserino",
  "200",
  "./assets/images/js.png"
);
let EnemigoL4FAlesi = new Jugador(
  "L4F~Alesi",
  "200",
  "./assets/images/alesi.png"
);
let EnemigoL4FEnzo = new Jugador(
  "L4F~Enzinix",
  "200",
  "./assets/images/enzinix.png"
);
let EnemigoL4FAlex = new Jugador("L4F~Alex", "200", "./assets/images/alex.png");

//aca ingreso(.push)los ataques de cada jugador(objeto), indicandole esa informacion y guardandola en el array de ataques[]:
L4FJotaerre.ataques.push(
  { nombre: "🎯", id: "disparo-jugador" },
  { nombre: "🏃🏽‍♂️", id: "granada-jugador" },
  { nombre: "🧊", id: "tirar-pared" }
);
L4FJuanse.ataques.push(
  { nombre: "🎯", id: "disparo-jugador" },
  { nombre: "🏃🏽‍♂️", id: "granada-jugador" },
  { nombre: "🧊", id: "tirar-pared" }
);
L4FAlesi.ataques.push(
  { nombre: "🎯", id: "disparo-jugador" },
  { nombre: "🏃🏽‍♂️", id: "granada-jugador" },
  { nombre: "🧊", id: "tirar-pared" }
);
L4FEnzo.ataques.push(
  { nombre: "🎯", id: "disparo-jugador" },
  { nombre: "🏃🏽‍♂️", id: "granada-jugador" },
  { nombre: "🧊", id: "tirar-pared" }
);
L4FAlex.ataques.push(
  { nombre: "🎯", id: "disparo-jugador" },
  { nombre: "🏃🏽‍♂️", id: "granada-jugador" },
  { nombre: "🧊", id: "tirar-pared" }
);

// Aca ingreso(.push)los objetos al Array jugadores[]:
Jugadores.push(L4FAlesi, L4FAlex, L4FEnzo, L4FJotaerre, L4FJuanse);

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
  sectionVerMapa.style.display = "none";

  // Por cada uno(forEach) de los elementos que haya en el array(Jugadores), hace lo q sigue(funcion):
  Jugadores.forEach((Jugador) => {
    // lo siguiente es llamado Template literario
    // el ${} sirve para aplicar los valores de las variables en el texto que tengamos:
    opcionDeJugador = ` <input type="radio" name="personaje" id= ${Jugador.nombre} />
      <label class="select-jugador" for=${Jugador.nombre} >
     <p><strong>${Jugador.nombre}</strong></p>
     <img src=${Jugador.foto} alt=${Jugador.nombre} />
      </label>`;
    // aca mostramos en el html la variable opcionDeJugador, la cual contiene lo anteriormente indicado:
    // el += hace que muestre todas las opciones que estan en la variable (caso contrario, se va a mostrar una sola)
    sectionPersonaje.innerHTML += opcionDeJugador;
    inputJotaerre = document.getElementById("L4F~Jotaerre");
    inputJuanserino = document.getElementById("L4F~Juanserino");
    inputAlesi = document.getElementById("L4F~Alesi");
    inputEnzinix = document.getElementById("L4F~Enzinix");
    inputAlex = document.getElementById("L4F~Alex");
  });

  botonSelect.addEventListener("click", SelectPlayer);
  //aca agrego los eventos a los botones de atk, def y reinicio
  botonReinicio.addEventListener("click", reiniciar);
}
function SelectPlayer() {
  let jugar = 1;

  if (inputJotaerre.checked) {
    spanPersonaje.innerHTML = inputJotaerre.id;
    playerSelected = inputJotaerre.id;
  } else if (inputJuanserino.checked) {
    spanPersonaje.innerHTML = inputJuanserino.id;
    playerSelected = inputJuanserino.id;
  } else if (inputAlesi.checked) {
    spanPersonaje.innerHTML = inputAlesi.id;
    playerSelected = inputAlesi.id;
  } else if (inputEnzinix.checked) {
    spanPersonaje.innerHTML = inputEnzinix.id;
    playerSelected = inputEnzinix.id;
  } else if (inputAlex.checked) {
    spanPersonaje.innerHTML = inputAlex.id;
    playerSelected = inputAlex.id;
  } else {
    alert("Por favor, selecciona un jugador.");
    jugar = 0;
  }
  if (jugar == 1) {
    extraerAtaques(playerSelected);
    selectEnemy();
  }
}
function extraerAtaques(playerSelected) {
  let ataques;
  // mientras que la variable i sea menor a la longitud max del array jugadores[](for...), si el jugador seleccionado coincide con el nombre del indice leído en el for del array jugadores[](if...), guardo los ataques del jugador leido desde el array jugadores[], en la variable ataques:
  for (let i = 0; i < Jugadores.length; i++) {
    if (playerSelected === Jugadores[i].nombre) {
      ataques = Jugadores[i].ataques;
    }
  }
  mostrarAtaques(ataques);
}
function mostrarAtaques(ataques) {
  // por cada ataque que se encuentre en el array ataques, creo un boton con su determinado id y nombre:
  ataques.forEach((ataque) => {
    opcionAtaques = `<button class="botones" id=${ataque.id}> ${ataque.nombre} </button>`;
    // inyecto los botones creados en el divBotones:
    divBotones.innerHTML += opcionAtaques;
  });
  // aca inyecto los botones y les agrego los eventos con su determinada funcion, ya que anteriormente no estaban creados en el html:
  botonDisparo = document.getElementById("disparo-jugador");
  botonGranada = document.getElementById("granada-jugador");
  botonPared = document.getElementById("tirar-pared");
  botonDisparo.addEventListener("click", disparar);
  botonGranada.addEventListener("click", escapar);
  botonPared.addEventListener("click", ponerPared);
  // tener cuidado siempre en donde declaramos los botones y funciones, ya que si se declaran dentro de un forEach o un if o un for que no corresponde, no me va a leer las funciones y no las va a correr, asi mismo con los botones.
}

function selectEnemy(enemigo) {
  sectionPersonaje.style.display = "none";
  sectionEncabezado.style.display = "none";
  sectionSelectButton.style.display = "none";
  sectionTitulo.style.display = "none";
  pvJugador.innerHTML = vidaJugador;
  pvEnemigo.innerHTML = vidaEnemigo;

  iniciarMapa();
  // en la siguiente linea de codigo lo que hago es darle un valor limite a la funcion aleatorio, en vez de darle un numero fijo, le doy un valor que ya tengo(una "unica verdad"), que es el length del array jugadores(el -1 es para indicar el valor del indice del mismo, ya que se comienza a contabilizar desde cero y no desde uno):
  // enemigoAleatorio = aleatorio(0, Jugadores.length - 1);
  enemigoAleatorioName;

  // // en la siguiente linea, lo que hacemos es, teniendo en cuenta el valor que me trae enemigoAleatorio, traer la propiedad 'nombre' del indice seleccionado del array Jugadores:
  spanEnemigo.innerHTML = enemigo.nombre;
  enemigoAleatorioName = enemigo.nombre;
}
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//aca van los ataques
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
    botonDisparo.style.background = "#00000094";
    botonGranada.style.background = "#00000094";
    botonPared.style.background = "#00000094";

    sectionReinicio.style.display = "flex";
  } else if (vidaJugador == 0) {
    alert("PERDISTE");
    sectionMensajes.innerHTML = "Mejor suerte para la pócima";

    botonDisparo.disabled = true;
    botonGranada.disabled = true;
    botonPared.disabled = true;
    botonDisparo.style.background = "#00000094";
    botonGranada.style.background = "#00000094";
    botonPared.style.background = "#00000094";

    sectionReinicio.style.display = "flex";
  } else if (vidaEnemigo == 0) {
    alert("BOOYAH!!");
    sectionMensajes.innerHTML = "BOOYAH!!";

    botonDisparo.disabled = true;
    botonGranada.disabled = true;
    botonPared.disabled = true;
    botonDisparo.style.background = "#00000094";
    botonGranada.style.background = "#00000094";
    botonPared.style.background = "#00000094";

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
function pintarCanvas() {
  miJugadorObjeto.x = miJugadorObjeto.x + miJugadorObjeto.velocidadX;
  miJugadorObjeto.y = miJugadorObjeto.y + miJugadorObjeto.velocidadY;
  // la siguiente funcion clearRect(posic. desde, posic. hasta) limpia lo que hay en el lienzo de canvas
  lienzo.clearRect(0, 0, mapa.width, mapa.height);
  lienzo.drawImage(mapaBg, 0, 0, mapa.width, mapa.height);
  //.drawImage(variable donde esta la img, x,y, ancho y alto) ingresa una imagen dentro del canvas:
  miJugadorObjeto.pintarJugador();
  EnemigoL4FAlesi.pintarJugador();
  EnemigoL4FAlex.pintarJugador();
  EnemigoL4FEnzo.pintarJugador();
  EnemigoL4FJotaerre.pintarJugador();
  EnemigoL4FJuanse.pintarJugador();
  if (miJugadorObjeto.velocidadX !== 0 || miJugadorObjeto.velocidadY !== 0) {
    chequearColision(EnemigoL4FJotaerre);
    chequearColision(EnemigoL4FAlesi);
    chequearColision(EnemigoL4FAlex);
    chequearColision(EnemigoL4FJuanse);
    chequearColision(EnemigoL4FEnzo);
  }
}
function chequearColision(enemigo) {
  const arribaEnemigo = enemigo.y;
  const abajoEnemigo = enemigo.y + enemigo.alto;
  const derechaEnemigo = enemigo.x + enemigo.ancho;
  const izquierdaEnemigo = enemigo.x;

  const arribaJugador = miJugadorObjeto.y;
  const abajoJugador = miJugadorObjeto.y + miJugadorObjeto.alto;
  const derechaJugador = miJugadorObjeto.x + miJugadorObjeto.ancho;
  const izquierdaJugador = miJugadorObjeto.x;

  if (
    abajoJugador < arribaEnemigo ||
    arribaJugador > abajoEnemigo ||
    derechaJugador < izquierdaEnemigo ||
    izquierdaJugador > derechaEnemigo
  ) {
    return;
  }
  stopMovement();
  alert("Sale PVP contra " + enemigo.nombre);
  selectEnemy(enemigo);

  sectionVerMapa.style.display = "none";
  sectionAtaques.style.display = "flex";
  personajeSelect.style.display = "flex";
  enemigoSelect.style.display = "flex";
  sectionAtaques.style.display = "flex";
  sectionTextop.style.display = "flex";
  divAtaques.style.display = "grid";
  pvJugador.style.display = "flex";
  pvEnemigo.style.display = "flex";
}
function moverDerecha() {
  miJugadorObjeto.velocidadX = 5;
}
function moverIzquierda() {
  miJugadorObjeto.velocidadX = -5;
}
function moverArriba() {
  miJugadorObjeto.velocidadY = -5;
}
function moverAbajo() {
  miJugadorObjeto.velocidadY = 5;
}
function stopMovement() {
  miJugadorObjeto.velocidadX = 0;
  miJugadorObjeto.velocidadY = 0;
}
function keyPressed(event) {
  // switchkey manera de hacer varios condicionales if juntos
  switch (event.key) {
    case "ArrowUp":
      moverArriba();
      break;
    case "ArrowDown":
      moverAbajo();
      break;
    case "ArrowLeft":
      moverIzquierda();
      break;
    case "ArrowRight":
      moverDerecha();
      break;
    default:
      break;
  }
}
function iniciarMapa() {
  sectionVerMapa.style.display = "flex";
  // mapa.width = 490;
  // mapa.height = 450;
  miJugadorObjeto = obtenerObjetoJugador(playerSelected);
  //la funcion setInterval() hace que la funcion que este (dentro) se ejecute en un intervalo de los milisegundos indicados:
  intervalo = setInterval(pintarCanvas, 50);
  window.addEventListener("keydown", keyPressed);
  window.addEventListener("keyup", stopMovement);
}
function obtenerObjetoJugador() {
  for (let i = 0; i < Jugadores.length; i++) {
    if (playerSelected === Jugadores[i].nombre) {
      return Jugadores[i];
    }
  }
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
