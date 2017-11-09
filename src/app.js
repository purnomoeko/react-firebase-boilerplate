import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import App from './components/app';
import configureStore from './configureStore';

const store = configureStore({});
persistStore(store, {

}, () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('react'),
    );
});
