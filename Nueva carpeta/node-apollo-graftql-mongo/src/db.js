// src/db.js
const mongoose = require('mongoose');
require('dotenv').config();

console.log('MONGODB_URI:', process.env.MONGODB_URI); // Agrega esta línea para verificar

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error en la conexión de MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
