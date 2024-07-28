const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta para manejar solicitudes POST
app.post('/data', (req, res) => {
  const data = req.body;
  res.send(`Datos recibidos: ${JSON.stringify(data)}`);
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});