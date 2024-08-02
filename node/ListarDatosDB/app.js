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