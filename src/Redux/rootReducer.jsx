import { combineReducers, createStore } from "redux";
import { QLSVreducer } from "./Reducer/QLSVreducer";

const rootReducer = combineReducers({
    QLSVreducer: QLSVreducer
})
export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );