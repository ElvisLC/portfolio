const express = require("express");
const app = express();
const path = require("path");

app.listen(4000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});

app.use(express.json());

app.use("/", express.static(path.resolve("views/main")))
app.use("/assets", express.static(path.resolve("views/assets")))
app.use("/src", express.static(path.resolve("views/src")))
app.use("/views", express.static(path.resolve("views")))



module.exports=app
