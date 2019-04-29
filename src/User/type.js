import { gql } from "apollo-server";

const userType = gql`
  type User {
    _id: String!
    displayName: String
    displayID: String
    profileImage: String
  }
  type Query {
    users: [User]
  }
  type Mutation {
    addUser(displayName: String): User
  }
`;

export default userType;
