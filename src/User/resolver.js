import User from "./model";

const users = async () => await User.find({}).exec();
const addUser = async (_, args) => {
  try {
    const response = await User.create(args);
    return response;
  } catch (e) {
    return e.message;
  }
};

export default { Query: { users }, Mutation: { addUser } };
