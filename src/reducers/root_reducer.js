import { combineReducers } from 'redux';
import users from './users_reducer';
import errors from './errors_reducer';

export default combineReducers({
    users,
    errors
});
