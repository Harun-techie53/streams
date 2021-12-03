import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import history from "./history";

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, 
    composeWithDevTools(
        applyMiddleware(thunk)
        )
    );

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.querySelector("#root")
);