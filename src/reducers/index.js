import { combineReducers } from 'redux';
import user from './user';
import week from './week';
import users from './users';
import date from './date';
import timesheet from './timesheet';
import approval from './approval';

const timesheetApp = combineReducers({
    user,
    week,
    users,
    date,
    timesheet,
    approval
});

export default timesheetApp;
