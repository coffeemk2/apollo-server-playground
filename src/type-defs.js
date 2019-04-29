import { mergeTypes } from "merge-graphql-schemas";

import tweetType from "./Tweet/type";
import userType from "./User/type";

export default mergeTypes([userType, tweetType]);
