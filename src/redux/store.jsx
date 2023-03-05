import rootReducer from "./rootReducer";
import { createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';

export default createStore(rootReducer, composeWithDevTools());