import { combineReducers } from 'redux';
import user from './user';
import users from './users';

const timesheetApp = combineReducers({
    user,
    users,
});

export default timesheetApp;
