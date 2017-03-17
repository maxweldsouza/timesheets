import { combineReducers } from 'redux';
import user from './user';
import week from './week';
import users from './users';
import date from './date';
import approval from './approval';
import hours from './hours';
import weeks from './weeks';

const timesheetApp = combineReducers({
    hours,
    weeks,
    selectedUser: user,
    week,
    users,
    date,
    approval
});

export default timesheetApp;
