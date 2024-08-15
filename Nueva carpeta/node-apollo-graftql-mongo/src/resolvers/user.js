const User = require('../models/user');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    user: async (parent, args) => {
      return await User.findById(args.id);
    }
  },
  Mutation: {
    createUser: async (parent, args) => {
      const newUser = new User({ name: args.name, email: args.email });
      return await newUser.save();
    },
    deleteUser: async (parent, args) => {
      return await User.findByIdAndRemove(args.id);
    }
  }
};

module.exports = resolvers;