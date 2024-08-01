// src/resolvers/shiphero.js
const axios = require('axios');
require('dotenv').config();

const shipheroResolvers = {
  Query: {
    warehouses: async () => {
      const response = await axios.get('https://public-api.shiphero.com/v1.2/warehouses', {
        headers: {
          Authorization: `Bearer ${process.env.SHIPHERO_TOKEN}`
        }
      });
      return response.data.data.warehouses.map(warehouse => ({
        id: warehouse.id,
        name: warehouse.account_name,
        address: warehouse.address
      }));
    }
  }
};

module.exports = shipheroResolvers;
