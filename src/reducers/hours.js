const hoursDefault = [...Array(30).keys()].reduce((acc, x) => {
    acc[x + 1] = null;
    return acc;
}, {});

const hours = (state = hoursDefault, action) => {
    switch (action.type) {
    case 'RECIEVE_MONTH_DATA':
        return {
            ...action.timesheet.hours
        };
    default:
        return state;
    }
};

export default hours;
