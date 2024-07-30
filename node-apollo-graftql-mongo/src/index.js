// src/index.js
require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const connectDB = require('./db');
const typeDefs = require('./schemas/user');
const resolvers = require('./resolvers/user');

// Conectar a la base de datos
connectDB();

// Crear una instancia de ApolloServer
const server = new ApolloServer({ typeDefs, resolvers });

// Iniciar el servidor
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
