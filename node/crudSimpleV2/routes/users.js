const express = require('express');
const router = express.Router();
const db = require('../db'); // Importamos la conexión a la base de datos

// Listar usuarios
router.get('/', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error al recuperar usuarios:', err);
            res.send('Error');
        } else {
            res.render('index', { users: results });
        }
    });
});

// Agregar nuevo usuario
router.post('/add', (req, res) => {
    const { name, email } = req.body;
    const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(query, [name, email], (err) => {
        if (err) {
            console.error('Error al agregar usuario:', err);
            res.send('Error');
        } else {
            res.redirect('/');
        }
    });
});

// Obtener usuario para edición
router.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error al obtener usuario:', err);
            res.send('Error');
        } else {
            res.render('edit', { user: results[0] });
        }
    });
});

// Actualizar usuario
router.post('/update/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    db.query(query, [name, email, id], (err) => {
        if (err) {
            console.error('Error al actualizar usuario:', err);
            res.send('Error');
        } else {
            res.redirect('/');
        }
    });
});

// Eliminar usuario
router.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [id], (err) => {
        if (err) {
            console.error('Error al eliminar usuario:', err);
            res.send('Error');
        } else {
            res.redirect('/');
        }
    });
});

module.exports = router;
