//Importamos seaquealize
const Seaquealize = require("sequelize");

//importar configuracion de la base de datos
const db = require("../config/db");

//Importamos slug
const slug = require("slug");

//Importamos shortid
const shortid = require("shortid");

//Definimos el modelo
const usuario = db.define("usuarios",{
    id: {
        type: Seaquealize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Seaquealize.STRING
    },
    apellido: {
        type: Seaquealize.STRING
    },
    url: {
        type: Seaquealize.STRING
    }
}, {
    hooks: {
        beforeCreate(usuarios){
            console.log("Antes de insertar en la base de datos");
            //Obtenemos en nombre y lo convertimos en minuscula
            const url = slug(usuarios.nombre).toLowerCase();
            //luego le concatenamos el id
            usuarios.url = `${url}_${shortid.generate()}`;
        },
        beforeUpdate(usuarios){
            console.log("Antes de actualizar en la base ");
            const url = slug(usuarios.nombre).toLowerCase();
            usuarios.url = `${url}_${shortid.generate()}`;
        }
    }

});


//importamos el modelo para poder utilizarlo
module.exports = usuario;