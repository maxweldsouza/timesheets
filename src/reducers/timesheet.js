const timesheet = (state = { isFetching: false }, action) => {
    switch (action.type) {
    case 'REQUEST_MONTH_DATA':
        return { ...state, isFetching: true };
    case 'RECIEVE_MONTH_DATA':
        const newState = { ...state };
        action.timesheet.weeks.map(week => {
            const key = `${action.user}:${action.month}-${action.year}`;
            if (!(key in newState)) {
                newState[key] = {};
            }
            week.days_in_week.map(day => {
                newState[key][day.day_number] = {
                    hours: day.hours
                };
            });
        });
        newState.isFetching = false;
        return newState;
    default:
        return state;
    }
};

export default timesheet;
