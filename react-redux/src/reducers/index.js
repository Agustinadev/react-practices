import counterReducer from "./counterReducer";
import { crudReducer } from "./crudReducer";
import { shoppingReducer } from "./shoppingReducer";

const { combineReducers } = require("redux");

const reducer = combineReducers({
    counter: counterReducer,
    shopping: shoppingReducer,
    crud: crudReducer,
})
export default reducer;