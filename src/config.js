import Mongoose from "mongoose";

Mongoose.Promise = global.Promise;

const connectToDb = async () => {
  try {
    await Mongoose.connect(`mongodb://localhost:32769/sample`);
    console.log("Connected to mongo!!!");
  } catch (err) {
    console.error("Could not connect to MongoDB");
  }
};

export default connectToDb;
