const date = (state = {}, action) => {
    switch (action.type) {
    case 'SET_DAY':
        return {
            ...state,
            day: action.day
        };
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
