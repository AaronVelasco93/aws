// src/resolvers/user.js
const User = require('../models/user');

const userResolvers = {
  Query: {
    users: async () => await User.find(),
    user: async (parent, args) => await User.findById(args.id)
  },
  Mutation: {
    createUser: async (parent, args) => {
      const newUser = new User({ name: args.name, email: args.email });
      return await newUser.save();
    },
    deleteUser: async (parent, args) => await User.findByIdAndRemove(args.id)
  }
};

module.exports = userResolvers;
