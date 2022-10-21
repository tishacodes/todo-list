import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/reducer.js";
import {loadState, saveState} from "./LocalStorage.js";

//Before creating the store, check localStorage and parse any JSON under your key like this:
const persistedState = loadState();

//You then pass this peristedState constant to your createStore method like this
const store = createStore(reducer, persistedState);

//every time the value of todoState changes we call localStorage.setItem and give it the key 
//to store the value under
store.subscribe(()=>{        
        saveState(store.getState());
})

ReactDOM.render(
<Provider store = {store} > 
        <App />
</Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
