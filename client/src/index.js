import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



import { Drizzle, generateStore } from "drizzle";
import { DrizzleContext } from "drizzle-react";
import Piggy from "./contracts/Piggy.json";

const options = { contracts: [Piggy],  web3: {
        fallback: {
            type: "ws",
            url: "ws://127.0.0.1:5656",
        },
    } };
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);


ReactDOM.render(
    <DrizzleContext.Provider drizzle={drizzle}>
            <App />
    </DrizzleContext.Provider>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


