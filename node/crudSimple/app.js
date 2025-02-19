const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

/*
Middleware para procesar datos enviados en el cuerpo de la solicitud, particularmente útil para manejar 
datos enviados desde formularios HTML.
*/ 
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
//Analizar los datos del cuerpo de las solicitudes HTTP, específicamente los datos 
//que provienen de formularios HTML enviados a través de la propiedad POST

// Configuramos el motor de plantillas
app.set('view engine', 'ejs');

// Conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',//server
    user: 'root', // tu usuario de MySQL
    password: '123456', // tu contraseña de MySQL
    database: 'node_crud',//Nombre base de datos
    port: 3306//puesto
});

//Validacion de la conexion a la DB
db.connect(err => {
    if (err) {
        console.error('Error al conectar la base de datos:', err);
    } else {
        console.log('Base de datos conectada');
    }
});

// Rutas y lógica para CRUD van aquí

// Iniciar el servidor
const port = 3009;
app.listen(port, () => {
    console.log(`Server funcional en el puerto http://localhost:${port}`);
});


// Mostrar lista de usuarios
app.get('/', (req, res) => {
    //Consulata a la base se datos
    const query = 'SELECT * FROM users';
    //con la conexion trabajamos 
    db.query(query, (err, results) => {
        if (err) {
            //error en consola
            console.error('Error al recuperar usuarios:', err);
            //envia el error a el usuario
            //res.send Envía una respuesta de varios tipos.
            res.send('Error, no se recuperan los datos');
        } else {
            // res.render Representa una plantilla de vista.
            /*
                Renderiza la vista index.ejs, pasando los resultados de la consulta en 
                el objeto { users: results }, para mostrar los datos obtenidos.
            */
            res.render('index', { users: results });
        }
    });
});

// Agregar nuevo usuario
app.post('/add', (req, res) => {
    // envia el por el req
    const { name, email } = req.body;
    const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(query, [name, email], (err) => {
        if (err) {
            console.error('Error para agregar ususario:', err);
            res.send('Error al agregar el usuario');
        } else {
            res.redirect('/');
        }
    });
});

// Editar usuario
//Solicitud de datos del usuario por medio del listado de usuarios
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
    //con la decontruccion de objetos, obtenemos unicamente el id del usuario desde la URL
    // y se utilizara como identificador para la actualizacion
    const { id } = req.params;
    const { name, email } = req.body;
    const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    db.query(query, [name, email, id], (err) => {
        if (err) {
            console.error('Error al actualziar datos del usuario :', err);
            res.send('Error al insertar datos');
        } else {
            res.redirect('/');
        }
    });
});

// Eliminar usuario
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

app.use(express.static('public'));
