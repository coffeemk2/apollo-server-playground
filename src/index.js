import clearConsole from "../utils/clearConsole";
import { ApolloServer, gql } from "apollo-server";
import "@babel/polyfill";
import connectDB from "./connectToDB";
import { users, addUser } from "./controllers/user.controller";

connectDB();

const typeDefs = gql`
  type User {
    _id: String!
    displayName: String
    displayID: String
    profileImage: String
  }
  type Tweet {
    _id: String!
    userId: String!
    content: String
  }
  type Query {
    users: [User]
    tweets: [Tweet]
  }
  type Mutation {
    addUser(displayName: String): User
  }
`;

const resolvers = {
  Query: {
    users: users
  },
  Mutation: {
    addUser: addUser
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(4000, () => {
  clearConsole();
  console.log("Example app listening on port 4000!");
});
