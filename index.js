//Importar los modulos de express.js
const express =  require("express"); //Exprees estara accesible atraves de esta variable

//Creamos un servidor de exprees
const app = express(); // Creamos una instancia de express por medio de la variable app
//inicializamos un servidor de express, todas las variables deben ser const o let

//Inicializamos el servidor en un puerto especifico
app.listen(7000, ()=>{
    console.log("Servidor inicializado en el puerto 7000");
});

