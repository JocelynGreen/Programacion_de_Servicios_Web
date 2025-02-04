/*HERNANDEZ RAMIREZ YARELY JOCELYN*/ 


const app = require('./app');

// Define el puerto en el que el servidor escuchará las peticiones
const port = 8080;

// Función asíncrona para iniciar el servidor
(async () => {
    // Imprime en consola un mensaje indicando que el servidor está arrancando
    console.log('Starting server...');
    
    // El servidor escucha en el puerto definido (8080) y cuando esté corriendo, ejecuta el callback
    app.listen(port, () => {
        // Una vez que el servidor esté corriendo, imprime el mensaje con el puerto en el que está activo
        console.log(`server is running on port ${port}`);
    });
})();