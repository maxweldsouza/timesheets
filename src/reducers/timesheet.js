const timesheet = (state = {}, action) => {
    switch (action.type) {
    case 'RECIEVE_MONTH_DATA':
        const newState = { ...state };
        action.timesheet.weeks.map(week => {
            week.days_in_week.map(day => {
                const key = `${action.user}:${day.day_number}-${action.month}-${action.year}`;
                newState[key] = {
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
