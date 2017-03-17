import * as api from '../fakeApi';

const logErrors = () => {
    /* eslint-disable no-console */
    console.log(...arguments);
    /* eslint-enable */
};


const requestUsers = () => {
    return {
        type: 'REQUEST_USERS'
    };
};

const recieveUsers = users => {
    return {
        type: 'RECIEVE_USERS',
        users
    };
};

export const fetchUsers = state => {
    return dispatch => {
        if (!state.users.isFetching) {
            dispatch(requestUsers());
            api.getUsers()
            .then(users => {
                dispatch(recieveUsers(users));
            })
            .catch(err => {
                logErrors('Fetch Error :-S', err);
            });
        }
    };
};

const selectUser = user => {
    return {
        type: 'SELECT_USER',
        user
    };
};

const nextMonth = () => {
    return {
        type: 'NEXT_MONTH'
    };
};

const prevMonth = () => {
    return {
        type: 'PREV_MONTH'
    };
};

const requestMonthData = () => {
    return {
        type: 'REQUEST_MONTH_DATA'
    };
};

export const recieveMonthData = (timesheet, month, year, user) => {
    return {
        type: 'RECIEVE_MONTH_DATA',
        timesheet,
        month,
        year,
        user
    };
};

const requestMonthDataFailure = () => {
    return {
        type: 'REQUEST_MONTH_DATA_FAILURE'
    };
};

export const selectWeek = week => {
    return {
        type: 'SELECT_WEEK',
        week
    };
};

export const fetchMonthData = state => {
    const { month, year } = state.date;
    const user = state.selectedUser;
    const isFetching = state.weeks.isFetching;
    return dispatch => {
        if (!isFetching && user && month && year) {
            dispatch(requestMonthData());
            dispatch(selectWeek(null));
            api.getMonthData(user, month, year)
            .then(timesheet => {
                dispatch(recieveMonthData(timesheet, month, year, user));
            })
            .catch(err => {
                dispatch(requestMonthDataFailure());
                logErrors('Fetch Error :-S', err);
            });
        }
    };
};


export const nextMonthAndGetData = () => {
    return (dispatch, getState) => {
        dispatch(nextMonth());
        const state = getState();
        dispatch(fetchMonthData(state));
    };
};

export const prevMonthAndGetData = () => {
    return (dispatch, getState) => {
        dispatch(prevMonth());
        const state = getState();
        dispatch(fetchMonthData(state));
    };
};

export const selectUserAndGetData = user => {
    return (dispatch, getState) => {
        dispatch(selectUser(user));
        const state = getState();
        dispatch(fetchMonthData(state));
    };
};

const sendApproval = status => {
    return {
        type: 'SEND_APPROVAL',
        status
    };
};

const approvalSuccess = () => {
    return {
        type: 'APPROVAL_SUCCESS'
    };
};

const approvalFailure = () => {
    return {
        type: 'APPROVAL_FAILURE'
    };
};

export const putApproval = status => {
    return (dispatch, getState) => {
        const state = getState();
        const { week, user } = state;
        const { month, year } = state.date;
        const key = `${user}:${month}-${year}`;
        if (!(key in state.timesheet.weeks && week in state.timesheet.weeks[key])) {
            return;
        }
        if (user) {
            dispatch(sendApproval(status));
            api.setWeekApproval(month, week, year, user, status)
            .then(() => {
                dispatch(approvalSuccess());
                dispatch(fetchMonthData(state));
            })
            .catch(err => {
                dispatch(approvalFailure());
                logErrors('Error sending approval', err);
            });
        }
    };
};
