import Tweet from "../models/tweet.model";

const tweets = async () => await Tweet.find({}).exec();
const addTweet = async (_, args) => {
  try {
    const response = await Tweet.create(args);
    return response;
  } catch (e) {
    return e.message;
  }
};

export { tweets, addTweet };
