const {ApolloServer, gql}= require ('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require ('./resolvers');

//creacion de instancia de Apollo Server
const server = new ApolloServer({
    typeDefs, 
    resolvers,
});

module.exports = server;