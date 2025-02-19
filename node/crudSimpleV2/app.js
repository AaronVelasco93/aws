const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users'); // Importamos las rutas de usuarios

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Habilitar carpeta 'public' para servir archivos estáticos
app.use(express.static('public'));

app.set('view engine', 'ejs');

// Usar las rutas de usuarios
app.use('/', usersRoutes);

const port = 3009;
app.listen(port, () => {
    console.log(`Servidor funcionando en http://localhost:${port}`);
});

app.use(express.static('public'));
