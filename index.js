const express = require("express");

const app = express();

//cada vez que se solicite un recurso, el get("direccion", funcion a procesar) va a hacer que suceda tal cosa
app.get("/", (req, res) => {
  res.send("Hola");
});
app.listen(8080, () => {
  console.log("servidor funcionando");
});
