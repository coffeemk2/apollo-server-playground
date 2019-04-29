import mongoose, { Schema } from "mongoose";

const tweetSchema = new Schema({
  userId: String,
  content: String
});

const Tweet = mongoose.model("tweet", tweetSchema);

export default Tweet;
