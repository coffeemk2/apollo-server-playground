import clearConsole from "../utils/clearConsole";
import { ApolloServer, gql } from "apollo-server";
import "@babel/polyfill";
import db from "./config";
import User from "./user.model";

db();

const typeDefs = gql`
  type User {
    userName: String
    email: String
  }
  type Author {
    fname: String
  }
  type Query {
    hello: String
    author: Author
    getUsers: [User]
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!",
    author: () => ({ fname: "kazuma" }),
    getUsers: async () => await User.find({}).exec()
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(3000, () => {
  clearConsole();
  console.log("Example app listening on port 3000!");
});
