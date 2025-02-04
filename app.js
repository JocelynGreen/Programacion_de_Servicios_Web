/*HERNANDEZ RAMIREZ YARELY JOCELYN*/ 

// Importa el módulo 'express' para crear una aplicación web
const express = require('express');

// Crea una instancia de la aplicación Express
const app = express();

// Configura Express para que pueda manejar datos en formato JSON
app.use(express.json());

// Define una ruta GET para el endpoint raíz ('/')
app.get('/', (req, res) => {
    // Responde con un mensaje 'hello world!' cuando se hace una solicitud GET a '/'
    res.send('hello world!');
});

// Exporta la instancia de la aplicación Express para usarla en otros archivos
module.exports = app;