const express = require("express");
const app = express();
const path=require('path')


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });

  
  app.use("/js", express.static(path.resolve("js")));//Pagina principal del administrador
  app.use("/css", express.static(path.resolve("css")));//Pagina principal del administrador
  app.use("/assets", express.static(path.resolve("assets")));//Pagina principal del administrador


app.listen(4000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});

module.exports=app