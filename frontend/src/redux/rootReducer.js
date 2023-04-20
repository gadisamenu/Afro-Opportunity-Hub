import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import users from "./userReducer.js";
import opportunities from "./opporuntityReducer.js";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["users", "opportunities"],
};

const rootReducer = combineReducers({
  users,
  opportunities,
});
const reducers = persistReducer(persistConfig, rootReducer);

export default reducers;
