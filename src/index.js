import React from 'react';
import ReactDOM from 'react-dom/client';
//import FormHook from './10Aug/Hooks/CounterHook';
//import App from './9Aug/App'
//import App from './10Aug/App'
//import App from './12Aug/Task2/App'
//import App from './12Aug/Task1/App'
//import App from './12Aug/Task3/App'
import App from './16Aug/App'
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import reducer from './16Aug/Reducer/index';
const store=createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <App />
</Provider>
    //<App />
    //<FormHook></FormHook>
 
);


