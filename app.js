const express = require('express');
const routUsuarios = require('./src/routes/usuarios.route')

const app = express()
const puerto = process.env.PORT || 3000;

//Configuration del servidor
 app.use(express.json())
 app.use('/socios/v2/users', routUsuarios);

 //Ejecutar el servidor
app.listen(puerto,()=>{
    console.log('Servidor escuchando en el puerto', puerto);
});