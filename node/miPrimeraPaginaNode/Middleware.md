const express = require('express');
const app = express();
    require('express'): Importa el módulo Express.
    express(): Crea una instancia de una aplicación Express, que se almacena en app.
Middleware en Acción
    // Middleware que se ejecuta en cada solicitud
    app.use((req, res, next) => {
    console.log('Middleware ejecutado');
    next(); // Pasa al siguiente middleware o ruta
    });

    app.use(...): Define un middleware. app.use() es una forma general de agregar middleware que se ejecutará para todas las rutas y métodos HTTP (GET, POST, etc.).

    Función middleware:

    (req, res, next): Esta función es el middleware en sí. Recibe tres argumentos:
    req: El objeto de solicitud, que contiene detalles sobre la solicitud HTTP que se está haciendo (como la URL, los parámetros, etc.).
    res: El objeto de respuesta, que se usa para enviar una respuesta al cliente.
    next: Una función que, cuando se llama, le dice a Express que continúe con el siguiente middleware o manejador de ruta en la pila.
    console.log('Middleware ejecutado'): Esta línea simplemente imprime un mensaje en la consola cada vez que se recibe una solicitud. Esto te permite ver que el middleware ha sido ejecutado.

    next(): Este es el punto clave. Llama a next() para indicar a Express que el middleware ha terminado su trabajo y que debe pasar al siguiente middleware en la pila, o al siguiente manejador de ruta. Si no llamas a next(), la solicitud se quedará "colgada" y el servidor no responderá.

Ruta Principal
    // Ruta principal
    app.get('/', (req, res) => {
    res.send('¡Hola, Mundo!');
    });


    app.get('/'): Define una ruta GET para la URL raíz (/).

    (req, res): La función de callback que maneja la solicitud cuando alguien accede a http://localhost:3000/.
    
    res.send('¡Hola, Mundo!'): Envía la respuesta "¡Hola, Mundo!" al cliente.

Iniciar el Servidor

    app.listen(3000, () => {
    console.log('Servidor en ejecución en http://localhost:3000');
    });

    app.listen(3000, ...): Inicia el servidor en el puerto 3000 y comienza a escuchar solicitudes.
    Callback: La función de callback aquí solo imprime un mensaje en la consola para que sepas que el servidor está funcionando.


¿Qué Es un Middleware?
    En Express, un middleware es una función que se ejecuta durante el ciclo de vida de una solicitud HTTP, y puede realizar tareas como:

Modificar el objeto req o res.
    Terminar el ciclo de solicitud/respuesta enviando una respuesta al cliente.
    Pasar el control al siguiente middleware o ruta en la pila llamando a next().
    En el ejemplo que diste:

    Cuando se recibe una solicitud en el servidor, primero se ejecuta el middleware definido con app.use(...).
    El middleware imprime un mensaje en la consola y luego llama a next() para pasar el control a la siguiente ruta o middleware.
    Si la solicitud es para la ruta '/', se ejecuta el manejador de la ruta app.get('/'), que responde con "¡Hola, Mundo!".
¿Por Qué Son Útiles los Middlewares?
    Los middlewares permiten agregar lógica común o repetitiva que debe ejecutarse en múltiples rutas, como autenticación, manejo de errores, logging, y más. Por ejemplo, podrías tener un middleware que verifica si un usuario está autenticado antes de permitir el acceso a ciertas rutas, o un middleware que registra cada solicitud para propósitos de auditoría.

Resumen:
    app.use(...): Define un middleware que se ejecuta en cada solicitud.
    next(): Indica a Express que pase al siguiente middleware o manejador de ruta.
    Middlewares: Son funciones flexibles y potentes que te permiten manejar las solicitudes y respuestas de forma modular y reutilizable.