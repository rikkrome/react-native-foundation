import {createStore, applyMiddleware, compose} from 'redux';
import middleware from './middleware';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = __DEV__
  ? createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(...middleware)))
  : createStore(rootReducer, applyMiddleware(...middleware));

export default store;
