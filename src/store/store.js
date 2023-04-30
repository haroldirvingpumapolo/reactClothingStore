import { createStore, combineReducers } from "redux";
import productsReducer from "./reducers/reducersProducts";
import cartReducer from "./reducers/reducersCart"

const reducers = combineReducers({ productsReducer,cartReducer });

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
