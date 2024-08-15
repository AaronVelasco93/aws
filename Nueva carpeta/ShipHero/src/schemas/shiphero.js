// src/schemas/shiphero.js
const { gql } = require('apollo-server');

const shipheroTypeDefs = gql`
  type Warehouse {
    id: ID!
    name: String!
    address: String!
  }

  type Query {
    warehouses: [Warehouse!]!
  }
`;

module.exports = shipheroTypeDefs;
