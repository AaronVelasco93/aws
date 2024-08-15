// src/index.js
require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const connectDB = require('./db');
const userTypeDefs = require('./schemas/user');
const userResolvers = require('./resolvers/user');
const shipheroTypeDefs = require('./schemas/shiphero');
const shipheroResolvers = require('./resolvers/shiphero');

// Conectar a la base de datos
connectDB();

// Crear una instancia de ApolloServer
const server = new ApolloServer({
  typeDefs: [userTypeDefs, shipheroTypeDefs],
  resolvers: [userResolvers, shipheroResolvers]
});

// Iniciar el servidor
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
