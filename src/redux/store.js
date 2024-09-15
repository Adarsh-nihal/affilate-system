import { createStore,combineReducers } from 'redux'; // Import `createStore`
import { authReducer } from './authredux/reducer';

// Combine reducers
const rootReducer = combineReducers({
  auth: authReducer // Use a simple key for the `authReducer`
});

// Create Redux store
const store = createStore(rootReducer);

export default store;
