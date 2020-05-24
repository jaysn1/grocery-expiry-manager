import { combineReducers } from 'redux';
import errorReducers from './errorReducers';
import authReducers from './authReducers';
import itemReducer from './itemReducer';

const allReducers = combineReducers({
    errors: errorReducers,
    auth: authReducers,
    item: itemReducer
});

export default allReducers;