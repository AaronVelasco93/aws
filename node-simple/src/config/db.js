const mongoose = require('mongoose');

// Función asíncrona para conectarse a MongoDB
const connectDB = async () => {
  try {
    // Conectar a la base de datos de MongoDB
    await mongoose.connect('mongodb://localhost:27017/simple-crud');
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Salir del proceso con fallo
  }
};

module.exports = connectDB; // Exportar la función para usarla en otros archivos
