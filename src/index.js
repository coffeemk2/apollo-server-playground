import clearConsole from "../utils/clearConsole";
import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Author {
    fname: String
  }
  type Query {
    hello: String
    author: Author
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!",
    author: () => ({ fname: "kazuma" })
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(3000, () => {
  clearConsole();
  console.log("Example app listening on port 3000!");
});
