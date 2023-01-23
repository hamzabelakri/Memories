import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index"
import thunk from "redux-thunk";


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() || compose
  )
);
export default store;  