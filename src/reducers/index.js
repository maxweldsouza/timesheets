import { combineReducers } from 'redux';
import user from './user';
import users from './users';
import date from './date';
import timesheet from './timesheet';

const timesheetApp = combineReducers({
    user,
    users,
    date,
    timesheet
});

export default timesheetApp;
