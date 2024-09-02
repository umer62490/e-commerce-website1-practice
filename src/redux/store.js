import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk'; // Correct import
import rootReducer from './rootReducer'; // Ensure this path is correct

// For Redux DevTools Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)) // Applying thunk middleware
);

export default store;
