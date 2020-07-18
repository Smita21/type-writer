import { combineReducers } from "redux";
import typewriterReducer from "./typewriter/typewriter.reducer";

const rootReducer = combineReducers({
  typewriter: typewriterReducer,
});

export default rootReducer;
