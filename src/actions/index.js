const endpoint = 'https://timesheet-staging-aurity.herokuapp.com/api';

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
            fetch(`${endpoint}/users`)
            .then(response => {
                response.json().then(users => {
                    dispatch(recieveUsers(users));
                });
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
        timesheet: timesheet.data,
        month,
        year,
        user
    };
};

export const fetchMonthData = state => {
    const { month, year } = state.date;
    const user = state.user;
    const isFetching = state.timesheet.isFetching;
    return dispatch => {
        if (!isFetching && user && month && year && !(`${user}:${month}-${year}` in state.timesheet)) {
            dispatch(requestMonthData());
            fetch(`${endpoint}/training/weeks/${month}/${year}/${user}`)
            .then(response => {
                response.json().then(timesheet => {
                    dispatch(recieveMonthData(timesheet, month, year, user));
                });
            })
            .catch(err => {
                /* eslint-disable no-console */
                logErrors('Fetch Error :-S', err);
                /* eslint-enable */
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

export const selectWeek = week => {
    return {
        type: 'SELECT_WEEK',
        week
    };
};

const sendApproval = (status) => {
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
