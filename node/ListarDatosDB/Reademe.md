Paso 1: Configuración del Proyecto
Primero, asegúrate de tener Node.js y MongoDB instalados en tu sistema. Luego, crea un nuevo proyecto y configura el entorno:

bash
Copiar código
    mkdir listar-usuarios
    cd listar-usuarios
    npm init -y
    Instala las dependencias necesarias:

bash
Copiar código
    npm install express mongoose ejs
Paso 2: Configurar Express y Conectar a MongoDB
    Crea un archivo app.js y configura Express junto con la conexión a MongoDB usando Mongoose.

javascript
Copiar código
    const express = require('express');
    const mongoose = require('mongoose');
    const app = express();
    const port = 3000;

    // Configurar EJS como motor de plantillas
    app.set('view engine', 'ejs');

    // Conectar a la base de datos de MongoDB
    mongoose.connect('mongodb://localhost:27017/usuariosDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }).then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB', err));

    // Definir un esquema y modelo para los usuarios
    const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    });

    const User = mongoose.model('User', userSchema);

    // Ruta principal para listar usuarios
    app.get('/', async (req, res) => {
    try {
        const users = await User.find(); // Obtener todos los usuarios de la base de datos
        res.render('index', { users: users }); // Renderizar la vista 'index.ejs' con los datos de usuarios
    } catch (err) {
        console.error('Error al obtener usuarios:', err);
        res.status(500).send('Error al obtener usuarios');
    }
    });

    // Iniciar el servidor
    app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
    });
Paso 3: Crear la Vista con EJS
En la raíz del proyecto, crea un directorio llamado views y dentro de este, un archivo llamado index.ejs:

html
Copiar código
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
                    </li>
                <% }) %>
            </ul>
        </body>
        </html>
Paso 4: Poblar la Base de Datos (Opcional)
Para probar la aplicación, puedes agregar algunos datos a la base de datos de MongoDB. Usa el siguiente script para insertar algunos usuarios de ejemplo en MongoDB:

javascript
Copiar código
    const mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost:27017/usuariosDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });

    const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    });

    const User = mongoose.model('User', userSchema);

    const usuarios = [
    { name: 'Cinthya', age: 34 },
    { name: 'Carlos', age: 29 },
    { name: 'Ana', age: 25 }
    ];

    User.insertMany(usuarios)
    .then(() => {
        console.log('Usuarios agregados');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error al agregar usuarios:', err);
        mongoose.connection.close();
    });
Guarda este script como populate.js y ejecútalo con Node.js:

bash
Copiar código
node populate.js
Paso 5: Ejecutar la Aplicación
Vuelve a la terminal, asegúrate de estar en el directorio del proyecto, y ejecuta el servidor:

bash
Copiar código
node app.js
Paso 6: Ver la Página en el Navegador
Abre tu navegador y navega a http://localhost:3000. Deberías ver una lista de usuarios obtenida de tu base de datos de MongoDB.

Resumen:
Configuramos un servidor Express.
Conectamos a una base de datos MongoDB usando Mongoose.
Definimos un modelo de usuario y recuperamos datos desde MongoDB.
Renderizamos esos datos en una vista HTML usando EJS.
Esta aplicación es básica, pero cubre los conceptos fundamentales para interactuar con MongoDB y renderizar datos en HTML usando Express y EJS. Si tienes más preguntas o necesitas añadir más funcionalidades, ¡avísame!