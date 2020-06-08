//Importamos sequelize
const Sequelize = require("sequelize");

//Importamos una libreria que ya esta incluida en express
require("dotenv").config({ path: "variables.env" });

//Establecer los parametros de la conexion a la base de datos
const db = new Sequelize(
    "UsuariosProyecto", 
   process.env.MYSQLUSER,
  process.env.MYSQLPASS,
  {
    host: "localhost",
    dialect: "mysql",
    port: process.env.MYSQLPORT,
    operatorAliases: false,
    define: {
      timestamps: false,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

module.exports = db;