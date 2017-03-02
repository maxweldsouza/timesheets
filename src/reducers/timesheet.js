const timesheet = (state = {}, action) => {
    switch (action.type) {
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
        return newState;
    default:
        return state;
    }
};

export default timesheet;
