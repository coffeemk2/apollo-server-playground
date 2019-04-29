import Tweet from "./model";

const tweets = async () => await Tweet.find({}).exec();
const addTweet = async (_, args) => {
  try {
    const response = await Tweet.create(args);
    return response;
  } catch (e) {
    return e.message;
  }
};

export default { Query: { tweets }, Mutation: { addTweet } };
