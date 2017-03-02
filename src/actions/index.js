const endpoint = 'https://timesheet-staging-aurity.herokuapp.com/api';


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
    return dispatch => {
        if (!(`${user}:${month}-${year}` in state.timesheet)) {
            dispatch(requestMonthData());
            fetch(`${endpoint}/training/weeks/${month}/${year}/${user}`)
            .then(
                function (response) {
                    if (response.status !== 200) {
                        return;
                    }
                    response.json().then(timesheet => {
                        dispatch(recieveMonthData(timesheet, month, year, user));
                    });
                }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
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
