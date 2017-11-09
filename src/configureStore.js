import { createStore, applyMiddleware, compose } from 'redux';
import { autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import rootReducers from './reducers';

export default function configureStore(initialState) {
    const middleware = [thunk, reduxPromise];
    middleware.push(logger);
    if (process.env.NODE_ENV === 'dev') {
        middleware.push(logger);
    }
    const enhancer = compose(
        autoRehydrate(),
        applyMiddleware(...middleware),
    );
    const store = createStore(rootReducers, initialState, enhancer);
    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('./reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}
