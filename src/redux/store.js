import { createStore,combineReducers } from 'redux'; // Import `createStore`
import { authReducer } from './authredux/reducer';
import affiliateReducer from './afflicateCode/affiliateReducer';
// Combine reducers
const rootReducer = combineReducers({
  auth: authReducer,
  affiliateReducer,
});

// Create Redux store
const store = createStore(rootReducer);

export default store;
