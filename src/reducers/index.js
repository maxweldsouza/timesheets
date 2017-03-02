import { combineReducers } from 'redux';
import user from './user';
import users from './users';
import date from './date';

const timesheetApp = combineReducers({
    user,
    users,
    date
});

export default timesheetApp;
