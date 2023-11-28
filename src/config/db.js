//Establecer la conexion con un Dialecto = MySQL 
const { Sequelize } = require('sequelize');
//Estas son para render 
const db = process.env.MYSQLDATABASE || 'usuarios'; // Nombre de la base de datos
const users = process.env.MYSQLUSER || 'root';
const password = process.env.MYSQLPASSWORD || '';

//Instancia
const sequelize = new Sequelize(db, users, password, {
  host: 'localhost',
  dialect: 'mysql'
});

try {
  sequelize.authenticate();
  console.log('Conexión a la base de datos exitosa');
} catch (error) {
  console.error('No se pudo establecer la conexión', error);
}
//Para poder usar la instancia de la conexión en los controladores
module.exports = sequelize;