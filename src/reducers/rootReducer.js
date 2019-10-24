import { combineReducers } from 'redux';
import AuthReducer from './auth.js';

const rootReducer = combineReducers({
    auth: AuthReducer,
});

export default rootReducer;
