export const selectUser = id => {
    return {
        type: 'SELECT_USER',
        id
    };
};

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
