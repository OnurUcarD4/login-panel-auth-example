import { combineReducers } from "redux";
import auth from "./Auth";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import darkmode from "./dark-mode";
import user from "./users";
import notification from "./notification";
const persistConfig = {
  key: "root",
  storage,
  whiteList: ["auth", "darkmode", "user"],
  blacklist: ["notification"],
};

const rootReducers = combineReducers({
  auth,
  darkmode,
  user,
  notification,
});

const reducers = persistReducer(persistConfig, rootReducers);
export default reducers;
