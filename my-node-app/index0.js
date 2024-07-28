const express = require('express'); // Importa el módulo express
const app = express(); // Crea una instancia de una aplicación express
const PORT = 3000; // Define el puerto en el que la aplicación escuchará

// Define una ruta para la raíz ("/") que devuelve "¡Hola, mundo!"
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Inicia el servidor y escucha en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
