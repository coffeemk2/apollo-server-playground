import clearConsole from "../utils/clearConsole";
import { ApolloServer } from "apollo-server";
import "@babel/polyfill";
import connectDB from "./connectToDB";

import resolvers from "./resolvers";
import typeDefs from "./type-defs";

connectDB();

const server = new ApolloServer({ typeDefs, resolvers, mocks: true });

server.listen(4000, () => {
  clearConsole();
  console.log("Example app listening on port 4000!");
});
