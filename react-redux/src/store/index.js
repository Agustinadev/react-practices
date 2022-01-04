import { createStore } from "redux"
import reducer from '../reducers';
//import devToolsEnhancer from 'remote-redux-devtools';

const store = createStore(reducer)

store.subscribe(()=>console.log(store))

export default store;