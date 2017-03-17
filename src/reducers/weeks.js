const weeks = (state = {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null
}, action) => {
    switch (action.type) {
    case 'REQUEST_MONTH_DATA':
        return { ...state, isFetching: true };
    case 'RECIEVE_MONTH_DATA':
        return { ...action.timesheet.weeks, isFetching: false };
    default:
        return state;
    }
};

export default weeks;
