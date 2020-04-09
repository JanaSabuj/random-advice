import adviceReducer from "./adviceReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  adviceRoot: adviceReducer
});

export default rootReducer;
