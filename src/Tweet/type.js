import { gql } from "apollo-server";

const tweetType = gql`
  type Tweet {
    _id: String!
    userId: String
    content: String
  }
  type Query {
    tweets: [Tweet]
  }
  type Mutation {
    addTweet(content: String, userId: String): Tweet
  }
`;

export default tweetType;
