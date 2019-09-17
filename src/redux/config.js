import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//import loggerMiddleware from './middlewares/logger';
import rootReducer from './reducers';

export default function configureStore(preloadedState) {
    const middlewares = [thunkMiddleware]; //[loggerMiddleware, thunkMiddleware];//
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);

    const store = createStore(rootReducer, preloadedState, composedEnhancers);

    return store;
}
