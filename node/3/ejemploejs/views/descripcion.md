Paso 1: Configuración del Proyecto
Primero, crea un nuevo directorio para tu proyecto y luego inicializa un proyecto de Node.js
    mkdir ejemplo-ejs
    cd ejemplo-ejs
    npm init -y

npm install express ejs


Paso 2: Configurar Express con EJS
Crea un archivo llamado app.js en el directorio del proyecto y configúralo de la siguiente manera:

    const express = require('express');
    const app = express();
    const port = 3000;

    // Configurar EJS como motor de plantillas
    app.set('view engine', 'ejs');

    // Datos de ejemplo
    const users = [
    { name: 'Cinthya', age: 34, _id: '1' },
    { name: 'Carlos', age: 29, _id: '2' },
    { name: 'Ana', age: 25, _id: '3' }
    ];

    // Ruta principal que renderiza una vista usando EJS
    app.get('/', (req, res) => {
    res.render('index', { users: users });
    });

    app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
    });

Paso 3: Crear la Vista con EJS
Crea un directorio llamado views en el mismo nivel que app.js, y dentro de este directorio, crea un archivo llamado index.ejs:
        <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lista de Usuarios</title>
    </head>
    <body>
        <h1>Usuarios</h1>
        <a href="/create">Crear un nuevo usuario</a>
        <ul>
            <% users.forEach(user => { %>
                <li>
                    <%= user.name %> - <%= user.age %> años
                    <a href="/edit/<%= user._id %>">Editar</a>
                    <a href="/delete/<%= user._id %>">Eliminar</a>
                </li>
            <% }) %>
        </ul>
    </body>
    </html>


Paso 5: Ver la Página en el Navegador
Abre tu navegador web y navega a http://localhost:3000. Deberías ver una página con la lista de usuarios que hemos definido en app.js.

¿Qué Hace Este Ejemplo?
app.set('view engine', 'ejs');: Configura EJS como el motor de plantillas para tu aplicación Express.
res.render('index', { users: users });: Renderiza la vista index.ejs, pasando los datos del array users a la plantilla.
En index.ejs, usamos las notaciones <% %> para ejecutar JavaScript y <%= %> para insertar datos dinámicos en el HTML.
Resultado:
La página mostrará una lista de usuarios con sus nombres, edades y enlaces para editar o eliminar, tal como fue diseñado en la plantilla EJS.

Si quieres modificar la lista de usuarios o cómo se presenta la información, solo debes cambiar el array users en app.js o la estructura HTML en index.ejs.

¡Eso es todo! Ahora ya tienes un ejemplo básico de cómo usar EJS con Express para generar HTML dinámico. Si necesitas más detalles o tienes alguna pregunta, estaré encantado de ayudarte.