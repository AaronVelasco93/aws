const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'node_crud',
    port: 3306
});

db.connect(err => {
    if (err) {
        console.error('Error al conectar la base de datos:', err);
    } else {
        console.log('Base de datos conectada');
    }
});

module.exports = db;
