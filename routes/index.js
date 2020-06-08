//Importamos express en route
const express = require("express");
//Inicializamos el metodo router
const router = express.Router();

/*Construir las rutas disponibles para el servidor
las rutas deben exportarse para poder ser usada en otros archivos
*/
module.exports = function(){
    router.get("/"); //utilizamos un metodo get porque cada vez que solicitamos informacion a un servidor utilizamos get

    return router;
}