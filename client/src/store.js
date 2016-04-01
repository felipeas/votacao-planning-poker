import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

export default function configureStore(initialState) {
    const logger = createLogger({
        collapsed: true,
        predicate: () =>
        process.env.NODE_ENV === `development`,
    });

    const middleware = applyMiddleware(thunkMiddleware, logger);
    const store = middleware(createStore)(rootReducer, initialState);
    
    return store;
}
