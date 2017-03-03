import { combineReducers } from 'redux';
import user from './user';
import week from './week';
import users from './users';
import date from './date';
import timesheet from './timesheet';

const timesheetApp = combineReducers({
    user,
    week,
    users,
    date,
    timesheet
});

export default timesheetApp;
