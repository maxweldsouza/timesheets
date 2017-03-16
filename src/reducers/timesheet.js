const timesheet = (state = {
    isFetching: false,
    days: {},
    weeks: {}
}, action) => {
    switch (action.type) {
    case 'REQUEST_MONTH_DATA':
        return { ...state, isFetching: true };
    case 'RECIEVE_MONTH_DATA':
        const newState = { ...state, isFetching: false };
        const key = `${action.user}:${action.month}-${action.year}`;
        if (!(key in newState.days)) {
            newState.days[key] = {};
        }
        if (!(key in newState.weeks)) {
            newState.weeks[key] = {};
        }
        action.timesheet.weeks.sort((a, b) => a.week_number - b.week_number);
        action.timesheet.weeks.map((week, i) => {
            newState.weeks[key][i] = {
                week_number: week.week_number,
                status: week.status,
                approved_by_id: week.approved_by
            };
            week.days.map(day => {
                newState.days[key][day.day_number] = {
                    hours: day.hours
                };
            });
        });
        return newState;
    default:
        return state;
    }
};

export default timesheet;
