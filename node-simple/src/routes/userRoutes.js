const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Ruta para obtener todos los usuarios
router.get('/', async (req, res) => {
  const users = await User.find(); // Buscar todos los usuarios en la base de datos
  res.render('index', { users }); // Renderizar la vista 'index' y pasar los usuarios como datos
});

// Ruta para mostrar el formulario de creación
router.get('/create', (req, res) => {
  res.render('create'); // Renderizar la vista 'create'
});

// Ruta para crear un nuevo usuario
router.post('/create', async (req, res) => {
  const user = new User(req.body); // Crear un nuevo usuario con los datos del formulario
  await user.save(); // Guardar el usuario en la base de datos
  res.redirect('/'); // Redirigir a la página principal
});

// Ruta para mostrar el formulario de edición
router.get('/edit/:id', async (req, res) => {
  const user = await User.findById(req.params.id); // Buscar el usuario por su ID
  res.render('edit', { user }); // Renderizar la vista 'edit' y pasar el usuario como datos
});

// Ruta para actualizar un usuario
router.post('/edit/:id', async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body); // Actualizar el usuario con los nuevos datos
  res.redirect('/'); // Redirigir a la página principal
});

// Ruta para eliminar un usuario
router.get('/delete/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id); // Eliminar el usuario por su ID
  res.redirect('/'); // Redirigir a la página principal
});

module.exports = router; // Exportar el enrutador para usarlo en otros archivos
