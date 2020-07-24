import {createStore} from "redux";
import pizzaReducer from "./reducers";

const store = createStore(pizzaReducer);

export default store;