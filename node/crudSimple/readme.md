Descripción General
El proyecto es una aplicación web CRUD (Create, Read, Update, Delete) que permite gestionar una lista de usuarios en una base de datos MySQL. La aplicación permite agregar nuevos usuarios, mostrar la lista de usuarios existentes, editar sus datos y eliminarlos.

Estructura del Proyecto
El proyecto tiene la siguiente estructura de archivos y carpetas:

node-mysql-crud/
├── index.js                 // Código principal del servidor
├── package.json             // Archivo de configuración de npm
├── public/
│   └── styles.css       // Estilos CSS para la interfaz
└── views/
    ├── edit.ejs             // Vista para editar usuarios
    └── index.ejs            // Vista para mostrar la lista de usuarios y formulario de creación
1. Configuración Inicial
En el archivo index.js, configuramos el servidor usando Express y conectamos la aplicación a una base de datos MySQL.
----
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Configuramos el motor de plantillas EJS
app.set('view engine', 'ejs');

// Conexión a la base de datos MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // tu usuario de MySQL
    password: 'password', // tu contraseña de MySQL
    database: 'node_crud'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the MySQL database');
    }
});
-----
Express se usa como framework de servidor web.
MySQL se conecta a una base de datos donde se almacenan los datos de los usuarios.
Body-parser permite manejar datos enviados a través de formularios HTML.


2. Vistas (EJS)
Las vistas se generan con EJS, un motor de plantillas que nos permite renderizar HTML dinámicamente.
index.ejs: Muestra la lista de usuarios y un formulario para agregar nuevos usuarios.

<!-- index.ejs -->
<h1>Lista de Usuarios</h1>
<table>
    <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Email</th>
        <th>Acciones</th>
    </tr>
    <% users.forEach(user => { %>
    <tr>
        <td><%= user.id %></td>
        <td><%= user.name %></td>
        <td><%= user.email %></td>
        <td>
            <a href="/edit/<%= user.id %>">Editar</a> |
            <a href="/delete/<%= user.id %>">Eliminar</a>
        </td>
    </tr>
    <% }); %>
</table>

<h2>Agregar Nuevo Usuario</h2>
<form action="/add" method="POST">
    <label for="name">Nombre:</label>
    <input type="text" id="name" name="name" required>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <button type="submit">Agregar</button>
</form>
edit.ejs: Muestra un formulario para editar un usuario existente.
<!-- edit.ejs -->
<h1>Editar Usuario</h1>
<form action="/update/<%= user.id %>" method="POST">
    <label for="name">Nombre:</label>
    <input type="text" id="name" name="name" value="<%= user.name %>" required>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" value="<%= user.email %>" required>
    <button type="submit">Actualizar</button>
</form>

-----
3. Rutas CRUD
El archivo index.js también define las rutas para manejar las operaciones CRUD.

Listar Usuarios (Read):
app.get('/', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.send('Error');
        } else {
            res.render('index', { users: results });
        }
    });
});
Esta ruta realiza una consulta a la base de datos para obtener todos los usuarios y los muestra en la vista index.ejs.


Agregar Usuario (Create):

app.post('/add', (req, res) => {
    const { name, email } = req.body;
    const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(query, [name, email], (err) => {
        if (err) {
            console.error('Error adding user:', err);
            res.send('Error');
        } else {
            res.redirect('/');
        }
    });
});

Esta ruta maneja la adición de un nuevo usuario, insertando los datos proporcionados a través del formulario en la base de datos.

Editar Usuario (Update):

app.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching user:', err);
            res.send('Error');
        } else {
            res.render('edit', { user: results[0] });
        }
    });
});

app.post('/update/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    db.query(query, [name, email, id], (err) => {
        if (err) {
            console.error('Error updating user:', err);
            res.send('Error');
        } else {
            res.redirect('/');
        }
    });
});

Las rutas anteriores permiten editar un usuario existente: una para mostrar el formulario de edición y otra para manejar la actualización en la base de datos.

app.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [id], (err) => {
        if (err) {
            console.error('Error deleting user:', err);
            res.send('Error');
        } else {
            res.redirect('/');
        }
    });
});

Esta ruta elimina un usuario de la base de datos usando su ID.

4. Estilos CSS
Los estilos están definidos en el archivo public/css/styles.css:
body {
    font-family: Arial, sans-serif;
    margin: 20px;
    padding: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

table, th, td {
    border: 1px solid black;
}

th, td {
    padding: 8px;
    text-align: left;
}

form {
    margin-top: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="text"], input[type="email"] {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    box-sizing: border-box;
}

button {
    padding: 10px 15px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
