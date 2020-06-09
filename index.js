//Importar los modulos de express.js
const express =  require("express"); //Exprees estara accesible atraves de esta variable

//Importar Handlebars
const exphbs = require("express-handlebars");

//Importamos todas las rutas disponibles
const routes = require("./routes");

//Creamos la conexion con la base de datos
const db = require("./config/db");

//Importamos los modelos
require("./models/Usuario");

/* Realizar la conexion a la base de datos
Sequelize se conecta mediante un mecanismo que se llama promise
Esta tiene 3 estados cuando esta en proceso, cuando se cumplio y la rechazaron
*/
db.sync()
  .then(()=> console.log("Conectado con el servidor de base de datos"))
  .catch(error => console.log(error));

//Creamos un servidor de exprees
const app = express(); /*Creamos una instancia de express por medio de la variable app
inicializamos un servidor de express, todas las variables deben ser const o let*/

//Indicar el template engine a utilizar (Handlebars)
app.engine("hbs", exphbs({
  defaultLayout: "main",
  extname: ".hbs"
}));

app.set("view engine", "hbs");

//Indicamos a express donde estan las rutas del servidor
app.use("/", routes());

//Inicializamos el servidor en un puerto especifico
app.listen(7000, ()=>{
    console.log("Servidor inicializado en el puerto 7000");
});

