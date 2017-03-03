const dateObject = new Date();
const today = {
    day: dateObject.getUTCDate(),
    month: dateObject.getUTCMonth() + 1,
    year: dateObject.getUTCFullYear()
};

const date = (state = today, action) => {
    switch (action.type) {
    case 'PREV_MONTH':
        if (state.month === 1) {
            return {
                ...state,
                year: state.year - 1,
                month: 12
            };
        }
        return {
            ...state,
            month: state.month - 1
        };
    case 'NEXT_MONTH':
        if (state.month === 12) {
            return {
                ...state,
                year: state.year + 1,
                month: 1
            };
        }
        return {
            ...state,
            month: state.month + 1
        };
    default:
        return state;
    }
};

export default date;
