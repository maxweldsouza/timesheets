const endpoint = 'https://timesheet-staging-aurity.herokuapp.com/api';


export const nextMonth = () => {
    return {
        type: 'NEXT_MONTH'
    };
};

export const prevMonth = () => {
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

export const fetchMonthData = (month, year, user) => {
    return dispatch => {
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
    };
};

export const selectUser = user => {
    return (dispatch, getState) => {
        const state = getState();
        dispatch(fetchMonthData(state.date.month, state.date.year, user));
        return {
            type: 'SELECT_USER',
            user
        };
    };
};
