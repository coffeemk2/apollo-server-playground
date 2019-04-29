import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  displayName: String,
  displayID: String,
  profileImage: String
});

const User = mongoose.model("user", userSchema);

export default User;
