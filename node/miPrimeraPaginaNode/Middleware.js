const express = require('express');
const app = express();

// Middleware que se ejecuta en cada solicitud
app.use((req, res, next) => {
  console.log('Middleware ejecutado');
  next(); // Pasa al siguiente middleware o ruta
});

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Hola, Mundo!');
});

app.listen(3000, () => {
  console.log('Servidor en ejecución en http://localhost:3000');
});
