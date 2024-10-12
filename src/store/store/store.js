import { combineReducers } from "redux";
import { createStore } from "redux";
import { userReducer } from "../reducers/userReducer";

const rootReducer = combineReducers({
  data: userReducer,
});
export const store = createStore(rootReducer);
