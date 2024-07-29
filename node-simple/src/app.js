const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Conectar a la base de datos
connectDB();

// Configurar motor de plantillas
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));

// Usar las rutas definidas
app.use('/', userRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
