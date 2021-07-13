import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

// Redux Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, composeEnhancers);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
