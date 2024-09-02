import { combineReducers } from 'redux';
import cartReducer from './cartReducer'; // Adjust the path if necessary

const rootReducer = combineReducers({
  cart: cartReducer,
  // Add other reducers here
});

export default rootReducer;