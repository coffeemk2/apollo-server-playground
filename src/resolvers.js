import { merge } from "lodash";
import user from "./User/resolver";
import tweet from "./Tweet/resolver";

export default merge([user, tweet]);
