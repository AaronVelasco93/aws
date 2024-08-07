const express = require('express');
const app = express();

// Asignar el puerto
const PORT = process.env.PORT || 3005;

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Escuchar en el puerto asignado
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto  http://localhost:${PORT}`);
});
